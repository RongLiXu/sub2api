import { mergeLocaleMessages } from './mergeLocaleMessages'

const messages = {
  common: {
    logoAlt: 'Logo',
    closeModal: 'Fermer la fenêtre',
    closeNotification: 'Fermer la notification',
    toggleMenu: 'Basculer le menu',
    userMenu: 'Menu utilisateur',
    selectOptionAria: 'Sélectionner une option',
    paginationNav: 'Pagination',
    clearUserFilter: 'Effacer le filtre utilisateur',
    clearApiKeyFilter: 'Effacer le filtre de clé API',
    clearAccountFilter: 'Effacer le filtre de compte',
    copyUrl: "Copier l'URL",
    refreshToken: 'Refresh Token',
    projectId: 'ID du projet',
    location: 'Région',
    tableOfContents: 'Sommaire'
  },
  layout: {
    siteSubtitle: 'Plateforme de conversion des abonnements en API',
    copyright: 'Tous droits réservés.'
  },
  customPage: {
    tableOfContents: 'Sommaire'
  },
  admin: {
    settings: {
      wechatConnect: {
        emailOAuthTitle: 'Connexion OAuth par e-mail',
        emailOAuthDescription: 'Après activation de GitHub ou Google OAuth par e-mail, le système lit l’e-mail vérifié, connecte les utilisateurs existants et inscrit automatiquement les nouveaux.',
        githubOAuthHint: 'L’application GitHub OAuth nécessite les permissions read:user et user:email. Utilisez l’URL de callback backend ci-dessous.',
        githubOAuthGuide: 'Guide : GitHub Settings → Developer settings → OAuth Apps → New OAuth App. Utilisez l’origine de votre site comme Homepage URL et l’URL de callback backend ci-dessous comme Authorization callback URL.',
        googleOAuthHint: 'Le client Google OAuth nécessite les scopes openid email profile et l’URL de callback backend enregistrée dans les credentials.',
        googleOAuthGuide: 'Guide : Google Cloud Console → APIs & Services → OAuth consent screen, puis Credentials → Create Credentials → OAuth client ID, choisissez Web application et ajoutez l’URL ci-dessous aux Authorized redirect URIs.',
        secretConfiguredKeepHint: 'Secret configuré. Laissez vide pour conserver la valeur actuelle.',
        backendCallbackUrl: 'URL de callback backend',
        frontendCallbackUrl: 'URL de retour frontend',
        browserRedirectUrl: 'URL de redirection navigateur',
        browserRedirectUrlHint: 'Utilisée pour les callbacks navigateur de l’app PC et du compte officiel. Les flux SDK mobiles natifs ne partent pas directement de cette URL.',
        pcAppTitle: 'App PC',
        pcAppHint: 'Les navigateurs desktop se connectent via le QR login de WeChat Open Platform. Peut coexister avec un compte officiel ou une app mobile.',
        pcAppIdLabel: 'ID App PC',
        pcAppIdPlaceholder: 'ID App PC WeChat Open Platform',
        pcAppSecretLabel: 'Secret App PC',
        pcAppSecretPlaceholder: 'Secret App PC WeChat Open Platform',
        officialAccountTitle: 'Compte officiel',
        officialAccountHint: 'Disponible uniquement dans le navigateur WeChat ; hors WeChat, il sera indiqué comme indisponible.',
        officialAccountAppIdLabel: 'ID App du compte officiel',
        officialAccountAppIdPlaceholder: 'ID App du compte officiel',
        officialAccountAppSecretLabel: 'Secret App du compte officiel',
        officialAccountAppSecretPlaceholder: 'Secret App du compte officiel',
        mobileAppTitle: 'App mobile',
        mobileAppHint: 'Les clients mobiles natifs lancent l’autorisation via le SDK WeChat. L’interface web ne lance pas directement ce flux.',
        mobileAppIdLabel: 'ID App mobile',
        mobileAppIdPlaceholder: 'ID App mobile',
        mobileAppSecretLabel: 'Secret App mobile',
        mobileAppSecretPlaceholder: 'Secret App mobile',
        unionIdHint: 'Si App PC est activée avec un compte officiel ou une app mobile, ils doivent appartenir au même compte WeChat Open Platform pour que UnionID fusionne correctement les identités.',
        mobileOfficialConflict: 'Le compte officiel et l’app mobile ne peuvent pas être activés en même temps.'
      },
      authSourceDefaults: {
        sources: {
          github: {
            title: 'Connexion GitHub',
            description: 'Appliqué lors de la première inscription ou première liaison via un e-mail GitHub vérifié.'
          },
          google: {
            title: 'Connexion Google',
            description: 'Appliqué lors de la première inscription ou première liaison via un e-mail Google vérifié.'
          }
        }
      }
    },
    accounts: {
      vertexProjectIdLabel: 'ID du projet',
      vertexLocationLabel: 'Région',
      emailFilter: 'Filtrer par e-mail...',
      vertexClientEmailLabel: 'E-mail client',
      gemini: {
        oauthType: {
          googleOneDesc: 'Compte personnel avec quota Google One.',
          recommendedPersonal: 'Recommandé aux particuliers',
          noGcpRequired: 'Aucun GCP requis',
          codeAssistTitle: 'GCP Code Assist',
          codeAssistDesc: 'Pour les entreprises, nécessite un projet GCP.',
          codeAssistRequirement: 'Vous devez activer un projet GCP et associer une carte bancaire.',
          enterpriseUsers: 'Utilisateurs entreprise',
          highConcurrency: 'Forte concurrence',
          advancedHide: 'Masquer les options avancées (client OAuth personnalisé)',
          advancedShow: 'Afficher les options avancées (client OAuth personnalisé)'
        }
      }
    }
  }
}

