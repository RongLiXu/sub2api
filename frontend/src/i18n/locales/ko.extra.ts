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
  auth: {
    oauthFlow: {
      wechatNativeAppRequired: '이 사이트에는 WeChat 모바일 앱 로그인만 설정되어 있습니다. 네이티브 앱에서 WeChat SDK를 통해 계속하세요.'
    },
    dingtalkProviderName: 'DingTalk'
  },
  customPage: {
    copyCode: '복사',
    copiedCode: '복사됨 ✓'
  },
  admin: {
    groups: {
      rateMultiplierBadge: '{rate}x 요율',
      copyAccounts: {
        groupOptionLabel: '{name} ({count}개 계정)'
      }
    },
    channels: {
      noGroupsSelected: '{platform} 플랫폼에 선택된 그룹이 없습니다. 하나 이상의 그룹을 선택하거나 이 플랫폼을 비활성화하세요.',
      emptyModelsInPricing: '{platform} 플랫폼에 모델이 없는 가격 항목이 있습니다. 모델을 추가하거나 해당 항목을 삭제하세요.',
      syncLatestModels: '최신 모델 동기화',
      syncingModels: '동기화 중...',
      syncModelsSuccess: '새 모델 {count}개를 동기화했습니다',
      syncModelsAlreadyUpToDate: '모델 목록이 이미 최신입니다',
      syncModelsError: '모델 동기화에 실패했습니다',
      form: {
        minTokens: 'Min',
        maxTokens: 'Max',
        inclusive: '(포함)'
      },
      validation: {
        minTokensNegative: '구간 #{index}: 최소 토큰 수({min})는 음수일 수 없습니다',
        maxTokensPositive: '구간 #{index}: 최대 토큰 수({max})는 0보다 커야 합니다',
        maxTokensGreaterThanMin: '구간 #{index}: 최대 토큰 수({max})는 최소 토큰 수({min})보다 커야 합니다',
        priceNegative: '구간 #{index}: {name}은(는) 음수일 수 없습니다',
        unlimitedLast: '구간 #{index}: 상한 없는 구간(최대 토큰 수 비움)은 마지막에만 둘 수 있습니다',
        overlap: '구간 #{prevIndex}와 #{currentIndex}가 겹칩니다: 이전 상한({prevMax})이 현재 하한({currentMin})보다 큽니다',
        priceFields: {
          input: '입력 가격',
          output: '출력 가격',
          cacheWrite: '캐시 쓰기 가격',
          cacheRead: '캐시 읽기 가격',
          perRequest: '요청당 가격'
        }
      }
    },
    settings: {
      emailTemplates: {
        title: '이메일 템플릿',
        description: '이벤트와 언어별로 알림 이메일의 제목과 HTML 내용을 사용자화합니다.',
        event: '이벤트',
        locale: '언어',
        localeEn: '영어',
        localeZh: '중국어',
        subject: '제목',
        subjectPlaceholder: '이메일 제목을 입력하세요',
        html: 'HTML 템플릿',
        htmlPlaceholder: '이메일 HTML 템플릿을 편집하세요',
        placeholders: '사용 가능한 플레이스홀더',
        placeholdersHelp: '플레이스홀더를 클릭하면 복사됩니다. 이메일 전송 시 백엔드가 이 값을 치환합니다.',
        livePreview: '실시간 미리보기',
        previewSecurityHint: '미리보기 HTML 은 백엔드 미리보기 엔드포인트에서 생성되며, 스크립트가 비활성화된 sandbox iframe 에 표시됩니다.',
        preview: '미리보기 / 새로고침',
        previewing: '미리보기 중...',
        save: '템플릿 저장',
        saving: '저장 중...',
        restoreOfficial: '공식 템플릿 복원',
        restoring: '복원 중...',
        restoreConfirm: '이 이벤트와 언어의 공식 템플릿으로 복원하시겠습니까? 현재 사용자 정의 버전은 대체됩니다.',
        restoreSuccess: '공식 템플릿을 복원했습니다',
        saveSuccess: '이메일 템플릿을 저장했습니다',
        placeholderCopied: '플레이스홀더를 복사했습니다',
        validationRequired: '제목과 HTML 템플릿은 필수입니다',
        empty: '사용 가능한 이메일 템플릿 이벤트 또는 언어가 아직 없습니다.',
        noPreview: '미리보기를 새로고침하면 렌더링된 이메일 제목을 확인할 수 있습니다.',
        customized: '사용자 정의됨',
        eventLabels: {
          authVerifyCode: '이메일 인증 코드',
          authPasswordReset: '비밀번호 재설정',
          notificationEmailVerifyCode: '알림 이메일 인증 코드',
          subscriptionPurchaseSuccess: '구독 구매 성공',
          subscriptionExpiryReminder: '구독 만료 알림',
          balanceLow: '잔액 부족 알림',
          balanceRechargeSuccess: '잔액 충전 성공',
          accountQuotaAlert: '계정 한도 알림',
          contentModerationViolation: '리스크 제어 위반 알림',
          contentModerationDisabled: '리스크 제어로 인한 계정 비활성화',
          opsAlert: '운영 알림',
          opsScheduledReport: '운영 정기 보고서'
        },
        eventDescriptions: {
          authVerifyCode: '회원가입, 이메일 연동, OAuth 대기 이메일, TOTP 인증 흐름에서 전송됩니다.',
          authPasswordReset: '사용자가 비밀번호 재설정 링크를 요청할 때 전송됩니다.',
          notificationEmailVerifyCode: '사용자가 추가 알림 이메일 주소를 인증할 때 전송됩니다.',
          subscriptionPurchaseSuccess: '구독 구매가 완료된 뒤 전송됩니다.',
          subscriptionExpiryReminder: '활성 구독이 만료되기 전에 전송되는 선택형 알림입니다.',
          balanceLow: '잔액이 설정된 임계값 아래로 내려갈 때 전송되는 선택형 알림입니다.',
          balanceRechargeSuccess: '잔액 충전 주문이 완료된 뒤 전송됩니다.',
          accountQuotaAlert: '업스트림 계정 할당량이 임계값을 넘을 때 설정된 관리자 알림 이메일로 전송됩니다.',
          contentModerationViolation: '요청이 콘텐츠 검열 또는 리스크 제어 규칙을 트리거할 때 사용자에게 전송됩니다.',
          contentModerationDisabled: '콘텐츠 검열이 사용자 계정을 자동으로 비활성화할 때 사용자에게 전송됩니다.',
          opsAlert: '운영 경보 규칙이 발동할 때 설정된 운영 수신자에게 전송됩니다.',
          opsScheduledReport: '설정된 운영 수신자에게 일간, 주간, 오류 또는 계정 상태 보고서를 예약 발송합니다.'
        }
      },
      payment: {
        alipayForceQRCode: 'Alipay QR 코드 강제',
        alipayForceQRCodeHint: '활성화하면 모바일 Alipay 사용자도 모바일 결제 페이지로 이동하지 않고 항상 QR 코드를 보게 됩니다'
      },
      dingtalk: {
        defaultDisplayNameAttrName: 'DingTalk 이름',
        defaultCorpEmailAttrName: 'DingTalk 회사 이메일',
        defaultDeptAttrName: 'DingTalk 부서'
      },
      authSourceDefaults: {
        sources: {
          dingtalk: {
            title: 'DingTalk 로그인',
            description: 'DingTalk 가입에 적용되는 기본 권한입니다.'
          }
        }
      }
    },
    riskControl: {
      tabs: {
        keywords: '키워드 차단'
      },
      blockedKeywords: '차단 키워드',
      blockedKeywordsPlaceholder: '한 줄에 하나의 키워드\n예:\n금칙어1\n금칙어2',
      blockedKeywordsDescription: '대소문자를 구분하지 않고 매칭됩니다. 일치 후 업스트림 검열 API를 호출할지는 아래 전략에 따라 달라집니다.',
      blockedKeywordsPreBlockHint: '키워드 차단은 "사전 차단" 모드에서만 동작합니다.',
      blockedKeywordsModeWarning: '현재 모드는 "{mode}"입니다. "사전 차단"으로 전환하기 전에는 키워드 차단이 실행되지 않습니다.',
      blockedKeywordCount: '설정된 키워드 {count}개',
      blockedKeywordsLimit: '최대 {max}개의 키워드를 저장할 수 있으며, 각 키워드는 200자를 넘을 수 없습니다. 중복 항목은 자동으로 제거됩니다.',
      keywordBlockingMode: '검열 전략',
      keywordModeKeywordAndApi: '키워드 + API',
      keywordModeKeywordAndApiDesc: '키워드가 일치하면 즉시 차단하고, 일치하지 않으면 업스트림 검열 API로 넘깁니다.',
      keywordModeKeywordOnly: '키워드만',
      keywordModeKeywordOnlyDesc: '키워드만으로 판단하며, 일치하지 않으면 API를 호출하지 않고 통과시켜 업스트림 비용을 절약합니다.',
      keywordModeKeywordOnlyNotice: '"키워드만" 전략이 적용 중입니다. 어떤 키워드와도 일치하지 않는 요청은 업스트림 검열 API 호출 없이 통과됩니다.',
      keywordModeApiOnly: 'API만',
      keywordModeApiOnlyDesc: '업스트림 검열 API만 사용하며, 여기서 설정한 키워드 목록은 참조하지 않습니다.',
      keywordModeApiOnlyNotice: '"API만" 전략이 적용 중입니다. 키워드 목록은 사용되지 않으며 모든 요청이 업스트림 검열 API로 전달됩니다.',
      action: {
        keywordBlock: '키워드 차단'
      }
    },
    channelMonitor: {
      form: {
        apiMode: 'OpenAI 프로토콜',
        apiModeChatCompletions: 'OpenAI Compatible',
        apiModeChatCompletionsHint: '/v1/chat/completions 로 messages 를 전송합니다. 대부분의 호환 제공자에서 사용할 수 있습니다.',
        apiModeResponses: 'Responses API',
        apiModeResponsesHint: '/v1/responses 를 사용하고 기본 instructions + input 을 함께 보냅니다. 자체 점검 / Codex 경로에 적합합니다.'
      }
    }
  }
}

export default mergeLocaleMessages(messages as Record<string, any>, recentI18nPatch)
