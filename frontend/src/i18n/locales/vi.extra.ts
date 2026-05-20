export default {
  keyUsage: {
    dateRange90d: '90 ngay',
    dailyDetail: 'Chi tiet theo ngay',
    date: 'Ngay',
    cacheWriteTokens: 'Ghi cache',
    noDailyUsage: 'Khong co du lieu su dung theo ngay'
  },
  auth: {
    oauthFlow: {
      wechatNativeAppRequired: 'Trang này chỉ cấu hình đăng nhập WeChat bằng ứng dụng di động. Vui lòng tiếp tục từ ứng dụng native qua WeChat SDK.'
    },
    dingtalkProviderName: 'DingTalk'
  },
  customPage: {
    copyCode: 'Sao chép',
    copiedCode: 'Đã sao chép ✓'
  },
  admin: {
    redeem: {
      batchUpdate: 'Cap nhat hang loat',
      batchUpdateTitle: 'Cap nhat hang loat ma doi',
      selectedCount: 'Da chon {count} ma doi',
      clearSelection: 'Bo chon',
      selectCodesFirst: 'Hay chon ma doi truoc',
      noBatchFieldsSelected: 'Hay chon it nhat mot truong can cap nhat',
      batchUpdateSuccess: 'Da cap nhat {count} ma doi',
      failedToBatchUpdate: 'Cap nhat hang loat ma doi that bai',
      batchFields: {
        status: 'Trang thai',
        expiresAt: 'Ngay het han',
        notes: 'Ghi chu',
        group: 'Nhom'
      },
      batchNotesPlaceholder: 'Nhap ghi chu moi, de trong de xoa ghi chu',
      clearGroup: 'Xoa nhom'
    },
    groups: {
      rateMultiplierBadge: 'Hệ số {rate}x',
      copyAccounts: {
        groupOptionLabel: '{name} ({count} tài khoản)'
      }
    },
    channels: {
      noGroupsSelected: 'Nền tảng {platform} chưa chọn nhóm nào. Hãy chọn ít nhất một nhóm hoặc tắt nền tảng này.',
      emptyModelsInPricing: 'Nền tảng {platform} có mục giá chưa thêm mô hình. Hãy thêm mô hình hoặc xóa mục đó.',
      syncLatestModels: 'Đồng bộ mô hình mới nhất',
      syncingModels: 'Đang đồng bộ...',
      syncModelsSuccess: 'Đã đồng bộ {count} mô hình mới',
      syncModelsAlreadyUpToDate: 'Danh sách mô hình đã là mới nhất',
      syncModelsError: 'Đồng bộ mô hình thất bại',
      form: {
        minTokens: 'Min',
        maxTokens: 'Max',
        inclusive: '(bao gồm)'
      },
      validation: {
        minTokensNegative: 'Khoảng #{index}: số token tối thiểu ({min}) không được âm',
        maxTokensPositive: 'Khoảng #{index}: số token tối đa ({max}) phải lớn hơn 0',
        maxTokensGreaterThanMin: 'Khoảng #{index}: số token tối đa ({max}) phải lớn hơn số tối thiểu ({min})',
        priceNegative: 'Khoảng #{index}: {name} không được âm',
        unlimitedLast: 'Khoảng #{index}: khoảng không giới hạn (để trống token tối đa) phải là khoảng cuối cùng',
        overlap: 'Khoảng #{prevIndex} và #{currentIndex} bị chồng lấn: giới hạn trên trước đó ({prevMax}) lớn hơn giới hạn dưới hiện tại ({currentMin})',
        priceFields: {
          input: 'Giá input',
          output: 'Giá output',
          cacheWrite: 'Giá ghi cache',
          cacheRead: 'Giá đọc cache',
          perRequest: 'Giá mỗi request'
        }
      }
    },
    settings: {
      emailTemplates: {
        title: 'Mau email',
        description: 'Tuy chinh tieu de va noi dung HTML cua email thong bao theo tung su kien va ngon ngu.',
        event: 'Su kien',
        locale: 'Ngon ngu',
        localeEn: 'Tieng Anh',
        localeZh: 'Tieng Trung',
        subject: 'Tieu de',
        subjectPlaceholder: 'Nhap tieu de email',
        html: 'Mau HTML',
        htmlPlaceholder: 'Chinh sua mau HTML cua email',
        placeholders: 'Bien thay the',
        placeholdersHelp: 'Bam vao bien thay the de sao chep. Backend se thay cac gia tri nay khi gui email.',
        livePreview: 'Xem truoc truc tiep',
        previewSecurityHint: 'HTML xem truoc duoc tao boi API xem truoc cua backend va hien thi trong iframe sandbox da tat script.',
        preview: 'Xem truoc / Lam moi',
        previewing: 'Dang xem truoc...',
        save: 'Luu mau',
        saving: 'Dang luu...',
        restoreOfficial: 'Khoi phuc mau chinh thuc',
        restoring: 'Dang khoi phuc...',
        restoreConfirm: 'Khoi phuc mau chinh thuc cho su kien va ngon ngu nay? Ban tuy chinh hien tai se bi thay the.',
        restoreSuccess: 'Da khoi phuc mau chinh thuc',
        saveSuccess: 'Da luu mau email',
        placeholderCopied: 'Da sao chep bien thay the',
        validationRequired: 'Bat buoc nhap tieu de va mau HTML',
        empty: 'Chua co su kien hoac ngon ngu mau email nao kha dung.',
        noPreview: 'Lam moi ban xem truoc de xem tieu de email sau khi render.',
        customized: 'Da tuy chinh',
        eventLabels: {
          authVerifyCode: 'Ma xac minh email',
          authPasswordReset: 'Dat lai mat khau',
          notificationEmailVerifyCode: 'Ma xac minh email thong bao',
          subscriptionPurchaseSuccess: 'Mua goi thanh cong',
          subscriptionExpiryReminder: 'Nhac nho het han goi',
          balanceLow: 'Canh bao so du thap',
          balanceRechargeSuccess: 'Nap so du thanh cong',
          accountQuotaAlert: 'Canh bao han muc tai khoan',
          contentModerationViolation: 'Thong bao vi pham kiem duyet',
          contentModerationDisabled: 'Tai khoan bi vo hieu hoa do kiem duyet',
          opsAlert: 'Canh bao van hanh',
          opsScheduledReport: 'Bao cao van hanh dinh ky'
        },
        eventDescriptions: {
          authVerifyCode: 'Gui trong cac luong dang ky, lien ket email, email cho OAuth dang cho bo sung va xac minh TOTP.',
          authPasswordReset: 'Gui khi nguoi dung yeu cau lien ket dat lai mat khau.',
          notificationEmailVerifyCode: 'Gui khi nguoi dung xac minh mot dia chi email thong bao bo sung.',
          subscriptionPurchaseSuccess: 'Gui sau khi don mua goi dang ky da duoc hoan tat.',
          subscriptionExpiryReminder: 'Thong bao tuy chon duoc gui truoc khi goi dang ky con hieu luc sap het han.',
          balanceLow: 'Thong bao tuy chon duoc gui khi so du xuong duoi nguong da cau hinh.',
          balanceRechargeSuccess: 'Gui sau khi don nap so du da duoc hoan tat.',
          accountQuotaAlert: 'Gui den cac email thong bao cua quan tri vien khi han muc tai khoan upstream vuot nguong.',
          contentModerationViolation: 'Gui cho nguoi dung khi yeu cau kich hoat quy tac kiem duyet noi dung hoac kiem soat rui ro.',
          contentModerationDisabled: 'Gui cho nguoi dung khi kiem duyet noi dung tu dong vo hieu hoa tai khoan.',
          opsAlert: 'Gui den nguoi nhan van hanh da cau hinh khi quy tac canh bao van hanh kich hoat.',
          opsScheduledReport: 'Gui bao cao hang ngay, hang tuan, loi hoac suc khoe tai khoan theo lich cho nguoi nhan van hanh da cau hinh.'
        }
      },
      payment: {
        alipayForceQRCode: 'Buộc Alipay dùng mã QR',
        alipayForceQRCodeHint: 'Khi bật, người dùng Alipay trên di động sẽ luôn thấy mã QR thay vì bị chuyển sang trang thanh toán di động'
      },
      dingtalk: {
        defaultDisplayNameAttrName: 'Tên DingTalk',
        defaultCorpEmailAttrName: 'Email doanh nghiệp DingTalk',
        defaultDeptAttrName: 'Phòng ban DingTalk'
      },
      authSourceDefaults: {
        sources: {
          dingtalk: {
            title: 'Đăng nhập DingTalk',
            description: 'Quyền mặc định cho đăng ký qua DingTalk.'
          }
        }
      }
    },
    riskControl: {
      tabs: {
        keywords: 'Chặn từ khóa'
      },
      blockedKeywords: 'Từ khóa chặn',
      blockedKeywordsPlaceholder: 'Một từ khóa mỗi dòng\nVí dụ:\ntukhoa1\ntukhoa2',
      blockedKeywordsDescription: 'Khớp không phân biệt chữ hoa chữ thường. Có gọi API kiểm duyệt upstream sau khi khớp hay không sẽ phụ thuộc vào chiến lược bên dưới.',
      blockedKeywordsPreBlockHint: 'Chặn từ khóa chỉ có hiệu lực ở chế độ "Chặn trước".',
      blockedKeywordsModeWarning: 'Chế độ hiện tại là "{mode}". Tính năng chặn từ khóa sẽ không chạy cho đến khi bạn chuyển sang "Chặn trước".',
      blockedKeywordCount: 'Đã cấu hình {count} từ khóa',
      blockedKeywordsLimit: 'Lưu tối đa {max} từ khóa, mỗi từ khóa không quá 200 ký tự. Các mục trùng lặp sẽ tự động được loại bỏ.',
      keywordBlockingMode: 'Chiến lược kiểm duyệt',
      keywordModeKeywordAndApi: 'Từ khóa + API',
      keywordModeKeywordAndApiDesc: 'Chặn ngay khi trúng từ khóa; nếu không trúng thì chuyển sang API kiểm duyệt upstream.',
      keywordModeKeywordOnly: 'Chỉ từ khóa',
      keywordModeKeywordOnlyDesc: 'Chỉ dùng từ khóa để quyết định; nếu không khớp thì cho qua mà không gọi API, giúp giảm chi phí upstream.',
      keywordModeKeywordOnlyNotice: 'Chiến lược "Chỉ từ khóa": các yêu cầu không khớp từ khóa nào sẽ được cho qua mà không gọi API kiểm duyệt upstream.',
      keywordModeApiOnly: 'Chỉ API',
      keywordModeApiOnlyDesc: 'Chỉ dùng API kiểm duyệt upstream; danh sách từ khóa cấu hình tại đây sẽ không được tham chiếu.',
      keywordModeApiOnlyNotice: 'Chiến lược "Chỉ API": danh sách từ khóa sẽ không được dùng; mọi yêu cầu đều được gửi đến API kiểm duyệt upstream.',
      action: {
        keywordBlock: 'Chặn bởi từ khóa'
      }
    },
    channelMonitor: {
      form: {
        apiMode: 'Giao thức OpenAI',
        apiModeChatCompletions: 'OpenAI Compatible',
        apiModeChatCompletionsHint: 'Dùng /v1/chat/completions với messages; phù hợp với hầu hết nhà cung cấp tương thích.',
        apiModeResponses: 'Responses API',
        apiModeResponsesHint: 'Dùng /v1/responses với instructions + input mặc định; phù hợp cho tự kiểm tra và luồng Codex.'
      }
    }
  }
}
