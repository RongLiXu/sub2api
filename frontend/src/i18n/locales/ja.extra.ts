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
      syncLatestModels: '最新モデルを同期',
      syncingModels: '同期中...',
      syncModelsSuccess: '{count} 件の新しいモデルを同期しました',
      syncModelsAlreadyUpToDate: 'モデル一覧はすでに最新です',
      syncModelsError: 'モデルの同期に失敗しました',
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
      payment: {
        alipayForceQRCode: 'Alipay を常に QR コードに固定',
        alipayForceQRCodeHint: '有効にすると、モバイル版 Alipay でも携帯向け決済ページへ遷移せず、常に QR コードを表示します'
      },
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
    },
    riskControl: {
      tabs: {
        keywords: 'キーワード遮断'
      },
      blockedKeywords: '遮断キーワード',
      blockedKeywordsPlaceholder: '1 行に 1 つのキーワード\n例:\nngword1\nngword2',
      blockedKeywordsDescription: '大文字と小文字を区別せずに一致します。ヒット後に上流の審査 API を呼ぶかどうかは、下の戦略で決まります。',
      blockedKeywordsPreBlockHint: 'キーワード遮断は「事前ブロック」モードでのみ有効です。',
      blockedKeywordsModeWarning: '現在のモードは「{mode}」です。「事前ブロック」に切り替えるまでキーワード遮断は実行されません。',
      blockedKeywordCount: '{count} 個のキーワードを設定済み',
      blockedKeywordsLimit: '最大 {max} 個まで保存でき、各キーワードは 200 文字以内です。重複は自動で除去されます。',
      keywordBlockingMode: '審査戦略',
      keywordModeKeywordAndApi: 'キーワード + API',
      keywordModeKeywordAndApiDesc: 'キーワードに一致したら即時ブロックし、不一致なら上流の審査 API に渡します。',
      keywordModeKeywordOnly: 'キーワードのみ',
      keywordModeKeywordOnlyDesc: 'キーワードだけで判定し、不一致のときは API を呼ばずに通過させるため、上流コストを節約できます。',
      keywordModeKeywordOnlyNotice: '現在は「キーワードのみ」戦略です。どのキーワードにも一致しないリクエストは、上流の審査 API を呼ばずにそのまま通過します。',
      keywordModeApiOnly: 'API のみ',
      keywordModeApiOnlyDesc: '上流の審査 API のみを使用し、ここで設定したキーワード一覧は参照しません。',
      keywordModeApiOnlyNotice: '現在は「API のみ」戦略です。キーワード一覧は参照されず、すべてのリクエストが上流の審査 API に送られます。',
      action: {
        keywordBlock: 'キーワード遮断'
      }
    },
    channelMonitor: {
      form: {
        apiMode: 'OpenAI プロトコル',
        apiModeChatCompletions: 'OpenAI Compatible',
        apiModeChatCompletionsHint: '/v1/chat/completions を使って messages を送信します。多くの互換プロバイダで利用できます。',
        apiModeResponses: 'Responses API',
        apiModeResponsesHint: '/v1/responses を使い、デフォルトで instructions と input を付けます。自己診断や Codex 系の経路向けです。'
      }
    }
  }
}
