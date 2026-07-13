export default {
  "keyUsage": {
    "dateRange90d": "90日",
    "dailyDetail": "日次明細",
    "date": "日付",
    "cacheWriteTokens": "キャッシュ書き込み",
    "noDailyUsage": "日次使用量データがありません",
    "placeholder": "sk-ant-mirror-xxxxxxxxxxxx"
  },
  "usage": {
    "cacheTotal": "キャッシュ",
    "cacheBreakdown": "キャッシュトークン内訳",
    "cacheCreationTokensLabel": "キャッシュ作成",
    "cacheReadTokensLabel": "キャッシュ読み取り",
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
      "wechatNativeAppRequired": "このサイトでは WeChat モバイルアプリログインのみが設定されています。ネイティブアプリから WeChat SDK 経由で続行してください。"
    },
    "dingtalkProviderName": "DingTalk",
    "errors": {
      "USER_NOT_ACTIVE": "Account has been disabled."
    },
    "emailSuffixAllowedMore": "and {count} more",
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
    "oauth": {
      "invalidCallbackTitle": "Invalid sign-in callback",
      "invalidCallbackHint": "This page does not contain a valid authorization result. Return to the login page and start quick sign-in again."
    }
  },
  "customPage": {
    "copyCode": "コピー",
    "copiedCode": "コピーしました ✓",
    "tableOfContents": "Table of contents",
    "loadFailed": "Failed to load page"
  },
  "admin": {
    "redeem": {
      "batchUpdate": "一括更新",
      "batchUpdateTitle": "引き換えコードを一括更新",
      "selectedCount": "{count} 件の引き換えコードを選択中",
      "clearSelection": "選択を解除",
      "selectCodesFirst": "先に引き換えコードを選択してください",
      "noBatchFieldsSelected": "更新する項目を少なくとも 1 つ選択してください",
      "batchUpdateSuccess": "{count} 件の引き換えコードを更新しました",
      "failedToBatchUpdate": "引き換えコードの一括更新に失敗しました",
      "batchFields": {
        "status": "状態",
        "expiresAt": "有効期限",
        "notes": "備考",
        "group": "グループ"
      },
      "batchNotesPlaceholder": "新しいメモを入力してください。空欄でメモをクリアします",
      "clearGroup": "グループをクリア",
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
      "rateMultiplierBadge": "レート {rate}x",
      "copyAccounts": {
        "groupOptionLabel": "{name}（{count} アカウント）"
      },
      "accountFilter": {
        "title": "Account Filter Controls",
        "oauthOnly": "Allow OAuth accounts only",
        "oauthOnlyEnabled": "Enabled: API key accounts will be excluded",
        "privacyOnly": "Allow only accounts with privacy protection configured",
        "privacyOnlyEnabled": "Enabled: accounts without privacy settings will be excluded",
        "disabled": "Disabled"
      },
      "accountsUnit": "",
      "limitDay": "d",
      "limitWeek": "w",
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
      "failedToSave": "グループの保存に失敗しました",
      "videoPricing": {
        "title": "動画生成の料金設定",
        "description": "Grok動画生成の1秒あたりのUSD単価を設定します。空欄の場合はデフォルト料金（grok-imagine-video: 480p $0.05/秒, 720p $0.07/秒; video-1.5: 480p $0.08/秒, 720p $0.14/秒, 1080p $0.25/秒）が適用されます。",
        "independentMultiplier": "動画独立倍率を使用",
        "videoMultiplier": "動画倍率",
        "modeHint": "動画は秒単位で課金：1秒あたりの価格 × 長さ（1〜15秒、デフォルト8秒）。デフォルトでは現在のグループ有効倍率が適用されます。独立モードでは動画倍率が使用されます。",
        "finalPricePreview": "最終1秒あたりの価格プレビュー",
        "notConfigured": "未設定"
      },
      "webSearchPricing": {
        "title": "Codex Web検索の料金設定",
        "pricePerCall": "検索1回あたりの価格（USD）",
        "pricePerCallHint": "空欄の場合はデフォルトの$0.01/回（公式価格: 1000回あたり$10）が適用されます。0は無料を意味します。グループ倍率が上乗せされます。",
        "finalPricePreview": "現在の倍率適用後の1回あたりの価格: {price}"
      }
    },
    "channels": {
      "noGroupsSelected": "{platform} プラットフォームでグループが選択されていません。少なくとも 1 つのグループを選択するか、このプラットフォームを無効にしてください。",
      "emptyModelsInPricing": "{platform} プラットフォームにモデル未設定の価格項目があります。モデルを追加するか、その項目を削除してください。",
      "form": {
        "minTokens": "Min",
        "maxTokens": "Max",
        "inclusive": "（含む）",
        "syncLatestModels": "最新モデルを同期",
        "syncingModels": "同期中...",
        "syncModelsSuccess": "{count} 件の新しいモデルを同期しました",
        "syncModelsAlreadyUpToDate": "モデル一覧はすでに最新です",
        "syncModelsError": "モデルの同期に失敗しました",
        "codexImageGenerationBridge": "Codex Image Generation Bridge",
        "codexImageGenerationBridgeHint": "When enabled, Codex /responses text requests in OpenAI groups may be automatically given the image_generation tool. Keep off unless the routed accounts support image generation.",
        "bedrockCCCompat": "Bedrock CC Compatibility",
        "bedrockCCCompatHint": "⚠️ When enabled, requests to Bedrock accounts in this channel will be transformed for Claude Code compatibility (thinking type conversion, tool_use ID sanitization)."
      },
      "validation": {
        "minTokensNegative": "区間 #{index}: 最小 token 数（{min}）は負数にできません",
        "maxTokensPositive": "区間 #{index}: 最大 token 数（{max}）は 0 より大きい必要があります",
        "maxTokensGreaterThanMin": "区間 #{index}: 最大 token 数（{max}）は最小 token 数（{min}）より大きい必要があります",
        "priceNegative": "区間 #{index}: {name}は負数にできません",
        "unlimitedLast": "区間 #{index}: 上限なし区間（最大 token 数が空）は最後に配置してください",
        "overlap": "区間 #{prevIndex} と #{currentIndex} が重複しています: 前の上限（{prevMax}）が現在の下限（{currentMin}）より大きいです",
        "priceFields": {
          "input": "入力価格",
          "output": "出力価格",
          "cacheWrite": "キャッシュ書き込み価格",
          "cacheRead": "キャッシュ読み取り価格",
          "perRequest": "リクエスト単価"
        }
      }
    },
    "settings": {
      "emailTemplates": {
        "title": "メールテンプレート",
        "description": "イベントと言語ごとに通知メールの件名と HTML 内容をカスタマイズします。",
        "event": "イベント",
        "locale": "言語",
        "localeEn": "英語",
        "localeZh": "中国語",
        "subject": "件名",
        "subjectPlaceholder": "メール件名を入力",
        "html": "HTML テンプレート",
        "htmlPlaceholder": "メールの HTML テンプレートを編集",
        "placeholders": "利用可能なプレースホルダー",
        "placeholdersHelp": "プレースホルダーをクリックするとコピーできます。メール送信時にバックエンドが値を置き換えます。",
        "livePreview": "ライブプレビュー",
        "previewSecurityHint": "プレビュー HTML はバックエンドのプレビュー API で生成され、スクリプトを無効化した sandbox iframe に表示されます。",
        "preview": "プレビュー / 更新",
        "previewing": "プレビュー中...",
        "save": "テンプレートを保存",
        "saving": "保存中...",
        "restoreOfficial": "公式テンプレートに戻す",
        "restoring": "復元中...",
        "restoreConfirm": "このイベントと言語の公式テンプレートに戻しますか？現在のカスタム版は置き換えられます。",
        "restoreSuccess": "公式テンプレートを復元しました",
        "saveSuccess": "メールテンプレートを保存しました",
        "placeholderCopied": "プレースホルダーをコピーしました",
        "validationRequired": "件名と HTML テンプレートは必須です",
        "empty": "利用可能なメールテンプレートイベントまたは言語がまだありません。",
        "noPreview": "プレビューを更新すると、レンダリング後のメール件名を確認できます。",
        "customized": "カスタマイズ済み",
        "eventLabels": {
          "authVerifyCode": "メール認証コード",
          "authPasswordReset": "パスワード再設定",
          "notificationEmailVerifyCode": "通知先メール認証コード",
          "subscriptionPurchaseSuccess": "サブスクリプション購入成功",
          "subscriptionExpiryReminder": "サブスクリプション期限切れリマインダー",
          "balanceLow": "残高不足アラート",
          "balanceRechargeSuccess": "残高チャージ成功",
          "accountQuotaAlert": "アカウント上限アラート",
          "contentModerationViolation": "リスク制御違反通知",
          "contentModerationDisabled": "リスク制御によるアカウント無効化",
          "opsAlert": "運用アラート",
          "opsScheduledReport": "運用定期レポート"
        },
        "eventDescriptions": {
          "authVerifyCode": "登録、メール連携、OAuth 保留中メール、TOTP 認証の各フローで送信されます。",
          "authPasswordReset": "ユーザーがパスワード再設定リンクを要求したときに送信されます。",
          "notificationEmailVerifyCode": "ユーザーが追加の通知先メールアドレスを認証するときに送信されます。",
          "subscriptionPurchaseSuccess": "サブスクリプション購入が完了した後に送信されます。",
          "subscriptionExpiryReminder": "有効なサブスクリプションの期限が切れる前に送信される任意のリマインダーです。",
          "balanceLow": "残高が設定したしきい値を下回ったときに送信される任意の通知です。",
          "balanceRechargeSuccess": "残高チャージ注文が完了した後に送信されます。",
          "accountQuotaAlert": "上流アカウントの配分しきい値を超えたときに、設定済みの管理者通知メールへ送信されます。",
          "contentModerationViolation": "リクエストがコンテンツ審査またはリスク制御ルールに抵触したときにユーザーへ送信されます。",
          "contentModerationDisabled": "コンテンツ審査によりアカウントが自動的に無効化されたときにユーザーへ送信されます。",
          "opsAlert": "運用アラートルールが発火したときに、設定済みの運用担当受信者へ送信されます。",
          "opsScheduledReport": "日次、週次、エラー、アカウント健全性レポートを設定済みの運用担当受信者へ送信します。"
        }
      },
      "payment": {
        "alipayForceQRCode": "Alipay を常に QR コードに固定",
        "alipayForceQRCodeHint": "有効にすると、モバイル版 Alipay でも携帯向け決済ページへ遷移せず、常に QR コードを表示します",
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
        "defaultDisplayNameAttrName": "DingTalk 名",
        "defaultCorpEmailAttrName": "DingTalk 企業メール",
        "defaultDeptAttrName": "DingTalk 部門",
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
            "title": "DingTalk ログイン",
            "description": "DingTalk 登録に適用されるデフォルト権限です。"
          },
          "github": {
            "title": "GitHub signup",
            "description": "Applied on first signup or first bind through a verified GitHub email."
          },
          "google": {
            "title": "Google signup",
            "description": "Applied on first signup or first bind through a verified Google email."
          }
        },
        "platformQuotasOverride": "Platform Quota Overrides",
        "platformQuotasOverrideHint": "Blank fields inherit the system default. Set to 0 to fully block that window for this auth source."
      },
      "tabs": {
        "agreement": "Agreement"
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
        "frontendRedirectUrlPlaceholder": "/auth/oidc/callback"
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
        "passwordConfiguredPlaceholder": "********"
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
      "soraS3": {
        "cdnUrl": "CDN URL"
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
        "emailOAuthTitle": "Email OAuth Sign-in",
        "emailOAuthDescription": "After GitHub or Google email OAuth is enabled, the system reads a verified email, signs in matching users, and auto-registers missing users.",
        "githubOAuthHint": "GitHub OAuth App needs read:user user:email scopes. Use the backend callback URL below.",
        "githubOAuthGuide": "Setup guide: GitHub Settings → Developer settings → OAuth Apps → New OAuth App. Use your site origin as Homepage URL and the backend callback URL below as Authorization callback URL.",
        "googleOAuthHint": "Google OAuth client needs openid email profile scopes and the backend callback URL registered in credentials.",
        "googleOAuthGuide": "Setup guide: Google Cloud Console → APIs & Services → OAuth consent screen, then Credentials → Create Credentials → OAuth client ID, choose Web application, and add the URL below to Authorized redirect URIs.",
        "secretConfiguredKeepHint": "Secret configured. Leave empty to keep the current value.",
        "backendCallbackUrl": "Backend Callback URL",
        "frontendCallbackUrl": "Frontend Callback URL",
        "browserRedirectUrl": "Browser Redirect URL",
        "browserRedirectUrlHint": "Used by PC App and Official Account browser callbacks. Native mobile SDK flows do not start from this browser callback directly.",
        "pcAppTitle": "PC App",
        "pcAppHint": "Desktop browsers sign in through WeChat Open Platform QR login. This can coexist with Official Account or Mobile App.",
        "pcAppIdLabel": "PC App ID",
        "pcAppIdPlaceholder": "WeChat Open Platform PC App ID",
        "pcAppSecretLabel": "PC App Secret",
        "pcAppSecretPlaceholder": "WeChat Open Platform PC App Secret",
        "officialAccountTitle": "Official Account",
        "officialAccountHint": "Only available inside the WeChat browser. It is shown as unavailable outside WeChat.",
        "officialAccountAppIdLabel": "Official Account App ID",
        "officialAccountAppIdPlaceholder": "Official Account App ID",
        "officialAccountAppSecretLabel": "Official Account App Secret",
        "officialAccountAppSecretPlaceholder": "Official Account App Secret",
        "mobileAppTitle": "Mobile App",
        "mobileAppHint": "Native mobile clients start authorization through the WeChat SDK. The web UI does not launch this flow directly.",
        "mobileAppIdLabel": "Mobile App ID",
        "mobileAppIdPlaceholder": "Mobile App ID",
        "mobileAppSecretLabel": "Mobile App Secret",
        "mobileAppSecretPlaceholder": "Mobile App Secret",
        "unionIdHint": "When PC App is enabled together with Official Account or Mobile App, they should belong to the same WeChat Open Platform account so UnionID can merge identities reliably.",
        "mobileOfficialConflict": "Official Account and Mobile App cannot be enabled at the same time.",
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
        "actionForcePriority": "priority（fast）を強制",
        "userIds": "特定のユーザー",
        "userIdsHint": "ユーザーのメールアドレスの一部を入力して検索します。空欄の場合は全Sub2APIユーザーに適用されます。選択したユーザーのAPIキーリクエストがグローバルルールより優先されます。",
        "userSearchPlaceholder": "メールアドレスでユーザーを検索",
        "userSearchEmpty": "一致するユーザーが見つかりません",
        "userDeleted": "（削除済み）",
        "userIdFallback": "ユーザー #{id}",
        "removeUser": "ユーザーを削除"
      }
    },
    "accounts": {
      "emailFilter": "メールで絞り込み...",
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
        "openai": "OpenAI"
      },
      "types": {
        "oauth": "OAuth",
        "chatgptOauth": "ChatGPT OAuth",
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
        "baseUrlPlaceholder": "https://api.anthropic.com or https://api.openai.com"
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
        }
      },
      "grokAccount": "Grok Account",
      "usageWindow": {
        "gemini3Pro": "G3P",
        "gemini3Flash": "G3F",
        "gemini3Image": "G31FI",
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
        "keywords": "キーワード遮断",
        "riskThresholds": "Risk Thresholds"
      },
      "blockedKeywords": "遮断キーワード",
      "blockedKeywordsPlaceholder": "1 行に 1 つのキーワード\n例:\nngword1\nngword2",
      "blockedKeywordsDescription": "大文字と小文字を区別せずに一致します。ヒット後に上流の審査 API を呼ぶかどうかは、下の戦略で決まります。",
      "blockedKeywordsPreBlockHint": "キーワード遮断は「事前ブロック」モードでのみ有効です。",
      "blockedKeywordsModeWarning": "現在のモードは「{mode}」です。「事前ブロック」に切り替えるまでキーワード遮断は実行されません。",
      "blockedKeywordCount": "{count} 個のキーワードを設定済み",
      "blockedKeywordsLimit": "最大 {max} 個まで保存でき、各キーワードは 200 文字以内です。重複は自動で除去されます。",
      "keywordBlockingMode": "審査戦略",
      "keywordModeKeywordAndApi": "キーワード + API",
      "keywordModeKeywordAndApiDesc": "キーワードに一致したら即時ブロックし、不一致なら上流の審査 API に渡します。",
      "keywordModeKeywordOnly": "キーワードのみ",
      "keywordModeKeywordOnlyDesc": "キーワードだけで判定し、不一致のときは API を呼ばずに通過させるため、上流コストを節約できます。",
      "keywordModeKeywordOnlyNotice": "現在は「キーワードのみ」戦略です。どのキーワードにも一致しないリクエストは、上流の審査 API を呼ばずにそのまま通過します。",
      "keywordModeApiOnly": "API のみ",
      "keywordModeApiOnlyDesc": "上流の審査 API のみを使用し、ここで設定したキーワード一覧は参照しません。",
      "keywordModeApiOnlyNotice": "現在は「API のみ」戦略です。キーワード一覧は参照されず、すべてのリクエストが上流の審査 API に送られます。",
      "action": {
        "keywordBlock": "キーワード遮断",
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
        "apiKey": "API Key"
      }
    },
    "channelMonitor": {
      "form": {
        "apiMode": "OpenAI プロトコル",
        "apiModeChatCompletions": "OpenAI Compatible",
        "apiModeChatCompletionsHint": "/v1/chat/completions を使って messages を送信します。多くの互換プロバイダで利用できます。",
        "apiModeResponses": "Responses API",
        "apiModeResponsesHint": "/v1/responses を使い、デフォルトで instructions と input を付けます。自己診断や Codex 系の経路向けです。",
        "endpointPlaceholder": "https://api.example.com",
        "primaryModelPlaceholder": "gpt-4o-mini",
        "jitterSeconds": "Random Jitter (± seconds)",
        "jitterSecondsHint": "Each check fires at interval ± a random offset within this value; 0 means fixed interval. Interval minus jitter must be ≥ 15s"
      }
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
      "columns": {
        "id": "ID",
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
      "quotaEndsInDaysHours": "Quota ends in {days}d {hours}h",
      "failedToRevoke": "Failed to revoke subscription"
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
      "lastError": "last_error:",
      "tps": "TPS:",
      "ttftLabel": "TTFT (first_token_ms)",
      "p50": "p50:",
      "p90": "p90:",
      "p95": "p95:",
      "p99": "p99:",
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
      "customTimeRange": {
        "startTime": "開始時間",
        "endTime": "終了時間"
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
  "layout": {
    "siteSubtitle": "Subscription to API Conversion Platform",
    "copyright": "All rights reserved."
  },
  "common": {
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
        "daysHours": "{d}d {h}h",
        "hoursMinutes": "{h}h {m}m",
        "minutes": "{m}m"
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
    "capabilities": {
      "vision": "Vision",
      "functionCalling": "Function Calling",
      "promptCaching": "Prompt Caching",
      "serviceTier": "Service Tier",
      "tieredPricing": "Tiered Pricing"
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
  "profile": {
    "authBindings": {
      "providers": {
        "linuxdo": "LinuxDo",
        "dingtalk": "DingTalk",
        "oidc": "{providerName}"
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
  },

  "nav": {
    "batchImage": "バッチ画像",
  },
  "keys": {
    "lastUsedIP": "最後のIP",
    "useKeyModal": {
      "cliTabs": {
        "grokCli": "Grok CLI",
      },
      "grok": {
        "configTomlHint": "config.toml ファイルに追加",
        "noteWindows": "Windowsユーザーへの注意",
      },
    },
  },
  "dashboard": {
    "batchImageAgent": "バッチ画像エージェント",
    "batchImageAgentDesc": "AIで複数の画像を生成",
  },
  "admin": {
    "accounts": {
      "fromModel": "元モデル",
      "toModel": "対象モデル",
      "openai": {
        "planType": "プランタイプ",
        "planTypeClear": "クリア",
        "planTypeDesc": "OpenAIサブスクリプションプランタイプを選択",
      },
      "bulkActions": {
        "probeUsage": "使用量を調査",
      },
    },
    "dashboard": {
      "batchImage": "バッチ画像",
      "batchImageDesc": "画像を一括生成",
      "groupPricing": "グループ価格",
      "groupPricingDesc": "グループレベルの価格を構成",
    },
    "usage": {
      "billingModeVideo": "動画ごと",
      "tokenRanking": {
        "subtitle": "トークン使用量ランキング",
        "rowHint": "クリックして詳細を表示",
        "columns": {
          "user": "ユーザー",
        },
      },
    },
    "users": {
      "form": {
        "roleLabel": "役割",
      },
      "passwordCopied": "パスワードをコピーしました",
    },
  },
  "version": {
    "copyCommand": "コマンドをコピー",
    "deployDocker": "Dockerでデプロイ",
    "deployScript": "デプロイスクリプト",
    "dockerEditCompose": "docker-compose.ymlを編集",
    "dockerRecreate": "コンテナを再作成",
    "loadVersionsFailed": "バージョンの読み込みに失敗",
    "manualRollbackCommand": "手動ロールバックコマンド",
    "noRollbackVersions": "ロールバック可能なバージョンなし",
    "rollback": "ロールバック",
    "rollbackComplete": "ロールバック完了",
    "rollbackFailed": "ロールバック失敗",
    "rollbackSelectVersion": "ロールバックするバージョンを選択",
    "rollbackSourceHint": "ソース",
    "rollbackWarning": "警告：以前のバージョンに戻ります",
    "rollingBack": "ロールバック中...",
  },
}
