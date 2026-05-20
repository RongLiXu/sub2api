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
  auth: {
    oauthFlow: {
      wechatNativeAppRequired: 'Ce site ne configure que la connexion WeChat via application mobile. Continuez depuis l’application native via le SDK WeChat.'
    },
    dingtalkProviderName: 'DingTalk'
  },
  customPage: {
    copyCode: 'Copier',
    copiedCode: 'Copié ✓'
  },
  admin: {
    groups: {
      rateMultiplierBadge: 'Tarif {rate}x',
      copyAccounts: {
        groupOptionLabel: '{name} ({count} comptes)'
      }
    },
    channels: {
      noGroupsSelected: 'Aucun groupe sélectionné pour la plateforme {platform}. Sélectionnez au moins un groupe ou désactivez cette plateforme.',
      emptyModelsInPricing: 'Une règle de tarification de la plateforme {platform} ne contient aucun modèle. Ajoutez des modèles ou supprimez cette règle.',
      syncLatestModels: 'Synchroniser les derniers modèles',
      syncingModels: 'Synchronisation...',
      syncModelsSuccess: '{count} nouveau(x) modèle(s) synchronisé(s)',
      syncModelsAlreadyUpToDate: 'La liste des modèles est déjà à jour',
      syncModelsError: 'Échec de la synchronisation des modèles',
      form: {
        minTokens: 'Min',
        maxTokens: 'Max',
        inclusive: '(incl.)'
      },
      validation: {
        minTokensNegative: 'Intervalle #{index} : le nombre minimal de tokens ({min}) ne peut pas être négatif',
        maxTokensPositive: 'Intervalle #{index} : le nombre maximal de tokens ({max}) doit être supérieur à 0',
        maxTokensGreaterThanMin: 'Intervalle #{index} : le nombre maximal de tokens ({max}) doit être supérieur au minimum ({min})',
        priceNegative: 'Intervalle #{index} : {name} ne peut pas être négatif',
        unlimitedLast: 'Intervalle #{index} : l’intervalle sans limite (maximum vide) doit être le dernier',
        overlap: 'Les intervalles #{prevIndex} et #{currentIndex} se chevauchent : la borne supérieure précédente ({prevMax}) est supérieure à la borne inférieure actuelle ({currentMin})',
        priceFields: {
          input: 'Prix d’entrée',
          output: 'Prix de sortie',
          cacheWrite: 'Prix d’écriture cache',
          cacheRead: 'Prix de lecture cache',
          perRequest: 'Prix par requête'
        }
      }
    },
    settings: {
      payment: {
        alipayForceQRCode: 'Forcer le QR Code Alipay',
        alipayForceQRCodeHint: 'Une fois activé, les utilisateurs mobiles Alipay verront toujours un QR code au lieu d’être redirigés vers la page de paiement mobile'
      },
      dingtalk: {
        defaultDisplayNameAttrName: 'Nom DingTalk',
        defaultCorpEmailAttrName: 'E-mail professionnel DingTalk',
        defaultDeptAttrName: 'Département DingTalk'
      },
      authSourceDefaults: {
        sources: {
          dingtalk: {
            title: 'Connexion DingTalk',
            description: 'Droits par défaut accordés aux inscriptions via DingTalk.'
          }
        }
      }
    },
    riskControl: {
      tabs: {
        keywords: 'Blocage par mots-clés'
      },
      blockedKeywords: 'Mots-clés bloqués',
      blockedKeywordsPlaceholder: 'Un mot-clé par ligne\nExemple :\nmot1\nmot2',
      blockedKeywordsDescription: 'La correspondance est insensible à la casse. L’appel à l’API de modération en amont après une correspondance dépend de la stratégie ci-dessous.',
      blockedKeywordsPreBlockHint: 'Le blocage par mots-clés ne prend effet qu’en mode « Blocage préalable ».',
      blockedKeywordsModeWarning: 'Le mode actuel est « {mode} ». Le blocage par mots-clés ne sera exécuté qu’après passage en mode « Blocage préalable ».',
      blockedKeywordCount: '{count} mot(s)-clé(s) configuré(s)',
      blockedKeywordsLimit: 'Jusqu’à {max} mots-clés, chacun limité à 200 caractères. Les doublons sont supprimés automatiquement.',
      keywordBlockingMode: 'Stratégie de modération',
      keywordModeKeywordAndApi: 'Mot-clé + API',
      keywordModeKeywordAndApiDesc: 'Bloque immédiatement en cas de correspondance, sinon passe à l’API de modération en amont.',
      keywordModeKeywordOnly: 'Mots-clés seulement',
      keywordModeKeywordOnlyDesc: 'Décide uniquement par mots-clés ; sans correspondance, la requête est autorisée sans appeler l’API, ce qui réduit le coût amont.',
      keywordModeKeywordOnlyNotice: 'Stratégie « Mots-clés seulement » : les requêtes sans correspondance sont autorisées sans appel à l’API de modération en amont.',
      keywordModeApiOnly: 'API seulement',
      keywordModeApiOnlyDesc: 'Utilise uniquement l’API de modération en amont ; la liste de mots-clés configurée ici n’est pas utilisée.',
      keywordModeApiOnlyNotice: 'Stratégie « API seulement » : la liste de mots-clés est ignorée ; toutes les requêtes passent par l’API de modération en amont.',
      action: {
        keywordBlock: 'Bloqué par mot-clé'
      }
    },
    channelMonitor: {
      form: {
        apiMode: 'Protocole OpenAI',
        apiModeChatCompletions: 'OpenAI Compatible',
        apiModeChatCompletionsHint: 'Utilise /v1/chat/completions avec messages ; fonctionne avec la plupart des fournisseurs compatibles.',
        apiModeResponses: 'Responses API',
        apiModeResponsesHint: 'Utilise /v1/responses avec instructions + input par défaut ; idéal pour les chemins d’auto-test / Codex.'
      }
    }
  }
}

export default mergeLocaleMessages(messages as Record<string, any>, recentI18nPatch)
