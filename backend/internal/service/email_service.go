package service

import (
	"bytes"
	"context"
	"crypto/rand"
	"crypto/subtle"
	"crypto/tls"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"html"
	"io"
	"log/slog"
	"math/big"
	"net"
	"net/http"
	"net/smtp"
	"net/url"
	"strconv"
	"strings"
	"time"

	infraerrors "github.com/Wei-Shaw/sub2api/internal/pkg/errors"
)

var (
	ErrEmailNotConfigured    = infraerrors.ServiceUnavailable("EMAIL_NOT_CONFIGURED", "email service not configured")
	ErrInvalidVerifyCode     = infraerrors.BadRequest("INVALID_VERIFY_CODE", "invalid or expired verification code")
	ErrVerifyCodeTooFrequent = infraerrors.TooManyRequests("VERIFY_CODE_TOO_FREQUENT", "please wait before requesting a new code")
	ErrVerifyCodeMaxAttempts = infraerrors.TooManyRequests("VERIFY_CODE_MAX_ATTEMPTS", "too many failed attempts, please request a new code")
	ErrInvalidEmailProvider  = infraerrors.BadRequest("INVALID_EMAIL_PROVIDER", "email provider must be smtp, resend, cloudflare, or cloudmail")

	// Password reset errors
	ErrInvalidResetToken = infraerrors.BadRequest("INVALID_RESET_TOKEN", "invalid or expired password reset token")
)

// EmailCache defines cache operations for email service
type EmailCache interface {
	GetVerificationCode(ctx context.Context, email string) (*VerificationCodeData, error)
	SetVerificationCode(ctx context.Context, email string, data *VerificationCodeData, ttl time.Duration) error
	DeleteVerificationCode(ctx context.Context, email string) error

	// Notify email verification code methods
	GetNotifyVerifyCode(ctx context.Context, email string) (*VerificationCodeData, error)
	SetNotifyVerifyCode(ctx context.Context, email string, data *VerificationCodeData, ttl time.Duration) error
	DeleteNotifyVerifyCode(ctx context.Context, email string) error

	// Password reset token methods
	GetPasswordResetToken(ctx context.Context, email string) (*PasswordResetTokenData, error)
	SetPasswordResetToken(ctx context.Context, email string, data *PasswordResetTokenData, ttl time.Duration) error
	DeletePasswordResetToken(ctx context.Context, email string) error

	// Password reset email cooldown methods
	// Returns true if in cooldown period (email was sent recently)
	IsPasswordResetEmailInCooldown(ctx context.Context, email string) bool
	SetPasswordResetEmailCooldown(ctx context.Context, email string, ttl time.Duration) error

	// Notify code rate limiting per user
	IncrNotifyCodeUserRate(ctx context.Context, userID int64, window time.Duration) (int64, error)
	GetNotifyCodeUserRate(ctx context.Context, userID int64) (int64, error)
}

// VerificationCodeData represents verification code data
type VerificationCodeData struct {
	Code      string
	Attempts  int
	CreatedAt time.Time
	ExpiresAt time.Time // absolute expiry; used to preserve remaining TTL when updating attempts
}

// PasswordResetTokenData represents password reset token data
type PasswordResetTokenData struct {
	Token     string
	CreatedAt time.Time
}

const (
	verifyCodeTTL         = 15 * time.Minute
	verifyCodeCooldown    = 1 * time.Minute
	maxVerifyCodeAttempts = 5

	// Password reset token settings
	passwordResetTokenTTL = 30 * time.Minute

	// Password reset email cooldown (prevent email bombing)
	passwordResetEmailCooldown = 30 * time.Second
)

// SMTPConfig SMTP配置
type SMTPConfig struct {
	Host     string
	Port     int
	Username string
	Password string
	From     string
	FromName string
	UseTLS   bool
}

const (
	EmailProviderSMTP       = "smtp"
	EmailProviderResend     = "resend"
	EmailProviderCloudflare = "cloudflare"
	EmailProviderCloudMail  = "cloudmail"

	defaultResendAPIBaseURL = "https://api.resend.com"

	emailHTTPTimeout = 20 * time.Second
)

// ResendConfig stores Resend Email API configuration.
type ResendConfig struct {
	APIKey     string
	FromEmail  string
	FromName   string
	APIBaseURL string
}

// CloudflareEmailConfig stores Cloudflare Email Sending API configuration.
type CloudflareEmailConfig struct {
	APIToken  string
	AccountID string
	FromEmail string
	FromName  string
}

// CloudMailConfig stores Cloud-Mail HTTP API configuration.
type CloudMailConfig struct {
	APIURL        string
	AdminEmail    string
	AdminPassword string
	FromEmail     string
	FromName      string
}

// EmailService 邮件服务
type EmailService struct {
	settingRepo              SettingRepository
	cache                    EmailCache
	notificationEmailService *NotificationEmailService
}

// NewEmailService 创建邮件服务实例
func NewEmailService(settingRepo SettingRepository, cache EmailCache) *EmailService {
	return &EmailService{
		settingRepo: settingRepo,
		cache:       cache,
	}
}

func (s *EmailService) SetNotificationEmailService(notificationEmailService *NotificationEmailService) {
	s.notificationEmailService = notificationEmailService
}

func firstEmailLocale(locales []string) string {
	if len(locales) == 0 {
		return ""
	}
	return strings.TrimSpace(locales[0])
}

