import { mergeLocaleMessages } from './mergeLocaleMessages'

const messages = {
  common: {
    logoAlt: '로고',
    closeModal: '모달 닫기',
    closeNotification: '알림 닫기',
    toggleMenu: '메뉴 전환',
    userMenu: '사용자 메뉴',
    selectOptionAria: '옵션 선택',
    paginationNav: '페이지네이션',
    clearUserFilter: '사용자 필터 지우기',
    clearApiKeyFilter: 'API 키 필터 지우기',
    clearAccountFilter: '계정 필터 지우기',
    copyUrl: 'URL 복사',
    refreshToken: 'Refresh Token',
    projectId: '프로젝트 ID',
    location: '리전',
    tableOfContents: '목차'
  },
  layout: {
    siteSubtitle: '구독을 API로 전환하는 플랫폼',
    copyright: '모든 권리 보유.'
  },
  customPage: {
    tableOfContents: '목차'
  },
  admin: {
    settings: {
      wechatConnect: {
        emailOAuthTitle: '이메일 OAuth 로그인',
        emailOAuthDescription: 'GitHub 또는 Google 이메일 OAuth를 활성화하면 시스템이 인증된 이메일을 읽어 기존 사용자는 로그인하고 없는 사용자는 자동 가입합니다.',
        githubOAuthHint: 'GitHub OAuth 앱에는 read:user, user:email 권한이 필요합니다. 아래 백엔드 콜백 URL을 사용하세요.',
        githubOAuthGuide: '설정 가이드: GitHub Settings → Developer settings → OAuth Apps → New OAuth App. Homepage URL에는 사이트 origin을, Authorization callback URL에는 아래 백엔드 콜백 URL을 입력하세요.',
        googleOAuthHint: 'Google OAuth 클라이언트에는 openid email profile 범위와 credentials에 등록된 백엔드 콜백 URL이 필요합니다.',
        googleOAuthGuide: '설정 가이드: Google Cloud Console → APIs & Services → OAuth consent screen, 그 다음 Credentials → Create Credentials → OAuth client ID에서 Web application을 선택하고 아래 URL을 Authorized redirect URIs에 추가하세요.',
        secretConfiguredKeepHint: '시크릿이 이미 설정되어 있습니다. 현재 값을 유지하려면 비워 두세요.',
        backendCallbackUrl: '백엔드 콜백 URL',
        frontendCallbackUrl: '프론트엔드 콜백 URL',
        browserRedirectUrl: '브라우저 콜백 URL',
        browserRedirectUrlHint: 'PC 앱과 공식 계정의 브라우저 콜백에 사용됩니다. 네이티브 모바일 SDK 흐름은 이 브라우저 콜백에서 직접 시작하지 않습니다.',
        pcAppTitle: 'PC 앱',
        pcAppHint: '데스크톱 브라우저는 WeChat Open Platform QR 로그인으로 로그인합니다. 공식 계정 또는 모바일 앱과 함께 사용할 수 있습니다.',
        pcAppIdLabel: 'PC 앱 ID',
        pcAppIdPlaceholder: 'WeChat Open Platform PC 앱 ID',
        pcAppSecretLabel: 'PC 앱 Secret',
        pcAppSecretPlaceholder: 'WeChat Open Platform PC 앱 Secret',
        officialAccountTitle: '공식 계정',
        officialAccountHint: 'WeChat 브라우저 내부에서만 사용 가능하며, WeChat 외부에서는 사용할 수 없음으로 표시됩니다.',
        officialAccountAppIdLabel: '공식 계정 앱 ID',
        officialAccountAppIdPlaceholder: '공식 계정 앱 ID',
        officialAccountAppSecretLabel: '공식 계정 앱 Secret',
        officialAccountAppSecretPlaceholder: '공식 계정 앱 Secret',
        mobileAppTitle: '모바일 앱',
        mobileAppHint: '네이티브 모바일 클라이언트는 WeChat SDK를 통해 인증을 시작합니다. 웹 UI는 이 흐름을 직접 시작하지 않습니다.',
        mobileAppIdLabel: '모바일 앱 ID',
        mobileAppIdPlaceholder: '모바일 앱 ID',
        mobileAppSecretLabel: '모바일 앱 Secret',
        mobileAppSecretPlaceholder: '모바일 앱 Secret',
        unionIdHint: 'PC 앱을 공식 계정 또는 모바일 앱과 함께 활성화할 경우, UnionID가 안정적으로 계정을 통합할 수 있도록 동일한 WeChat Open Platform 계정에 속해야 합니다.',
        mobileOfficialConflict: '공식 계정과 모바일 앱은 동시에 활성화할 수 없습니다.'
      },
      authSourceDefaults: {
        sources: {
          github: {
            title: 'GitHub 로그인',
            description: 'GitHub에서 인증된 이메일로 처음 가입하거나 처음 연동할 때 적용됩니다.'
          },
          google: {
            title: 'Google 로그인',
            description: 'Google에서 인증된 이메일로 처음 가입하거나 처음 연동할 때 적용됩니다.'
          }
        }
      }
    },
    accounts: {
      vertexProjectIdLabel: '프로젝트 ID',
      vertexLocationLabel: '리전',
      emailFilter: '이메일로 필터링...',
      vertexClientEmailLabel: '클라이언트 이메일',
      gemini: {
        oauthType: {
          googleOneDesc: 'Google One 구독 쿼터를 사용하는 개인 계정입니다.',
          recommendedPersonal: '개인 사용자 권장',
          noGcpRequired: 'GCP 불필요',
          codeAssistTitle: 'GCP Code Assist',
          codeAssistDesc: '기업용이며 GCP 프로젝트가 필요합니다.',
          codeAssistRequirement: 'GCP 프로젝트를 활성화하고 신용카드를 연결해야 합니다.',
          enterpriseUsers: '기업 사용자',
          highConcurrency: '고동시성',
          advancedHide: '고급 옵션 숨기기(커스텀 OAuth 클라이언트)',
          advancedShow: '고급 옵션 표시(커스텀 OAuth 클라이언트)'
        }
      }
    }
  }
}

