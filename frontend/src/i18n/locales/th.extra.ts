import { mergeLocaleMessages } from './mergeLocaleMessages'

const messages = {
  common: {
    logoAlt: 'โลโก้',
    closeModal: 'ปิดหน้าต่าง',
    closeNotification: 'ปิดการแจ้งเตือน',
    toggleMenu: 'สลับเมนู',
    userMenu: 'เมนูผู้ใช้',
    selectOptionAria: 'เลือกตัวเลือก',
    paginationNav: 'การแบ่งหน้า',
    clearUserFilter: 'ล้างตัวกรองผู้ใช้',
    clearApiKeyFilter: 'ล้างตัวกรอง API Key',
    clearAccountFilter: 'ล้างตัวกรองบัญชี',
    copyUrl: 'คัดลอก URL',
    refreshToken: 'Refresh Token',
    projectId: 'Project ID',
    location: 'Location',
    tableOfContents: 'สารบัญ'
  },
  layout: {
    siteSubtitle: 'แพลตฟอร์มแปลงการสมัครสมาชิกเป็น API',
    copyright: 'สงวนลิขสิทธิ์ทั้งหมด'
  },
  customPage: {
    tableOfContents: 'สารบัญ'
  },
  admin: {
    settings: {
      wechatConnect: {
        emailOAuthTitle: 'เข้าสู่ระบบด้วย Email OAuth',
        emailOAuthDescription: 'หลังเปิด GitHub หรือ Google Email OAuth ระบบจะอ่านอีเมลที่ยืนยันแล้ว เข้าสู่ระบบผู้ใช้เดิม และสมัครผู้ใช้ใหม่ให้อัตโนมัติ',
        githubOAuthHint: 'GitHub OAuth App ต้องใช้สิทธิ์ read:user และ user:email และให้ใช้ URL callback ฝั่ง backend ด้านล่าง',
        githubOAuthGuide: 'คู่มือการตั้งค่า: GitHub Settings → Developer settings → OAuth Apps → New OAuth App โดยใช้ origin ของเว็บไซต์เป็น Homepage URL และใช้ backend callback URL ด้านล่างเป็น Authorization callback URL',
        googleOAuthHint: 'Google OAuth client ต้องใช้ขอบเขต openid email profile และต้องลงทะเบียน backend callback URL ใน credentials',
        googleOAuthGuide: 'คู่มือการตั้งค่า: Google Cloud Console → APIs & Services → OAuth consent screen จากนั้นไปที่ Credentials → Create Credentials → OAuth client ID เลือก Web application และเพิ่ม URL ด้านล่างใน Authorized redirect URIs',
        secretConfiguredKeepHint: 'ตั้งค่า Secret แล้ว เว้นว่างไว้เพื่อคงค่าปัจจุบัน',
        backendCallbackUrl: 'Backend Callback URL',
        frontendCallbackUrl: 'Frontend Callback URL',
        browserRedirectUrl: 'Browser Redirect URL',
        browserRedirectUrlHint: 'ใช้สำหรับ callback บนเบราว์เซอร์ของ PC App และ Official Account โดย flow ของ SDK บนมือถือแบบ native จะไม่เริ่มจาก browser callback นี้โดยตรง',
        pcAppTitle: 'PC App',
        pcAppHint: 'เบราว์เซอร์เดสก์ท็อปจะเข้าสู่ระบบผ่าน QR login ของ WeChat Open Platform และสามารถใช้ร่วมกับ Official Account หรือ Mobile App ได้',
        pcAppIdLabel: 'PC App ID',
        pcAppIdPlaceholder: 'WeChat Open Platform PC App ID',
        pcAppSecretLabel: 'PC App Secret',
        pcAppSecretPlaceholder: 'WeChat Open Platform PC App Secret',
        officialAccountTitle: 'Official Account',
        officialAccountHint: 'ใช้ได้เฉพาะภายในเบราว์เซอร์ WeChat; นอก WeChat จะแสดงว่าไม่พร้อมใช้งาน',
        officialAccountAppIdLabel: 'Official Account App ID',
        officialAccountAppIdPlaceholder: 'Official Account App ID',
        officialAccountAppSecretLabel: 'Official Account App Secret',
        officialAccountAppSecretPlaceholder: 'Official Account App Secret',
        mobileAppTitle: 'Mobile App',
        mobileAppHint: 'ไคลเอนต์มือถือแบบ native จะเริ่มการยืนยันตัวตนผ่าน WeChat SDK โดยเว็บ UI จะไม่เริ่ม flow นี้โดยตรง',
        mobileAppIdLabel: 'Mobile App ID',
        mobileAppIdPlaceholder: 'Mobile App ID',
        mobileAppSecretLabel: 'Mobile App Secret',
        mobileAppSecretPlaceholder: 'Mobile App Secret',
        unionIdHint: 'หากเปิดใช้ PC App ร่วมกับ Official Account หรือ Mobile App แอปเหล่านั้นควรอยู่ภายใต้บัญชี WeChat Open Platform เดียวกัน เพื่อให้ UnionID รวมตัวตนได้อย่างเสถียร',
        mobileOfficialConflict: 'ไม่สามารถเปิด Official Account และ Mobile App พร้อมกันได้'
      },
      authSourceDefaults: {
        sources: {
          github: {
            title: 'เข้าสู่ระบบด้วย GitHub',
            description: 'ใช้เมื่อสมัครครั้งแรกหรือเชื่อมโยงครั้งแรกผ่านอีเมล GitHub ที่ยืนยันแล้ว'
          },
          google: {
            title: 'เข้าสู่ระบบด้วย Google',
            description: 'ใช้เมื่อสมัครครั้งแรกหรือเชื่อมโยงครั้งแรกผ่านอีเมล Google ที่ยืนยันแล้ว'
          }
        }
      }
    },
    accounts: {
      vertexProjectIdLabel: 'Project ID',
      vertexLocationLabel: 'Location',
      emailFilter: 'กรองตามอีเมล...',
      vertexClientEmailLabel: 'Client Email',
      gemini: {
        oauthType: {
          googleOneDesc: 'บัญชีส่วนตัวพร้อมโควตาการสมัครสมาชิก Google One',
          recommendedPersonal: 'แนะนำสำหรับผู้ใช้ส่วนตัว',
          noGcpRequired: 'ไม่ต้องใช้ GCP',
          codeAssistTitle: 'GCP Code Assist',
          codeAssistDesc: 'สำหรับองค์กร ต้องมีโปรเจกต์ GCP',
          codeAssistRequirement: 'ต้องเปิดใช้งานโปรเจกต์ GCP และผูกบัตรเครดิต',
          enterpriseUsers: 'ผู้ใช้องค์กร',
          highConcurrency: 'รองรับพร้อมกันสูง',
          advancedHide: 'ซ่อนตัวเลือกขั้นสูง (OAuth Client ที่กำหนดเอง)',
          advancedShow: 'แสดงตัวเลือกขั้นสูง (OAuth Client ที่กำหนดเอง)'
        }
      },
      fromModel: 'โมเดลต้นทาง',
      toModel: 'โมเดลปลายทาง',
      openai: {
        planType: 'ประเภทแผน',
        planTypeClear: 'ล้าง',
        planTypeDesc: 'เลือกประเภทแผน OpenAI',
      },
      bulkActions: {
        probeUsage: 'ตรวจสอบการใช้งาน',
      },
    },
    dashboard: {
      batchImage: 'ภาพชุด',
      batchImageDesc: 'สร้างภาพเป็นชุด',
      groupPricing: 'ราคากลุ่ม',
      groupPricingDesc: 'กำหนดราคาระดับกลุ่ม',
    },
    usage: {
      billingModeVideo: 'ต่อวิดีโอ',
      tokenRanking: {
        subtitle: 'จัดอันดับการใช้โทเค็น',
        rowHint: 'คลิกเพื่อดูรายละเอียด',
        columns: {
          user: 'ผู้ใช้',
        },
      },
    },
    users: {
      form: {
        roleLabel: 'บทบาท',
      },
      passwordCopied: 'คัดลอกรหัสผ่านแล้ว',
    },
  },

  "nav": {
    "batchImage": "ภาพชุด",
  },
  "keys": {
    "lastUsedIP": "IP ล่าสุด",
    "useKeyModal": {
      "cliTabs": {
        "grokCli": "Grok CLI",
      },
      "grok": {
        "configTomlHint": "เพิ่มไปยัง config.toml",
        "noteWindows": "หมายเหตุสำหรับ Windows",
      },
    },
  },
  "dashboard": {
    "batchImageAgent": "ตัวแทนภาพชุด",
    "batchImageAgentDesc": "สร้างหลายภาพด้วย AI",
  },
  "version": {
    "copyCommand": "คัดลอกคำสั่ง",
    "deployDocker": "ปรับใช้ด้วย Docker",
    "deployScript": "สคริปต์ปรับใช้",
    "dockerEditCompose": "แก้ไข docker-compose.yml",
    "dockerRecreate": "สร้างคอนเทนเนอร์ใหม่",
    "loadVersionsFailed": "โหลดเวอร์ชันล้มเหลว",
    "manualRollbackCommand": "คำสั่งย้อนกลับด้วยตนเอง",
    "noRollbackVersions": "ไม่มีเวอร์ชันให้ย้อนกลับ",
    "rollback": "ย้อนกลับ",
    "rollbackComplete": "ย้อนกลับเสร็จสิ้น",
    "rollbackFailed": "ย้อนกลับล้มเหลว",
    "rollbackSelectVersion": "เลือกเวอร์ชันที่จะย้อนกลับ",
    "rollbackSourceHint": "แหล่งที่มา",
    "rollbackWarning": "คำเตือน: จะกลับไปยังเวอร์ชันก่อนหน้า",
    "rollingBack": "กำลังย้อนกลับ...",
  },
}