func emailRecipientName(email string) string {
	trimmed := strings.TrimSpace(email)
	if trimmed == "" {
		return ""
	}
	if at := strings.Index(trimmed, "@"); at > 0 {
		return trimmed[:at]
	}
	return trimmed
}

func NormalizeEmailProvider(provider string) (string, error) {
	switch strings.ToLower(strings.TrimSpace(provider)) {
	case "", EmailProviderSMTP:
		return EmailProviderSMTP, nil
	case EmailProviderResend:
		return EmailProviderResend, nil
	case EmailProviderCloudflare:
		return EmailProviderCloudflare, nil
	case EmailProviderCloudMail:
		return EmailProviderCloudMail, nil
	default:
		return "", ErrInvalidEmailProvider
	}
}

func DefaultResendAPIBaseURL() string {
	return defaultResendAPIBaseURL
}

// GetSMTPConfig 从数据库获取SMTP配置
func (s *EmailService) GetSMTPConfig(ctx context.Context) (*SMTPConfig, error) {
	keys := []string{
		SettingKeySMTPHost,
		SettingKeySMTPPort,
		SettingKeySMTPUsername,
		SettingKeySMTPPassword,
		SettingKeySMTPFrom,
		SettingKeySMTPFromName,
		SettingKeySMTPUseTLS,
	}

	settings, err := s.settingRepo.GetMultiple(ctx, keys)
	if err != nil {
		return nil, fmt.Errorf("get smtp settings: %w", err)
	}

	host := strings.TrimSpace(settings[SettingKeySMTPHost])
	if host == "" {
		return nil, ErrEmailNotConfigured
	}

	port := 587 // 默认端口
	if portStr := settings[SettingKeySMTPPort]; portStr != "" {
		if p, err := strconv.Atoi(portStr); err == nil {
			port = p
		}
	}

	useTLS := settings[SettingKeySMTPUseTLS] == "true"

	return &SMTPConfig{
		Host:     host,
		Port:     port,
		Username: strings.TrimSpace(settings[SettingKeySMTPUsername]),
		Password: strings.TrimSpace(settings[SettingKeySMTPPassword]),
		From:     strings.TrimSpace(settings[SettingKeySMTPFrom]),
		FromName: strings.TrimSpace(settings[SettingKeySMTPFromName]),
		UseTLS:   useTLS,
	}, nil
}

// SendEmail 发送邮件（使用数据库中保存的配置）
func (s *EmailService) SendEmail(ctx context.Context, to, subject, body string) error {
	provider, err := s.GetEmailProvider(ctx)
	if err != nil {
		return err
	}

	switch provider {
	case EmailProviderSMTP:
		config, err := s.GetSMTPConfig(ctx)
		if err != nil {
			return err
		}
		return s.SendEmailWithConfig(config, to, subject, body)
	case EmailProviderResend:
		config, err := s.GetResendConfig(ctx)
		if err != nil {
			return err
		}
		return s.SendEmailWithResendConfig(ctx, config, to, subject, body)
	case EmailProviderCloudflare:
		config, err := s.GetCloudflareEmailConfig(ctx)
		if err != nil {
			return err
		}
		return s.SendEmailWithCloudflareConfig(ctx, config, to, subject, body)
	case EmailProviderCloudMail:
		config, err := s.GetCloudMailConfig(ctx)
		if err != nil {
			return err
		}
		return s.SendEmailWithCloudMailConfig(ctx, config, to, subject, body)
	default:
		return ErrInvalidEmailProvider
	}
}

const smtpDialTimeout = 10 * time.Second
const smtpIOTimeout = 20 * time.Second

// GetEmailProvider returns the configured email provider, defaulting blank values to SMTP.
func (s *EmailService) GetEmailProvider(ctx context.Context) (string, error) {
	settings, err := s.settingRepo.GetMultiple(ctx, []string{SettingKeyEmailProvider})
	if err != nil {
		return "", fmt.Errorf("get email provider: %w", err)
	}
	return NormalizeEmailProvider(settings[SettingKeyEmailProvider])
}

func (s *EmailService) GetResendConfig(ctx context.Context) (*ResendConfig, error) {
	settings, err := s.settingRepo.GetMultiple(ctx, []string{
		SettingKeyResendAPIKey,
		SettingKeyResendFromEmail,
		SettingKeyResendFromName,
		SettingKeyResendAPIBaseURL,
	})
	if err != nil {
		return nil, fmt.Errorf("get resend settings: %w", err)
	}

	baseURL, err := NormalizeResendAPIBaseURL(settings[SettingKeyResendAPIBaseURL])
	if err != nil {
		return nil, err
	}

	config := &ResendConfig{
		APIKey:     strings.TrimSpace(settings[SettingKeyResendAPIKey]),
		FromEmail:  strings.TrimSpace(settings[SettingKeyResendFromEmail]),
		FromName:   strings.TrimSpace(settings[SettingKeyResendFromName]),
		APIBaseURL: baseURL,
	}
	if config.APIKey == "" || config.FromEmail == "" {
		return nil, ErrEmailNotConfigured
	}
	return config, nil
}

