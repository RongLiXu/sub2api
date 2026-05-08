export default {
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
