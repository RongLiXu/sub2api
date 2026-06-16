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
  keyUsage: {
    dateRange90d: '90 jours',
    dailyDetail: 'Detail quotidien',
    date: 'Date',
    cacheWriteTokens: 'Ecriture cache',
    noDailyUsage: 'Aucune donnee d usage quotidienne'
  },
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
    redeem: {
      batchUpdate: 'Mise a jour en lot',
      batchUpdateTitle: 'Mise a jour en lot des codes de recharge',
      selectedCount: '{count} code(s) de recharge selectionne(s)',
      clearSelection: 'Effacer la selection',
      selectCodesFirst: 'Selectionnez d abord des codes de recharge',
      noBatchFieldsSelected: 'Selectionnez au moins un champ a mettre a jour',
      batchUpdateSuccess: '{count} code(s) de recharge mis a jour',
      failedToBatchUpdate: 'Echec de la mise a jour en lot des codes de recharge',
      batchFields: {
        status: 'Statut',
        expiresAt: 'Date d expiration',
        notes: 'Notes',
        group: 'Groupe'
      },
      batchNotesPlaceholder: 'Saisissez la nouvelle note, ou laissez vide pour la supprimer',
      clearGroup: 'Effacer le groupe'
    },
    groups: {
      rateMultiplierBadge: 'Tarif {rate}x',
      copyAccounts: {
        groupOptionLabel: '{name} ({count} comptes)'
      }
    },
    channels: {
      noGroupsSelected: 'Aucun groupe sélectionné pour la plateforme {platform}. Sélectionnez au moins un groupe ou désactivez cette plateforme.',
      emptyModelsInPricing: 'Une règle de tarification de la plateforme {platform} ne contient aucun modèle. Ajoutez des modèles ou supprimez cette règle.',
      form: {
        minTokens: 'Min',
        maxTokens: 'Max',
        inclusive: '(incl.)',
        syncLatestModels: 'Synchroniser les derniers modèles',
        syncingModels: 'Synchronisation...',
        syncModelsSuccess: '{count} nouveau(x) modèle(s) synchronisé(s)',
        syncModelsAlreadyUpToDate: 'La liste des modèles est déjà à jour',
        syncModelsError: 'Échec de la synchronisation des modèles'
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
      emailTemplates: {
        title: 'Modeles de courriel',
        description: 'Personnalisez le sujet et le contenu HTML des courriels de notification pour chaque evenement et langue.',
        event: 'Evenement',
        locale: 'Langue',
        localeEn: 'Anglais',
        localeZh: 'Chinois',
        subject: 'Sujet',
        subjectPlaceholder: 'Saisissez le sujet du courriel',
        html: 'Modele HTML',
        htmlPlaceholder: 'Modifier le modele HTML du courriel',
        placeholders: 'Variables disponibles',
        placeholdersHelp: 'Cliquez sur une variable pour la copier. Le backend remplacera ces valeurs lors de l envoi du courriel.',
        livePreview: 'Apercu en direct',
        previewSecurityHint: 'Le HTML de previsualisation est genere par le point de previsualisation backend et affiche dans un iframe sandbox avec les scripts desactives.',
        preview: 'Apercu / Actualiser',
        previewing: 'Previsualisation...',
        save: 'Enregistrer le modele',
        saving: 'Enregistrement...',
        restoreOfficial: 'Restaurer le modele officiel',
        restoring: 'Restauration...',
        restoreConfirm: 'Restaurer le modele officiel pour cet evenement et cette langue ? Votre version personnalisee sera remplacee.',
        restoreSuccess: 'Modele officiel restaure',
        saveSuccess: 'Modele de courriel enregistre',
        placeholderCopied: 'Variable copiee',
        validationRequired: 'Le sujet et le modele HTML sont obligatoires',
        empty: 'Aucun evenement ou langue de modele de courriel n est disponible pour le moment.',
        noPreview: 'Actualisez l apercu pour voir le sujet du courriel rendu.',
        customized: 'Personnalise',
        eventLabels: {
          authVerifyCode: 'Code de verification du courriel',
          authPasswordReset: 'Reinitialisation du mot de passe',
          notificationEmailVerifyCode: 'Code de verification du courriel de notification',
          subscriptionPurchaseSuccess: 'Achat d abonnement reussi',
          subscriptionExpiryReminder: 'Rappel d expiration de l abonnement',
          balanceLow: 'Alerte de solde faible',
          balanceRechargeSuccess: 'Recharge de solde reussie',
          accountQuotaAlert: 'Alerte de quota du compte',
          contentModerationViolation: 'Avis de violation du controle de risque',
          contentModerationDisabled: 'Compte desactive par le controle de risque',
          opsAlert: 'Alerte operations',
          opsScheduledReport: 'Rapport planifie operations'
        },
        eventDescriptions: {
          authVerifyCode: 'Envoye pour l inscription, la liaison de courriel, le courriel en attente OAuth et les flux de verification TOTP.',
          authPasswordReset: 'Envoye lorsqu un utilisateur demande un lien de reinitialisation du mot de passe.',
          notificationEmailVerifyCode: 'Envoye lorsqu un utilisateur verifie une adresse de courriel de notification supplementaire.',
          subscriptionPurchaseSuccess: 'Envoye apres la validation d un achat d abonnement.',
          subscriptionExpiryReminder: 'Rappel facultatif envoye avant l expiration d un abonnement actif.',
          balanceLow: 'Alerte facultative envoyee lorsque le solde passe sous le seuil configure.',
          balanceRechargeSuccess: 'Envoye apres la validation d une recharge de solde.',
          accountQuotaAlert: 'Envoye aux courriels de notification administrateur configures lorsqu un quota de compte upstream franchit le seuil.',
          contentModerationViolation: 'Envoye aux utilisateurs lorsqu une requete declenche des regles de moderation de contenu ou de controle de risque.',
          contentModerationDisabled: 'Envoye aux utilisateurs lorsque la moderation de contenu desactive automatiquement leur compte.',
          opsAlert: 'Envoye aux destinataires operations configures lorsqu une regle d alerte operations se declenche.',
          opsScheduledReport: 'Envoye aux destinataires operations configures pour les rapports planifies quotidiens, hebdomadaires, d erreurs ou de sante des comptes.'
        }
      },
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
