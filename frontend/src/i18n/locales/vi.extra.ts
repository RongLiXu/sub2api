export default {
  "keyUsage": {
    "dateRange90d": "90 ngay",
    "dailyDetail": "Chi tiet theo ngay",
    "date": "Ngay",
    "cacheWriteTokens": "Ghi cache",
    "noDailyUsage": "Khong co du lieu su dung theo ngay",
    "placeholder": "sk-ant-mirror-xxxxxxxxxxxx",
    "rpmTpm": "RPM / TPM"
  },
  "usage": {
    "cacheTotal": "Cache",
    "cacheBreakdown": "Chi tiết token cache",
    "cacheCreationTokensLabel": "Tạo cache",
    "cacheReadTokensLabel": "Đọc cache",
    "resetNow": "Now",
    "resetPending": "Pending refresh",
    "ws": "WS",
    "cyber": "Cyber",
    "cacheHit": "Cache hit",
    "cacheCreate": "Cache create",
    "cacheHitRate": "Cache hit rate",
    "perMillionTokens": "/ 1M tokens",
    "imageTotalPrice": "Image total price",
    "imageCount": "Image count",
    "imageBillingSize": "Billing size",
    "imageInputSize": "Input size",
    "imageOutputSize": "Output size",
    "imageOutputTokens": "Image Output Tokens",
    "imageOutputTokenPrice": "Image Output Price",
    "imageOutputCost": "Image Output Cost",
    "imageSizeSource": "Size source",
    "imageSizeBreakdown": "Size breakdown",
    "imageSizeSourceOutput": "Upstream output",
    "imageSizeSourceInput": "Request input",
    "imageSizeSourceDefault": "Default billing tier",
    "imageSizeSourceLegacy": "Legacy record",
    "imageSizeSourceMissing": "Not recorded",
    "imageSizeNotRecorded": "not recorded",
    "imageSizeLegacyUnstandardized": "legacy unstandardized",
    "imageSizeUnknown": "unknown",
    "serviceTierPriority": "Fast",
    "serviceTierFlex": "Flex",
    "serviceTierStandard": "Standard",
    "tabs": {
      "usage": "Usage",
      "errors": "Error Requests"
    },
    "errors": {
      "time": "Time",
      "model": "Model",
      "endpoint": "Endpoint",
      "status": "Status",
      "category": "Category",
      "platform": "Platform",
      "message": "Message",
      "keyName": "Key Name",
      "keyDeleted": "Deleted",
      "allKeys": "All keys",
      "modelPlaceholder": "Search model",
      "allCategories": "All categories",
      "empty": "No error requests",
      "failedToLoad": "Failed to load error requests",
      "categories": {
        "auth": "Auth failed",
        "rate_limit": "Rate limited",
        "quota": "Balance/Subscription",
        "invalid_request": "Invalid request",
        "service_unavailable": "Service unavailable",
        "upstream": "Upstream error",
        "internal": "Platform error",
        "other": "Other",
        "cyber": "Cyber policy"
      },
      "detail": {
        "title": "Error Request Detail",
        "responseBody": "Response Body",
        "upstreamStatus": "Upstream Status",
        "loadFailed": "Failed to load detail, please try again"
      }
    }
  },
  "auth": {
    "oauthFlow": {
      "wechatNativeAppRequired": "Trang này chỉ cấu hình đăng nhập WeChat bằng ứng dụng di động. Vui lòng tiếp tục từ ứng dụng native qua WeChat SDK."
    },
    "dingtalkProviderName": "DingTalk",
    "emailLabel": "Email",
    "errors": {
      "USER_NOT_ACTIVE": "Account has been disabled."
    },
    "emailSuffixAllowedMore": "and {count} more",
    "loginAgreement": {
      "separator": ", "
    },
    "dingtalk": {
      "signIn": "Continue with DingTalk",
      "callbackTitle": "Signing you in with DingTalk",
      "callbackProcessing": "Completing DingTalk login, please wait...",
      "callbackHint": "If you are not redirected automatically, go back to the login page and try again.",
      "callbackMissingToken": "Missing login token, please try again.",
      "backToLogin": "Back to Login",
      "invitationRequired": "This DingTalk account is not yet registered. The site requires an invitation code — please enter one to complete registration.",
      "invalidPendingToken": "The registration token has expired. Please sign in with DingTalk again.",
      "completeRegistration": "Complete Registration",
      "completing": "Completing registration…",
      "completeRegistrationFailed": "Registration failed. Please check your invitation code and try again.",
      "createAccountTitle": "Create DingTalk Account",
      "registrationDisabledRedirectToBind": "New account registration is currently disabled. Please bind to your existing account with its email and password.",
      "error": {
        "title": "DingTalk Sign-in Failed",
        "csrf": "Login session expired, please scan again",
        "corp_rejected": "Your DingTalk account is not part of this organization. Please contact administrator",
        "dingtalk_not_enabled": "DingTalk login is not enabled",
        "upstream_error": "DingTalk service is temporarily unavailable. Please try again later",
        "missing_browser_session": "Browser session lost. Please login again",
        "missing_params": "Request parameters are incomplete",
        "invalid_state": "Invalid login state",
        "provider_error": "DingTalk authorization failed",
        "session_error": "Failed to create session. Please retry",
        "retry": "Retry Login"
      }
    },
    "emailOAuth": {
      "signIn": "Continue with {providerName}"
    },
    "dingtalkCallbackPageTitle": "DingTalk Sign-In Callback",
    "wechatProviderName": "WeChat",
    "oauth": {
      "invalidCallbackTitle": "Invalid sign-in callback",
      "invalidCallbackHint": "This page does not contain a valid authorization result. Return to the login page and start quick sign-in again."
    }
  },
  "customPage": {
    "copyCode": "Sao chép",
    "copiedCode": "Đã sao chép ✓",
    "tableOfContents": "Table of contents",
    "loadFailed": "Failed to load page"
  },
  "admin": {
    "redeem": {
      "batchUpdate": "Cap nhat hang loat",
      "batchUpdateTitle": "Cap nhat hang loat ma doi",
      "selectedCount": "Da chon {count} ma doi",
      "clearSelection": "Bo chon",
      "selectCodesFirst": "Hay chon ma doi truoc",
      "noBatchFieldsSelected": "Hay chon it nhat mot truong can cap nhat",
      "batchUpdateSuccess": "Da cap nhat {count} ma doi",
      "failedToBatchUpdate": "Cap nhat hang loat ma doi that bai",
      "batchFields": {
        "status": "Trang thai",
        "expiresAt": "Ngay het han",
        "notes": "Ghi chu",
        "group": "Nhom"
      },
      "batchNotesPlaceholder": "Nhap ghi chu moi, de trong de xoa ghi chu",
      "clearGroup": "Xoa nhom",
      "columns": {
        "expiresAt": "Expires At"
      },
      "codeExpiry": "Code Expiry",
      "neverExpires": "Never expires",
      "expiryPresetDays": "{days} days",
      "customExpiry": "Custom",
      "customExpiryDays": "Custom days",
      "expiryDaysRequired": "Please enter a valid expiry day count"
    },
    "groups": {
      "rateMultiplierBadge": "Hệ số {rate}x",
      "copyAccounts": {
        "groupOptionLabel": "{name} ({count} tài khoản)"
      },
      "accountFilter": {
        "title": "Account Filter Controls",
        "oauthOnly": "Allow OAuth accounts only",
        "oauthOnlyEnabled": "Enabled: API key accounts will be excluded",
        "privacyOnly": "Allow only accounts with privacy protection configured",
        "privacyOnlyEnabled": "Enabled: accounts without privacy settings will be excluded",
        "disabled": "Disabled"
      },
      "columns": {
        "userEmail": "Email"
      },
      "accountsUnit": "",
      "limitDay": "d",
      "limitWeek": "w",
      "limitMonth": "mo",
      "platforms": {
        "openai": "OpenAI",
        "grok": "Grok"
      },
      "imagePricing": {
        "allowImageGeneration": "Allow image generation for this group",
        "independentMultiplier": "Use independent image multiplier",
        "imageMultiplier": "Image multiplier",
        "modeHint": "By default, image billing uses image price × current effective group multiplier. Independent mode uses image price × image multiplier.",
        "finalPricePreview": "Final per-image price preview",
        "notConfigured": "Not configured"
      },
      "supportedScopes": {
        "claude": "Claude"
      },
      "failedToSave": "Không lưu được nhóm",
      "videoPricing": {
        "title": "Giá tạo video",
        "description": "Định cấu hình giá tạo video Grok theo USD mỗi giây. Để trống để sử dụng mức giá mặc định (grok-imagine-video: 480p $0,05/giây, 720p $0,07/giây; video-1.5: 480p $0,08/giây, 720p $0,14/giây, 1080p $0,25/giây).",
        "independentMultiplier": "Sử dụng hệ số video độc lập",
        "videoMultiplier": "Hệ số video",
        "modeHint": "Video được tính phí theo giây: giá mỗi giây × thời lượng (1-15 giây, mặc định 8 giây). Mặc định áp dụng hệ số nhóm hiệu quả hiện tại; chế độ độc lập sử dụng hệ số video.",
        "finalPricePreview": "Xem trước giá cuối cùng mỗi giây",
        "notConfigured": "Chưa định cấu hình"
      },
      "webSearchPricing": {
        "title": "Giá Codex Web Search",
        "pricePerCall": "Giá mỗi lần tìm kiếm (USD)",
        "pricePerCallHint": "Để trống để sử dụng giá mặc định $0,01/lần (giá chính thức: $10 cho 1.000 lần); 0 nghĩa là miễn phí. Hệ số nhóm được áp dụng thêm.",
        "finalPricePreview": "Giá mỗi lần sau khi áp dụng hệ số hiện tại: {price}"
      }
    },
    "channels": {
      "noGroupsSelected": "Nền tảng {platform} chưa chọn nhóm nào. Hãy chọn ít nhất một nhóm hoặc tắt nền tảng này.",
      "emptyModelsInPricing": "Nền tảng {platform} có mục giá chưa thêm mô hình. Hãy thêm mô hình hoặc xóa mục đó.",
      "form": {
        "minTokens": "Min",
        "maxTokens": "Max",
        "inclusive": "(bao gồm)",
        "syncLatestModels": "Đồng bộ mô hình mới nhất",
        "syncingModels": "Đang đồng bộ...",
        "syncModelsSuccess": "Đã đồng bộ {count} mô hình mới",
        "syncModelsAlreadyUpToDate": "Danh sách mô hình đã là mới nhất",
        "syncModelsError": "Đồng bộ mô hình thất bại",
        "codexImageGenerationBridge": "Codex Image Generation Bridge",
        "codexImageGenerationBridgeHint": "When enabled, Codex /responses text requests in OpenAI groups may be automatically given the image_generation tool. Keep off unless the routed accounts support image generation.",
        "bedrockCCCompat": "Bedrock CC Compatibility",
        "bedrockCCCompatHint": "⚠️ When enabled, requests to Bedrock accounts in this channel will be transformed for Claude Code compatibility (thinking type conversion, tool_use ID sanitization)."
      },
      "validation": {
        "minTokensNegative": "Khoảng #{index}: số token tối thiểu ({min}) không được âm",
        "maxTokensPositive": "Khoảng #{index}: số token tối đa ({max}) phải lớn hơn 0",
        "maxTokensGreaterThanMin": "Khoảng #{index}: số token tối đa ({max}) phải lớn hơn số tối thiểu ({min})",
        "priceNegative": "Khoảng #{index}: {name} không được âm",
        "unlimitedLast": "Khoảng #{index}: khoảng không giới hạn (để trống token tối đa) phải là khoảng cuối cùng",
        "overlap": "Khoảng #{prevIndex} và #{currentIndex} bị chồng lấn: giới hạn trên trước đó ({prevMax}) lớn hơn giới hạn dưới hiện tại ({currentMin})",
        "priceFields": {
          "input": "Giá input",
          "output": "Giá output",
          "cacheWrite": "Giá ghi cache",
          "cacheRead": "Giá đọc cache",
          "perRequest": "Giá mỗi request"
        }
      }
    },
    "settings": {
      "emailTemplates": {
        "title": "Mau email",
        "description": "Tuy chinh tieu de va noi dung HTML cua email thong bao theo tung su kien va ngon ngu.",
        "event": "Su kien",
        "locale": "Ngon ngu",
        "localeEn": "Tieng Anh",
        "localeZh": "Tieng Trung",
        "subject": "Tieu de",
        "subjectPlaceholder": "Nhap tieu de email",
        "html": "Mau HTML",
        "htmlPlaceholder": "Chinh sua mau HTML cua email",
        "placeholders": "Bien thay the",
        "placeholdersHelp": "Bam vao bien thay the de sao chep. Backend se thay cac gia tri nay khi gui email.",
        "livePreview": "Xem truoc truc tiep",
        "previewSecurityHint": "HTML xem truoc duoc tao boi API xem truoc cua backend va hien thi trong iframe sandbox da tat script.",
        "preview": "Xem truoc / Lam moi",
        "previewing": "Dang xem truoc...",
        "save": "Luu mau",
        "saving": "Dang luu...",
        "restoreOfficial": "Khoi phuc mau chinh thuc",
        "restoring": "Dang khoi phuc...",
        "restoreConfirm": "Khoi phuc mau chinh thuc cho su kien va ngon ngu nay? Ban tuy chinh hien tai se bi thay the.",
        "restoreSuccess": "Da khoi phuc mau chinh thuc",
        "saveSuccess": "Da luu mau email",
        "placeholderCopied": "Da sao chep bien thay the",
        "validationRequired": "Bat buoc nhap tieu de va mau HTML",
        "empty": "Chua co su kien hoac ngon ngu mau email nao kha dung.",
        "noPreview": "Lam moi ban xem truoc de xem tieu de email sau khi render.",
        "customized": "Da tuy chinh",
        "eventLabels": {
          "authVerifyCode": "Ma xac minh email",
          "authPasswordReset": "Dat lai mat khau",
          "notificationEmailVerifyCode": "Ma xac minh email thong bao",
          "subscriptionPurchaseSuccess": "Mua goi thanh cong",
          "subscriptionExpiryReminder": "Nhac nho het han goi",
          "balanceLow": "Canh bao so du thap",
          "balanceRechargeSuccess": "Nap so du thanh cong",
          "accountQuotaAlert": "Canh bao han muc tai khoan",
          "contentModerationViolation": "Thong bao vi pham kiem duyet",
          "contentModerationDisabled": "Tai khoan bi vo hieu hoa do kiem duyet",
          "opsAlert": "Canh bao van hanh",
          "opsScheduledReport": "Bao cao van hanh dinh ky"
        },
        "eventDescriptions": {
          "authVerifyCode": "Gui trong cac luong dang ky, lien ket email, email cho OAuth dang cho bo sung va xac minh TOTP.",
          "authPasswordReset": "Gui khi nguoi dung yeu cau lien ket dat lai mat khau.",
          "notificationEmailVerifyCode": "Gui khi nguoi dung xac minh mot dia chi email thong bao bo sung.",
          "subscriptionPurchaseSuccess": "Gui sau khi don mua goi dang ky da duoc hoan tat.",
          "subscriptionExpiryReminder": "Thong bao tuy chon duoc gui truoc khi goi dang ky con hieu luc sap het han.",
          "balanceLow": "Thong bao tuy chon duoc gui khi so du xuong duoi nguong da cau hinh.",
          "balanceRechargeSuccess": "Gui sau khi don nap so du da duoc hoan tat.",
          "accountQuotaAlert": "Gui den cac email thong bao cua quan tri vien khi han muc tai khoan upstream vuot nguong.",
          "contentModerationViolation": "Gui cho nguoi dung khi yeu cau kich hoat quy tac kiem duyet noi dung hoac kiem soat rui ro.",
          "contentModerationDisabled": "Gui cho nguoi dung khi kiem duyet noi dung tu dong vo hieu hoa tai khoan.",
          "opsAlert": "Gui den nguoi nhan van hanh da cau hinh khi quy tac canh bao van hanh kich hoat.",
          "opsScheduledReport": "Gui bao cao hang ngay, hang tuan, loi hoac suc khoe tai khoan theo lich cho nguoi nhan van hanh da cau hinh."
        }
      },
      "payment": {
        "alipayForceQRCode": "Buộc Alipay dùng mã QR",
        "alipayForceQRCodeHint": "Khi bật, người dùng Alipay trên di động sẽ luôn thấy mã QR thay vì bị chuyển sang trang thanh toán di động",
        "providerEasypay": "EasyPay",
        "providerAirwallex": "Airwallex",
        "providerUsdt": "USDT (Crypto)",
        "field_tradeType": "On-chain Trade Type",
        "field_clientId": "Client ID",
        "field_apiKey": "API Key",
        "field_countryCode": "Country/region code",
        "field_currency": "Payment currency",
        "field_accountId": "Airwallex Account ID",
        "field_airwallexApiBaseHint": "Must match the API key environment: use https://api-demo.airwallex.com/api/v1 for sandbox/demo keys, and https://api.airwallex.com/api/v1 for production keys. Mixed environments return credentials_invalid / Access Denied.",
        "field_paymentCurrencyHint": "Default is CNY. Stripe and Airwallex can choose HKD, USD, or another listed currency supported by the account; WeChat Pay, Alipay, and EasyPay remain CNY.",
        "field_accountIdHint": "Leave this empty unless you use multiple accounts, an organization-level key, or connected-account payments. A single-account scoped API key uses the selected account by default.",
        "stripeWebhookApiVersionHint": "Set this Webhook endpoint API version to match the integrated Stripe SDK. Recommended: {version}. A mismatch can cause webhook parsing errors.",
        "airwallexWebhookHint": "Configure the following URL as a Webhook endpoint in Airwallex. Select at least Payment Intent -> Succeeded (payment_intent.succeeded), preferably also Payment Intent -> Cancelled (payment_intent.cancelled). Use the account default or latest stable API version.",
        "airwallexGuideSummary": "When creating an Airwallex scoped API key, select Read and Write for Payment Acceptance under account-level permissions.",
        "airwallexGuideNote": "Do not grant unrelated permissions such as Spend, Payouts, Transfers, Funds Splits, or POS Terminals unless you explicitly need them. For webhooks, select at least payment_intent.succeeded, preferably also payment_intent.cancelled, and use the account default or latest stable API version."
      },
      "dingtalk": {
        "defaultDisplayNameAttrName": "Tên DingTalk",
        "defaultCorpEmailAttrName": "Email doanh nghiệp DingTalk",
        "defaultDeptAttrName": "Phòng ban DingTalk",
        "title": "DingTalk Login",
        "description": "Configure DingTalk OAuth for Sub2API end-user login",
        "enable": "Enable DingTalk Login (Internal Corporate App)",
        "enableHint": "Show DingTalk login on the login/register pages",
        "clientId": "Client ID (AppKey)",
        "clientIdPlaceholder": "e.g., dingxxxxxxxxxxxxxxxx",
        "clientIdHint": "Get this from the DingTalk Open Platform app details",
        "clientSecret": "Client Secret (AppSecret)",
        "clientSecretPlaceholder": "********",
        "clientSecretHint": "Used by backend to exchange tokens (keep it secret)",
        "clientSecretConfiguredPlaceholder": "********",
        "clientSecretConfiguredHint": "Secret configured. Leave empty to keep the current value.",
        "redirectUrl": "Redirect URL",
        "redirectUrlPlaceholder": "https://your-domain.com/api/v1/auth/oauth/dingtalk/callback",
        "redirectUrlHint": "Must match the redirect URL configured in DingTalk Open Platform (must be an absolute http(s) URL)",
        "corpPolicy": {
          "label": "Corp Restriction Policy",
          "hint": "Control which DingTalk accounts (orgs) are allowed to sign in",
          "none": "No restriction (all DingTalk accounts allowed)",
          "internalOnly": "Internal only (single corp)"
        },
        "bypassRegistration": "Enable DingTalk signup",
        "bypassRegistrationHint": "Allow new users to register via DingTalk even when public registration is disabled.",
        "syncDisplayName": "Sync DingTalk display name",
        "syncDisplayNameHint": "Overwrite username with the DingTalk staff name on each login (also stored in the dingtalk_name attribute).",
        "syncCorpEmail": "Sync corporate email",
        "syncCorpEmailHint": "Write the DingTalk corporate email to the dingtalk_email attribute on each login (does not change the login email).",
        "syncCorpEmailPermissionHint": "Requires the OAPI permission \"Personal info incl. email (fieldEmail)\" to be granted to the app on the DingTalk open platform, otherwise OAPI will not return the email field.",
        "syncDept": "Sync department",
        "syncDeptHint": "Write the full DingTalk department path to the dingtalk_department attribute on each login (fetched live each time).",
        "syncDeptPermissionHint": "Requires the OAPI \"Department info read (qyapi_get_department_list)\" permission to be granted to the app on the DingTalk open platform, otherwise the department path cannot be resolved.",
        "syncDisplayNameTarget": "Attribute key",
        "syncDisplayNameTargetHint": "Defaults to dingtalk_name / DingTalk Name. Saving settings auto-creates the user attribute by the key and display name above (existing definition only has its display name synced).",
        "syncCorpEmailTarget": "Attribute key",
        "syncCorpEmailTargetHint": "Defaults to dingtalk_email / DingTalk Corporate Email. Saving settings auto-creates the user attribute by the key and display name above (existing definition only has its display name synced).",
        "syncDeptTarget": "Attribute key",
        "syncDeptTargetHint": "Defaults to dingtalk_department / DingTalk Department. Saving settings auto-creates the user attribute by the key and display name above (existing definition only has its display name synced).",
        "syncAttrDisplayName": "Display name"
      },
      "authSourceDefaults": {
        "sources": {
          "dingtalk": {
            "title": "Đăng nhập DingTalk",
            "description": "Quyền mặc định cho đăng ký qua DingTalk."
          }
        },
        "platformQuotasOverride": "Platform Quota Overrides",
        "platformQuotasOverrideHint": "Blank fields inherit the system default. Set to 0 to fully block that window for this auth source."
      },
      "tabs": {
        "agreement": "Agreement",
        "email": "Email"
      },
      "features": {
        "riskControl": {
          "title": "Risk Control",
          "description": "Enable the content moderation menu and gateway audit entry point. Disabled by default.",
          "configureLink": "Configure content moderation in Risk Control",
          "enabled": "Enable Risk Control",
          "enabledHint": "When off, the admin sidebar entry is hidden and gateway moderation is skipped.",
          "cyberSessionBlock": "Cyber session auto-block",
          "cyberSessionBlockHint": "When enabled, sessions hit by upstream cyber_policy are blocked locally for the TTL and no longer forwarded. Only the offending session is blocked; other sessions on the same key are unaffected.",
          "cyberSessionBlockTTL": "Block TTL (seconds)"
        },
        "affiliate": {
          "customUsers": {
            "col": {
              "email": "Email"
            }
          }
        }
      },
      "registration": {
        "frontendUrlPlaceholder": "https://example.com"
      },
      "apiKeyAcl": {
        "title": "API Key IP Access Control",
        "description": "Choose which client IP is used by API Key allowlists and denylists",
        "trustForwardedIp": "Trust forwarded client IP",
        "trustForwardedIpHint": "Disabled by default. Enable only when the origin is reachable only through Cloudflare or Nginx reverse proxy. When enabled, API Key IP allowlists and denylists use CF-Connecting-IP, X-Real-IP, or X-Forwarded-For, matching the request IP shown in usage records."
      },
      "linuxdo": {
        "clientSecretPlaceholder": "********",
        "clientSecretConfiguredPlaceholder": "********",
        "redirectUrlPlaceholder": "https://your-domain.com/api/v1/auth/oauth/linuxdo/callback"
      },
      "oidc": {
        "clientSecretPlaceholder": "********",
        "clientSecretConfiguredPlaceholder": "********",
        "issuerUrlPlaceholder": "https://id.example.com/realms/main",
        "redirectUrlPlaceholder": "https://your-domain.com/api/v1/auth/oauth/oidc/callback",
        "frontendRedirectUrlPlaceholder": "/auth/oidc/callback",
        "allowedSigningAlgsPlaceholder": "RS256,ES256,PS256"
      },
      "defaults": {
        "defaultPlatformQuotas": "Default Platform Quotas (on signup)",
        "defaultPlatformQuotasHint": "Automatically assigned to new users on signup; existing users are not affected. Leave blank = unlimited.",
        "platformQuotaNotice": "Monthly quota uses a 30-day rolling window, not a calendar month."
      },
      "platformQuota": {
        "platform": "Platform",
        "daily": "Daily (USD)",
        "weekly": "Weekly (USD)",
        "monthly": "Monthly (USD, 30d rolling)",
        "placeholder": "Unlimited"
      },
      "gatewayForwarding": {
        "claudeOAuthSystemPromptInjection": "Claude OAuth System Blocks",
        "claudeOAuthSystemPromptInjectionHint": "Inject Claude Code-like system blocks for Claude OAuth requests from non-Claude-Code clients. Enabled by default.",
        "claudeOAuthSystemPrompt": "Claude OAuth Expansion Prompt",
        "claudeOAuthSystemPromptPlaceholder": "Leave empty to use the built-in Claude Code expansion prompt.",
        "claudeOAuthSystemPromptHint": "Legacy compatibility: controls only the third injected system block.",
        "claudeOAuthSystemPromptBlocks": "Claude OAuth System Blocks",
        "claudeOAuthSystemPromptBlocksPlaceholder": "Leave empty to use the built-in 3 blocks. Supports an array or {\"blocks\": [...]}.",
        "claudeOAuthSystemPromptBlocksHint": "Each block is saved as JSON with enabled, type, text, and optional cache_control. {billing_header} stays dynamic per request; the Claude Code identity and expansion prompts can be edited directly or restored from presets.",
        "systemBlockTitle": "System Block {index}",
        "systemBlockPreset": "Preset",
        "systemBlockPresetBilling": "Billing header",
        "systemBlockPresetIdentity": "Claude Code identity",
        "systemBlockPresetExpansion": "Claude Code expansion",
        "systemBlockPresetCustom": "Custom",
        "systemBlockType": "Type",
        "systemBlockTypeText": "Text",
        "systemBlockText": "Content",
        "systemBlockCacheControl": "Cache control",
        "systemBlockHide": "Hide block details",
        "systemBlockShow": "Show block details",
        "addSystemBlock": "Add block",
        "resetSystemBlocks": "Reset defaults",
        "cacheTTL5m": "5 minutes",
        "cacheTTL1h": "1 hour",
        "rewriteMessageCacheControl": "Rewrite Message Cache Breakpoints",
        "rewriteMessageCacheControlHint": "Default off: preserve client cache_control on message content blocks. When enabled, client breakpoints are stripped and proxy breakpoints are injected for clients that do not manage caching themselves.",
        "antigravityUserAgentVersion": "Antigravity UA Version",
        "antigravityUserAgentVersionPlaceholder": "1.23.2",
        "antigravityUserAgentVersionHint": "Leave empty to use ANTIGRAVITY_USER_AGENT_VERSION or the built-in default 1.23.2; when set, the admin setting takes precedence.",
        "openaiCodexUserAgent": "OpenAI Codex UA",
        "openaiCodexUserAgentPlaceholder": "codex-tui/0.125.0 (Ubuntu 22.4.0; x86_64) xterm-256color (codex-tui; 0.125.0)",
        "openaiCodexUserAgentHint": "Used to bypass Cloudflare browser-UA challenges on the OpenAI upstream. Only applies when the client User-Agent is detected as a browser (Mozilla/...). Leave empty to use the built-in default.",
        "codexHardeningTitle": "Codex Settings",
        "codexClientRestrictionTitle": "Codex client restriction",
        "codexHardeningDesc": "Only affects OpenAI OAuth accounts with 'Codex official clients only' enabled (global). Beyond User-Agent/Originator, harden the decision with a version range, an engine-fingerprint gate, and black/whitelists.",
        "minCodexVersion": "Min Codex Version",
        "minCodexVersionPlaceholder": "e.g. 0.142.0",
        "maxCodexVersion": "Max Codex Version",
        "maxCodexVersionPlaceholder": "e.g. 0.200.0",
        "codexVersionHint": "Official clients only: checks their version against the [min, max] range. Leave a side empty to not limit it.",
        "codexFingerprintSignals": "Codex engine fingerprint signals",
        "codexFingerprintSignalsDesc": "Define engine-fingerprint signals: every Required signal must match (AND); within a row, '/'-separated variants are OR'd. None checked = not enforced. Default checks only the x-codex- prefix. Types: header exact / header prefix / body path.",
        "codexFpTypeHeaderExact": "Header exact",
        "codexFpTypeHeaderPrefix": "Header prefix",
        "codexFpTypeBodyPath": "Body path",
        "codexFpMatchPlaceholder": "match; '/'-separate variants (e.g. session-id / session_id or x-codex-)",
        "codexFpRequired": "Required",
        "codexFingerprintNoRequiredWarn": "No signal is marked Required — the engine-fingerprint gate is inactive, allowing every candidate that passes identity/version. Check at least one signal to enable it.",
        "codexAllowAppServer": "Codex app-server",
        "codexAllowAppServerDesc": "Allow third-party clients that embed the Codex engine and connect over the app-server protocol (e.g. Claude Code's codex plugin). Off by default; when on, such clients are allowed once they pass the engine-fingerprint gate (the signal list below); off = only official clients and the whitelist are allowed.",
        "codexBlacklist": "User-Agent/Originator Blacklist",
        "codexBlacklistDesc": "Deny if any field matches; takes precedence over any allow. originator is exact; User-Agent is a 'contains' match (comma-separated).",
        "codexWhitelist": "User-Agent/Originator Whitelist",
        "codexWhitelistDesc": "Allow clients outside the official set: requires exact originator and every User-Agent marker present. Still subject to the fingerprint gate unless 'Skip engine fingerprint' is checked.",
        "codexWhitelistSkipFingerprint": "Skip engine fingerprint",
        "codexWhitelistSkipFingerprintTooltip": "Risk: when checked this entry is allowed on originator + User-Agent alone (both forgeable), with no engine-fingerprint backstop. Use only for trusted third-party clients that genuinely do not send a codex engine fingerprint.",
        "codexOriginatorPlaceholder": "originator (exact, e.g. opencode)",
        "codexUaContainsPlaceholder": "User-Agent contains markers, comma-separated (e.g. opencode/)",
        "codexAddRow": "Add entry",
        "codexRemoveRow": "Remove"
      },
      "site": {
        "siteNamePlaceholder": "Sub2API",
        "apiBaseUrlPlaceholder": "https://api.example.com",
        "tablePageSizeOptionsPlaceholder": "10, 20, 50, 100",
        "customEndpoints": {
          "endpointUrlPlaceholder": "https://api2.example.com"
        },
        "docUrlPlaceholder": "https://docs.example.com"
      },
      "purchase": {
        "urlPlaceholder": "https://example.com/purchase"
      },
      "customMenu": {
        "urlPlaceholder": "https://example.com/page",
        "iconSvgPlaceholder": "<svg>...</svg>"
      },
      "balanceNotify": {
        "rechargeUrlPlaceholder": "https://example.com/payment"
      },
      "subscriptionExpiryNotify": {
        "title": "Subscription Expiry Reminder",
        "description": "Control whether users receive subscription expiry reminder emails.",
        "enabled": "Enable Subscription Expiry Reminder",
        "enabledHint": "When enabled, the system sends reminders 7, 3, and 1 day before expiry."
      },
      "emailProvider": {
        "title": "Email Provider",
        "description": "Choose how system emails are delivered.",
        "smtp": "SMTP",
        "smtpDescription": "Use an SMTP server.",
        "resend": "Resend",
        "resendDescription": "Send email through the Resend HTTP API.",
        "cloudflare": "Cloudflare",
        "cloudflareDescription": "Send email through Cloudflare Email Sending."
      },
      "smtp": {
        "hostPlaceholder": "smtp.gmail.com",
        "portPlaceholder": "587",
        "passwordPlaceholder": "********",
        "passwordConfiguredPlaceholder": "********",
        "fromEmailPlaceholder": "noreply{'@'}example.com",
        "fromNamePlaceholder": "Sub2API"
      },
      "resend": {
        "title": "Resend Email API",
        "description": "Configure Resend for email delivery without SMTP.",
        "apiKey": "API Key",
        "apiKeyPlaceholder": "Enter Resend API key",
        "apiKeyHint": "Create an API key in Resend and keep it secret.",
        "apiKeyConfiguredPlaceholder": "********",
        "apiKeyConfiguredHint": "API key configured. Leave empty to keep the current value.",
        "apiBaseUrl": "API Base URL",
        "apiBaseUrlPlaceholder": "https://api.resend.com",
        "apiBaseUrlHint": "Use the default official endpoint unless you proxy Resend.",
        "fromEmail": "From Email",
        "fromEmailPlaceholder": "noreply{'@'}example.com",
        "fromName": "From Name",
        "fromNamePlaceholder": "Sub2API"
      },
      "cloudflareEmail": {
        "title": "Cloudflare Email Sending",
        "description": "Configure Cloudflare Email Sending for system email delivery.",
        "apiToken": "API Token",
        "apiTokenPlaceholder": "Enter Cloudflare API token",
        "apiTokenHint": "Use a token with Cloudflare Email Sending permission.",
        "apiTokenConfiguredPlaceholder": "********",
        "apiTokenConfiguredHint": "API token configured. Leave empty to keep the current value.",
        "accountId": "Account ID",
        "accountIdPlaceholder": "Enter Cloudflare account ID",
        "fromEmail": "From Email",
        "fromEmailPlaceholder": "noreply{'@'}example.com",
        "fromName": "From Name",
        "fromNamePlaceholder": "Sub2API"
      },
      "cloudmail": {
        "title": "Cloud-Mail",
        "description": "Configure self-hosted Cloud-Mail service for system email delivery.",
        "apiUrl": "Cloud-Mail API URL",
        "apiUrlPlaceholder": "https://mail.example.com",
        "apiUrlHint": "Enter the full base URL of your Cloud-Mail instance.",
        "adminEmail": "Admin Email",
        "adminEmailPlaceholder": "admin@example.com",
        "adminPassword": "Admin Password",
        "adminPasswordPlaceholder": "Enter Cloud-Mail admin password",
        "adminPasswordHint": "Uses Cloud-Mail admin credentials for API authentication.",
        "adminPasswordConfiguredPlaceholder": "********",
        "adminPasswordConfiguredHint": "Admin password configured. Leave empty to keep the current value.",
        "fromEmail": "From Email",
        "fromEmailPlaceholder": "Select or type a sender email",
        "fromEmailHint": "Click \"Load Accounts\" to fetch available emails from Cloud-Mail, or type one manually.",
        "fromName": "From Name",
        "fromNamePlaceholder": "Sub2API",
        "loadAccounts": "Load Accounts",
        "fillCredentialsFirst": "Please fill in API URL and admin credentials first",
        "noAccounts": "No available email accounts found",
        "loadAccountsError": "Failed to load account list"
      },
      "rateLimit429Cooldown": {
        "title": "429 Default Cooldown",
        "description": "Configure the default account cooldown when upstream returns 429 without an explicit reset time",
        "enabled": "Enable 429 Default Cooldown",
        "enabledHint": "Pause account scheduling when a 429 has no reset time, then auto-recover after cooldown",
        "cooldownSeconds": "Cooldown Duration (seconds)",
        "cooldownSecondsHint": "Default cooldown duration (1-7200 seconds); explicit upstream reset times still take precedence",
        "saved": "429 default cooldown settings saved",
        "saveFailed": "Failed to save 429 default cooldown settings"
      },
      "wechatConnect": {
        "backendCallbackUrl": "Backend Callback URL",
        "frontendCallbackUrl": "Frontend Callback URL",
        "browserRedirectUrl": "Browser Redirect URL",
        "pcAppTitle": "PC App",
        "pcAppIdLabel": "PC App ID",
        "pcAppIdPlaceholder": "WeChat Open Platform PC App ID",
        "pcAppSecretLabel": "PC App Secret",
        "pcAppSecretPlaceholder": "WeChat Open Platform PC App Secret",
        "officialAccountTitle": "Official Account",
        "officialAccountAppIdLabel": "Official Account App ID",
        "officialAccountAppIdPlaceholder": "Official Account App ID",
        "officialAccountAppSecretLabel": "Official Account App Secret",
        "officialAccountAppSecretPlaceholder": "Official Account App Secret",
        "mobileAppTitle": "Mobile App",
        "mobileAppIdLabel": "Mobile App ID",
        "mobileAppIdPlaceholder": "Mobile App ID",
        "mobileAppSecretLabel": "Mobile App Secret",
        "mobileAppSecretPlaceholder": "Mobile App Secret",
        "redirectUrlPlaceholder": "https://your-site.com/api/v1/auth/oauth/wechat/callback",
        "frontendRedirectUrlPlaceholder": "/auth/wechat/callback"
      },
      "usageRecords": {
        "title": "Usage Records",
        "description": "Settings for usage and failed-request records visible to end users."
      },
      "user_error_view": {
        "label": "Allow users to view their own error requests",
        "description": "When enabled, users can see a redacted view of their failed requests on the usage page (no internal/upstream details). Requires ops monitoring enabled to have data."
      },
      "openaiFastPolicy": {
        "actionForcePriority": "Buộc priority (fast)",
        "userIds": "Người dùng cụ thể",
        "userIdsHint": "Nhập một phần email người dùng để tìm kiếm. Để trống để áp dụng cho tất cả người dùng Sub2API. Yêu cầu từ khóa API của người dùng được chọn được ưu tiên hơn quy tắc toàn cục.",
        "userSearchPlaceholder": "Tìm kiếm theo email người dùng",
        "userSearchEmpty": "Không tìm thấy người dùng phù hợp",
        "userDeleted": "(đã xóa)",
        "userIdFallback": "Người dùng #{id}",
        "removeUser": "Xóa người dùng"
      }
    },
    "accounts": {
      "emailFilter": "Lọc theo email...",
      "moreActions": "More Actions",
      "dataActions": "Data",
      "toolActions": "Tools",
      "viewColumns": "Columns",
      "selectedCount": "{count} selected",
      "dataImportWarning": "Import will create new accounts/proxies. Target groups are optional; leaving them empty keeps imported accounts unbound.",
      "dataImportTargetGroups": "Import Target Groups",
      "dataImportGroupInactive": "Inactive",
      "dataImportTargetGroupMixedPlatforms": "Select import target groups from one platform only",
      "dataImportAccountPlatformMismatch": "Imported account platforms do not match the selected groups. Expected platform: {expected_platform}; mismatched accounts: {mismatch_count}. Examples: {examples}",
      "oauthType": "OAuth",
      "platforms": {
        "claude": "Claude",
        "openai": "OpenAI"
      },
      "types": {
        "oauth": "OAuth",
        "googleOauth": "Google OAuth",
        "grokOauth": "Grok OAuth"
      },
      "antigravityProjectIdLabel": "GCP Project ID (optional)",
      "antigravityProjectIdPlaceholder": "your-gcp-project-id",
      "antigravityProjectIdHint": "Antigravity standard-tier accounts that do not receive an automatic project_id need a user-owned GCP project.",
      "columns": {
        "id": "Account ID",
        "createdAt": "Created"
      },
      "usageWindowsHint": "\"5h / 7d\" are the upstream account's official rolling usage windows (e.g. OpenAI ChatGPT, Claude). They are imposed by the upstream provider on the account itself — not configured by sub2api, and unrelated to the models you map. Usage resets automatically once each window rolls over, and the limit cannot be lifted from within sub2api.",
      "bulkActions": {
        "probeUsageSuccess": "Successfully probed usage windows for {count} account(s)",
        "probeUsagePartial": "Usage probing partially completed: {success} succeeded, {failed} failed",
        "probeUsageFailed": "Failed to probe usage windows"
      },
      "bulkEdit": {
        "baseUrlPlaceholder": "https://api.anthropic.com or https://api.openai.com",
        "submit": "Update Accounts"
      },
      "fallbackActive": "Fallback",
      "fallbackActiveTip": "Origin proxy {origin} expired",
      "revertProxy": "Revert proxy",
      "revertProxySuccess": "Successfully reverted to original proxy",
      "revertProxyFailed": "Failed to revert proxy",
      "vertexProjectIdLabel": "Project ID",
      "vertexLocationLabel": "Location",
      "vertexClientEmailLabel": "Client Email",
      "apiKeyPlaceholder": "sk-ant-api03-...",
      "openai": {
        "responsesMode": "Responses API support",
        "responsesModeDesc": "Only applies to the OpenAI API Key text forwarding path. Auto follows probe results; force modes override probing.",
        "responsesModeAuto": "Auto",
        "responsesModeForceResponses": "Force Responses",
        "responsesModeForceChatCompletions": "Force Chat Completions",
        "responsesModeTextDisabledHint": "Not applicable when the Responses / Chat Completions endpoint is not enabled.",
        "endpointCapabilities": "Endpoint capabilities",
        "endpointCapabilitiesDesc": "Used by account routing. The text endpoint follows the Responses API support setting above and is shown as Responses, Chat Completions, or auto mode; Embeddings independently controls /v1/embeddings.",
        "capabilityResponses": "Responses",
        "capabilityTextAuto": "Responses / Chat Completions (Auto)",
        "capabilityResponsesAuto": "Responses (auto probe)",
        "capabilityChatCompletions": "Chat Completions",
        "capabilityChatCompletionsAuto": "Chat Completions (auto probe)",
        "capabilityEmbeddings": "Embeddings",
        "responsesStatusAutoSupported": "Auto probe: Responses",
        "responsesStatusAutoUnsupported": "Auto probe: Chat Completions",
        "responsesStatusAutoUnknown": "Auto probe: unknown",
        "responsesStatusForcedResponses": "Forced Responses",
        "responsesStatusForcedChatCompletions": "Forced Chat Completions",
        "codexCLIOnlyAppServer": "Allow Codex app-server clients",
        "codexCLIOnlyAppServerDesc": "Effective only when the switch above is on. When enabled, this account also allows third-party clients that embed the Codex engine over the app-server protocol (e.g. Claude Code's codex plugin); they still pass the global engine-fingerprint gate. OR-combined with the global app-server toggle.",
        "codexImageGenerationBridge": "Codex image-generation bridge",
        "codexImageGenerationBridgeDesc": "Account policy takes precedence over channel and global settings. Only controls whether Codex requests through the /responses text endpoint receive the image_generation tool; standalone image-generation endpoints are unaffected.",
        "codexImageGenerationBridgeInherit": "Follow channel",
        "codexImageGenerationBridgeInheritDesc": "Do not write an account override; use the channel or global policy.",
        "codexImageGenerationBridgeEnabled": "Force on",
        "codexImageGenerationBridgeEnabledDesc": "Allow image tool injection for Codex /responses requests.",
        "codexImageGenerationBridgeDisabled": "Force off",
        "codexImageGenerationBridgeDisabledDesc": "Block image tool injection for Codex /responses requests.",
        "codexImageGenerationBridgeBadgeInherit": "Channel policy",
        "codexImageGenerationBridgeBadgeEnabled": "Account on",
        "codexImageGenerationBridgeBadgeDisabled": "Account off",
        "compactAuto": "Compact Auto"
      },
      "grok": {
        "baseUrlHint": "Grok OAuth accounts forward to the official xAI API base URL.",
        "apiKeyHint": "Grok subscription support uses OAuth refresh tokens; API keys are out of scope for this account type."
      },
      "syncUpstreamModels": "Sync upstream supported models",
      "syncUpstreamModelsLoading": "Syncing upstream...",
      "syncUpstreamModelsSuccess": "Synced {count} new model(s) from upstream ({total} upstream total)",
      "syncUpstreamModelsNoChanges": "All {count} upstream model(s) are already in the whitelist",
      "syncUpstreamModelsEmpty": "Upstream returned no models to sync",
      "syncUpstreamModelsFailed": "Failed to sync upstream models",
      "syncUpstreamModelsError": "Failed to sync upstream models: {message}",
      "autoPause5hThreshold": "5h Usage Threshold (%)",
      "autoPause7dThreshold": "7d Usage Threshold (%)",
      "autoPauseThresholdHint": "Leave empty or set 0 to use the global default threshold (configured in Ops settings); set a value to override the global default. Reaching the threshold only skips the account during scheduling and does not modify schedulable.",
      "autoPause5hDisabled": "Disable 5h auto-pause",
      "autoPause7dDisabled": "Disable 7d auto-pause",
      "autoPauseDisabledHint": "When enabled, this account is never auto-paused (even if a global default threshold is configured).",
      "quotaControl": {
        "windowCost": {
          "limitPlaceholder": "50",
          "stickyReservePlaceholder": "10"
        },
        "sessionLimit": {
          "maxSessionsPlaceholder": "3",
          "idleTimeoutPlaceholder": "5"
        },
        "rpmLimit": {
          "baseRpmPlaceholder": "15"
        }
      },
      "oauth": {
        "sessionKeyPlaceholderSingle": "sk-ant-sid01-xxxxx...",
        "openai": {
          "codexSessionAuth": "Codex JSON / AT Batch Input",
          "codexSessionDesc": "Paste Codex JSON/accessToken, or select one or more JSON files. Accounts use the step 1 settings and existing accounts are updated by default.",
          "codexSessionInputLabel": "Codex JSON / accessToken / JSON files",
          "codexSessionSelectFiles": "Select JSON files",
          "codexSessionFilesCount": "{count} files",
          "codexSessionPlaceholder": "Multiple lines supported, one token or JSON per line; you can also select one or more .json files above",
          "codexSessionHint": "Supports single/multiple JSON files, JSON arrays, and multi-line AT input. Existing accounts are detected by account identity, email, refresh_token/access_token fingerprint and updated by default. sessionToken is not saved as refresh_token.",
          "codexSessionImportAndCreate": "Import & Add/Update Account",
          "codexSessionEmpty": "Please enter Codex JSON or accessToken",
          "codexSessionImportFailed": "Failed to import Codex account",
          "codexSessionImportSuccess": "Import completed: created {created}, updated {updated}, skipped {skipped}",
          "codexSessionImportPartial": "Partial success: created {created}, updated {updated}, skipped {skipped}, failed {failed}",
          "codexPatAuth": "Codex Personal Access Token",
          "codexPatDesc": "Enter a Codex at- personal access token. The system validates it with OpenAI whoami before creating the account.",
          "codexPatInputLabel": "Codex PAT",
          "codexPatPlaceholder": "at-...",
          "codexPatHint": "This is a separate auth mode. It does not save refresh_token or write an OAuth access_token expiration.",
          "codexPatImportAndCreate": "Validate & Create Codex PAT Account",
          "codexPatEmpty": "Please enter a Codex personal access token",
          "codexPatImportFailed": "Failed to create Codex PAT account"
        },
        "grok": {
          "title": "Grok Account Authorization",
          "followSteps": "Follow these steps to authorize your xAI/Grok account:",
          "step1GenerateUrl": "Generate the xAI authorization URL",
          "generateAuthUrl": "Generate Auth URL",
          "step2OpenUrl": "Open the URL in your browser and complete authorization",
          "openUrlDesc": "Open the authorization URL in a new tab, sign in to xAI, and authorize API access.",
          "importantNotice": "When the browser reaches the local callback URL, copy the full URL or the code query parameter back here.",
          "step3EnterCode": "Enter Authorization URL or Code",
          "authCodeDesc": "After authorization, paste the callback URL, query string, or authorization code:",
          "authCode": "Authorization URL or Code",
          "authCodePlaceholder": "Paste the full callback URL, ?code=... query string, or code value",
          "authCodeHint": "Full callback URLs, query strings, and bare codes are accepted.",
          "refreshTokenAuth": "Manual RT Input",
          "refreshTokenDesc": "Enter existing xAI refresh token(s). Supports batch input, one per line.",
          "refreshTokenPlaceholder": "Paste your xAI refresh token...\nSupports multiple, one per line",
          "validating": "Validating...",
          "validateAndCreate": "Validate & Create Account",
          "pleaseEnterRefreshToken": "Please enter Refresh Token",
          "failedToGenerateUrl": "Failed to generate Grok auth URL",
          "missingExchangeParams": "Missing authorization code, state, or OAuth session",
          "failedToExchangeCode": "Failed to exchange Grok authorization code",
          "failedToValidateRT": "Failed to validate Grok refresh token",
          "oauthOnlyHint": "Initial Grok support is OAuth subscription-backed Responses API text and reasoning traffic only."
        }
      },
      "gemini": {
        "tier": {
          "googleOne": {
            "pro": "Google One Pro",
            "ultra": "Google One Ultra"
          }
        },
        "oauthType": {
          "googleOneDesc": "Personal account with Google One subscription quota.",
          "recommendedPersonal": "Recommended for personal users",
          "noGcpRequired": "No GCP required",
          "codeAssistTitle": "GCP Code Assist",
          "codeAssistDesc": "For enterprises, requires a GCP project.",
          "codeAssistRequirement": "You need to activate a GCP project and attach a credit card.",
          "enterpriseUsers": "Enterprise users",
          "highConcurrency": "High concurrency",
          "advancedHide": "Hide advanced options (custom OAuth client)",
          "advancedShow": "Show advanced options (custom OAuth client)"
        },
        "quotaPolicy": {
          "rows": {
            "aiStudio": {
              "limitsFree": "RPD 50; RPM 2 (Pro) / 15 (Flash)"
            }
          }
        }
      },
      "grokAccount": "Grok Account",
      "usageWindow": {
        "gemini3Pro": "G3P",
        "gemini3Flash": "G3F",
        "gemini3Image": "G31FI",
        "claude": "Claude",
        "grokRequests": "Req",
        "grokTokens": "Tok",
        "grokUnknown": "Grok quota is unknown until the first upstream response includes xAI rate-limit headers.",
        "grokRetryAfter": "Retry after {time}",
        "grokProbe": "Probe",
        "grokProbeTooltip": "Send a minimal xAI Responses probe and read quota headers",
        "grokResetUnsupported": "Reset unsupported",
        "grokResetUnsupportedTooltip": "xAI does not expose reset credits for Grok OAuth accounts",
        "grokNoHeaders": "No quota headers observed",
        "grokLastStatus": "Status {status}",
        "grokLastProbe": "Probe {time}",
        "grokLastHeadersSeen": "Headers {time}"
      },
      "openaiQuotaReset": {
        "count": "Credits",
        "reset": "Reset",
        "countTooltipLoad": "Click to load the available reset-credit count",
        "countTooltipRefresh": "Click to refresh the available reset-credit count",
        "resetTooltipReady": "Consume 1 reset credit to immediately restore the window",
        "resetTooltipNeedQuery": "Click Credits first to load the available count",
        "resetTooltipNoCredits": "No reset credits available",
        "noCreditsAvailable": "No reset credits available",
        "resetSuccess": "Reset {windows} window(s)",
        "confirmTitle": "Confirm Weekly Limit Reset",
        "confirmMessage": "This will consume 1 reset credit to immediately restore the current window ({count} remaining). This action cannot be undone. Continue?"
      }
    },
    "riskControl": {
      "tabs": {
        "keywords": "Chặn từ khóa",
        "riskThresholds": "Risk Thresholds"
      },
      "blockedKeywords": "Từ khóa chặn",
      "blockedKeywordsPlaceholder": "Một từ khóa mỗi dòng\nVí dụ:\ntukhoa1\ntukhoa2",
      "blockedKeywordsDescription": "Khớp không phân biệt chữ hoa chữ thường. Có gọi API kiểm duyệt upstream sau khi khớp hay không sẽ phụ thuộc vào chiến lược bên dưới.",
      "blockedKeywordsPreBlockHint": "Chặn từ khóa chỉ có hiệu lực ở chế độ \"Chặn trước\".",
      "blockedKeywordsModeWarning": "Chế độ hiện tại là \"{mode}\". Tính năng chặn từ khóa sẽ không chạy cho đến khi bạn chuyển sang \"Chặn trước\".",
      "blockedKeywordCount": "Đã cấu hình {count} từ khóa",
      "blockedKeywordsLimit": "Lưu tối đa {max} từ khóa, mỗi từ khóa không quá 200 ký tự. Các mục trùng lặp sẽ tự động được loại bỏ.",
      "keywordBlockingMode": "Chiến lược kiểm duyệt",
      "keywordModeKeywordAndApi": "Từ khóa + API",
      "keywordModeKeywordAndApiDesc": "Chặn ngay khi trúng từ khóa; nếu không trúng thì chuyển sang API kiểm duyệt upstream.",
      "keywordModeKeywordOnly": "Chỉ từ khóa",
      "keywordModeKeywordOnlyDesc": "Chỉ dùng từ khóa để quyết định; nếu không khớp thì cho qua mà không gọi API, giúp giảm chi phí upstream.",
      "keywordModeKeywordOnlyNotice": "Chiến lược \"Chỉ từ khóa\": các yêu cầu không khớp từ khóa nào sẽ được cho qua mà không gọi API kiểm duyệt upstream.",
      "keywordModeApiOnly": "Chỉ API",
      "keywordModeApiOnlyDesc": "Chỉ dùng API kiểm duyệt upstream; danh sách từ khóa cấu hình tại đây sẽ không được tham chiếu.",
      "keywordModeApiOnlyNotice": "Chiến lược \"Chỉ API\": danh sách từ khóa sẽ không được dùng; mọi yêu cầu đều được gửi đến API kiểm duyệt upstream.",
      "action": {
        "keywordBlock": "Chặn bởi từ khóa",
        "cyberPolicy": "Cyber policy"
      },
      "baseUrl": "OpenAI Base URL",
      "apiKey": "OpenAI API Key",
      "apiKeys": "OpenAI API Keys",
      "apiKeyLatency": "{ms} ms",
      "apiKeyHTTPStatus": "HTTP {status}",
      "cyberPolicyExcludeBan": "Exclude Cyber Policy Hits from Ban Count",
      "cyberPolicyExcludeBanHint": "When enabled, cyber_policy hits no longer count toward auto-ban violations: no ban judgment on the hit itself, and history rows are excluded from the rolling count. Logs and notice emails are unaffected.",
      "violationNotCounted": "Not counted",
      "modelFilter": "Model scope",
      "modelFilterHint": "Moderate by the client-requested model name; channel model mappings do not change this match.",
      "modelFilterAll": "All models",
      "modelFilterAllDesc": "All model requests go through content moderation.",
      "modelFilterInclude": "Only selected",
      "modelFilterIncludeDesc": "Only listed models go through content moderation.",
      "modelFilterExclude": "Exclude selected",
      "modelFilterExcludeDesc": "Listed models skip content moderation; other models are moderated.",
      "modelFilterModels": "Model list",
      "modelFilterModelCount": "{count} models configured",
      "modelFilterModelsRequired": "This model scope requires at least 1 model",
      "modelFilterAllSummary": "Applies to all models",
      "modelFilterIncludeSummary": "Applies to {count} models",
      "modelFilterExcludeSummary": "Excludes {count} models",
      "preBlockSyncStatus": "Pre-Block Sync Status",
      "preBlockSyncHint": "Live counters for the synchronous moderation path, excluding async record tasks.",
      "preBlockActive": "Sync Processing",
      "preBlockActiveHint": "Currently checking",
      "preBlockChecked": "Checked",
      "preBlockCheckedHint": "Entered pre-block path",
      "preBlockAllowed": "Allowed",
      "preBlockAllowedHint": "No block triggered",
      "preBlockBlocked": "Blocked",
      "preBlockBlockedHint": "Rejected after hit",
      "preBlockErrors": "Audit Errors",
      "preBlockErrorsHint": "Failed or no usable key",
      "preBlockAvgLatency": "Avg Latency",
      "preBlockAvgLatencyHint": "Synchronous path average",
      "preBlockAPIKeyLoad": "Audit Key Load",
      "preBlockAPIKeyLoadHint": "Synchronous pre-block checks round-robin usable audit keys directly.",
      "preBlockAPIKeyLoadSummary": "Sync active {active} / usable keys {available}, {total} total, worker: {workerActive} / {workerTotal}",
      "preBlockAPIKeyTotals": "Total {total}, success {success}, errors {errors}",
      "preBlockAPIKeyLoadEmpty": "No audit key load data yet",
      "preBlockKeyActiveShort": "Active",
      "preBlockKeyTotalShort": "Total",
      "preBlockKeyAvgShort": "Avg",
      "preBlockKeyLastShort": "Last",
      "riskThresholds": "Risk Thresholds",
      "riskThresholdsHint": "Adjust hit thresholds by OpenAI Moderations category. Scores greater than or equal to the threshold count as hits.",
      "riskThresholdDefault": "Default {value}",
      "riskThresholdReset": "Restore defaults",
      "riskThresholdPercent": "Threshold percentage",
      "overview": {
        "apiKey": "API Key"
      },
      "table": {
        "apiKey": "API Key",
        "endpoint": "Endpoint"
      }
    },
    "channelMonitor": {
      "form": {
        "apiMode": "Giao thức OpenAI",
        "apiModeChatCompletions": "OpenAI Compatible",
        "apiModeChatCompletionsHint": "Dùng /v1/chat/completions với messages; phù hợp với hầu hết nhà cung cấp tương thích.",
        "apiModeResponses": "Responses API",
        "apiModeResponsesHint": "Dùng /v1/responses với instructions + input mặc định; phù hợp cho tự kiểm tra và luồng Codex.",
        "endpointPlaceholder": "https://api.example.com",
        "primaryModelPlaceholder": "gpt-4o-mini",
        "jitterSeconds": "Random Jitter (± seconds)",
        "jitterSecondsHint": "Each check fires at interval ± a random offset within this value; 0 means fixed interval. Interval minus jitter must be ≥ 15s"
      }
    },
    "dashboard": {
      "tokensShort": "Tok"
    },
    "backup": {
      "s3": {
        "descriptionSuffix": ")"
      }
    },
    "dataManagement": {
      "form": {
        "postgres": {
          "title": "PostgreSQL"
        }
      }
    },
    "users": {
      "apiKeyGroupFilter": "API Key Group",
      "apiKeyGroupExclusive": "Exclusive Groups",
      "apiKeyGroupPublic": "Public Groups",
      "apiKeyGroupSubscription": "Subscription Groups",
      "apiKeyGroupDisabled": "Disabled Groups",
      "authorizedGroupFilter": "Authorized Group",
      "allAuthorizedGroups": "All Authorized Groups",
      "searchAuthorizedGroups": "Search authorized groups...",
      "allApiKeyGroups": "All API Key Groups",
      "searchApiKeyGroups": "Search API Key groups...",
      "email": "Email",
      "columns": {
        "id": "ID",
        "email": "Email",
        "balancePlatformQuota": "Balance (Platform Quota)",
        "usageAnthropic": "Usage (Claude)",
        "usageOpenAI": "Usage (OpenAI)",
        "usageGemini": "Usage (Gemini)",
        "usageAntigravity": "Usage (Antigravity)"
      },
      "sortBy": "Sort By",
      "sortCurrentPageOnly": "Sorts current page only",
      "columnAlwaysVisible": "This column is always visible",
      "platformBreakdown": "Per-platform breakdown",
      "platformBreakdownEmpty": "No platform usage yet",
      "platformBreakdownHint": "Hover for per-platform usage",
      "platformOther": "Other",
      "attributes": {
        "types": {
          "email": "Email",
          "url": "URL"
        }
      },
      "platformQuota": {
        "menuItem": "Platform Quotas",
        "title": "Platform Quotas",
        "subtitle": "Configure daily / weekly / monthly USD usage limits for each upstream platform for user {email}",
        "columns": {
          "platform": "Platform",
          "daily": "Daily (USD)",
          "weekly": "Weekly (USD)",
          "monthly": "Monthly (USD, 30-day rolling)",
          "usage": "Current Usage"
        },
        "placeholder": "unlimited",
        "save": "Save",
        "saving": "Saving...",
        "cancel": "Cancel",
        "clearAll": "Clear All (remove all limits)",
        "clearAllConfirm": "Clear daily / weekly / monthly limits for ALL platforms? All platforms will become \"unlimited\" with no local undo — you must manually re-enter values before saving.",
        "reset": {
          "button": "Reset window",
          "confirm": "Reset the {window} usage for {platform} for this user? This is effective immediately.",
          "success": "Reset {platform} {window} usage",
          "failed": "Reset failed"
        },
        "updateSuccess": "Platform quotas updated",
        "updateFailed": "Save failed",
        "loadFailed": "Load failed",
        "hint": "Empty = no limit for that window.",
        "windowDaily": "daily",
        "windowWeekly": "weekly",
        "windowMonthly": "monthly",
        "cellNotConfigured": "Not configured",
        "cellColumnTooltip": "Only platforms with a limit are shown",
        "subscriptionWarning": "This user has an active subscription. Platform quotas only apply to balance (standard) mode requests; subscription mode requests are not subject to these limits.",
        "invalidNumber": "The following fields contain invalid numbers. Please fix them before saving: {fields}"
      }
    },
    "availableChannels": {
      "pricing": {
        "unitPerMillion": "/ 1M tokens",
        "unitPerRequest": "/ request"
      }
    },
    "subscriptions": {
      "quotaEndsInMinutes": "Quota ends in {minutes}m",
      "quotaEndsInHoursMinutes": "Quota ends in {hours}h {minutes}m",
      "quotaEndsInDaysHours": "Quota ends in {days}d {hours}h"
    },
    "scheduledTests": {
      "failedToLoadPlans": "Failed to load plans",
      "failedToCreatePlan": "Failed to create plan",
      "failedToUpdatePlan": "Failed to update plan",
      "failedToDeletePlan": "Failed to delete plan",
      "failedToLoadResults": "Failed to load results"
    },
    "proxies": {
      "ad": {
        "inline": "Need proxy IP?"
      },
      "protocols": {
        "http": "HTTP",
        "https": "HTTPS",
        "socks5": "SOCKS5"
      },
      "columns": {
        "expiry": "Validity",
        "createdAt": "Created"
      },
      "form": {
        "hostPlaceholder": "proxy.example.com",
        "portPlaceholder": "8080"
      },
      "neverExpires": "Never",
      "expired": "Expired",
      "overdueDays": "Overdue {days}d",
      "expiringInDays": "Expires in {days}d",
      "remainingDays": "{days}d left",
      "expiresAt": "Validity",
      "nDays": "{days}d",
      "expiryDaysPlaceholder": "Custom days, empty = never",
      "expiryWarnDays": "Expiry warning (days)",
      "fallbackMode": "Failure fallback",
      "fallbackNone": "No fallback",
      "fallbackProxy": "Backup proxy",
      "fallbackDirect": "Direct connection",
      "backupProxy": "Backup proxy"
    },
    "announcements": {
      "operators": {
        "gt": ">",
        "gte": "≥",
        "lt": "<",
        "lte": "≤",
        "eq": "="
      }
    },
    "usage": {
      "ipAddress": "IP",
      "userDeletedBadge": "Deleted"
    },
    "ops": {
      "autoRefreshRemaining": "{seconds}s remaining",
      "db": "DB",
      "tps": "TPS:",
      "businessLimited": "business_limited:",
      "upstreamRate": "upstream_rate:",
      "ttftLabel": "TTFT (first_token_ms)",
      "tpsK": "TPS (K)",
      "openaiTokenStats": {
        "viewModeTopN": "TopN"
      },
      "systemLogs": {
        "title": "System Logs",
        "description": "Newest-first logs with filtering, search, and filtered cleanup.",
        "loadFailed": "Failed to load system logs",
        "empty": "No system logs yet",
        "cleanupConfirm": "Clean up system logs matching the current filters? This action cannot be undone.",
        "cleanupSuccess": "Cleanup completed, deleted {count} logs",
        "cleanupFailed": "Failed to clean up system logs",
        "cleanupFiltered": "Clean Matching Logs",
        "refreshHealth": "Refresh Health",
        "health": {
          "queue": "Queue {depth}/{capacity}",
          "written": "Written {count}",
          "dropped": "Dropped {count}",
          "failed": "Failed {count}"
        },
        "runtime": {
          "title": "Runtime Log Config (applies immediately)",
          "stacktraceLevel": "Stacktrace Level",
          "samplingInitial": "Sampling Initial",
          "samplingThereafter": "Sampling Thereafter",
          "retentionDays": "Retention Days",
          "caller": "Caller",
          "sampling": "Sampling",
          "saveAndApply": "Save and Apply",
          "saveSuccess": "Runtime log configuration applied",
          "saveFailed": "Failed to save log configuration",
          "reset": "Reset to Startup Defaults",
          "resetConfirm": "Revert to startup config (env/yaml) and apply immediately?",
          "resetSuccess": "Reverted to startup log configuration",
          "resetFailed": "Failed to revert log configuration",
          "lastError": "Last write error: {error}"
        },
        "filters": {
          "timeRange": "Time Range",
          "startTime": "Start Time (optional)",
          "endTime": "End Time (optional)",
          "level": "Level",
          "component": "Component",
          "componentPlaceholder": "e.g. http.access",
          "platform": "Platform",
          "model": "Model",
          "keyword": "Keyword",
          "keywordPlaceholder": "message/request_id"
        },
        "table": {
          "time": "Time",
          "level": "Level",
          "details": "Log Details"
        }
      },
      "errorLog": {
        "apiKey": "API Key",
        "keyDeletedBadge": "Key Deleted",
        "grp": "GRP:",
        "acc": "ACC:",
        "id": "ID:",
        "requestTypeWs": "WS"
      },
      "errorDetail": {
        "requestTypeWs": "WebSocket",
        "apiKeyPrefix": "Key Prefix",
        "attemptedKeyPrefix": "Attempted Key Prefix",
        "deletedKeyOwner": "Deleted Key Owner",
        "keyDeletedBadge": "Key Deleted"
      },
      "requestDetails": {
        "kind": {
          "success": "SUCCESS",
          "error": "ERROR"
        }
      },
      "alertEvents": {
        "status": {
          "firing": "FIRING",
          "resolved": "RESOLVED"
        }
      },
      "alertRules": {
        "metrics": {
          "accountTempUnscheduledCount": "Temporarily Unschedulable Accounts"
        },
        "metricDescriptions": {
          "accountTempUnscheduledCount": "Number of accounts currently temporarily unschedulable (e.g. proxy/credential failure auto-eviction)."
        }
      },
      "settings": {
        "openaiQuotaAutoPause": "OpenAI Account Quota Auto-pause",
        "openaiQuotaAutoPauseHint": "When an OpenAI account reaches its 5h / 7d usage threshold, the scheduler skips it automatically and resumes once the window rolls over. Per-account thresholds take precedence over this global default.",
        "openaiQuotaAutoPauseDefault5h": "Default 5h usage threshold (%)",
        "openaiQuotaAutoPauseDefault7d": "Default 7d usage threshold (%)",
        "openaiQuotaAutoPauseThresholdHint": "Value 0-100; leave blank or 0 to disable the global default threshold.",
        "validation": {
          "openaiQuotaAutoPauseRange": "OpenAI quota auto-pause threshold must be between 0 and 100"
        }
      },
      "queryMode": {
        "preagg": "Preagg"
      },
      "customTimeRange": {
        "startTime": "Thời gian bắt đầu",
        "endTime": "Thời gian kết thúc"
      }
    },
    "errorPassthrough": {
      "form": {
        "errorCodesPlaceholder": "422, 400, 429"
      }
    },
    "tlsFingerprintProfiles": {
      "columns": {
        "grease": "GREASE",
        "alpn": "ALPN"
      }
    }
  },
  "home": {
    "providers": {
      "claude": "Claude"
    }
  },
  "layout": {
    "siteSubtitle": "Subscription to API Conversion Platform",
    "copyright": "All rights reserved."
  },
  "setup": {
    "admin": {
      "email": "Email"
    }
  },
  "common": {
    "email": "Email",
    "upload": "Upload",
    "remove": "Remove",
    "fileTooLarge": "File too large ({size} KB), max {max} KB",
    "invalidImageFile": "Please select an image file",
    "fileReadFailed": "Failed to read file",
    "logoAlt": "Logo",
    "closeModal": "Close modal",
    "closeNotification": "Close notification",
    "toggleMenu": "Toggle menu",
    "userMenu": "User menu",
    "selectOptionAria": "Select option",
    "paginationNav": "Pagination",
    "clearUserFilter": "Clear user filter",
    "clearApiKeyFilter": "Clear API key filter",
    "clearAccountFilter": "Clear account filter",
    "copyUrl": "Copy URL",
    "refreshToken": "Refresh Token",
    "probeUsage": "Probe Usage",
    "projectId": "Project ID",
    "location": "Location",
    "tableOfContents": "Table of contents",
    "notAvailable": "N/A",
    "time": {
      "countdown": {
        "daysHours": "{d}d {h}h"
      }
    }
  },
  "adminCompliance": {
    "title": "Deployment and Operation Compliance Acknowledgment",
    "blockingNotice": "Deployment and operation compliance acknowledgment is required before continuing to use the console.",
    "riskNotice": "This acknowledgment provides clear, conspicuous, and reproducible notice of compliance obligations and operation risks for self-hosted instances.",
    "version": "Document Version",
    "openDocument": "Open the GitHub document",
    "documentSource": "The agreement text comes from Markdown files in this project repository. When the agreement content changes, the document version must be incremented; acknowledgments of older versions become invalid and console users must acknowledge again.",
    "inputLabel": "Type the following confirmation phrase exactly",
    "inputPlaceholder": "Type the confirmation phrase to continue",
    "inputMismatch": "The confirmation phrase does not match. Type the displayed text exactly.",
    "legalNote": "This acknowledgment defines the no-affiliation relationship and responsibility boundary between self-hosted instances and the open-source project, copyright holders, contributors, and maintainers. The party that deploys, operates, or controls the relevant instance remains independently responsible for its applicable obligations.",
    "logout": "Log out",
    "accept": "Acknowledge and Continue",
    "accepted": "Compliance acknowledgment recorded",
    "acceptFailed": "Failed to submit acknowledgment"
  },
  "legal": {
    "loadFailed": "Failed to load document",
    "retryLater": "Refresh the page and try again later.",
    "notFound": "Document not found",
    "notFoundDescription": "This legal document does not exist or has been removed by an administrator.",
    "updatedAt": "Updated: {date}",
    "empty": "No content",
    "loginAgreement": "Login Agreement",
    "adminCompliance": "Deployment and Operation Compliance Commitment"
  },
  "nav": {
    "github": "GitHub"
  },
  "modelsPage": {
    "modes": {
      "chat": "Chat",
      "embedding": "Embedding"
    }
  },
  "dashboard": {
    "platformBreakdown": "Per-platform Breakdown",
    "platformBreakdownEmpty": "No platform usage yet",
    "platformCount": "{count} platforms",
    "platformOther": "Other",
    "platformQuota": {
      "title": "Quota Usage",
      "daily": "Daily",
      "weekly": "Weekly",
      "monthly": "Monthly (30-day rolling)",
      "resetsAt": "Resets {time}",
      "noLimit": "unlimited",
      "disabled": "Disabled"
    }
  },
  "keys": {
    "useKeyModal": {
      "cliTabs": {
        "codexCli": "Codex CLI",
        "codexCliWs": "Codex CLI (WebSocket)"
      },
      "opencode": {
        "subtitle": "opencode.json"
      }
    },
    "ipWhitelistPlaceholder": "192.168.1.100\n10.0.0.0/8",
    "ipBlacklistPlaceholder": "1.2.3.4\n5.6.0.0/16"
  },
  "monitorCommon": {
    "status": {
      "unknown": "-"
    },
    "providers": {
      "openai": "OpenAI"
    },
    "latencyEmpty": "-",
    "past": "PAST",
    "now": "NOW"
  },
  "channelStatus": {
    "overall": {
      "operational": "OPERATIONAL",
      "degraded": "DEGRADED",
      "unavailable": "UNAVAILABLE"
    }
  },
  "availableChannels": {
    "pricing": {
      "unitPerMillion": "/ 1M tokens",
      "unitPerRequest": "/ request"
    }
  },
  "affiliate": {
    "invitees": {
      "columns": {
        "email": "Email"
      }
    }
  },
  "profile": {
    "email": "Email",
    "authBindings": {
      "providers": {
        "email": "Email",
        "linuxdo": "LinuxDo",
        "dingtalk": "DingTalk",
        "oidc": "{providerName}",
        "wechat": "WeChat"
      }
    }
  },
  "errors": {
    "pageNotFoundDescription": "The page you are looking for does not exist or has been moved.",
    "needHelp": "Need help?"
  },
  "userSubscriptions": {
    "quotaEndsIn": "Quota ends in {time}"
  },
  "payment": {
    "methods": {
      "easypay": "EasyPay",
      "alipay": "Alipay",
      "airwallex": "Airwallex",
      "usdt": "USDT"
    },
    "usdtRateLine": "Live rate 1 USDT ≈ {cny} CNY · pay ~{usdt} USDT",
    "usdtRateLineNoAmount": "Live rate 1 USDT ≈ {cny} CNY",
    "usdtRateNote": "USDT rate refreshes every minute. Final amount shown on the checkout page is authoritative.",
    "airwallexLoadFailed": "Failed to load Airwallex payment component. Please refresh and try again.",
    "airwallexMissingParams": "Missing Airwallex payment parameters",
    "airwallexPay": "Airwallex Payment",
    "admin": {
      "daySuffix": "d",
      "daily": "D",
      "weekly": "W",
      "monthly": "M"
    }
  }
}
