package service

import (
	"crypto/rand"
	"crypto/rsa"
	"crypto/x509"
	"encoding/pem"
	"net/http"
	"net/url"
	"strings"
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/tidwall/gjson"
)

func TestBuildVertexGeminiURL(t *testing.T) {
	got, err := buildVertexGeminiURL("my-project", "us-central1", "gemini-3-pro", "streamGenerateContent", true)
	require.NoError(t, err)
	require.Equal(t, "https://us-central1-aiplatform.googleapis.com/v1/projects/my-project/locations/us-central1/publishers/google/models/gemini-3-pro:streamGenerateContent?alt=sse", got)
}

func TestBuildVertexGeminiURLUsesGlobalEndpointHost(t *testing.T) {
	got, err := buildVertexGeminiURL("my-project", "global", "gemini-3-flash-preview", "streamGenerateContent", true)
	require.NoError(t, err)
	require.Equal(t, "https://aiplatform.googleapis.com/v1/projects/my-project/locations/global/publishers/google/models/gemini-3-flash-preview:streamGenerateContent?alt=sse", got)
}

func TestBuildVertexAnthropicURL(t *testing.T) {
	got, err := buildVertexAnthropicURL("my-project", "us-east5", "claude-sonnet-4-5@20250929", false)
	require.NoError(t, err)
	require.Equal(t, "https://us-east5-aiplatform.googleapis.com/v1/projects/my-project/locations/us-east5/publishers/anthropic/models/claude-sonnet-4-5@20250929:rawPredict", got)
}

func TestBuildVertexAnthropicURLUsesGlobalEndpointHost(t *testing.T) {
	got, err := buildVertexAnthropicURL("my-project", "global", "claude-haiku-4-5@20251001", true)
	require.NoError(t, err)
	require.Equal(t, "https://aiplatform.googleapis.com/v1/projects/my-project/locations/global/publishers/anthropic/models/claude-haiku-4-5@20251001:streamRawPredict", got)
}

func TestNormalizeVertexAnthropicModelID(t *testing.T) {
	require.Equal(t, "claude-sonnet-4-5@20250929", normalizeVertexAnthropicModelID("claude-sonnet-4-5-20250929"))
	require.Equal(t, "claude-sonnet-4-5@20250929", normalizeVertexAnthropicModelID("claude-sonnet-4-5@20250929"))
	require.Equal(t, "claude-sonnet-4-6", normalizeVertexAnthropicModelID("claude-sonnet-4-6"))
}

func TestBuildVertexAnthropicRequestBody(t *testing.T) {
	got, err := buildVertexAnthropicRequestBody([]byte(`{"model":"claude-sonnet-4-5","anthropic_version":"2023-06-01","max_tokens":64,"messages":[{"role":"user","content":"hi"}]}`))
	require.NoError(t, err)
	require.Equal(t, "", gjson.GetBytes(got, "model").String())
	require.Equal(t, vertexAnthropicVersion, gjson.GetBytes(got, "anthropic_version").String())
	require.Equal(t, int64(64), gjson.GetBytes(got, "max_tokens").Int())
	require.Equal(t, "hi", gjson.GetBytes(got, "messages.0.content").String())
}

func TestBuildVertexGeminiURLRejectsInvalidLocation(t *testing.T) {
	_, err := buildVertexGeminiURL("my-project", "us-central1/path", "gemini-3-pro", "generateContent", false)
	require.Error(t, err)
	require.Contains(t, err.Error(), "invalid vertex location")
}

func TestParseVertexServiceAccountKey(t *testing.T) {
	raw := `{
		"type": "service_account",
		"project_id": "vertex-proj",
		"private_key_id": "kid",
		"private_key": "-----BEGIN PRIVATE KEY-----\nabc\n-----END PRIVATE KEY-----\n",
		"client_email": "svc@vertex-proj.iam.gserviceaccount.com"
	}`
	account := &Account{
		Type:     AccountTypeServiceAccount,
		Platform: PlatformGemini,
		Credentials: map[string]any{
			"service_account_json": raw,
		},
	}
	key, err := parseVertexServiceAccountKey(account)
	require.NoError(t, err)
	require.Equal(t, "vertex-proj", key.ProjectID)
	require.Equal(t, "svc@vertex-proj.iam.gserviceaccount.com", key.ClientEmail)
	require.Equal(t, vertexDefaultTokenURL, key.TokenURI)
	require.True(t, strings.Contains(key.PrivateKey, "BEGIN PRIVATE KEY"))
}

func TestVertexServiceAccountProxyURL(t *testing.T) {
	proxyID := int64(7)
	account := &Account{
		ProxyID: &proxyID,
		Proxy: &Proxy{
			Protocol: "http",
			Host:     "proxy.example.com",
			Port:     8080,
		},
	}

	require.Equal(t, "http://proxy.example.com:8080", vertexServiceAccountProxyURL(account))
	require.Empty(t, vertexServiceAccountProxyURL(&Account{Proxy: account.Proxy}))
	require.Empty(t, vertexServiceAccountProxyURL(&Account{ProxyID: &proxyID}))
}

func TestExchangeVertexServiceAccountTokenUsesProxy(t *testing.T) {
	_, err := rsa.GenerateKey(rand.Reader, 2048)
	require.NoError(t, err)
	pemBytes := pem.EncodeToMemory(&pem.Block{Type: "RSA PRIVATE KEY", Bytes: x509.MarshalPKCS1PrivateKey(mustRSAKey(t))})
	require.NotEmpty(t, pemBytes)

	client, err := newVertexServiceAccountHTTPClient("http://proxy.example.com:8080")
	require.NoError(t, err)

	transport, ok := client.Transport.(*http.Transport)
	require.True(t, ok)
	require.NotNil(t, transport.Proxy)

	reqURL, err := url.Parse("http://oauth2.googleapis.com/token")
	require.NoError(t, err)
	req := &http.Request{URL: reqURL}
	proxyURL, err := transport.Proxy(req)
	require.NoError(t, err)
	require.NotNil(t, proxyURL)
	require.Equal(t, "http://proxy.example.com:8080", proxyURL.String())
}

func mustRSAKey(t *testing.T) *rsa.PrivateKey {
	t.Helper()
	key, err := rsa.GenerateKey(rand.Reader, 2048)
	require.NoError(t, err)
	return key
}
