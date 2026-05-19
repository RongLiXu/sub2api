export default {
  auth: {
    oauthFlow: {
      wechatNativeAppRequired: 'このサイトでは WeChat モバイルアプリログインのみが設定されています。ネイティブアプリから WeChat SDK 経由で続行してください。'
    },
    dingtalkProviderName: 'DingTalk'
  },
  customPage: {
    copyCode: 'コピー',
    copiedCode: 'コピーしました ✓'
  },
  admin: {
    groups: {
      rateMultiplierBadge: 'レート {rate}x',
      copyAccounts: {
        groupOptionLabel: '{name}（{count} アカウント）'
      }
    },
    channels: {
      noGroupsSelected: '{platform} プラットフォームでグループが選択されていません。少なくとも 1 つのグループを選択するか、このプラットフォームを無効にしてください。',
      emptyModelsInPricing: '{platform} プラットフォームにモデル未設定の価格項目があります。モデルを追加するか、その項目を削除してください。',
      form: {
        minTokens: 'Min',
        maxTokens: 'Max',
        inclusive: '（含む）'
      },
      validation: {
        minTokensNegative: '区間 #{index}: 最小 token 数（{min}）は負数にできません',
        maxTokensPositive: '区間 #{index}: 最大 token 数（{max}）は 0 より大きい必要があります',
        maxTokensGreaterThanMin: '区間 #{index}: 最大 token 数（{max}）は最小 token 数（{min}）より大きい必要があります',
        priceNegative: '区間 #{index}: {name}は負数にできません',
        unlimitedLast: '区間 #{index}: 上限なし区間（最大 token 数が空）は最後に配置してください',
        overlap: '区間 #{prevIndex} と #{currentIndex} が重複しています: 前の上限（{prevMax}）が現在の下限（{currentMin}）より大きいです',
        priceFields: {
          input: '入力価格',
          output: '出力価格',
          cacheWrite: 'キャッシュ書き込み価格',
          cacheRead: 'キャッシュ読み取り価格',
          perRequest: 'リクエスト単価'
        }
      }
    },
    settings: {
      dingtalk: {
        defaultDisplayNameAttrName: 'DingTalk 名',
        defaultCorpEmailAttrName: 'DingTalk 企業メール',
        defaultDeptAttrName: 'DingTalk 部門'
      },
      authSourceDefaults: {
        sources: {
          dingtalk: {
            title: 'DingTalk ログイン',
            description: 'DingTalk 登録に適用されるデフォルト権限です。'
          }
        }
      }
    }
  }
}