func (s *EmailService) GetCloudflareEmailConfig(ctx context.Context) (*CloudflareEmailConfig, error) {
	settings, err := s.settingRepo.GetMultiple(ctx, []string{
		SettingKeyCloudflareAPIToken,
		SettingKeyCloudflareAccountID,
		SettingKeyCloudflareFromEmail,
		SettingKeyCloudflareFromName,
	})
	if err != nil {
		return nil, fmt.Errorf("get cloudflare email settings: %w", err)
	}

	config := &CloudflareEmailConfig{
		APIToken:  strings.TrimSpace(settings[SettingKeyCloudflareAPIToken]),
		AccountID: strings.TrimSpace(settings[SettingKeyCloudflareAccountID]),
		FromEmail: strings.TrimSpace(settings[SettingKeyCloudflareFromEmail]),
		FromName:  strings.TrimSpace(settings[SettingKeyCloudflareFromName]),
	}
	if config.APIToken == "" || config.AccountID == "" || config.FromEmail == "" {
		return nil, ErrEmailNotConfigured
	}
	return config, nil
}

func (s *EmailService) GetCloudMailConfig(ctx context.Context) (*CloudMailConfig, error) {
	settings, err := s.settingRepo.GetMultiple(ctx, []string{
		SettingKeyCloudMailAPIURL,
		SettingKeyCloudMailAdminEmail,
		SettingKeyCloudMailAdminPassword,
		SettingKeyCloudMailFromEmail,
		SettingKeyCloudMailFromName,
	})
	if err != nil {
		return nil, fmt.Errorf("get cloudmail settings: %w", err)
	}

	config := &CloudMailConfig{
		APIURL:        strings.TrimSpace(settings[SettingKeyCloudMailAPIURL]),
		AdminEmail:    strings.TrimSpace(settings[SettingKeyCloudMailAdminEmail]),
		AdminPassword: settings[SettingKeyCloudMailAdminPassword],
		FromEmail:     strings.TrimSpace(settings[SettingKeyCloudMailFromEmail]),
		FromName:      strings.TrimSpace(settings[SettingKeyCloudMailFromName]),
	}
	if config.APIURL == "" || config.AdminEmail == "" || config.AdminPassword == "" || config.FromEmail == "" {
		return nil, ErrEmailNotConfigured
	}
	return config, nil
}

// SendEmailWithConfig 使用指定配置发送邮件
func (s *EmailService) SendEmailWithConfig(config *SMTPConfig, to, subject, body string) error {
	// Sanitize all SMTP header fields to prevent header injection (CR/LF removal).
	to = sanitizeEmailHeader(to)
	subject = sanitizeEmailHeader(subject)

	from := sanitizeEmailHeader(config.From)
	if config.FromName != "" {
		from = fmt.Sprintf("%s <%s>", sanitizeEmailHeader(config.FromName), sanitizeEmailHeader(config.From))
	}

	msg := fmt.Sprintf("From: %s\r\nTo: %s\r\nSubject: %s\r\nMIME-Version: 1.0\r\nContent-Type: text/html; charset=UTF-8\r\n\r\n%s",
		from, to, subject, body)

	addr := fmt.Sprintf("%s:%d", config.Host, config.Port)
	auth := smtp.PlainAuth("", config.Username, config.Password, config.Host)

	if config.UseTLS {
		return s.sendMailTLS(addr, auth, config.From, to, []byte(msg), config.Host)
	}

	return s.sendMailPlain(addr, auth, config.From, to, []byte(msg), config.Host)
}

// SendEmailWithResendConfig sends an HTML email via Resend's HTTP API.
func (s *EmailService) SendEmailWithResendConfig(ctx context.Context, config *ResendConfig, to, subject, body string) error {
	if config == nil || strings.TrimSpace(config.APIKey) == "" || strings.TrimSpace(config.FromEmail) == "" {
		return ErrEmailNotConfigured
	}

	baseURL, err := NormalizeResendAPIBaseURL(config.APIBaseURL)
	if err != nil {
		return err
	}

	payload := map[string]any{
		"from":    formatEmailAddress(config.FromName, config.FromEmail),
		"to":      []string{sanitizeEmailHeader(to)},
		"subject": sanitizeEmailHeader(subject),
		"html":    body,
	}
	return postEmailJSON(ctx, baseURL+"/emails", "Bearer "+strings.TrimSpace(config.APIKey), payload)
}

// SendEmailWithCloudflareConfig sends an HTML email via Cloudflare Email Sending API.
func (s *EmailService) SendEmailWithCloudflareConfig(ctx context.Context, config *CloudflareEmailConfig, to, subject, body string) error {
	if config == nil || strings.TrimSpace(config.APIToken) == "" || strings.TrimSpace(config.AccountID) == "" || strings.TrimSpace(config.FromEmail) == "" {
		return ErrEmailNotConfigured
	}

	endpoint := fmt.Sprintf("https://api.cloudflare.com/client/v4/accounts/%s/email/routing/send", url.PathEscape(strings.TrimSpace(config.AccountID)))
	payload := map[string]any{
		"from":    formatEmailAddress(config.FromName, config.FromEmail),
		"to":      []string{sanitizeEmailHeader(to)},
		"subject": sanitizeEmailHeader(subject),
		"html":    body,
	}
	return postEmailJSON(ctx, endpoint, "Bearer "+strings.TrimSpace(config.APIToken), payload)
}

