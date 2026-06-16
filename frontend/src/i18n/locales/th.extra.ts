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
      }
    }
  }
}

const recentI18nPatch = {
  keyUsage: {
    dateRange90d: '90 วัน',
    dailyDetail: 'รายละเอียดรายวัน',
    date: 'วันที่',
    cacheWriteTokens: 'เขียนแคช',
    noDailyUsage: 'ยังไม่มีข้อมูลการใช้งานรายวัน'
  },
  auth: {
    oauthFlow: {
      wechatNativeAppRequired: 'ไซต์นี้ตั้งค่าเฉพาะการเข้าสู่ระบบ WeChat ผ่านแอปมือถือ โปรดดำเนินการต่อจากแอป native ผ่าน WeChat SDK'
    },
    dingtalkProviderName: 'DingTalk'
  },
  customPage: {
    copyCode: 'คัดลอก',
    copiedCode: 'คัดลอกแล้ว ✓'
  },
  admin: {
    redeem: {
      batchUpdate: 'แก้ไขเป็นชุด',
      batchUpdateTitle: 'แก้ไขรหัสแลกเป็นชุด',
      selectedCount: 'เลือกแล้ว {count} รหัสแลก',
      clearSelection: 'ล้างการเลือก',
      selectCodesFirst: 'กรุณาเลือกรหัสแลกก่อน',
      noBatchFieldsSelected: 'กรุณาเลือกอย่างน้อยหนึ่งฟิลด์ที่ต้องการแก้ไข',
      batchUpdateSuccess: 'แก้ไขรหัสแลกสำเร็จ {count} รายการ',
      failedToBatchUpdate: 'แก้ไขรหัสแลกเป็นชุดไม่สำเร็จ',
      batchFields: {
        status: 'สถานะ',
        expiresAt: 'เวลาหมดอายุ',
        notes: 'หมายเหตุ',
        group: 'กลุ่ม'
      },
      batchNotesPlaceholder: 'กรอกหมายเหตุใหม่ หรือเว้นว่างเพื่อล้างหมายเหตุ',
      clearGroup: 'ล้างกลุ่ม'
    },
    groups: {
      rateMultiplierBadge: 'อัตรา {rate}x',
      copyAccounts: {
        groupOptionLabel: '{name} ({count} บัญชี)'
      }
    },
    channels: {
      noGroupsSelected: 'แพลตฟอร์ม {platform} ยังไม่ได้เลือกกลุ่ม โปรดเลือกอย่างน้อยหนึ่งกลุ่มหรือปิดใช้งานแพลตฟอร์มนี้',
      emptyModelsInPricing: 'แพลตฟอร์ม {platform} มีรายการราคาที่ไม่มีโมเดล โปรดเพิ่มโมเดลหรือลบรายการนั้น',
      form: {
        minTokens: 'Min',
        maxTokens: 'Max',
        inclusive: '(รวม)',
        syncLatestModels: 'ซิงก์โมเดลล่าสุด',
        syncingModels: 'กำลังซิงก์...',
        syncModelsSuccess: 'ซิงก์โมเดลใหม่แล้ว {count} รายการ',
        syncModelsAlreadyUpToDate: 'รายการโมเดลเป็นเวอร์ชันล่าสุดแล้ว',
        syncModelsError: 'ซิงก์โมเดลไม่สำเร็จ'
      },
      validation: {
        minTokensNegative: 'ช่วง #{index}: จำนวน token ต่ำสุด ({min}) ต้องไม่ติดลบ',
        maxTokensPositive: 'ช่วง #{index}: จำนวน token สูงสุด ({max}) ต้องมากกว่า 0',
        maxTokensGreaterThanMin: 'ช่วง #{index}: จำนวน token สูงสุด ({max}) ต้องมากกว่าจำนวนต่ำสุด ({min})',
        priceNegative: 'ช่วง #{index}: {name} ต้องไม่ติดลบ',
        unlimitedLast: 'ช่วง #{index}: ช่วงไม่จำกัด (เว้นค่า token สูงสุดว่าง) ต้องอยู่เป็นรายการสุดท้าย',
        overlap: 'ช่วง #{prevIndex} และ #{currentIndex} ซ้อนทับกัน: ขอบเขตบนก่อนหน้า ({prevMax}) มากกว่าขอบเขตล่างปัจจุบัน ({currentMin})',
        priceFields: {
          input: 'ราคา input',
          output: 'ราคา output',
          cacheWrite: 'ราคาเขียน cache',
          cacheRead: 'ราคาอ่าน cache',
          perRequest: 'ราคาต่อ request'
        }
      }
    },
    settings: {
      emailTemplates: {
        title: 'เทมเพลตอีเมล',
        description: 'ปรับแต่งหัวเรื่องและเนื้อหา HTML ของอีเมลแจ้งเตือนตามเหตุการณ์และภาษา',
        event: 'เหตุการณ์',
        locale: 'ภาษา',
        localeEn: 'อังกฤษ',
        localeZh: 'จีน',
        subject: 'หัวเรื่อง',
        subjectPlaceholder: 'กรอกหัวเรื่องอีเมล',
        html: 'เทมเพลต HTML',
        htmlPlaceholder: 'แก้ไขเทมเพลต HTML ของอีเมล',
        placeholders: 'ตัวแปรที่ใช้ได้',
        placeholdersHelp: 'คลิกตัวแปรเพื่อคัดลอก Backend จะแทนค่าพวกนี้ตอนส่งอีเมล',
        livePreview: 'แสดงตัวอย่างแบบสด',
        previewSecurityHint: 'HTML ตัวอย่างถูกสร้างโดย endpoint preview ของ backend และแสดงใน sandbox iframe ที่ปิดการทำงานของสคริปต์',
        preview: 'แสดงตัวอย่าง / รีเฟรช',
        previewing: 'กำลังแสดงตัวอย่าง...',
        save: 'บันทึกเทมเพลต',
        saving: 'กำลังบันทึก...',
        restoreOfficial: 'กู้คืนเทมเพลตทางการ',
        restoring: 'กำลังกู้คืน...',
        restoreConfirm: 'ต้องการกู้คืนเทมเพลตทางการสำหรับเหตุการณ์และภาษานี้หรือไม่? เวอร์ชันที่ปรับแต่งอยู่จะถูกแทนที่',
        restoreSuccess: 'กู้คืนเทมเพลตทางการแล้ว',
        saveSuccess: 'บันทึกเทมเพลตอีเมลแล้ว',
        placeholderCopied: 'คัดลอกตัวแปรแล้ว',
        validationRequired: 'ต้องกรอกหัวเรื่องและเทมเพลต HTML',
        empty: 'ยังไม่มีเหตุการณ์หรือภาษาของเทมเพลตอีเมลที่ใช้งานได้',
        noPreview: 'รีเฟรชตัวอย่างเพื่อดูหัวเรื่องอีเมลหลังเรนเดอร์',
        customized: 'ปรับแต่งแล้ว',
        eventLabels: {
          authVerifyCode: 'รหัสยืนยันอีเมล',
          authPasswordReset: 'รีเซ็ตรหัสผ่าน',
          notificationEmailVerifyCode: 'รหัสยืนยันอีเมลแจ้งเตือน',
          subscriptionPurchaseSuccess: 'ซื้อสมาชิกสำเร็จ',
          subscriptionExpiryReminder: 'เตือนสมาชิกใกล้หมดอายุ',
          balanceLow: 'แจ้งเตือนยอดคงเหลือต่ำ',
          balanceRechargeSuccess: 'เติมยอดคงเหลือสำเร็จ',
          accountQuotaAlert: 'แจ้งเตือนโควต้าบัญชี',
          contentModerationViolation: 'แจ้งเตือนการละเมิดการควบคุมความเสี่ยง',
          contentModerationDisabled: 'บัญชีถูกปิดโดยการควบคุมความเสี่ยง',
          opsAlert: 'แจ้งเตือนการปฏิบัติการ',
          opsScheduledReport: 'รายงานการปฏิบัติการตามกำหนด'
        },
        eventDescriptions: {
          authVerifyCode: 'ส่งในขั้นตอนสมัครสมาชิก ผูกอีเมล อีเมล OAuth ที่รอกรอก และการยืนยัน TOTP',
          authPasswordReset: 'ส่งเมื่อผู้ใช้ขอลิงก์รีเซ็ตรหัสผ่าน',
          notificationEmailVerifyCode: 'ส่งเมื่อผู้ใช้ยืนยันอีเมลแจ้งเตือนเพิ่มเติม',
          subscriptionPurchaseSuccess: 'ส่งหลังจากคำสั่งซื้อสมาชิกเสร็จสมบูรณ์',
          subscriptionExpiryReminder: 'การแจ้งเตือนแบบเลือกได้ที่ส่งก่อนสมาชิกที่ยังใช้งานอยู่จะหมดอายุ',
          balanceLow: 'การแจ้งเตือนแบบเลือกได้ที่ส่งเมื่อยอดคงเหลือต่ำกว่าค่าที่กำหนด',
          balanceRechargeSuccess: 'ส่งหลังจากคำสั่งซื้อเติมยอดคงเหลือเสร็จสมบูรณ์',
          accountQuotaAlert: 'ส่งไปยังอีเมลแจ้งเตือนผู้ดูแลระบบที่ตั้งไว้เมื่อโควต้าบัญชี upstream แตะค่าที่กำหนด',
          contentModerationViolation: 'ส่งให้ผู้ใช้เมื่อคำขอไปชนกฎ moderation เนื้อหาหรือการควบคุมความเสี่ยง',
          contentModerationDisabled: 'ส่งให้ผู้ใช้เมื่อ moderation เนื้อหาปิดการใช้งานบัญชีของเขาโดยอัตโนมัติ',
          opsAlert: 'ส่งไปยังผู้รับฝ่ายปฏิบัติการที่ตั้งไว้เมื่อกฎแจ้งเตือนการปฏิบัติการทำงาน',
          opsScheduledReport: 'ส่งรายงานรายวัน รายสัปดาห์ รายงานข้อผิดพลาด หรือรายงานสุขภาพบัญชีตามกำหนดให้ผู้รับฝ่ายปฏิบัติการที่ตั้งไว้'
        }
      },
      payment: {
        alipayForceQRCode: 'บังคับใช้ QR Code สำหรับ Alipay',
        alipayForceQRCodeHint: 'เมื่อเปิดใช้งาน ผู้ใช้ Alipay บนมือถือจะเห็น QR code เสมอแทนการถูกพาไปยังหน้าชำระเงินบนมือถือ'
      },
      dingtalk: {
        defaultDisplayNameAttrName: 'ชื่อ DingTalk',
        defaultCorpEmailAttrName: 'อีเมลองค์กร DingTalk',
        defaultDeptAttrName: 'แผนก DingTalk'
      },
      authSourceDefaults: {
        sources: {
          dingtalk: {
            title: 'เข้าสู่ระบบด้วย DingTalk',
            description: 'สิทธิ์เริ่มต้นสำหรับการสมัครผ่าน DingTalk'
          }
        }
      }
    },
    riskControl: {
      tabs: {
        keywords: 'บล็อกคีย์เวิร์ด'
      },
      blockedKeywords: 'คีย์เวิร์ดที่บล็อก',
      blockedKeywordsPlaceholder: 'หนึ่งคีย์เวิร์ดต่อหนึ่งบรรทัด\nตัวอย่าง:\nคำต้องห้าม1\nคำต้องห้าม2',
      blockedKeywordsDescription: 'จับคู่แบบไม่แยกตัวพิมพ์เล็ก-ใหญ่ การจะเรียก upstream moderation API หลังจากจับคู่ได้หรือไม่ขึ้นอยู่กับกลยุทธ์ด้านล่าง',
      blockedKeywordsPreBlockHint: 'การบล็อกคีย์เวิร์ดจะมีผลเฉพาะในโหมด "บล็อกล่วงหน้า" เท่านั้น',
      blockedKeywordsModeWarning: 'โหมดปัจจุบันคือ "{mode}" การบล็อกคีย์เวิร์ดจะยังไม่ทำงานจนกว่าคุณจะสลับเป็น "บล็อกล่วงหน้า"',
      blockedKeywordCount: 'ตั้งค่าคีย์เวิร์ดแล้ว {count} รายการ',
      blockedKeywordsLimit: 'บันทึกได้สูงสุด {max} คีย์เวิร์ด แต่ละคำยาวไม่เกิน 200 อักขระ และรายการซ้ำจะถูกลบอัตโนมัติ',
      keywordBlockingMode: 'กลยุทธ์การกลั่นกรอง',
      keywordModeKeywordAndApi: 'คีย์เวิร์ด + API',
      keywordModeKeywordAndApiDesc: 'บล็อกทันทีเมื่อคีย์เวิร์ดตรงกัน มิฉะนั้นจึงส่งต่อไปยัง upstream moderation API',
      keywordModeKeywordOnly: 'คีย์เวิร์ดเท่านั้น',
      keywordModeKeywordOnlyDesc: 'ตัดสินจากคีย์เวิร์ดเท่านั้น หากไม่ตรงกันจะปล่อยผ่านโดยไม่เรียก API ช่วยลดต้นทุน upstream',
      keywordModeKeywordOnlyNotice: 'กำลังใช้กลยุทธ์ "คีย์เวิร์ดเท่านั้น": คำขอที่ไม่ตรงกับคีย์เวิร์ดใด ๆ จะถูกปล่อยผ่านโดยไม่เรียก upstream moderation API',
      keywordModeApiOnly: 'API เท่านั้น',
      keywordModeApiOnlyDesc: 'ใช้เฉพาะ upstream moderation API โดยจะไม่อ้างอิงรายการคีย์เวิร์ดที่ตั้งค่าไว้ที่นี่',
      keywordModeApiOnlyNotice: 'กำลังใช้กลยุทธ์ "API เท่านั้น": รายการคีย์เวิร์ดจะไม่ถูกใช้ และทุกคำขอจะถูกส่งไปยัง upstream moderation API',
      action: {
        keywordBlock: 'บล็อกด้วยคีย์เวิร์ด'
      }
    },
    channelMonitor: {
      form: {
        apiMode: 'โปรโตคอล OpenAI',
        apiModeChatCompletions: 'OpenAI Compatible',
        apiModeChatCompletionsHint: 'ใช้ /v1/chat/completions พร้อม messages; ใช้งานได้กับผู้ให้บริการที่เข้ากันได้ส่วนใหญ่',
        apiModeResponses: 'Responses API',
        apiModeResponsesHint: 'ใช้ /v1/responses พร้อม instructions + input โดยค่าเริ่มต้น; เหมาะกับเส้นทาง self-check / Codex'
      }
    }
  }
}

export default mergeLocaleMessages(messages as Record<string, any>, recentI18nPatch)
