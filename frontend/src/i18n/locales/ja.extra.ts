export default {
  keyUsage: {
    dateRange90d: '90日',
    dailyDetail: '日次明細',
    date: '日付',
    cacheWriteTokens: 'キャッシュ書き込み',
    noDailyUsage: '日次使用量データがありません'
  },
  usage: {
    cacheTotal: 'キャッシュ',
    cacheBreakdown: 'キャッシュトークン内訳',
    cacheCreationTokensLabel: 'キャッシュ作成',
    cacheReadTokensLabel: 'キャッシュ読み取り'
  },
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
    redeem: {
      batchUpdate: '一括更新',
      batchUpdateTitle: '引き換えコードを一括更新',
      selectedCount: '{count} 件の引き換えコードを選択中',
      clearSelection: '選択を解除',
      selectCodesFirst: '先に引き換えコードを選択してください',
      noBatchFieldsSelected: '更新する項目を少なくとも 1 つ選択してください',
      batchUpdateSuccess: '{count} 件の引き換えコードを更新しました',
      failedToBatchUpdate: '引き換えコードの一括更新に失敗しました',
      batchFields: {
        status: '状態',
        expiresAt: '有効期限',
        notes: '備考',
        group: 'グループ'
      },
      batchNotesPlaceholder: '新しいメモを入力してください。空欄でメモをクリアします',
      clearGroup: 'グループをクリア'
    },
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
        inclusive: '（含む）',
        syncLatestModels: '最新モデルを同期',
        syncingModels: '同期中...',
        syncModelsSuccess: '{count} 件の新しいモデルを同期しました',
        syncModelsAlreadyUpToDate: 'モデル一覧はすでに最新です',
        syncModelsError: 'モデルの同期に失敗しました'
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
      emailTemplates: {
        title: 'メールテンプレート',
        description: 'イベントと言語ごとに通知メールの件名と HTML 内容をカスタマイズします。',
        event: 'イベント',
        locale: '言語',
        localeEn: '英語',
        localeZh: '中国語',
        subject: '件名',
        subjectPlaceholder: 'メール件名を入力',
        html: 'HTML テンプレート',
        htmlPlaceholder: 'メールの HTML テンプレートを編集',
        placeholders: '利用可能なプレースホルダー',
        placeholdersHelp: 'プレースホルダーをクリックするとコピーできます。メール送信時にバックエンドが値を置き換えます。',
        livePreview: 'ライブプレビュー',
        previewSecurityHint: 'プレビュー HTML はバックエンドのプレビュー API で生成され、スクリプトを無効化した sandbox iframe に表示されます。',
        preview: 'プレビュー / 更新',
        previewing: 'プレビュー中...',
        save: 'テンプレートを保存',
        saving: '保存中...',
        restoreOfficial: '公式テンプレートに戻す',
        restoring: '復元中...',
        restoreConfirm: 'このイベントと言語の公式テンプレートに戻しますか？現在のカスタム版は置き換えられます。',
        restoreSuccess: '公式テンプレートを復元しました',
        saveSuccess: 'メールテンプレートを保存しました',
        placeholderCopied: 'プレースホルダーをコピーしました',
        validationRequired: '件名と HTML テンプレートは必須です',
        empty: '利用可能なメールテンプレートイベントまたは言語がまだありません。',
        noPreview: 'プレビューを更新すると、レンダリング後のメール件名を確認できます。',
        customized: 'カスタマイズ済み',
        eventLabels: {
          authVerifyCode: 'メール認証コード',
          authPasswordReset: 'パスワード再設定',
          notificationEmailVerifyCode: '通知先メール認証コード',
          subscriptionPurchaseSuccess: 'サブスクリプション購入成功',
          subscriptionExpiryReminder: 'サブスクリプション期限切れリマインダー',
          balanceLow: '残高不足アラート',
          balanceRechargeSuccess: '残高チャージ成功',
          accountQuotaAlert: 'アカウント上限アラート',
          contentModerationViolation: 'リスク制御違反通知',
          contentModerationDisabled: 'リスク制御によるアカウント無効化',
          opsAlert: '運用アラート',
          opsScheduledReport: '運用定期レポート'
        },
        eventDescriptions: {
          authVerifyCode: '登録、メール連携、OAuth 保留中メール、TOTP 認証の各フローで送信されます。',
          authPasswordReset: 'ユーザーがパスワード再設定リンクを要求したときに送信されます。',
          notificationEmailVerifyCode: 'ユーザーが追加の通知先メールアドレスを認証するときに送信されます。',
          subscriptionPurchaseSuccess: 'サブスクリプション購入が完了した後に送信されます。',
          subscriptionExpiryReminder: '有効なサブスクリプションの期限が切れる前に送信される任意のリマインダーです。',
          balanceLow: '残高が設定したしきい値を下回ったときに送信される任意の通知です。',
          balanceRechargeSuccess: '残高チャージ注文が完了した後に送信されます。',
          accountQuotaAlert: '上流アカウントの配分しきい値を超えたときに、設定済みの管理者通知メールへ送信されます。',
          contentModerationViolation: 'リクエストがコンテンツ審査またはリスク制御ルールに抵触したときにユーザーへ送信されます。',
          contentModerationDisabled: 'コンテンツ審査によりアカウントが自動的に無効化されたときにユーザーへ送信されます。',
          opsAlert: '運用アラートルールが発火したときに、設定済みの運用担当受信者へ送信されます。',
          opsScheduledReport: '日次、週次、エラー、アカウント健全性レポートを設定済みの運用担当受信者へ送信します。'
        }
      },
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
    accounts: {
      emailFilter: 'メールで絞り込み...'
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
