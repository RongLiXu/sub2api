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
    }
  }
}
