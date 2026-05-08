export default {
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