// SendEmailWithCloudMailConfig sends an HTML email via self-hosted Cloud-Mail HTTP API.
func (s *EmailService) SendEmailWithCloudMailConfig(ctx context.Context, config *CloudMailConfig, to, subject, body string) error {
	if config == nil || strings.TrimSpace(config.APIURL) == "" || strings.TrimSpace(config.AdminEmail) == "" || config.AdminPassword == "" || strings.TrimSpace(config.FromEmail) == "" {
		return ErrEmailNotConfigured
	}

	apiURL := strings.TrimRight(strings.TrimSpace(config.APIURL), "/")

	// Step 1: login to get JWT
	type loginReq struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}
	loginResp, err := postCloudMailJSON(ctx, apiURL+"/login", "", loginReq{
		Email:    strings.TrimSpace(config.AdminEmail),
		Password: config.AdminPassword,
	})
	if err != nil {
		return fmt.Errorf("cloudmail login: %w", err)
	}
	token, err := extractCloudMailToken(loginResp)
	if err != nil {
		return fmt.Errorf("cloudmail login: %w", err)
	}

	// Step 2: find accountId for the configured from email
	accountID, err := s.findCloudMailAccountID(ctx, apiURL, token, strings.TrimSpace(config.FromEmail))
	if err != nil {
		return fmt.Errorf("cloudmail find account: %w", err)
	}

	// Step 3: send email
	sendPayload := map[string]any{
		"accountId":    accountID,
		"receiveEmail": []string{sanitizeEmailHeader(to)},
		"subject":      sanitizeEmailHeader(subject),
		"content":      body,
		"sendType":     "send",
	}
	auth := "Bearer " + token
	return postCloudMailJSONNoAuth(ctx, apiURL+"/email/send", auth, sendPayload)
}

// CloudMailAccount represents an email account in cloud-mail.
type CloudMailAccount struct {
	AccountID int    `json:"accountId"`
	Email     string `json:"email"`
	Name      string `json:"name"`
}

// cloudMailLoginResponse wraps the cloud-mail login API response.
type cloudMailLoginResponse struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
	Data    struct {
		Token string `json:"token"`
	} `json:"data"`
}

// cloudMailListAccountsResponse wraps the cloud-mail account list API response.
type cloudMailListAccountsResponse struct {
	Code    int                `json:"code"`
	Message string             `json:"message"`
	Data    []CloudMailAccount `json:"data"`
}

func extractCloudMailToken(body []byte) (string, error) {
	var resp cloudMailLoginResponse
	if err := json.Unmarshal(body, &resp); err != nil {
		return "", fmt.Errorf("parse login response: %w", err)
	}
	if resp.Code != 200 {
		return "", fmt.Errorf("login failed: %s", resp.Message)
	}
	if resp.Data.Token == "" {
		return "", fmt.Errorf("no token in login response")
	}
	return resp.Data.Token, nil
}

func (s *EmailService) findCloudMailAccountID(ctx context.Context, apiURL, token, fromEmail string) (int, error) {
	var resp cloudMailListAccountsResponse
	err := postCloudMailJSONWithAuth(ctx, apiURL+"/account/list", token, &resp)
	if err != nil {
		return 0, fmt.Errorf("list accounts: %w", err)
	}
	if resp.Code != 200 {
		return 0, fmt.Errorf("list accounts failed: %s", resp.Message)
	}

	fromEmailLower := strings.ToLower(strings.TrimSpace(fromEmail))
	for _, acc := range resp.Data {
		if strings.ToLower(strings.TrimSpace(acc.Email)) == fromEmailLower {
			return acc.AccountID, nil
		}
	}
	return 0, fmt.Errorf("no account found with email %s on cloud-mail instance", fromEmail)
}

// ListCloudMailAccounts fetches the list of available email accounts from a cloud-mail instance.
func (s *EmailService) ListCloudMailAccounts(ctx context.Context, apiURL, email, password string) ([]CloudMailAccount, error) {
	apiURL = strings.TrimRight(strings.TrimSpace(apiURL), "/")

	// Step 1: login
	loginResp, err := postCloudMailJSON(ctx, apiURL+"/login", "", map[string]string{
		"email":    strings.TrimSpace(email),
		"password": password,
	})
	if err != nil {
		return nil, fmt.Errorf("cloudmail login: %w", err)
	}
	token, err := extractCloudMailToken(loginResp)
	if err != nil {
		return nil, fmt.Errorf("cloudmail login: %w", err)
	}

	// Step 2: list accounts
	var listResp cloudMailListAccountsResponse
	if err := postCloudMailJSONWithAuth(ctx, apiURL+"/account/list", token, &listResp); err != nil {
		return nil, fmt.Errorf("list accounts: %w", err)
	}
	if listResp.Code != 200 {
		return nil, fmt.Errorf("list accounts failed: %s", listResp.Message)
	}

	return listResp.Data, nil
}

// postCloudMailJSON sends a JSON POST to cloud-mail and returns the raw response body.
func postCloudMailJSON(ctx context.Context, endpoint, authorization string, payload any) ([]byte, error) {
	body, err := json.Marshal(payload)
	if err != nil {
		return nil, fmt.Errorf("marshal payload: %w", err)
	}

	ctx, cancel := context.WithTimeout(ctx, emailHTTPTimeout)
	defer cancel()

	req, err := http.NewRequestWithContext(ctx, http.MethodPost, endpoint, bytes.NewReader(body))
	if err != nil {
		return nil, fmt.Errorf("create request: %w", err)
	}
	req.Header.Set("Content-Type", "application/json")
	if authorization != "" {
		req.Header.Set("Authorization", authorization)
	}

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return nil, fmt.Errorf("send request: %w", err)
	}
	defer func() { _ = resp.Body.Close() }()

	respBody, err := io.ReadAll(io.LimitReader(resp.Body, 8192))
	if err != nil {
		return nil, fmt.Errorf("read response: %w", err)
	}

	if resp.StatusCode < 200 || resp.StatusCode >= 300 {
		return nil, fmt.Errorf("cloud-mail returned status %d: %s", resp.StatusCode, strings.TrimSpace(string(respBody)))
	}

	return respBody, nil
}