const recentI18nPatch = {
  "keyUsage": {
    "dateRange90d": "90 วัน",
    "dailyDetail": "รายละเอียดรายวัน",
    "date": "วันที่",
    "cacheWriteTokens": "เขียนแคช",
    "noDailyUsage": "ยังไม่มีข้อมูลการใช้งานรายวัน"
  },
  "usage": {
    "cacheTotal": "แคช",
    "cacheBreakdown": "รายละเอียด token แคช",
    "cacheCreationTokensLabel": "สร้างแคช",
    "cacheReadTokensLabel": "อ่านแคช",
    "resetNow": "Now",
    "resetPending": "Pending refresh",
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
      "wechatNativeAppRequired": "ไซต์นี้ตั้งค่าเฉพาะการเข้าสู่ระบบ WeChat ผ่านแอปมือถือ โปรดดำเนินการต่อจากแอป native ผ่าน WeChat SDK"
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
    "copyCode": "คัดลอก",
    "copiedCode": "คัดลอกแล้ว ✓"
  },
  "admin": {
    "redeem": {
      "batchUpdate": "แก้ไขเป็นชุด",
      "batchUpdateTitle": "แก้ไขรหัสแลกเป็นชุด",
      "selectedCount": "เลือกแล้ว {count} รหัสแลก",
      "clearSelection": "ล้างการเลือก",
      "selectCodesFirst": "กรุณาเลือกรหัสแลกก่อน",
      "noBatchFieldsSelected": "กรุณาเลือกอย่างน้อยหนึ่งฟิลด์ที่ต้องการแก้ไข",
      "batchUpdateSuccess": "แก้ไขรหัสแลกสำเร็จ {count} รายการ",
      "failedToBatchUpdate": "แก้ไขรหัสแลกเป็นชุดไม่สำเร็จ",
      "batchFields": {
        "status": "สถานะ",
        "expiresAt": "เวลาหมดอายุ",
        "notes": "หมายเหตุ",
        "group": "กลุ่ม"
      },
      "batchNotesPlaceholder": "กรอกหมายเหตุใหม่ หรือเว้นว่างเพื่อล้างหมายเหตุ",
      "clearGroup": "ล้างกลุ่ม",
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
      "rateMultiplierBadge": "อัตรา {rate}x",
      "copyAccounts": {
        "groupOptionLabel": "{name} ({count} บัญชี)"
      },
      "accountsUnit": "",
      "platforms": {
        "openai": "OpenAI",
        "grok": "Grok"
      },
      "failedToSave": "บันทึกกลุ่มไม่สำเร็จ",
      "videoPricing": {
        "title": "ราคาการสร้างวิดีโอ",
        "description": "กำหนดราคาต่อวินาทีสำหรับการสร้างวิดีโอ Grok เป็น USD เว้นว่างเพื่อใช้อัตราค่าเริ่มต้น (grok-imagine-video: 480p $0.05/วินาที, 720p $0.07/วินาที; video-1.5: 480p $0.08/วินาที, 720p $0.14/วินาที, 1080p $0.25/วินาที)",
        "independentMultiplier": "ใช้ตัวคูณวิดีโออิสระ",
        "videoMultiplier": "ตัวคูณวิดีโอ",
        "modeHint": "วิดีโอคิดเงินต่อวินาที: ราคาต่อวินาที × ความยาว (1-15 วินาที, ค่าเริ่มต้น 8 วินาที) ตามค่าเริ่มต้นจะใช้ตัวคูณกลุ่มปัจจุบัน โหมดอิสระใช้ตัวคูณวิดีโอแทน",
        "finalPricePreview": "ตัวอย่างราคาสุดท้ายต่อวินาที",
        "notConfigured": "ไม่ได้กำหนดค่า"
      },
      "webSearchPricing": {
        "title": "ราคา Codex Web Search",
        "pricePerCall": "ราคาต่อการค้นหา (USD)",
        "pricePerCallHint": "เว้นว่างเพื่อใช้ราคาเริ่มต้น $0.01/ครั้ง (ราคาทางการ: $10 ต่อ 1,000 ครั้ง); 0 หมายถึงฟรี ตัวคูณกลุ่มจะถูกนำไปใช้เพิ่มเติม",
        "finalPricePreview": "ราคาต่อครั้งหลังจากตัวคูณปัจจุบัน: {price}"
      }
    },
    "channels": {
      "noGroupsSelected": "แพลตฟอร์ม {platform} ยังไม่ได้เลือกกลุ่ม โปรดเลือกอย่างน้อยหนึ่งกลุ่มหรือปิดใช้งานแพลตฟอร์มนี้",
      "emptyModelsInPricing": "แพลตฟอร์ม {platform} มีรายการราคาที่ไม่มีโมเดล โปรดเพิ่มโมเดลหรือลบรายการนั้น",
      "form": {
        "minTokens": "Min",
        "maxTokens": "Max",
        "inclusive": "(รวม)",
        "syncLatestModels": "ซิงก์โมเดลล่าสุด",
        "syncingModels": "กำลังซิงก์...",
        "syncModelsSuccess": "ซิงก์โมเดลใหม่แล้ว {count} รายการ",
        "syncModelsAlreadyUpToDate": "รายการโมเดลเป็นเวอร์ชันล่าสุดแล้ว",
        "syncModelsError": "ซิงก์โมเดลไม่สำเร็จ",
        "bedrockCCCompat": "Bedrock CC Compatibility",
        "bedrockCCCompatHint": "⚠️ When enabled, requests to Bedrock accounts in this channel will be transformed for Claude Code compatibility (thinking type conversion, tool_use ID sanitization)."
      },
      "validation": {
        "minTokensNegative": "ช่วง #{index}: จำนวน token ต่ำสุด ({min}) ต้องไม่ติดลบ",
        "maxTokensPositive": "ช่วง #{index}: จำนวน token สูงสุด ({max}) ต้องมากกว่า 0",
        "maxTokensGreaterThanMin": "ช่วง #{index}: จำนวน token สูงสุด ({max}) ต้องมากกว่าจำนวนต่ำสุด ({min})",
        "priceNegative": "ช่วง #{index}: {name} ต้องไม่ติดลบ",
        "unlimitedLast": "ช่วง #{index}: ช่วงไม่จำกัด (เว้นค่า token สูงสุดว่าง) ต้องอยู่เป็นรายการสุดท้าย",
        "overlap": "ช่วง #{prevIndex} และ #{currentIndex} ซ้อนทับกัน: ขอบเขตบนก่อนหน้า ({prevMax}) มากกว่าขอบเขตล่างปัจจุบัน ({currentMin})",
        "priceFields": {
          "input": "ราคา input",
          "output": "ราคา output",
          "cacheWrite": "ราคาเขียน cache",
          "cacheRead": "ราคาอ่าน cache",
          "perRequest": "ราคาต่อ request"
        }
      }
    },
    "settings": {
      "emailTemplates": {
        "title": "เทมเพลตอีเมล",
        "description": "ปรับแต่งหัวเรื่องและเนื้อหา HTML ของอีเมลแจ้งเตือนตามเหตุการณ์และภาษา",
        "event": "เหตุการณ์",
        "locale": "ภาษา",
        "localeEn": "อังกฤษ",
        "localeZh": "จีน",
        "subject": "หัวเรื่อง",
        "subjectPlaceholder": "กรอกหัวเรื่องอีเมล",
        "html": "เทมเพลต HTML",
        "htmlPlaceholder": "แก้ไขเทมเพลต HTML ของอีเมล",
        "placeholders": "ตัวแปรที่ใช้ได้",
        "placeholdersHelp": "คลิกตัวแปรเพื่อคัดลอก Backend จะแทนค่าพวกนี้ตอนส่งอีเมล",
        "livePreview": "แสดงตัวอย่างแบบสด",
        "previewSecurityHint": "HTML ตัวอย่างถูกสร้างโดย endpoint preview ของ backend และแสดงใน sandbox iframe ที่ปิดการทำงานของสคริปต์",
        "preview": "แสดงตัวอย่าง / รีเฟรช",
        "previewing": "กำลังแสดงตัวอย่าง...",
        "save": "บันทึกเทมเพลต",
        "saving": "กำลังบันทึก...",
        "restoreOfficial": "กู้คืนเทมเพลตทางการ",
        "restoring": "กำลังกู้คืน...",
        "restoreConfirm": "ต้องการกู้คืนเทมเพลตทางการสำหรับเหตุการณ์และภาษานี้หรือไม่? เวอร์ชันที่ปรับแต่งอยู่จะถูกแทนที่",
        "restoreSuccess": "กู้คืนเทมเพลตทางการแล้ว",
        "saveSuccess": "บันทึกเทมเพลตอีเมลแล้ว",
        "placeholderCopied": "คัดลอกตัวแปรแล้ว",
        "validationRequired": "ต้องกรอกหัวเรื่องและเทมเพลต HTML",
        "empty": "ยังไม่มีเหตุการณ์หรือภาษาของเทมเพลตอีเมลที่ใช้งานได้",
        "noPreview": "รีเฟรชตัวอย่างเพื่อดูหัวเรื่องอีเมลหลังเรนเดอร์",
        "customized": "ปรับแต่งแล้ว",
        "eventLabels": {
          "authVerifyCode": "รหัสยืนยันอีเมล",
          "authPasswordReset": "รีเซ็ตรหัสผ่าน",
          "notificationEmailVerifyCode": "รหัสยืนยันอีเมลแจ้งเตือน",
          "subscriptionPurchaseSuccess": "ซื้อสมาชิกสำเร็จ",
          "subscriptionExpiryReminder": "เตือนสมาชิกใกล้หมดอายุ",
          "balanceLow": "แจ้งเตือนยอดคงเหลือต่ำ",
          "balanceRechargeSuccess": "เติมยอดคงเหลือสำเร็จ",
          "accountQuotaAlert": "แจ้งเตือนโควต้าบัญชี",
          "contentModerationViolation": "แจ้งเตือนการละเมิดการควบคุมความเสี่ยง",
          "contentModerationDisabled": "บัญชีถูกปิดโดยการควบคุมความเสี่ยง",
          "opsAlert": "แจ้งเตือนการปฏิบัติการ",
          "opsScheduledReport": "รายงานการปฏิบัติการตามกำหนด"
        },
        "eventDescriptions": {
          "authVerifyCode": "ส่งในขั้นตอนสมัครสมาชิก ผูกอีเมล อีเมล OAuth ที่รอกรอก และการยืนยัน TOTP",
          "authPasswordReset": "ส่งเมื่อผู้ใช้ขอลิงก์รีเซ็ตรหัสผ่าน",
          "notificationEmailVerifyCode": "ส่งเมื่อผู้ใช้ยืนยันอีเมลแจ้งเตือนเพิ่มเติม",
          "subscriptionPurchaseSuccess": "ส่งหลังจากคำสั่งซื้อสมาชิกเสร็จสมบูรณ์",
          "subscriptionExpiryReminder": "การแจ้งเตือนแบบเลือกได้ที่ส่งก่อนสมาชิกที่ยังใช้งานอยู่จะหมดอายุ",
          "balanceLow": "การแจ้งเตือนแบบเลือกได้ที่ส่งเมื่อยอดคงเหลือต่ำกว่าค่าที่กำหนด",
          "balanceRechargeSuccess": "ส่งหลังจากคำสั่งซื้อเติมยอดคงเหลือเสร็จสมบูรณ์",
          "accountQuotaAlert": "ส่งไปยังอีเมลแจ้งเตือนผู้ดูแลระบบที่ตั้งไว้เมื่อโควต้าบัญชี upstream แตะค่าที่กำหนด",
          "contentModerationViolation": "ส่งให้ผู้ใช้เมื่อคำขอไปชนกฎ moderation เนื้อหาหรือการควบคุมความเสี่ยง",
          "contentModerationDisabled": "ส่งให้ผู้ใช้เมื่อ moderation เนื้อหาปิดการใช้งานบัญชีของเขาโดยอัตโนมัติ",
          "opsAlert": "ส่งไปยังผู้รับฝ่ายปฏิบัติการที่ตั้งไว้เมื่อกฎแจ้งเตือนการปฏิบัติการทำงาน",
          "opsScheduledReport": "ส่งรายงานรายวัน รายสัปดาห์ รายงานข้อผิดพลาด หรือรายงานสุขภาพบัญชีตามกำหนดให้ผู้รับฝ่ายปฏิบัติการที่ตั้งไว้"
        }
      },
      "payment": {
        "alipayForceQRCode": "บังคับใช้ QR Code สำหรับ Alipay",
        "alipayForceQRCodeHint": "เมื่อเปิดใช้งาน ผู้ใช้ Alipay บนมือถือจะเห็น QR code เสมอแทนการถูกพาไปยังหน้าชำระเงินบนมือถือ",
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
        "defaultDisplayNameAttrName": "ชื่อ DingTalk",
        "defaultCorpEmailAttrName": "อีเมลองค์กร DingTalk",
        "defaultDeptAttrName": "แผนก DingTalk",
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
            "title": "เข้าสู่ระบบด้วย DingTalk",
            "description": "สิทธิ์เริ่มต้นสำหรับการสมัครผ่าน DingTalk"
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
        "actionForcePriority": "บังคับ priority (fast)",
        "userIds": "ผู้ใช้ที่ระบุ",
        "userIdsHint": "พิมพ์ส่วนหนึ่งของอีเมลผู้ใช้เพื่อค้นหา เว้นว่างเพื่อใช้กับผู้ใช้ Sub2API ทั้งหมด คำขอจาก API key ของผู้ใช้ที่เลือกจะสำคัญกว่ากฎทั่วไป",
        "userSearchPlaceholder": "ค้นหาด้วยอีเมลผู้ใช้",
        "userSearchEmpty": "ไม่พบผู้ใช้ที่ตรงกัน",
        "userDeleted": "(ลบแล้ว)",
        "userIdFallback": "ผู้ใช้ #{id}",
        "removeUser": "ลบผู้ใช้"
      }
    },
    "riskControl": {
      "tabs": {
        "keywords": "บล็อกคีย์เวิร์ด",
        "riskThresholds": "Risk Thresholds"
      },
      "blockedKeywords": "คีย์เวิร์ดที่บล็อก",
      "blockedKeywordsPlaceholder": "หนึ่งคีย์เวิร์ดต่อหนึ่งบรรทัด\nตัวอย่าง:\nคำต้องห้าม1\nคำต้องห้าม2",
      "blockedKeywordsDescription": "จับคู่แบบไม่แยกตัวพิมพ์เล็ก-ใหญ่ การจะเรียก upstream moderation API หลังจากจับคู่ได้หรือไม่ขึ้นอยู่กับกลยุทธ์ด้านล่าง",
      "blockedKeywordsPreBlockHint": "การบล็อกคีย์เวิร์ดจะมีผลเฉพาะในโหมด \"บล็อกล่วงหน้า\" เท่านั้น",
      "blockedKeywordsModeWarning": "โหมดปัจจุบันคือ \"{mode}\" การบล็อกคีย์เวิร์ดจะยังไม่ทำงานจนกว่าคุณจะสลับเป็น \"บล็อกล่วงหน้า\"",
      "blockedKeywordCount": "ตั้งค่าคีย์เวิร์ดแล้ว {count} รายการ",
      "blockedKeywordsLimit": "บันทึกได้สูงสุด {max} คีย์เวิร์ด แต่ละคำยาวไม่เกิน 200 อักขระ และรายการซ้ำจะถูกลบอัตโนมัติ",
      "keywordBlockingMode": "กลยุทธ์การกลั่นกรอง",
      "keywordModeKeywordAndApi": "คีย์เวิร์ด + API",
      "keywordModeKeywordAndApiDesc": "บล็อกทันทีเมื่อคีย์เวิร์ดตรงกัน มิฉะนั้นจึงส่งต่อไปยัง upstream moderation API",
      "keywordModeKeywordOnly": "คีย์เวิร์ดเท่านั้น",
      "keywordModeKeywordOnlyDesc": "ตัดสินจากคีย์เวิร์ดเท่านั้น หากไม่ตรงกันจะปล่อยผ่านโดยไม่เรียก API ช่วยลดต้นทุน upstream",
      "keywordModeKeywordOnlyNotice": "กำลังใช้กลยุทธ์ \"คีย์เวิร์ดเท่านั้น\": คำขอที่ไม่ตรงกับคีย์เวิร์ดใด ๆ จะถูกปล่อยผ่านโดยไม่เรียก upstream moderation API",
      "keywordModeApiOnly": "API เท่านั้น",
      "keywordModeApiOnlyDesc": "ใช้เฉพาะ upstream moderation API โดยจะไม่อ้างอิงรายการคีย์เวิร์ดที่ตั้งค่าไว้ที่นี่",
      "keywordModeApiOnlyNotice": "กำลังใช้กลยุทธ์ \"API เท่านั้น\": รายการคีย์เวิร์ดจะไม่ถูกใช้ และทุกคำขอจะถูกส่งไปยัง upstream moderation API",
      "action": {
        "keywordBlock": "บล็อกด้วยคีย์เวิร์ด",
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
        "apiMode": "โปรโตคอล OpenAI",
        "apiModeChatCompletions": "OpenAI Compatible",
        "apiModeChatCompletionsHint": "ใช้ /v1/chat/completions พร้อม messages; ใช้งานได้กับผู้ให้บริการที่เข้ากันได้ส่วนใหญ่",
        "apiModeResponses": "Responses API",
        "apiModeResponsesHint": "ใช้ /v1/responses พร้อม instructions + input โดยค่าเริ่มต้น; เหมาะกับเส้นทาง self-check / Codex",
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
      "userDeletedBadge": "Deleted"
    },
    "ops": {
      "ttftLabel": "TTFT (first_token_ms)",
      "errorLog": {
        "apiKey": "API Key",
        "keyDeletedBadge": "Key Deleted"
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
        "startTime": "เวลาเริ่มต้น",
        "endTime": "เวลาสิ้นสุด"
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
    "projectId": "Project ID",
    "location": "Location"
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
    "useKeyModal": {
      "opencode": {
        "subtitle": "opencode.json"
      }
    },
    "ipWhitelistPlaceholder": "192.168.1.100\n10.0.0.0/8"
  },
  "monitorCommon": {
    "providers": {
      "openai": "OpenAI"
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
