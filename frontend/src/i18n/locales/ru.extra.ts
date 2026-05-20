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
  keyUsage: {
    dateRange90d: '90 дней',
    dailyDetail: 'Детализация по дням',
    date: 'Дата',
    cacheWriteTokens: 'Запись кэша',
    noDailyUsage: 'Нет данных по ежедневному использованию'
  },
  auth: {
    oauthFlow: {
      wechatNativeAppRequired: 'На этом сайте настроен только вход WeChat через мобильное приложение. Продолжите из нативного приложения через WeChat SDK.'
    },
    dingtalkProviderName: 'DingTalk'
  },
  customPage: {
    copyCode: 'Копировать',
    copiedCode: 'Скопировано ✓'
  },
  admin: {
    redeem: {
      batchUpdate: 'Массовое обновление',
      batchUpdateTitle: 'Массовое обновление кодов погашения',
      selectedCount: 'Выбрано кодов погашения: {count}',
      clearSelection: 'Очистить выбор',
      selectCodesFirst: 'Сначала выберите коды погашения',
      noBatchFieldsSelected: 'Выберите хотя бы одно поле для обновления',
      batchUpdateSuccess: 'Обновлено кодов погашения: {count}',
      failedToBatchUpdate: 'Не удалось массово обновить коды погашения',
      batchFields: {
        status: 'Статус',
        expiresAt: 'Срок действия',
        notes: 'Примечания',
        group: 'Группа'
      },
      batchNotesPlaceholder: 'Введите новую заметку или оставьте пустым, чтобы очистить ее',
      clearGroup: 'Очистить группу'
    },
    groups: {
      rateMultiplierBadge: 'Тариф {rate}x',
      copyAccounts: {
        groupOptionLabel: '{name} ({count} аккаунтов)'
      }
    },
    channels: {
      noGroupsSelected: 'Для платформы {platform} не выбраны группы. Выберите хотя бы одну группу или отключите платформу.',
      emptyModelsInPricing: 'В платформе {platform} есть правило тарификации без моделей. Добавьте модели или удалите это правило.',
      syncLatestModels: 'Синхронизировать последние модели',
      syncingModels: 'Синхронизация...',
      syncModelsSuccess: 'Синхронизировано новых моделей: {count}',
      syncModelsAlreadyUpToDate: 'Список моделей уже актуален',
      syncModelsError: 'Не удалось синхронизировать модели',
      form: {
        minTokens: 'Min',
        maxTokens: 'Max',
        inclusive: '(вкл.)'
      },
      validation: {
        minTokensNegative: 'Интервал #{index}: минимальное число токенов ({min}) не может быть отрицательным',
        maxTokensPositive: 'Интервал #{index}: максимальное число токенов ({max}) должно быть больше 0',
        maxTokensGreaterThanMin: 'Интервал #{index}: максимальное число токенов ({max}) должно быть больше минимального ({min})',
        priceNegative: 'Интервал #{index}: {name} не может быть отрицательной',
        unlimitedLast: 'Интервал #{index}: интервал без верхней границы (пустой максимум токенов) должен быть последним',
        overlap: 'Интервалы #{prevIndex} и #{currentIndex} пересекаются: предыдущая верхняя граница ({prevMax}) больше текущей нижней границы ({currentMin})',
        priceFields: {
          input: 'Цена входа',
          output: 'Цена выхода',
          cacheWrite: 'Цена записи кэша',
          cacheRead: 'Цена чтения кэша',
          perRequest: 'Цена за запрос'
        }
      }
    },
    settings: {
      emailTemplates: {
        title: 'Шаблоны писем',
        description: 'Настраивайте тему и HTML-содержимое уведомлений по каждому событию и языку.',
        event: 'Событие',
        locale: 'Язык',
        localeEn: 'Английский',
        localeZh: 'Китайский',
        subject: 'Тема',
        subjectPlaceholder: 'Введите тему письма',
        html: 'HTML шаблон',
        htmlPlaceholder: 'Редактируйте HTML шаблон письма',
        placeholders: 'Доступные плейсхолдеры',
        placeholdersHelp: 'Нажмите на плейсхолдер, чтобы скопировать его. При отправке письма backend заменит эти значения.',
        livePreview: 'Предпросмотр',
        previewSecurityHint: 'HTML предпросмотра генерируется backend API предпросмотра и отображается в sandbox iframe с отключенными скриптами.',
        preview: 'Предпросмотр / Обновить',
        previewing: 'Предпросмотр...',
        save: 'Сохранить шаблон',
        saving: 'Сохранение...',
        restoreOfficial: 'Восстановить официальный шаблон',
        restoring: 'Восстановление...',
        restoreConfirm: 'Восстановить официальный шаблон для этого события и языка? Текущая пользовательская версия будет заменена.',
        restoreSuccess: 'Официальный шаблон восстановлен',
        saveSuccess: 'Шаблон письма сохранен',
        placeholderCopied: 'Плейсхолдер скопирован',
        validationRequired: 'Тема и HTML шаблон обязательны',
        empty: 'Пока нет доступных событий или языков шаблонов писем.',
        noPreview: 'Обновите предпросмотр, чтобы увидеть итоговую тему письма.',
        customized: 'Изменено',
        eventLabels: {
          authVerifyCode: 'Код подтверждения почты',
          authPasswordReset: 'Сброс пароля',
          notificationEmailVerifyCode: 'Код подтверждения почты для уведомлений',
          subscriptionPurchaseSuccess: 'Покупка подписки завершена',
          subscriptionExpiryReminder: 'Напоминание об окончании подписки',
          balanceLow: 'Оповещение о низком балансе',
          balanceRechargeSuccess: 'Пополнение баланса успешно',
          accountQuotaAlert: 'Оповещение о квоте аккаунта',
          contentModerationViolation: 'Уведомление о нарушении риск-контроля',
          contentModerationDisabled: 'Аккаунт отключен риск-контролем',
          opsAlert: 'Операционное оповещение',
          opsScheduledReport: 'Операционный отчет по расписанию'
        },
        eventDescriptions: {
          authVerifyCode: 'Отправляется в сценариях регистрации, привязки почты, отложенного OAuth e-mail и проверки TOTP.',
          authPasswordReset: 'Отправляется, когда пользователь запрашивает ссылку для сброса пароля.',
          notificationEmailVerifyCode: 'Отправляется, когда пользователь подтверждает дополнительный адрес почты для уведомлений.',
          subscriptionPurchaseSuccess: 'Отправляется после успешного завершения покупки подписки.',
          subscriptionExpiryReminder: 'Необязательное напоминание, отправляемое перед окончанием активной подписки.',
          balanceLow: 'Необязательное оповещение, отправляемое, когда баланс опускается ниже настроенного порога.',
          balanceRechargeSuccess: 'Отправляется после успешного завершения пополнения баланса.',
          accountQuotaAlert: 'Отправляется на настроенные администраторские адреса уведомлений, когда квота upstream аккаунта пересекает порог.',
          contentModerationViolation: 'Отправляется пользователю, когда запрос срабатывает на правила модерации контента или риск-контроля.',
          contentModerationDisabled: 'Отправляется пользователю, когда модерация контента автоматически отключает его аккаунт.',
          opsAlert: 'Отправляется настроенным операционным получателям, когда срабатывает правило операционного оповещения.',
          opsScheduledReport: 'Отправляется настроенным операционным получателям для ежедневных, еженедельных, ошибочных или health-отчетов по аккаунтам.'
        }
      },
      payment: {
        alipayForceQRCode: 'Всегда показывать QR-код Alipay',
        alipayForceQRCodeHint: 'Если включено, мобильные пользователи Alipay всегда будут видеть QR-код вместо перехода на мобильную страницу оплаты'
      },
      dingtalk: {
        defaultDisplayNameAttrName: 'Имя DingTalk',
        defaultCorpEmailAttrName: 'Корпоративная почта DingTalk',
        defaultDeptAttrName: 'Отдел DingTalk'
      },
      authSourceDefaults: {
        sources: {
          dingtalk: {
            title: 'Вход через DingTalk',
            description: 'Права по умолчанию для регистраций через DingTalk.'
          }
        }
      }
    },
    riskControl: {
      tabs: {
        keywords: 'Блокировка по ключевым словам'
      },
      blockedKeywords: 'Блокируемые ключевые слова',
      blockedKeywordsPlaceholder: 'По одному слову в строке\nНапример:\nслово1\nслово2',
      blockedKeywordsDescription: 'Совпадение без учёта регистра. Будет ли вызван upstream API модерации после совпадения, зависит от стратегии ниже.',
      blockedKeywordsPreBlockHint: 'Блокировка по ключевым словам работает только в режиме «Предварительная блокировка».',
      blockedKeywordsModeWarning: 'Текущий режим — «{mode}». Блокировка по ключевым словам начнёт работать только после переключения на «Предварительную блокировку».',
      blockedKeywordCount: 'Настроено ключевых слов: {count}',
      blockedKeywordsLimit: 'Можно сохранить до {max} ключевых слов, каждое не длиннее 200 символов. Дубликаты удаляются автоматически.',
      keywordBlockingMode: 'Стратегия модерации',
      keywordModeKeywordAndApi: 'Ключевые слова + API',
      keywordModeKeywordAndApiDesc: 'Сразу блокировать при совпадении, иначе передавать запрос в upstream API модерации.',
      keywordModeKeywordOnly: 'Только ключевые слова',
      keywordModeKeywordOnlyDesc: 'Решение принимается только по ключевым словам; если совпадений нет, запрос проходит без вызова API, что снижает стоимость upstream.',
      keywordModeKeywordOnlyNotice: 'Стратегия «Только ключевые слова»: запросы без совпадений проходят без вызова upstream API модерации.',
      keywordModeApiOnly: 'Только API',
      keywordModeApiOnlyDesc: 'Используется только upstream API модерации; список ключевых слов, настроенный здесь, не учитывается.',
      keywordModeApiOnlyNotice: 'Стратегия «Только API»: список ключевых слов игнорируется; все запросы отправляются в upstream API модерации.',
      action: {
        keywordBlock: 'Заблокировано по ключевому слову'
      }
    },
    channelMonitor: {
      form: {
        apiMode: 'Протокол OpenAI',
        apiModeChatCompletions: 'OpenAI Compatible',
        apiModeChatCompletionsHint: 'Использует /v1/chat/completions с messages; подходит для большинства совместимых провайдеров.',
        apiModeResponses: 'Responses API',
        apiModeResponsesHint: 'Использует /v1/responses с instructions + input по умолчанию; подходит для самопроверки и путей Codex.'
      }
    }
  }
}

export default mergeLocaleMessages(messages as Record<string, any>, recentI18nPatch)