// postCloudMailJSONWithAuth sends a GET request to cloud-mail with auth header and parses the JSON response into dest.
func postCloudMailJSONWithAuth(ctx context.Context, endpoint, token string, dest any) error {
	ctx, cancel := context.WithTimeout(ctx, emailHTTPTimeout)
	defer cancel()

	req, err := http.NewRequestWithContext(ctx, http.MethodGet, endpoint, nil)
	if err != nil {
		return fmt.Errorf("create request: %w", err)
	}
	req.Header.Set("Authorization", "Bearer "+token)

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return fmt.Errorf("send request: %w", err)
	}
	defer func() { _ = resp.Body.Close() }()

	respBody, err := io.ReadAll(io.LimitReader(resp.Body, 8192))
	if err != nil {
		return fmt.Errorf("read response: %w", err)
	}

	if resp.StatusCode < 200 || resp.StatusCode >= 300 {
		return fmt.Errorf("cloud-mail returned status %d: %s", resp.StatusCode, strings.TrimSpace(string(respBody)))
	}

	if err := json.Unmarshal(respBody, dest); err != nil {
		return fmt.Errorf("parse response: %w", err)
	}

	return nil
}

// postCloudMailJSONNoAuth sends a JSON POST to cloud-mail with pre-set auth header (for /email/send).
func postCloudMailJSONNoAuth(ctx context.Context, endpoint, authorization string, payload any) error {
	body, err := json.Marshal(payload)
	if err != nil {
		return fmt.Errorf("marshal payload: %w", err)
	}

	ctx, cancel := context.WithTimeout(ctx, emailHTTPTimeout)
	defer cancel()

	req, err := http.NewRequestWithContext(ctx, http.MethodPost, endpoint, bytes.NewReader(body))
	if err != nil {
		return fmt.Errorf("create request: %w", err)
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", authorization)

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return fmt.Errorf("send email request: %w", err)
	}
	defer func() { _ = resp.Body.Close() }()

	if resp.StatusCode >= 200 && resp.StatusCode < 300 {
		return nil
	}

	respBody, _ := io.ReadAll(io.LimitReader(resp.Body, 4096))
	message := strings.TrimSpace(string(respBody))
	if token := strings.TrimSpace(strings.TrimPrefix(authorization, "Bearer ")); token != "" {
		message = strings.ReplaceAll(message, token, "[redacted]")
	}
	return fmt.Errorf("cloud-mail returned status %d: %s", resp.StatusCode, message)
}

func NormalizeResendAPIBaseURL(raw string) (string, error) {
	base := strings.TrimRight(strings.TrimSpace(raw), "/")
	if base == "" {
		base = defaultResendAPIBaseURL
	}
	parsed, err := url.Parse(base)
	if err != nil || parsed.Scheme == "" || parsed.Host == "" {
		return "", infraerrors.BadRequest("INVALID_RESEND_API_BASE_URL", "invalid Resend API base URL")
	}
	if parsed.Scheme != "https" && (parsed.Scheme != "http" || !isLocalResendAPIHost(parsed.Hostname())) {
		return "", infraerrors.BadRequest("INVALID_RESEND_API_BASE_URL", "Resend API base URL must use https")
	}
	parsed.RawQuery = ""
	parsed.Fragment = ""
	return strings.TrimRight(parsed.String(), "/"), nil
}

func isLocalResendAPIHost(host string) bool {
	host = strings.ToLower(strings.TrimSpace(host))
	return host == "localhost" || host == "127.0.0.1" || host == "::1"
}

func formatEmailAddress(name, email string) string {
	email = sanitizeEmailHeader(email)
	if strings.TrimSpace(name) == "" {
		return email
	}
	return fmt.Sprintf("%s <%s>", sanitizeEmailHeader(name), email)
}

func postEmailJSON(ctx context.Context, endpoint, authorization string, payload any) error {
	body, err := json.Marshal(payload)
	if err != nil {
		return fmt.Errorf("marshal email payload: %w", err)
	}

	ctx, cancel := context.WithTimeout(ctx, emailHTTPTimeout)
	defer cancel()

	req, err := http.NewRequestWithContext(ctx, http.MethodPost, endpoint, bytes.NewReader(body))
	if err != nil {
		return fmt.Errorf("create email request: %w", err)
	}
	req.Header.Set("Authorization", authorization)
	req.Header.Set("Content-Type", "application/json")

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return fmt.Errorf("send email request: %w", err)
	}
	defer func() { _ = resp.Body.Close() }()

	if resp.StatusCode >= 200 && resp.StatusCode < 300 {
		return nil
	}

	respBody, _ := io.ReadAll(io.LimitReader(resp.Body, 4096))
	message := strings.TrimSpace(string(respBody))
	if token := strings.TrimSpace(strings.TrimPrefix(authorization, "Bearer ")); token != "" {
		message = strings.ReplaceAll(message, token, "[redacted]")
	}
	return fmt.Errorf("email provider returned status %d: %s", resp.StatusCode, message)
}

