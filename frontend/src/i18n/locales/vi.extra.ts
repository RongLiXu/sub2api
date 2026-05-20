export default {
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