const recentI18nPatch = {
  "keyUsage": {
    "dateRange90d": "90 jours",
    "dailyDetail": "Detail quotidien",
    "date": "Date",
    "cacheWriteTokens": "Ecriture cache",
    "noDailyUsage": "Aucune donnee d usage quotidienne",
    "rpmTpm": "RPM / TPM"
  },
  "usage": {
    "cacheTotal": "Cache",
    "cacheBreakdown": "Détail des tokens cache",
    "cacheCreationTokensLabel": "Création cache",
    "cacheReadTokensLabel": "Lecture cache",
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
      "wechatNativeAppRequired": "Ce site ne configure que la connexion WeChat via application mobile. Continuez depuis l’application native via le SDK WeChat."
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
    "dingtalkCallbackPageTitle": "DingTalk Sign-In Callback",
    "wechatProviderName": "WeChat"
  },
  "customPage": {
    "copyCode": "Copier",
    "copiedCode": "Copié ✓"
  },
  "admin": {
    "redeem": {
      "batchUpdate": "Mise a jour en lot",
      "batchUpdateTitle": "Mise a jour en lot des codes de recharge",
      "selectedCount": "{count} code(s) de recharge selectionne(s)",
      "clearSelection": "Effacer la selection",
      "selectCodesFirst": "Selectionnez d abord des codes de recharge",
      "noBatchFieldsSelected": "Selectionnez au moins un champ a mettre a jour",
      "batchUpdateSuccess": "{count} code(s) de recharge mis a jour",
      "failedToBatchUpdate": "Echec de la mise a jour en lot des codes de recharge",
      "batchFields": {
        "status": "Statut",
        "expiresAt": "Date d expiration",
        "notes": "Notes",
        "group": "Groupe"
      },
      "batchNotesPlaceholder": "Saisissez la nouvelle note, ou laissez vide pour la supprimer",
      "clearGroup": "Effacer le groupe",
      "invitation": "Invitation",
      "columns": {
        "expiresAt": "Expires At",
        "actions": "Actions"
      },
      "types": {
        "invitation": "Invitation"
      },
      "codeExpiry": "Code Expiry",
      "neverExpires": "Never expires",
      "expiryPresetDays": "{days} days",
      "customExpiry": "Custom",
      "customExpiryDays": "Custom days",
      "expiryDaysRequired": "Please enter a valid expiry day count"
    },
    "groups": {
      "rateMultiplierBadge": "Tarif {rate}x",
      "copyAccounts": {
        "groupOptionLabel": "{name} ({count} comptes)"
      },
      "columns": {
        "actions": "Actions"
      },
      "usageTotal": "Total",
      "accountsUnit": "",
      "limitWeek": "w",
      "limitMonth": "mo",
      "platforms": {
        "openai": "OpenAI",
        "grok": "Grok"
      },
      "claudeCode": {
        "title": "Claude Code Client Restriction"
      },
      "modelRouting": {
        "modelPatternPlaceholder": "claude-opus-*"
      },
      "supportedScopes": {
        "claude": "Claude"
      }
    },
    "channels": {
      "noGroupsSelected": "Aucun groupe sélectionné pour la plateforme {platform}. Sélectionnez au moins un groupe ou désactivez cette plateforme.",
      "emptyModelsInPricing": "Une règle de tarification de la plateforme {platform} ne contient aucun modèle. Ajoutez des modèles ou supprimez cette règle.",
      "form": {
        "minTokens": "Min",
        "maxTokens": "Max",
        "inclusive": "(incl.)",
        "syncLatestModels": "Synchroniser les derniers modèles",
        "syncingModels": "Synchronisation...",
        "syncModelsSuccess": "{count} nouveau(x) modèle(s) synchronisé(s)",
        "syncModelsAlreadyUpToDate": "La liste des modèles est déjà à jour",
        "syncModelsError": "Échec de la synchronisation des modèles",
        "bedrockCCCompat": "Bedrock CC Compatibility",
        "bedrockCCCompatHint": "⚠️ When enabled, requests to Bedrock accounts in this channel will be transformed for Claude Code compatibility (thinking type conversion, tool_use ID sanitization)."
      },
      "validation": {
        "minTokensNegative": "Intervalle #{index} : le nombre minimal de tokens ({min}) ne peut pas être négatif",
        "maxTokensPositive": "Intervalle #{index} : le nombre maximal de tokens ({max}) doit être supérieur à 0",
        "maxTokensGreaterThanMin": "Intervalle #{index} : le nombre maximal de tokens ({max}) doit être supérieur au minimum ({min})",
        "priceNegative": "Intervalle #{index} : {name} ne peut pas être négatif",
        "unlimitedLast": "Intervalle #{index} : l’intervalle sans limite (maximum vide) doit être le dernier",
        "overlap": "Les intervalles #{prevIndex} et #{currentIndex} se chevauchent : la borne supérieure précédente ({prevMax}) est supérieure à la borne inférieure actuelle ({currentMin})",
        "priceFields": {
          "input": "Prix d’entrée",
          "output": "Prix de sortie",
          "cacheWrite": "Prix d’écriture cache",
          "cacheRead": "Prix de lecture cache",
          "perRequest": "Prix par requête"
        }
      },
      "columns": {
        "actions": "Actions"
      }
    },
    "settings": {
      "emailTemplates": {
        "title": "Modeles de courriel",
        "description": "Personnalisez le sujet et le contenu HTML des courriels de notification pour chaque evenement et langue.",
        "event": "Evenement",
        "locale": "Langue",
        "localeEn": "Anglais",
        "localeZh": "Chinois",
        "subject": "Sujet",
        "subjectPlaceholder": "Saisissez le sujet du courriel",
        "html": "Modele HTML",
        "htmlPlaceholder": "Modifier le modele HTML du courriel",
        "placeholders": "Variables disponibles",
        "placeholdersHelp": "Cliquez sur une variable pour la copier. Le backend remplacera ces valeurs lors de l envoi du courriel.",
        "livePreview": "Apercu en direct",
        "previewSecurityHint": "Le HTML de previsualisation est genere par le point de previsualisation backend et affiche dans un iframe sandbox avec les scripts desactives.",
        "preview": "Apercu / Actualiser",
        "previewing": "Previsualisation...",
        "save": "Enregistrer le modele",
        "saving": "Enregistrement...",
        "restoreOfficial": "Restaurer le modele officiel",
        "restoring": "Restauration...",
        "restoreConfirm": "Restaurer le modele officiel pour cet evenement et cette langue ? Votre version personnalisee sera remplacee.",
        "restoreSuccess": "Modele officiel restaure",
        "saveSuccess": "Modele de courriel enregistre",
        "placeholderCopied": "Variable copiee",
        "validationRequired": "Le sujet et le modele HTML sont obligatoires",
        "empty": "Aucun evenement ou langue de modele de courriel n est disponible pour le moment.",
        "noPreview": "Actualisez l apercu pour voir le sujet du courriel rendu.",
        "customized": "Personnalise",
        "eventLabels": {
          "authVerifyCode": "Code de verification du courriel",
          "authPasswordReset": "Reinitialisation du mot de passe",
          "notificationEmailVerifyCode": "Code de verification du courriel de notification",
          "subscriptionPurchaseSuccess": "Achat d abonnement reussi",
          "subscriptionExpiryReminder": "Rappel d expiration de l abonnement",
          "balanceLow": "Alerte de solde faible",
          "balanceRechargeSuccess": "Recharge de solde reussie",
          "accountQuotaAlert": "Alerte de quota du compte",
          "contentModerationViolation": "Avis de violation du controle de risque",
          "contentModerationDisabled": "Compte desactive par le controle de risque",
          "opsAlert": "Alerte operations",
          "opsScheduledReport": "Rapport planifie operations"
        },
        "eventDescriptions": {
          "authVerifyCode": "Envoye pour l inscription, la liaison de courriel, le courriel en attente OAuth et les flux de verification TOTP.",
          "authPasswordReset": "Envoye lorsqu un utilisateur demande un lien de reinitialisation du mot de passe.",
          "notificationEmailVerifyCode": "Envoye lorsqu un utilisateur verifie une adresse de courriel de notification supplementaire.",
          "subscriptionPurchaseSuccess": "Envoye apres la validation d un achat d abonnement.",
          "subscriptionExpiryReminder": "Rappel facultatif envoye avant l expiration d un abonnement actif.",
          "balanceLow": "Alerte facultative envoyee lorsque le solde passe sous le seuil configure.",
          "balanceRechargeSuccess": "Envoye apres la validation d une recharge de solde.",
          "accountQuotaAlert": "Envoye aux courriels de notification administrateur configures lorsqu un quota de compte upstream franchit le seuil.",
          "contentModerationViolation": "Envoye aux utilisateurs lorsqu une requete declenche des regles de moderation de contenu ou de controle de risque.",
          "contentModerationDisabled": "Envoye aux utilisateurs lorsque la moderation de contenu desactive automatiquement leur compte.",
          "opsAlert": "Envoye aux destinataires operations configures lorsqu une regle d alerte operations se declenche.",
          "opsScheduledReport": "Envoye aux destinataires operations configures pour les rapports planifies quotidiens, hebdomadaires, d erreurs ou de sante des comptes."
        }
      },
      "payment": {
        "alipayForceQRCode": "Forcer le QR Code Alipay",
        "alipayForceQRCodeHint": "Une fois activé, les utilisateurs mobiles Alipay verront toujours un QR code au lieu d’être redirigés vers la page de paiement mobile",
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
        "defaultDisplayNameAttrName": "Nom DingTalk",
        "defaultCorpEmailAttrName": "E-mail professionnel DingTalk",
        "defaultDeptAttrName": "Département DingTalk",
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
            "title": "Connexion DingTalk",
            "description": "Droits par défaut accordés aux inscriptions via DingTalk."
          }
        },
        "platformQuotasOverride": "Platform Quota Overrides",
        "platformQuotasOverrideHint": "Blank fields inherit the system default. Set to 0 to fully block that window for this auth source."
      },
      "description": "Manage registration, email verification, default values, and SMTP settings",
      "features": {
        "riskControl": {
          "cyberSessionBlock": "Cyber session auto-block",
          "cyberSessionBlockHint": "When enabled, sessions hit by upstream cyber_policy are blocked locally for the TTL and no longer forwarded. Only the offending session is blocked; other sessions on the same key are unaffected.",
          "cyberSessionBlockTTL": "Block TTL (seconds)"
        },
        "affiliate": {
          "durationDaysDesc": "Rebate relationship expires after this many days since invitee registration. 0 = permanent.",
          "customUsers": {
            "totalLabel": "{total} total",
            "col": {
              "actions": "Actions"
            }
          }
        }
      },
      "loginAgreement": {
        "modal": "Modal"
      },
      "apiKeyAcl": {
        "title": "API Key IP Access Control",
        "description": "Choose which client IP is used by API Key allowlists and denylists",
        "trustForwardedIp": "Trust forwarded client IP",
        "trustForwardedIpHint": "Disabled by default. Enable only when the origin is reachable only through Cloudflare or Nginx reverse proxy. When enabled, API Key IP allowlists and denylists use CF-Connecting-IP, X-Real-IP, or X-Forwarded-For, matching the request IP shown in usage records."
      },
      "linuxdo": {
        "clientSecretPlaceholder": "********",
        "clientSecretConfiguredPlaceholder": "********"
      },
      "oidc": {
        "clientSecretPlaceholder": "********",
        "clientSecretConfiguredPlaceholder": "********",
        "issuerUrlPlaceholder": "https://id.example.com/realms/main",
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
        "apiBaseUrlPlaceholder": "https://api.example.com",
        "tablePageSizeOptionsPlaceholder": "10, 20, 50, 100",
        "customEndpoints": {
          "endpointUrlPlaceholder": "https://api2.example.com"
        },
        "docUrlPlaceholder": "https://docs.example.com"
      },
      "customMenu": {
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
        "fromEmailPlaceholder": "noreply{'@'}example.com"
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
        "columns": {
          "actions": "Actions"
        }
      },
      "streamTimeout": {
        "action": "Action"
      },
      "betaPolicy": {
        "action": "Action"
      },
      "openaiFastPolicy": {
        "action": "Action"
      },
      "wechatConnect": {
        "modeLabel": "Mode"
      },
      "usageRecords": {
        "title": "Usage Records",
        "description": "Settings for usage and failed-request records visible to end users."
      },
      "user_error_view": {
        "label": "Allow users to view their own error requests",
        "description": "When enabled, users can see a redacted view of their failed requests on the usage page (no internal/upstream details). Requires ops monitoring enabled to have data."
      }
    },
    "riskControl": {
      "tabs": {
        "keywords": "Blocage par mots-clés",
        "riskThresholds": "Risk Thresholds"
      },
      "blockedKeywords": "Mots-clés bloqués",
      "blockedKeywordsPlaceholder": "Un mot-clé par ligne\nExemple :\nmot1\nmot2",
      "blockedKeywordsDescription": "La correspondance est insensible à la casse. L’appel à l’API de modération en amont après une correspondance dépend de la stratégie ci-dessous.",
      "blockedKeywordsPreBlockHint": "Le blocage par mots-clés ne prend effet qu’en mode « Blocage préalable ».",
      "blockedKeywordsModeWarning": "Le mode actuel est « {mode} ». Le blocage par mots-clés ne sera exécuté qu’après passage en mode « Blocage préalable ».",
      "blockedKeywordCount": "{count} mot(s)-clé(s) configuré(s)",
      "blockedKeywordsLimit": "Jusqu’à {max} mots-clés, chacun limité à 200 caractères. Les doublons sont supprimés automatiquement.",
      "keywordBlockingMode": "Stratégie de modération",
      "keywordModeKeywordAndApi": "Mot-clé + API",
      "keywordModeKeywordAndApiDesc": "Bloque immédiatement en cas de correspondance, sinon passe à l’API de modération en amont.",
      "keywordModeKeywordOnly": "Mots-clés seulement",
      "keywordModeKeywordOnlyDesc": "Décide uniquement par mots-clés ; sans correspondance, la requête est autorisée sans appeler l’API, ce qui réduit le coût amont.",
      "keywordModeKeywordOnlyNotice": "Stratégie « Mots-clés seulement » : les requêtes sans correspondance sont autorisées sans appel à l’API de modération en amont.",
      "keywordModeApiOnly": "API seulement",
      "keywordModeApiOnlyDesc": "Utilise uniquement l’API de modération en amont ; la liste de mots-clés configurée ici n’est pas utilisée.",
      "keywordModeApiOnlyNotice": "Stratégie « API seulement » : la liste de mots-clés est ignorée ; toutes les requêtes passent par l’API de modération en amont.",
      "action": {
        "keywordBlock": "Bloqué par mot-clé",
        "cyberPolicy": "Cyber policy"
      },
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
      "table": {
        "actionMeta": "Action"
      }
    },
    "channelMonitor": {
      "form": {
        "apiMode": "Protocole OpenAI",
        "apiModeChatCompletions": "OpenAI Compatible",
        "apiModeChatCompletionsHint": "Utilise /v1/chat/completions avec messages ; fonctionne avec la plupart des fournisseurs compatibles.",
        "apiModeResponses": "Responses API",
        "apiModeResponsesHint": "Utilise /v1/responses avec instructions + input par défaut ; idéal pour les chemins d’auto-test / Codex.",
        "endpointPlaceholder": "https://api.example.com",
        "primaryModelPlaceholder": "gpt-4o-mini",
        "jitterSeconds": "Random Jitter (± seconds)",
        "jitterSecondsHint": "Each check fires at interval ± a random offset within this value; 0 means fixed interval. Interval minus jitter must be ≥ 15s"
      },
      "columns": {
        "actions": "Actions"
      }
    },
    "dashboard": {
      "ok": "ok"
    },
    "backup": {
      "s3": {
        "descriptionSuffix": ")"
      },
      "columns": {
        "actions": "Actions"
      }
    },
    "dataManagement": {
      "agent": {
        "version": "Version"
      },
      "form": {
        "postgres": {
          "title": "PostgreSQL",
          "port": "Port"
        }
      },
      "sourceProfiles": {
        "columns": {
          "actions": "Actions"
        }
      },
      "s3Profiles": {
        "columns": {
          "actions": "Actions"
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
        "usageAntigravity": "Usage (Antigravity)",
        "actions": "Actions"
      },
      "sortBy": "Sort By",
      "sortCurrentPageOnly": "Sorts current page only",
      "publicGroupCount": "+{count} public",
      "daysRemaining": "{days}d",
      "columnAlwaysVisible": "This column is always visible",
      "platformBreakdown": "Per-platform breakdown",
      "platformBreakdownEmpty": "No platform usage yet",
      "platformBreakdownHint": "Hover for per-platform usage",
      "platformOther": "Other",
      "attributes": {
        "types": {
          "url": "URL",
          "date": "Date"
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
      "quotaEndsInDaysHours": "Quota ends in {days}d {hours}h",
      "columns": {
        "actions": "Actions"
      }
    },
    "accounts": {
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
        "chatgptOauth": "ChatGPT OAuth",
        "googleOauth": "Google OAuth",
        "grokOauth": "Grok OAuth"
      },
      "antigravityProjectIdLabel": "GCP Project ID (optional)",
      "antigravityProjectIdPlaceholder": "your-gcp-project-id",
      "antigravityProjectIdHint": "Antigravity standard-tier accounts that do not receive an automatic project_id need a user-owned GCP project.",
      "columns": {
        "id": "Account ID",
        "createdAt": "Created",
        "actions": "Actions"
      },
      "usageWindowsHint": "\"5h / 7d\" are the upstream account's official rolling usage windows (e.g. OpenAI ChatGPT, Claude). They are imposed by the upstream provider on the account itself — not configured by sub2api, and unrelated to the models you map. Usage resets automatically once each window rolls over, and the limit cannot be lifted from within sub2api.",
      "capacity": {
        "quota": {
          "normal": "Quota normal"
        }
      },
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
      "claudeCode": "Claude Code",
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
        "singleCredentialOnly": "Only one credential can be entered per reauthorization.",
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
      "stats": {
        "date": "Date"
      },
      "usageWindow": {
        "geminiProDaily": "Pro",
        "geminiFlashDaily": "Flash",
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
      },
      "tier": {
        "pro": "Pro",
        "ultra": "Ultra"
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
        "createdAt": "Created",
        "actions": "Actions"
      },
      "port": "Port",
      "form": {
        "portPlaceholder": "8080"
      },
      "qualityTableMessage": "Message",
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
      "columns": {
        "actions": "Actions"
      },
      "operators": {
        "gt": ">",
        "gte": "≥",
        "lt": "<",
        "lte": "≤",
        "eq": "="
      }
    },
    "promo": {
      "columns": {
        "actions": "Actions"
      }
    },
    "usage": {
      "userDeletedBadge": "Deleted"
    },
    "ops": {
      "goroutines": "Goroutines",
      "ok": "ok",
      "exceptions": "Exceptions",
      "ttftLabel": "TTFT (first_token_ms)",
      "client": "Client",
      "tpsK": "TPS (K)",
      "openaiTokenStats": {
        "viewModePagination": "Pagination",
        "pageInfo": "Page {page}/{total}"
      },
      "systemLogs": {
        "filters": {
          "keywordPlaceholder": "message/request_id"
        }
      },
      "errorLog": {
        "apiKey": "API Key",
        "keyDeletedBadge": "Key Deleted",
        "message": "Message",
        "action": "Action",
        "phase": "Phase",
        "requestTypeWs": "WS"
      },
      "errorDetails": {
        "owner": {
          "client": "Client"
        }
      },
      "errorDetail": {
        "classificationKeys": {
          "phase": "Phase"
        },
        "upstreamKeys": {
          "message": "Message"
        },
        "phase": "Phase",
        "message": "Message",
        "requestTypeWs": "WebSocket",
        "apiKeyPrefix": "Key Prefix",
        "attemptedKeyPrefix": "Attempted Key Prefix",
        "deletedKeyOwner": "Deleted Key Owner",
        "keyDeletedBadge": "Key Deleted"
      },
      "requestDetails": {
        "rangeMinutes": "{n} minutes",
        "table": {
          "actions": "Actions"
        }
      },
      "alertEvents": {
        "detail": {
          "dimensions": "Dimensions"
        },
        "table": {
          "dimensions": "Dimensions"
        }
      },
      "alertRules": {
        "metrics": {
          "accountTempUnscheduledCount": "Temporarily Unschedulable Accounts"
        },
        "metricDescriptions": {
          "accountTempUnscheduledCount": "Number of accounts currently temporarily unschedulable (e.g. proxy/credential failure auto-eviction)."
        },
        "table": {
          "actions": "Actions"
        }
      },
      "settings": {
        "ttftP99MaxMs": "TTFT P99 Maximum (ms)",
        "openaiQuotaAutoPause": "OpenAI Account Quota Auto-pause",
        "openaiQuotaAutoPauseHint": "When an OpenAI account reaches its 5h / 7d usage threshold, the scheduler skips it automatically and resumes once the window rolls over. Per-account thresholds take precedence over this global default.",
        "openaiQuotaAutoPauseDefault5h": "Default 5h usage threshold (%)",
        "openaiQuotaAutoPauseDefault7d": "Default 7d usage threshold (%)",
        "openaiQuotaAutoPauseThresholdHint": "Value 0-100; leave blank or 0 to disable the global default threshold.",
        "validation": {
          "openaiQuotaAutoPauseRange": "OpenAI quota auto-pause threshold must be between 0 and 100"
        }
      },
      "tooltips": {
        "latency": "Request duration statistics, including p50, p90, p95, p99 percentiles.",
        "ttft": "Time To First Token, measuring the speed of first token return in streaming responses.",
        "health": "System health score (0-100), considering SLA, error rate, and resource usage."
      }
    },
    "errorPassthrough": {
      "columns": {
        "conditions": "Conditions",
        "actions": "Actions"
      },
      "form": {
        "errorCodesPlaceholder": "422, 400, 429"
      }
    },
    "tlsFingerprintProfiles": {
      "columns": {
        "alpn": "ALPN",
        "actions": "Actions"
      }
    }
  },
  "home": {
    "providers": {
      "claude": "Claude"
    }
  },
  "setup": {
    "database": {
      "port": "Port"
    },
    "redis": {
      "port": "Port"
    }
  },
  "common": {
    "actions": "Actions",
    "total": "Total",
    "logoAlt": "Logo",
    "paginationNav": "Pagination",
    "refreshToken": "Refresh Token",
    "probeUsage": "Probe Usage",
    "minutes": "min",
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
      "vision": "Vision"
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
    },
    "cache": "Cache"
  },
  "keys": {
    "quota": "Quota",
    "useKeyModal": {
      "cliTabs": {
        "claudeCode": "Claude Code"
      },
      "antigravity": {
        "claudeCode": "Claude Code"
      },
      "opencode": {
        "subtitle": "opencode.json"
      }
    },
    "ipWhitelistPlaceholder": "192.168.1.100\n10.0.0.0/8",
    "ipBlacklistPlaceholder": "1.2.3.4\n5.6.0.0/16",
    "ccsClientSelect": {
      "claudeCode": "Claude Code"
    },
    "expiration": "Expiration"
  },
  "monitorCommon": {
    "status": {
      "unknown": "-"
    },
    "providers": {
      "openai": "OpenAI"
    },
    "latencyEmpty": "-"
  },
  "profile": {
    "authBindings": {
      "providers": {
        "dingtalk": "DingTalk",
        "oidc": "{providerName}",
        "wechat": "WeChat"
      }
    }
  },
  "userSubscriptions": {
    "quotaEndsIn": "Quota ends in {time}"
  },
  "payment": {
    "methods": {
      "alipay": "Alipay",
      "airwallex": "Airwallex",
      "usdt": "USDT"
    },
    "orders": {
      "actions": "Actions"
    },
    "usdtRateLine": "Live rate 1 USDT ≈ {cny} CNY · pay ~{usdt} USDT",
    "usdtRateLineNoAmount": "Live rate 1 USDT ≈ {cny} CNY",
    "usdtRateNote": "USDT rate refreshes every minute. Final amount shown on the checkout page is authoritative.",
    "airwallexLoadFailed": "Failed to load Airwallex payment component. Please refresh and try again.",
    "airwallexMissingParams": "Missing Airwallex payment parameters",
    "airwallexPay": "Airwallex Payment",
    "planCard": {
      "quota": "Quota"
    },
    "admin": {
      "weekly": "W",
      "monthly": "M"
    }
  }
}

export default mergeLocaleMessages(messages as Record<string, any>, recentI18nPatch)