// sendMailPlain sends mail without TLS using a dialer with timeout.
func (s *EmailService) sendMailPlain(addr string, auth smtp.Auth, from, to string, msg []byte, host string) error {
	dialer := &net.Dialer{Timeout: smtpDialTimeout}
	conn, err := dialer.Dial("tcp", addr)
	if err != nil {
		return fmt.Errorf("smtp dial: %w", err)
	}
	_ = conn.SetDeadline(time.Now().Add(smtpIOTimeout))
	defer func() { _ = conn.Close() }()

	client, err := smtp.NewClient(conn, host)
	if err != nil {
		return fmt.Errorf("new smtp client: %w", err)
	}
	defer func() { _ = client.Close() }()

	// Opportunistic STARTTLS: upgrade to encrypted connection if the server supports it.
	// This mirrors the behavior of smtp.SendMail which we replaced for timeout support.
	if ok, _ := client.Extension("STARTTLS"); ok {
		if err = client.StartTLS(&tls.Config{ServerName: host, MinVersion: tls.VersionTLS12}); err != nil {
			return fmt.Errorf("starttls: %w", err)
		}
	}

	if err = client.Auth(auth); err != nil {
		return fmt.Errorf("smtp auth: %w", err)
	}
	if err = client.Mail(from); err != nil {
		return fmt.Errorf("smtp mail: %w", err)
	}
	if err = client.Rcpt(to); err != nil {
		return fmt.Errorf("smtp rcpt: %w", err)
	}
	w, err := client.Data()
	if err != nil {
		return fmt.Errorf("smtp data: %w", err)
	}
	if _, err = w.Write(msg); err != nil {
		return fmt.Errorf("write msg: %w", err)
	}
	if err = w.Close(); err != nil {
		return fmt.Errorf("close writer: %w", err)
	}
	_ = client.Quit()
	return nil
}

// sendMailTLS 使用TLS发送邮件
func (s *EmailService) sendMailTLS(addr string, auth smtp.Auth, from, to string, msg []byte, host string) error {
	tlsConfig := &tls.Config{
		ServerName: host,
		// 强制 TLS 1.2+，避免协议降级导致的弱加密风险。
		MinVersion: tls.VersionTLS12,
	}

	dialer := &net.Dialer{Timeout: smtpDialTimeout}
	conn, err := tls.DialWithDialer(dialer, "tcp", addr, tlsConfig)
	if err != nil {
		return fmt.Errorf("tls dial: %w", err)
	}
	_ = conn.SetDeadline(time.Now().Add(smtpIOTimeout))
	defer func() { _ = conn.Close() }()

	client, err := smtp.NewClient(conn, host)
	if err != nil {
		return fmt.Errorf("new smtp client: %w", err)
	}
	defer func() { _ = client.Close() }()

	if err = client.Auth(auth); err != nil {
		return fmt.Errorf("smtp auth: %w", err)
	}

	if err = client.Mail(from); err != nil {
		return fmt.Errorf("smtp mail: %w", err)
	}

	if err = client.Rcpt(to); err != nil {
		return fmt.Errorf("smtp rcpt: %w", err)
	}

	w, err := client.Data()
	if err != nil {
		return fmt.Errorf("smtp data: %w", err)
	}

	_, err = w.Write(msg)
	if err != nil {
		return fmt.Errorf("write msg: %w", err)
	}

	err = w.Close()
	if err != nil {
		return fmt.Errorf("close writer: %w", err)
	}

	// Email is sent successfully after w.Close(), ignore Quit errors
	// Some SMTP servers return non-standard responses on QUIT
	_ = client.Quit()
	return nil
}

// GenerateVerifyCode 生成6位数字验证码
func (s *EmailService) GenerateVerifyCode() (string, error) {
	const digits = "0123456789"
	code := make([]byte, 6)
	for i := range code {
		num, err := rand.Int(rand.Reader, big.NewInt(int64(len(digits))))
		if err != nil {
			return "", err
		}
		code[i] = digits[num.Int64()]
	}
	return string(code), nil
}

// SendVerifyCode 发送验证码邮件
func (s *EmailService) SendVerifyCode(ctx context.Context, email, siteName string, locale ...string) error {
	// 检查是否在冷却期内
	existing, err := s.cache.GetVerificationCode(ctx, email)
	if err == nil && existing != nil {
		if time.Since(existing.CreatedAt) < verifyCodeCooldown {
			return ErrVerifyCodeTooFrequent
		}
	}

	// 生成验证码
	code, err := s.GenerateVerifyCode()
	if err != nil {
		return fmt.Errorf("generate code: %w", err)
	}

	// 保存验证码到 Redis
	data := &VerificationCodeData{
		Code:      code,
		Attempts:  0,
		CreatedAt: time.Now(),
		ExpiresAt: time.Now().Add(verifyCodeTTL),
	}
	if err := s.cache.SetVerificationCode(ctx, email, data, verifyCodeTTL); err != nil {
		return fmt.Errorf("save verify code: %w", err)
	}

	if s.notificationEmailService != nil {
		err := s.notificationEmailService.Send(ctx, NotificationEmailSendInput{
			Event:          NotificationEmailEventAuthVerifyCode,
			Locale:         firstEmailLocale(locale),
			RecipientEmail: email,
			RecipientName:  emailRecipientName(email),
			Variables: map[string]string{
				"verification_code":  code,
				"expires_in_minutes": strconv.Itoa(int(verifyCodeTTL / time.Minute)),
			},
		})
		if err == nil {
			return nil
		}
		if !shouldFallbackNotificationEmail(err) {
			return err
		}
		slog.Warn("failed to send templated verification email, falling back to legacy template", "recipient_hash", notificationEmailHash(email), "error", err)
	}

	// 构建邮件内容
	subject := fmt.Sprintf("[%s] Email Verification Code", siteName)
	body := s.buildVerifyCodeEmailBody(code, siteName)

	// 发送邮件
	if err := s.SendEmail(ctx, email, subject, body); err != nil {
		return fmt.Errorf("send email: %w", err)
	}

	return nil
}

