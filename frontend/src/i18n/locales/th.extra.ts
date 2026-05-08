export default {
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
      }
    }
  }
}
