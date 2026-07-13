import { mergeLocaleMessages } from './mergeLocaleMessages'

const messages = {
  common: {
    logoAlt: 'Логотип',
    closeModal: 'Закрыть окно',
    closeNotification: 'Закрыть уведомление',
    toggleMenu: 'Переключить меню',
    userMenu: 'Меню пользователя',
    selectOptionAria: 'Выбрать вариант',
    paginationNav: 'Пагинация',
    clearUserFilter: 'Очистить фильтр пользователя',
    clearApiKeyFilter: 'Очистить фильтр API-ключа',
    clearAccountFilter: 'Очистить фильтр аккаунта',
    copyUrl: 'Скопировать URL',
    refreshToken: 'Refresh Token',
    projectId: 'ID проекта',
    location: 'Регион',
    tableOfContents: 'Содержание'
  },
  layout: {
    siteSubtitle: 'Платформа преобразования подписок в API',
    copyright: 'Все права защищены.'
  },
  customPage: {
    tableOfContents: 'Содержание'
  },
  admin: {
    settings: {
      wechatConnect: {
        emailOAuthTitle: 'Вход по Email OAuth',
        emailOAuthDescription: 'После включения входа через GitHub или Google по e-mail система использует подтверждённый e-mail, входит в существующие аккаунты и автоматически регистрирует новые.',
        githubOAuthHint: 'Приложению GitHub OAuth нужны права read:user и user:email. Используйте указанный ниже backend callback URL.',
        githubOAuthGuide: 'Инструкция: GitHub Settings → Developer settings → OAuth Apps → New OAuth App. Укажите origin вашего сайта как Homepage URL, а backend callback URL ниже — как Authorization callback URL.',
        googleOAuthHint: 'Google OAuth client требует scope openid email profile и зарегистрированный backend callback URL в credentials.',
        googleOAuthGuide: 'Инструкция: Google Cloud Console → APIs & Services → OAuth consent screen, затем Credentials → Create Credentials → OAuth client ID, выберите Web application и добавьте URL ниже в Authorized redirect URIs.',
        secretConfiguredKeepHint: 'Секрет уже настроен. Оставьте пустым, чтобы сохранить текущее значение.',
        backendCallbackUrl: 'Backend Callback URL',
        frontendCallbackUrl: 'Frontend Callback URL',
        browserRedirectUrl: 'Browser Redirect URL',
        browserRedirectUrlHint: 'Используется для браузерных callback PC App и Official Account. Нативные мобильные SDK-потоки не стартуют напрямую с этого browser callback URL.',
        pcAppTitle: 'PC App',
        pcAppHint: 'Настольные браузеры входят через QR-авторизацию WeChat Open Platform. Можно использовать вместе с Official Account или Mobile App.',
        pcAppIdLabel: 'PC App ID',
        pcAppIdPlaceholder: 'WeChat Open Platform PC App ID',
        pcAppSecretLabel: 'PC App Secret',
        pcAppSecretPlaceholder: 'WeChat Open Platform PC App Secret',
        officialAccountTitle: 'Official Account',
        officialAccountHint: 'Доступно только внутри браузера WeChat; вне WeChat будет показано как недоступное.',
        officialAccountAppIdLabel: 'Official Account App ID',
        officialAccountAppIdPlaceholder: 'Official Account App ID',
        officialAccountAppSecretLabel: 'Official Account App Secret',
        officialAccountAppSecretPlaceholder: 'Official Account App Secret',
        mobileAppTitle: 'Mobile App',
        mobileAppHint: 'Нативные мобильные клиенты запускают авторизацию через WeChat SDK. Веб-интерфейс не запускает этот поток напрямую.',
        mobileAppIdLabel: 'Mobile App ID',
        mobileAppIdPlaceholder: 'Mobile App ID',
        mobileAppSecretLabel: 'Mobile App Secret',
        mobileAppSecretPlaceholder: 'Mobile App Secret',
        unionIdHint: 'Если PC App включена вместе с Official Account или Mobile App, они должны принадлежать одному аккаунту WeChat Open Platform, чтобы UnionID стабильно объединял идентичности.',
        mobileOfficialConflict: 'Official Account и Mobile App нельзя включать одновременно.'
      },
      authSourceDefaults: {
        sources: {
          github: {
            title: 'Вход через GitHub',
            description: 'Применяется при первой регистрации или первой привязке через подтверждённый e-mail GitHub.'
          },
          google: {
            title: 'Вход через Google',
            description: 'Применяется при первой регистрации или первой привязке через подтверждённый e-mail Google.'
          }
        }
      }
    },
    accounts: {
      vertexProjectIdLabel: 'ID проекта',
      vertexLocationLabel: 'Регион',
      emailFilter: 'Фильтр по email...',
      vertexClientEmailLabel: 'E-mail клиента',
      gemini: {
        oauthType: {
          googleOneDesc: 'Личный аккаунт с квотой подписки Google One.',
          recommendedPersonal: 'Рекомендуется для личного использования',
          noGcpRequired: 'GCP не требуется',
          codeAssistTitle: 'GCP Code Assist',
          codeAssistDesc: 'Для компаний, требуется проект GCP.',
          codeAssistRequirement: 'Нужно активировать проект GCP и привязать банковскую карту.',
          enterpriseUsers: 'Корпоративные пользователи',
          highConcurrency: 'Высокая параллельность',
          advancedHide: 'Скрыть расширенные параметры (свой OAuth Client)',
          advancedShow: 'Показать расширенные параметры (свой OAuth Client)'
        }
      }
    }
  }
}