// VerifyCode 验证验证码
func (s *EmailService) VerifyCode(ctx context.Context, email, code string) error {
	data, err := s.cache.GetVerificationCode(ctx, email)
	if err != nil || data == nil {
		return ErrInvalidVerifyCode
	}

	// 检查是否已达到最大尝试次数
	if data.Attempts >= maxVerifyCodeAttempts {
		return ErrVerifyCodeMaxAttempts
	}

	// 验证码不匹配 (constant-time comparison to prevent timing attacks)
	if subtle.ConstantTimeCompare([]byte(data.Code), []byte(code)) != 1 {
		data.Attempts++
		remaining := time.Until(data.ExpiresAt)
		if remaining <= 0 {
			return ErrInvalidVerifyCode
		}
		if err := s.cache.SetVerificationCode(ctx, email, data, remaining); err != nil {
			slog.Error("failed to update verification attempt count", "email", email, "error", err)
		}
		if data.Attempts >= maxVerifyCodeAttempts {
			return ErrVerifyCodeMaxAttempts
		}
		return ErrInvalidVerifyCode
	}

	// 验证成功，删除验证码
	if err := s.cache.DeleteVerificationCode(ctx, email); err != nil {
		slog.Error("failed to delete verification code after success", "email", email, "error", err)
	}
	return nil
}

// buildVerifyCodeEmailBody 构建验证码邮件HTML内容
func (s *EmailService) buildVerifyCodeEmailBody(code, siteName string) string {
	return fmt.Sprintf(`
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; background-color: #f5f5f5; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #667eea 0%%, #764ba2 100%%); color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { padding: 40px 30px; text-align: center; }
        .code { font-size: 36px; font-weight: bold; letter-spacing: 8px; color: #333; background-color: #f8f9fa; padding: 20px 30px; border-radius: 8px; display: inline-block; margin: 20px 0; font-family: monospace; }
        .info { color: #666; font-size: 14px; line-height: 1.6; margin-top: 20px; }
        .footer { background-color: #f8f9fa; padding: 20px; text-align: center; color: #999; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>%s</h1>
        </div>
        <div class="content">
            <p style="font-size: 18px; color: #333;">Your verification code is:</p>
            <div class="code">%s</div>
            <div class="info">
                <p>This code will expire in <strong>15 minutes</strong>.</p>
                <p>If you did not request this code, please ignore this email.</p>
            </div>
        </div>
        <div class="footer">
            <p>This is an automated message, please do not reply.</p>
        </div>
    </div>
</body>
</html>
`, html.EscapeString(siteName), code)
}

// TestSMTPConnectionWithConfig 使用指定配置测试SMTP连接
func (s *EmailService) TestSMTPConnectionWithConfig(config *SMTPConfig) error {
	addr := fmt.Sprintf("%s:%d", config.Host, config.Port)

	if config.UseTLS {
		tlsConfig := &tls.Config{
			ServerName: config.Host,
			// 与发送逻辑一致，显式要求 TLS 1.2+。
			MinVersion: tls.VersionTLS12,
		}
		conn, err := tls.Dial("tcp", addr, tlsConfig)
		if err != nil {
			return fmt.Errorf("tls connection failed: %w", err)
		}
		defer func() { _ = conn.Close() }()

		client, err := smtp.NewClient(conn, config.Host)
		if err != nil {
			return fmt.Errorf("smtp client creation failed: %w", err)
		}
		defer func() { _ = client.Close() }()

		auth := smtp.PlainAuth("", config.Username, config.Password, config.Host)
		if err = client.Auth(auth); err != nil {
			return fmt.Errorf("smtp authentication failed: %w", err)
		}

		return client.Quit()
	}

	// 非TLS连接测试
	client, err := smtp.Dial(addr)
	if err != nil {
		return fmt.Errorf("smtp connection failed: %w", err)
	}
	defer func() { _ = client.Close() }()

	auth := smtp.PlainAuth("", config.Username, config.Password, config.Host)
	if err = client.Auth(auth); err != nil {
		return fmt.Errorf("smtp authentication failed: %w", err)
	}

	return client.Quit()
}

// GeneratePasswordResetToken generates a secure 32-byte random token (64 hex characters)
func (s *EmailService) GeneratePasswordResetToken() (string, error) {
	bytes := make([]byte, 32)
	if _, err := rand.Read(bytes); err != nil {
		return "", err
	}
	return hex.EncodeToString(bytes), nil
}

