export default {
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