const recentI18nPatch = {
  "keyUsage": {
    "dateRange90d": "90일",
    "dailyDetail": "일별 상세",
    "date": "날짜",
    "cacheWriteTokens": "캐시 쓰기",
    "noDailyUsage": "일별 사용량 데이터가 없습니다"
  },
  "usage": {
    "cacheTotal": "캐시",
    "cacheBreakdown": "캐시 토큰 상세",
    "cacheCreationTokensLabel": "캐시 생성",
    "cacheReadTokensLabel": "캐시 읽기",
    "resetNow": "Now",
    "resetPending": "Pending refresh",
    "ws": "WS",
    "cyber": "Cyber",
    "cacheHit": "Cache hit",
    "cacheCreate": "Cache create",
    "cacheHitRate": "Cache hit rate",
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
      "wechatNativeAppRequired": "이 사이트에는 WeChat 모바일 앱 로그인만 설정되어 있습니다. 네이티브 앱에서 WeChat SDK를 통해 계속하세요."
    },
    "dingtalkProviderName": "DingTalk",
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
    "dingtalkCallbackPageTitle": "DingTalk Sign-In Callback"
  },
  "customPage": {
    "copyCode": "복사",
    "copiedCode": "복사됨 ✓"
  },
  "admin": {
    "redeem": {
      "batchUpdate": "일괄 수정",
      "batchUpdateTitle": "교환 코드 일괄 수정",
      "selectedCount": "교환 코드 {count}개 선택됨",
      "clearSelection": "선택 해제",
      "selectCodesFirst": "먼저 교환 코드를 선택하세요",
      "noBatchFieldsSelected": "수정할 필드를 하나 이상 선택하세요",
      "batchUpdateSuccess": "교환 코드 {count}개를 수정했습니다",
      "failedToBatchUpdate": "교환 코드 일괄 수정에 실패했습니다",
      "batchFields": {
        "status": "상태",
        "expiresAt": "만료 시간",
        "notes": "메모",
        "group": "그룹"
      },
      "batchNotesPlaceholder": "새 메모를 입력하세요. 비워 두면 메모를 지웁니다",
      "clearGroup": "그룹 비우기",
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
      "rateMultiplierBadge": "{rate}x 요율",
      "copyAccounts": {
        "groupOptionLabel": "{name} ({count}개 계정)"
      },
      "platforms": {
        "grok": "Grok"
      },
      "failedToSave": "그룹 저장 실패",
      "videoPricing": {
        "title": "비디오 생성 가격 책정",
        "description": "Grok 비디오 생성의 초당 USD 가격을 설정합니다. 비워두면 기본 요금(grok-imagine-video: 480p $0.05/초, 720p $0.07/초; video-1.5: 480p $0.08/초, 720p $0.14/초, 1080p $0.25/초)이 적용됩니다.",
        "independentMultiplier": "독립 비디오 배율 사용",
        "videoMultiplier": "비디오 배율",
        "modeHint": "비디오는 초당 과금: 초당 가격 × 길이(1~15초, 기본 8초). 기본적으로 현재 그룹 유효 배율이 적용됩니다. 독립 모드는 비디오 배율을 사용합니다.",
        "finalPricePreview": "최종 초당 가격 미리보기",
        "notConfigured": "설정되지 않음"
      },
      "webSearchPricing": {
        "title": "Codex 웹 검색 가격 책정",
        "pricePerCall": "검색 호출당 가격 (USD)",
        "pricePerCallHint": "비워두면 기본 $0.01/호출(공식 가격: 1,000회당 $10)이 적용됩니다. 0은 무료를 의미합니다. 그룹 배율이 추가로 적용됩니다.",
        "finalPricePreview": "현재 배율 적용 후 호출당 가격: {price}"
      }
    },
    "channels": {
      "noGroupsSelected": "{platform} 플랫폼에 선택된 그룹이 없습니다. 하나 이상의 그룹을 선택하거나 이 플랫폼을 비활성화하세요.",
      "emptyModelsInPricing": "{platform} 플랫폼에 모델이 없는 가격 항목이 있습니다. 모델을 추가하거나 해당 항목을 삭제하세요.",
      "form": {
        "minTokens": "Min",
        "maxTokens": "Max",
        "inclusive": "(포함)",
        "syncLatestModels": "최신 모델 동기화",
        "syncingModels": "동기화 중...",
        "syncModelsSuccess": "새 모델 {count}개를 동기화했습니다",
        "syncModelsAlreadyUpToDate": "모델 목록이 이미 최신입니다",
        "syncModelsError": "모델 동기화에 실패했습니다",
        "bedrockCCCompat": "Bedrock CC Compatibility",
        "bedrockCCCompatHint": "⚠️ When enabled, requests to Bedrock accounts in this channel will be transformed for Claude Code compatibility (thinking type conversion, tool_use ID sanitization)."
      },
      "validation": {
        "minTokensNegative": "구간 #{index}: 최소 토큰 수({min})는 음수일 수 없습니다",
        "maxTokensPositive": "구간 #{index}: 최대 토큰 수({max})는 0보다 커야 합니다",
        "maxTokensGreaterThanMin": "구간 #{index}: 최대 토큰 수({max})는 최소 토큰 수({min})보다 커야 합니다",
        "priceNegative": "구간 #{index}: {name}은(는) 음수일 수 없습니다",
        "unlimitedLast": "구간 #{index}: 상한 없는 구간(최대 토큰 수 비움)은 마지막에만 둘 수 있습니다",
        "overlap": "구간 #{prevIndex}와 #{currentIndex}가 겹칩니다: 이전 상한({prevMax})이 현재 하한({currentMin})보다 큽니다",
        "priceFields": {
          "input": "입력 가격",
          "output": "출력 가격",
          "cacheWrite": "캐시 쓰기 가격",
          "cacheRead": "캐시 읽기 가격",
          "perRequest": "요청당 가격"
        }
      }
    },
    "settings": {
      "emailTemplates": {
        "title": "이메일 템플릿",
        "description": "이벤트와 언어별로 알림 이메일의 제목과 HTML 내용을 사용자화합니다.",
        "event": "이벤트",
        "locale": "언어",
        "localeEn": "영어",
        "localeZh": "중국어",
        "subject": "제목",
        "subjectPlaceholder": "이메일 제목을 입력하세요",
        "html": "HTML 템플릿",
        "htmlPlaceholder": "이메일 HTML 템플릿을 편집하세요",
        "placeholders": "사용 가능한 플레이스홀더",
        "placeholdersHelp": "플레이스홀더를 클릭하면 복사됩니다. 이메일 전송 시 백엔드가 이 값을 치환합니다.",
        "livePreview": "실시간 미리보기",
        "previewSecurityHint": "미리보기 HTML 은 백엔드 미리보기 엔드포인트에서 생성되며, 스크립트가 비활성화된 sandbox iframe 에 표시됩니다.",
        "preview": "미리보기 / 새로고침",
        "previewing": "미리보기 중...",
        "save": "템플릿 저장",
        "saving": "저장 중...",
        "restoreOfficial": "공식 템플릿 복원",
        "restoring": "복원 중...",
        "restoreConfirm": "이 이벤트와 언어의 공식 템플릿으로 복원하시겠습니까? 현재 사용자 정의 버전은 대체됩니다.",
        "restoreSuccess": "공식 템플릿을 복원했습니다",
        "saveSuccess": "이메일 템플릿을 저장했습니다",
        "placeholderCopied": "플레이스홀더를 복사했습니다",
        "validationRequired": "제목과 HTML 템플릿은 필수입니다",
        "empty": "사용 가능한 이메일 템플릿 이벤트 또는 언어가 아직 없습니다.",
        "noPreview": "미리보기를 새로고침하면 렌더링된 이메일 제목을 확인할 수 있습니다.",
        "customized": "사용자 정의됨",
        "eventLabels": {
          "authVerifyCode": "이메일 인증 코드",
          "authPasswordReset": "비밀번호 재설정",
          "notificationEmailVerifyCode": "알림 이메일 인증 코드",
          "subscriptionPurchaseSuccess": "구독 구매 성공",
          "subscriptionExpiryReminder": "구독 만료 알림",
          "balanceLow": "잔액 부족 알림",
          "balanceRechargeSuccess": "잔액 충전 성공",
          "accountQuotaAlert": "계정 한도 알림",
          "contentModerationViolation": "리스크 제어 위반 알림",
          "contentModerationDisabled": "리스크 제어로 인한 계정 비활성화",
          "opsAlert": "운영 알림",
          "opsScheduledReport": "운영 정기 보고서"
        },
        "eventDescriptions": {
          "authVerifyCode": "회원가입, 이메일 연동, OAuth 대기 이메일, TOTP 인증 흐름에서 전송됩니다.",
          "authPasswordReset": "사용자가 비밀번호 재설정 링크를 요청할 때 전송됩니다.",
          "notificationEmailVerifyCode": "사용자가 추가 알림 이메일 주소를 인증할 때 전송됩니다.",
          "subscriptionPurchaseSuccess": "구독 구매가 완료된 뒤 전송됩니다.",
          "subscriptionExpiryReminder": "활성 구독이 만료되기 전에 전송되는 선택형 알림입니다.",
          "balanceLow": "잔액이 설정된 임계값 아래로 내려갈 때 전송되는 선택형 알림입니다.",
          "balanceRechargeSuccess": "잔액 충전 주문이 완료된 뒤 전송됩니다.",
          "accountQuotaAlert": "업스트림 계정 할당량이 임계값을 넘을 때 설정된 관리자 알림 이메일로 전송됩니다.",
          "contentModerationViolation": "요청이 콘텐츠 검열 또는 리스크 제어 규칙을 트리거할 때 사용자에게 전송됩니다.",
          "contentModerationDisabled": "콘텐츠 검열이 사용자 계정을 자동으로 비활성화할 때 사용자에게 전송됩니다.",
          "opsAlert": "운영 경보 규칙이 발동할 때 설정된 운영 수신자에게 전송됩니다.",
          "opsScheduledReport": "설정된 운영 수신자에게 일간, 주간, 오류 또는 계정 상태 보고서를 예약 발송합니다."
        }
      },
      "payment": {
        "alipayForceQRCode": "Alipay QR 코드 강제",
        "alipayForceQRCodeHint": "활성화하면 모바일 Alipay 사용자도 모바일 결제 페이지로 이동하지 않고 항상 QR 코드를 보게 됩니다",
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
        "defaultDisplayNameAttrName": "DingTalk 이름",
        "defaultCorpEmailAttrName": "DingTalk 회사 이메일",
        "defaultDeptAttrName": "DingTalk 부서",
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
            "title": "DingTalk 로그인",
            "description": "DingTalk 가입에 적용되는 기본 권한입니다."
          }
        },
        "platformQuotasOverride": "Platform Quota Overrides",
        "platformQuotasOverrideHint": "Blank fields inherit the system default. Set to 0 to fully block that window for this auth source."
      },
      "features": {
        "riskControl": {
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
        "jwksUrl": "JWKS URL",
        "redirectUrlPlaceholder": "https://your-domain.com/api/v1/auth/oauth/oidc/callback",
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
      "testEmail": {
        "recipientEmailPlaceholder": "test{'@'}example.com"
      },
      "soraS3": {
        "cdnUrl": "CDN URL"
      },
      "wechatConnect": {
        "redirectUrlPlaceholder": "https://your-site.com/api/v1/auth/oauth/wechat/callback"
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
        "actionForcePriority": "priority(fast) 강제 설정",
        "userIds": "특정 사용자",
        "userIdsHint": "사용자 이메일의 일부를 입력하여 검색합니다. 비워두면 모든 Sub2API 사용자에게 적용됩니다. 선택한 사용자의 API 키 요청이 전역 규칙보다 우선합니다.",
        "userSearchPlaceholder": "이메일로 사용자 검색",
        "userSearchEmpty": "일치하는 사용자가 없습니다",
        "userDeleted": "(삭제됨)",
        "userIdFallback": "사용자 #{id}",
        "removeUser": "사용자 제거"
      }
    },
    "riskControl": {
      "tabs": {
        "keywords": "키워드 차단",
        "riskThresholds": "Risk Thresholds"
      },
      "blockedKeywords": "차단 키워드",
      "blockedKeywordsPlaceholder": "한 줄에 하나의 키워드\n예:\n금칙어1\n금칙어2",
      "blockedKeywordsDescription": "대소문자를 구분하지 않고 매칭됩니다. 일치 후 업스트림 검열 API를 호출할지는 아래 전략에 따라 달라집니다.",
      "blockedKeywordsPreBlockHint": "키워드 차단은 \"사전 차단\" 모드에서만 동작합니다.",
      "blockedKeywordsModeWarning": "현재 모드는 \"{mode}\"입니다. \"사전 차단\"으로 전환하기 전에는 키워드 차단이 실행되지 않습니다.",
      "blockedKeywordCount": "설정된 키워드 {count}개",
      "blockedKeywordsLimit": "최대 {max}개의 키워드를 저장할 수 있으며, 각 키워드는 200자를 넘을 수 없습니다. 중복 항목은 자동으로 제거됩니다.",
      "keywordBlockingMode": "검열 전략",
      "keywordModeKeywordAndApi": "키워드 + API",
      "keywordModeKeywordAndApiDesc": "키워드가 일치하면 즉시 차단하고, 일치하지 않으면 업스트림 검열 API로 넘깁니다.",
      "keywordModeKeywordOnly": "키워드만",
      "keywordModeKeywordOnlyDesc": "키워드만으로 판단하며, 일치하지 않으면 API를 호출하지 않고 통과시켜 업스트림 비용을 절약합니다.",
      "keywordModeKeywordOnlyNotice": "\"키워드만\" 전략이 적용 중입니다. 어떤 키워드와도 일치하지 않는 요청은 업스트림 검열 API 호출 없이 통과됩니다.",
      "keywordModeApiOnly": "API만",
      "keywordModeApiOnlyDesc": "업스트림 검열 API만 사용하며, 여기서 설정한 키워드 목록은 참조하지 않습니다.",
      "keywordModeApiOnlyNotice": "\"API만\" 전략이 적용 중입니다. 키워드 목록은 사용되지 않으며 모든 요청이 업스트림 검열 API로 전달됩니다.",
      "action": {
        "keywordBlock": "키워드 차단",
        "cyberPolicy": "Cyber policy"
      },
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
      "riskThresholdPercent": "Threshold percentage"
    },
    "channelMonitor": {
      "form": {
        "apiMode": "OpenAI 프로토콜",
        "apiModeChatCompletions": "OpenAI Compatible",
        "apiModeChatCompletionsHint": "/v1/chat/completions 로 messages 를 전송합니다. 대부분의 호환 제공자에서 사용할 수 있습니다.",
        "apiModeResponses": "Responses API",
        "apiModeResponsesHint": "/v1/responses 를 사용하고 기본 instructions + input 을 함께 보냅니다. 자체 점검 / Codex 경로에 적합합니다.",
        "endpointPlaceholder": "https://api.example.com",
        "jitterSeconds": "Random Jitter (± seconds)",
        "jitterSecondsHint": "Each check fires at interval ± a random offset within this value; 0 means fixed interval. Interval minus jitter must be ≥ 15s"
      }
    },
    "backup": {
      "s3": {
        "descriptionSuffix": ")"
      },
      "r2Guide": {
        "step3": {
          "accountId": "your_account_id"
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
        "balancePlatformQuota": "Balance (Platform Quota)",
        "usageAnthropic": "Usage (Claude)",
        "usageOpenAI": "Usage (OpenAI)",
        "usageGemini": "Usage (Gemini)",
        "usageAntigravity": "Usage (Antigravity)"
      },
      "sortBy": "Sort By",
      "sortCurrentPageOnly": "Sorts current page only",
      "daysRemaining": "{days}d",
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
    "subscriptions": {
      "quotaEndsInMinutes": "Quota ends in {minutes}m",
      "quotaEndsInHoursMinutes": "Quota ends in {hours}h {minutes}m",
      "quotaEndsInDaysHours": "Quota ends in {days}d {hours}h"
    },
    "accounts": {
      "dataImportWarning": "Import will create new accounts/proxies. Target groups are optional; leaving them empty keeps imported accounts unbound.",
      "dataImportTargetGroups": "Import Target Groups",
      "dataImportGroupInactive": "Inactive",
      "dataImportTargetGroupMixedPlatforms": "Select import target groups from one platform only",
      "dataImportAccountPlatformMismatch": "Imported account platforms do not match the selected groups. Expected platform: {expected_platform}; mismatched accounts: {mismatch_count}. Examples: {examples}",
      "oauthType": "OAuth",
      "types": {
        "oauth": "OAuth",
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
      "fallbackActive": "Fallback",
      "fallbackActiveTip": "Origin proxy {origin} expired",
      "revertProxy": "Revert proxy",
      "revertProxySuccess": "Successfully reverted to original proxy",
      "revertProxyFailed": "Failed to revert proxy",
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
        "codexCLIOnlyAppServerDesc": "Effective only when the switch above is on. When enabled, this account also allows third-party clients that embed the Codex engine over the app-server protocol (e.g. Claude Code's codex plugin); they still pass the global engine-fingerprint gate. OR-combined with the global app-server toggle."
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
          "codexSessionSelectFiles": "Select JSON files",
          "codexSessionFilesCount": "{count} files",
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
          "codeAssistTitle": "GCP Code Assist"
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
    "proxies": {
      "ad": {
        "inline": "Need proxy IP?"
      },
      "protocols": {
        "http": "HTTP",
        "https": "HTTPS"
      },
      "columns": {
        "expiry": "Validity",
        "createdAt": "Created"
      },
      "form": {
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
      "db": "DB",
      "tps": "TPS:",
      "p50": "p50:",
      "p90": "p90:",
      "p95": "p95:",
      "p99": "p99:",
      "errorLog": {
        "apiKey": "API Key",
        "keyDeletedBadge": "Key Deleted",
        "grp": "GRP:",
        "acc": "ACC:",
        "requestTypeWs": "WS"
      },
      "errorDetail": {
        "apiKeyPrefix": "Key Prefix",
        "attemptedKeyPrefix": "Attempted Key Prefix",
        "deletedKeyOwner": "Deleted Key Owner",
        "keyDeletedBadge": "Key Deleted"
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
        "startTime": "시작 시간",
        "endTime": "종료 시간"
      }
    },
    "errorPassthrough": {
      "form": {
        "errorCodesPlaceholder": "422, 400, 429"
      }
    }
  },
  "common": {
    "refreshToken": "Refresh Token",
    "probeUsage": "Probe Usage"
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
    "latencyEmpty": "-"
  },
  "profile": {
    "authBindings": {
      "providers": {
        "dingtalk": "DingTalk",
        "oidc": "{providerName}"
      }
    }
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
    "airwallexPay": "Airwallex Payment"
  }
}

export default mergeLocaleMessages(messages as Record<string, any>, recentI18nPatch)