// SendPasswordResetEmail sends a password reset email with a reset link
func (s *EmailService) SendPasswordResetEmail(ctx context.Context, email, siteName, resetURL string, locale ...string) error {
	var token string
	var needSaveToken bool

	// Check if token already exists
	existing, err := s.cache.GetPasswordResetToken(ctx, email)
	if err == nil && existing != nil {
		// Token exists, reuse it (allows resending email without generating new token)
		token = existing.Token
		needSaveToken = false
	} else {
		// Generate new token
		token, err = s.GeneratePasswordResetToken()
		if err != nil {
			return fmt.Errorf("generate token: %w", err)
		}
		needSaveToken = true
	}

	// Save token to Redis (only if new token generated)
	if needSaveToken {
		data := &PasswordResetTokenData{
			Token:     token,
			CreatedAt: time.Now(),
		}
		if err := s.cache.SetPasswordResetToken(ctx, email, data, passwordResetTokenTTL); err != nil {
			return fmt.Errorf("save reset token: %w", err)
		}
	}

	// Build full reset URL with URL-encoded token and email
	fullResetURL := fmt.Sprintf("%s?email=%s&token=%s", resetURL, url.QueryEscape(email), url.QueryEscape(token))

	if s.notificationEmailService != nil {
		err := s.notificationEmailService.Send(ctx, NotificationEmailSendInput{
			Event:          NotificationEmailEventAuthPasswordReset,
			Locale:         firstEmailLocale(locale),
			RecipientEmail: email,
			RecipientName:  emailRecipientName(email),
			Variables: map[string]string{
				"reset_url":          fullResetURL,
				"expires_in_minutes": strconv.Itoa(int(passwordResetTokenTTL / time.Minute)),
			},
		})
		if err == nil {
			return nil
		}
		if !shouldFallbackNotificationEmail(err) {
			return err
		}
		slog.Warn("failed to send templated password reset email, falling back to legacy template", "recipient_hash", notificationEmailHash(email), "error", err)
	}

	// Build email content
	subject := fmt.Sprintf("[%s] 密码重置请求", siteName)
	body := s.buildPasswordResetEmailBody(fullResetURL, siteName)

	// Send email
	if err := s.SendEmail(ctx, email, subject, body); err != nil {
		return fmt.Errorf("send email: %w", err)
	}

	return nil
}

// SendPasswordResetEmailWithCooldown sends password reset email with cooldown check (called by queue worker)
// This method wraps SendPasswordResetEmail with email cooldown to prevent email bombing
func (s *EmailService) SendPasswordResetEmailWithCooldown(ctx context.Context, email, siteName, resetURL string, locale ...string) error {
	// Check email cooldown to prevent email bombing
	if s.cache.IsPasswordResetEmailInCooldown(ctx, email) {
		slog.Info("password reset email skipped due to cooldown", "email", email)
		return nil // Silent success to prevent revealing cooldown to attackers
	}

	// Send email using core method
	if err := s.SendPasswordResetEmail(ctx, email, siteName, resetURL, firstEmailLocale(locale)); err != nil {
		return err
	}

	// Set cooldown marker (Redis TTL handles expiration)
	if err := s.cache.SetPasswordResetEmailCooldown(ctx, email, passwordResetEmailCooldown); err != nil {
		slog.Error("failed to set password reset cooldown", "email", email, "error", err)
	}

	return nil
}

// VerifyPasswordResetToken verifies the password reset token without consuming it
func (s *EmailService) VerifyPasswordResetToken(ctx context.Context, email, token string) error {
	data, err := s.cache.GetPasswordResetToken(ctx, email)
	if err != nil || data == nil {
		return ErrInvalidResetToken
	}

	// Use constant-time comparison to prevent timing attacks
	if subtle.ConstantTimeCompare([]byte(data.Token), []byte(token)) != 1 {
		return ErrInvalidResetToken
	}

	return nil
}

// ConsumePasswordResetToken verifies and deletes the token (one-time use)
func (s *EmailService) ConsumePasswordResetToken(ctx context.Context, email, token string) error {
	// Verify first
	if err := s.VerifyPasswordResetToken(ctx, email, token); err != nil {
		return err
	}

	// Delete after verification (one-time use)
	if err := s.cache.DeletePasswordResetToken(ctx, email); err != nil {
		slog.Error("failed to delete password reset token after consumption", "email", email, "error", err)
	}
	return nil
}

// buildPasswordResetEmailBody builds the HTML content for password reset email
func (s *EmailService) buildPasswordResetEmailBody(resetURL, siteName string) string {
	return fmt.Sprintf(`
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; background-color: #f5f5f5; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #667eea 0%%, #764ba2 100%%); color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { padding: 40px 30px; text-align: center; }
        .button { display: inline-block; background: linear-gradient(135deg, #667eea 0%%, #764ba2 100%%); color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-size: 16px; font-weight: 600; margin: 20px 0; }
        .button:hover { opacity: 0.9; }
        .info { color: #666; font-size: 14px; line-height: 1.6; margin-top: 20px; }
        .link-fallback { color: #666; font-size: 12px; word-break: break-all; margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 4px; }
        .footer { background-color: #f8f9fa; padding: 20px; text-align: center; color: #999; font-size: 12px; }
        .warning { color: #e74c3c; font-weight: 500; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>%s</h1>
        </div>
        <div class="content">
            <p style="font-size: 18px; color: #333;">密码重置请求</p>
            <p style="color: #666;">您已请求重置密码。请点击下方按钮设置新密码：</p>
            <a href="%s" class="button">重置密码</a>
            <div class="info">
                <p>此链接将在 <strong>30 分钟</strong>后失效。</p>
                <p class="warning">如果您没有请求重置密码，请忽略此邮件。您的密码将保持不变。</p>
            </div>
            <div class="link-fallback">
                <p>如果按钮无法点击，请复制以下链接到浏览器中打开：</p>
                <p>%s</p>
            </div>
        </div>
        <div class="footer">
            <p>这是一封自动发送的邮件，请勿回复。</p>
        </div>
    </div>
</body>
</html>
`, html.EscapeString(siteName), html.EscapeString(resetURL), html.EscapeString(resetURL))
}