const recentI18nPatch = {
  "keyUsage": {
    "dateRange90d": "90 дней",
    "dailyDetail": "Детализация по дням",
    "date": "Дата",
    "cacheWriteTokens": "Запись кэша",
    "noDailyUsage": "Нет данных по ежедневному использованию",
    "placeholder": "sk-ant-mirror-xxxxxxxxxxxx"
  },
  "usage": {
    "cacheTotal": "Кэш",
    "cacheBreakdown": "Разбивка токенов кэша",
    "cacheCreationTokensLabel": "Создание кэша",
    "cacheReadTokensLabel": "Чтение кэша",
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
      "wechatNativeAppRequired": "На этом сайте настроен только вход WeChat через мобильное приложение. Продолжите из нативного приложения через WeChat SDK."
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
    "copyCode": "Копировать",
    "copiedCode": "Скопировано ✓"
  },
  "admin": {
    "redeem": {
      "batchUpdate": "Массовое обновление",
      "batchUpdateTitle": "Массовое обновление кодов погашения",
      "selectedCount": "Выбрано кодов погашения: {count}",
      "clearSelection": "Очистить выбор",
      "selectCodesFirst": "Сначала выберите коды погашения",
      "noBatchFieldsSelected": "Выберите хотя бы одно поле для обновления",
      "batchUpdateSuccess": "Обновлено кодов погашения: {count}",
      "failedToBatchUpdate": "Не удалось массово обновить коды погашения",
      "batchFields": {
        "status": "Статус",
        "expiresAt": "Срок действия",
        "notes": "Примечания",
        "group": "Группа"
      },
      "batchNotesPlaceholder": "Введите новую заметку или оставьте пустым, чтобы очистить ее",
      "clearGroup": "Очистить группу",
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
      "rateMultiplierBadge": "Тариф {rate}x",
      "copyAccounts": {
        "groupOptionLabel": "{name} ({count} аккаунтов)"
      },
      "accountsUnit": "",
      "platforms": {
        "grok": "Grok"
      },
      "failedToSave": "Не удалось сохранить группу",
      "videoPricing": {
        "title": "Ценообразование генерации видео",
        "description": "Настройте цены на генерацию видео Grok в USD за секунду. Оставьте пустым для использования стандартных тарифов (grok-imagine-video: 480p $0,05/с, 720p $0,07/с; video-1.5: 480p $0,08/с, 720p $0,14/с, 1080p $0,25/с).",
        "independentMultiplier": "Использовать независимый видео множитель",
        "videoMultiplier": "Видео множитель",
        "modeHint": "Видео оплачивается посекундно: цена за секунду × длительность (1-15с, по умолчанию 8с). По умолчанию применяется текущий эффективный множитель группы; независимый режим использует видео множитель.",
        "finalPricePreview": "Предпросмотр итоговой цены за секунду",
        "notConfigured": "Не настроено"
      },
      "webSearchPricing": {
        "title": "Ценообразование Codex Web Search",
        "pricePerCall": "Цена за поисковый вызов (USD)",
        "pricePerCallHint": "Оставьте пустым для использования цены по умолчанию $0,01 за вызов (официальная цена: $10 за 1000 вызовов); 0 означает бесплатно. Множитель группы применяется дополнительно.",
        "finalPricePreview": "Цена за вызов после текущего множителя: {price}"
      }
    },
    "channels": {
      "noGroupsSelected": "Для платформы {platform} не выбраны группы. Выберите хотя бы одну группу или отключите платформу.",
      "emptyModelsInPricing": "В платформе {platform} есть правило тарификации без моделей. Добавьте модели или удалите это правило.",
      "form": {
        "minTokens": "Min",
        "maxTokens": "Max",
        "inclusive": "(вкл.)",
        "syncLatestModels": "Синхронизировать последние модели",
        "syncingModels": "Синхронизация...",
        "syncModelsSuccess": "Синхронизировано новых моделей: {count}",
        "syncModelsAlreadyUpToDate": "Список моделей уже актуален",
        "syncModelsError": "Не удалось синхронизировать модели",
        "bedrockCCCompat": "Bedrock CC Compatibility",
        "bedrockCCCompatHint": "⚠️ When enabled, requests to Bedrock accounts in this channel will be transformed for Claude Code compatibility (thinking type conversion, tool_use ID sanitization)."
      },
      "validation": {
        "minTokensNegative": "Интервал #{index}: минимальное число токенов ({min}) не может быть отрицательным",
        "maxTokensPositive": "Интервал #{index}: максимальное число токенов ({max}) должно быть больше 0",
        "maxTokensGreaterThanMin": "Интервал #{index}: максимальное число токенов ({max}) должно быть больше минимального ({min})",
        "priceNegative": "Интервал #{index}: {name} не может быть отрицательной",
        "unlimitedLast": "Интервал #{index}: интервал без верхней границы (пустой максимум токенов) должен быть последним",
        "overlap": "Интервалы #{prevIndex} и #{currentIndex} пересекаются: предыдущая верхняя граница ({prevMax}) больше текущей нижней границы ({currentMin})",
        "priceFields": {
          "input": "Цена входа",
          "output": "Цена выхода",
          "cacheWrite": "Цена записи кэша",
          "cacheRead": "Цена чтения кэша",
          "perRequest": "Цена за запрос"
        }
      }
    },
    "settings": {
      "emailTemplates": {
        "title": "Шаблоны писем",
        "description": "Настраивайте тему и HTML-содержимое уведомлений по каждому событию и языку.",
        "event": "Событие",
        "locale": "Язык",
        "localeEn": "Английский",
        "localeZh": "Китайский",
        "subject": "Тема",
        "subjectPlaceholder": "Введите тему письма",
        "html": "HTML шаблон",
        "htmlPlaceholder": "Редактируйте HTML шаблон письма",
        "placeholders": "Доступные плейсхолдеры",
        "placeholdersHelp": "Нажмите на плейсхолдер, чтобы скопировать его. При отправке письма backend заменит эти значения.",
        "livePreview": "Предпросмотр",
        "previewSecurityHint": "HTML предпросмотра генерируется backend API предпросмотра и отображается в sandbox iframe с отключенными скриптами.",
        "preview": "Предпросмотр / Обновить",
        "previewing": "Предпросмотр...",
        "save": "Сохранить шаблон",
        "saving": "Сохранение...",
        "restoreOfficial": "Восстановить официальный шаблон",
        "restoring": "Восстановление...",
        "restoreConfirm": "Восстановить официальный шаблон для этого события и языка? Текущая пользовательская версия будет заменена.",
        "restoreSuccess": "Официальный шаблон восстановлен",
        "saveSuccess": "Шаблон письма сохранен",
        "placeholderCopied": "Плейсхолдер скопирован",
        "validationRequired": "Тема и HTML шаблон обязательны",
        "empty": "Пока нет доступных событий или языков шаблонов писем.",
        "noPreview": "Обновите предпросмотр, чтобы увидеть итоговую тему письма.",
        "customized": "Изменено",
        "eventLabels": {
          "authVerifyCode": "Код подтверждения почты",
          "authPasswordReset": "Сброс пароля",
          "notificationEmailVerifyCode": "Код подтверждения почты для уведомлений",
          "subscriptionPurchaseSuccess": "Покупка подписки завершена",
          "subscriptionExpiryReminder": "Напоминание об окончании подписки",
          "balanceLow": "Оповещение о низком балансе",
          "balanceRechargeSuccess": "Пополнение баланса успешно",
          "accountQuotaAlert": "Оповещение о квоте аккаунта",
          "contentModerationViolation": "Уведомление о нарушении риск-контроля",
          "contentModerationDisabled": "Аккаунт отключен риск-контролем",
          "opsAlert": "Операционное оповещение",
          "opsScheduledReport": "Операционный отчет по расписанию"
        },
        "eventDescriptions": {
          "authVerifyCode": "Отправляется в сценариях регистрации, привязки почты, отложенного OAuth e-mail и проверки TOTP.",
          "authPasswordReset": "Отправляется, когда пользователь запрашивает ссылку для сброса пароля.",
          "notificationEmailVerifyCode": "Отправляется, когда пользователь подтверждает дополнительный адрес почты для уведомлений.",
          "subscriptionPurchaseSuccess": "Отправляется после успешного завершения покупки подписки.",
          "subscriptionExpiryReminder": "Необязательное напоминание, отправляемое перед окончанием активной подписки.",
          "balanceLow": "Необязательное оповещение, отправляемое, когда баланс опускается ниже настроенного порога.",
          "balanceRechargeSuccess": "Отправляется после успешного завершения пополнения баланса.",
          "accountQuotaAlert": "Отправляется на настроенные администраторские адреса уведомлений, когда квота upstream аккаунта пересекает порог.",
          "contentModerationViolation": "Отправляется пользователю, когда запрос срабатывает на правила модерации контента или риск-контроля.",
          "contentModerationDisabled": "Отправляется пользователю, когда модерация контента автоматически отключает его аккаунт.",
          "opsAlert": "Отправляется настроенным операционным получателям, когда срабатывает правило операционного оповещения.",
          "opsScheduledReport": "Отправляется настроенным операционным получателям для ежедневных, еженедельных, ошибочных или health-отчетов по аккаунтам."
        }
      },
      "payment": {
        "alipayForceQRCode": "Всегда показывать QR-код Alipay",
        "alipayForceQRCodeHint": "Если включено, мобильные пользователи Alipay всегда будут видеть QR-код вместо перехода на мобильную страницу оплаты",
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
        "defaultDisplayNameAttrName": "Имя DingTalk",
        "defaultCorpEmailAttrName": "Корпоративная почта DingTalk",
        "defaultDeptAttrName": "Отдел DingTalk",
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
            "title": "Вход через DingTalk",
            "description": "Права по умолчанию для регистраций через DingTalk."
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
        "redirectUrlPlaceholder": "https://your-domain.com/api/v1/auth/oauth/oidc/callback"
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
        "title": "WeChat Connect",
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
        "actionForcePriority": "Принудительно priority (fast)",
        "userIds": "Определенные пользователи",
        "userIdsHint": "Введите часть email пользователя для поиска. Оставьте пустым для применения ко всем пользователям Sub2API. Запросы от API-ключей выбранных пользователей имеют приоритет над глобальными правилами.",
        "userSearchPlaceholder": "Поиск по email пользователя",
        "userSearchEmpty": "Пользователи не найдены",
        "userDeleted": "(удален)",
        "userIdFallback": "Пользователь #{id}",
        "removeUser": "Удалить пользователя"
      }
    },
    "riskControl": {
      "tabs": {
        "keywords": "Блокировка по ключевым словам",
        "riskThresholds": "Risk Thresholds"
      },
      "blockedKeywords": "Блокируемые ключевые слова",
      "blockedKeywordsPlaceholder": "По одному слову в строке\nНапример:\nслово1\nслово2",
      "blockedKeywordsDescription": "Совпадение без учёта регистра. Будет ли вызван upstream API модерации после совпадения, зависит от стратегии ниже.",
      "blockedKeywordsPreBlockHint": "Блокировка по ключевым словам работает только в режиме «Предварительная блокировка».",
      "blockedKeywordsModeWarning": "Текущий режим — «{mode}». Блокировка по ключевым словам начнёт работать только после переключения на «Предварительную блокировку».",
      "blockedKeywordCount": "Настроено ключевых слов: {count}",
      "blockedKeywordsLimit": "Можно сохранить до {max} ключевых слов, каждое не длиннее 200 символов. Дубликаты удаляются автоматически.",
      "keywordBlockingMode": "Стратегия модерации",
      "keywordModeKeywordAndApi": "Ключевые слова + API",
      "keywordModeKeywordAndApiDesc": "Сразу блокировать при совпадении, иначе передавать запрос в upstream API модерации.",
      "keywordModeKeywordOnly": "Только ключевые слова",
      "keywordModeKeywordOnlyDesc": "Решение принимается только по ключевым словам; если совпадений нет, запрос проходит без вызова API, что снижает стоимость upstream.",
      "keywordModeKeywordOnlyNotice": "Стратегия «Только ключевые слова»: запросы без совпадений проходят без вызова upstream API модерации.",
      "keywordModeApiOnly": "Только API",
      "keywordModeApiOnlyDesc": "Используется только upstream API модерации; список ключевых слов, настроенный здесь, не учитывается.",
      "keywordModeApiOnlyNotice": "Стратегия «Только API»: список ключевых слов игнорируется; все запросы отправляются в upstream API модерации.",
      "action": {
        "keywordBlock": "Заблокировано по ключевому слову",
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
        "apiMode": "Протокол OpenAI",
        "apiModeChatCompletions": "OpenAI Compatible",
        "apiModeChatCompletionsHint": "Использует /v1/chat/completions с messages; подходит для большинства совместимых провайдеров.",
        "apiModeResponses": "Responses API",
        "apiModeResponsesHint": "Использует /v1/responses с instructions + input по умолчанию; подходит для самопроверки и путей Codex.",
        "endpointPlaceholder": "https://api.example.com",
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
      "userDeletedBadge": "Deleted"
    },
    "ops": {
      "errorLog": {
        "apiKey": "API Key",
        "keyDeletedBadge": "Key Deleted",
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
        "startTime": "Время начала",
        "endTime": "Время окончания"
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
    "probeUsage": "Probe Usage",
    "time": {
      "countdown": {
        "daysHours": "{d}d {h}h",
        "hoursMinutes": "{h}h {m}m"
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
        "linuxdo": "LinuxDo",
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
      "easypay": "EasyPay",
      "wxpay": "WeChat Pay",
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
