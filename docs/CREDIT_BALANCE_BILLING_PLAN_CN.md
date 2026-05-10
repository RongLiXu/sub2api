# 信用额度与扣费优先级改造规划

本文档作为后续开发修改标准，覆盖三阶段：

1. 最小闭环：`credit_balance` 字段、后台调整、鉴权缓存、扣费优先级、订阅超限后扣信用额度、用量日志标记扣费来源。
2. 信用额度流水：补充信用额度的发放、调整、消费、退款等可审计流水。
3. 前端展示：补充用户侧、管理员侧、用量记录和订单相关展示。

## 当前现状

当前系统的可消费余额字段是 `users.balance`：

- 数据库字段：`users.balance DECIMAL(20,8) NOT NULL DEFAULT 0`
- 后端业务字段：`service.User.Balance float64`
- 热路径余额检查：`BillingCacheService.checkBalanceEligibility` 只检查 `balance > 0`
- 余额扣费事务：`usageBillingRepository.deductUsageBillingBalance` 直接执行 `balance = balance - amount`
- Redis 缓存：`BillingCache` 只缓存单个余额值
- 使用日志：`usage_logs.billing_type` 当前只有 `0=余额`、`1=订阅套餐`

当前订阅套餐扣费规则：

- API Key 绑定一个分组。
- 订阅组请求只查询该用户在该分组下的一条有效订阅。
- 订阅可用时扣订阅用量。
- 订阅日限、周限、月限超限时直接拒绝，不会自动扣余额，也不会扣其他订阅。

## 目标扣款顺序

余额模式：

```text
信用额度 credit_balance > 余额 balance
```

订阅模式：

```text
订阅额度 > 信用额度 credit_balance
```

已确认策略：

```text
订阅额度 > 信用额度
```

订阅额度用完后，如果信用额度不足，不继续扣账户余额，直接拒绝本次请求。

信用额度通用约束：

- `credit_balance` 初始值统一为 `0`，不做历史余额迁移。
- 信用额度不允许为负数。
- 信用额度不参与低余额通知。
- 第一版信用额度来源支持：管理员手动调整、兑换码、优惠码。
- 第一版信用额度来源不支持：余额充值、邀请返利。
- 信用额度流水用户可见，但用户侧隐藏管理员备注和操作者信息。
- 请求消费信用额度时，每次请求都写一条信用额度流水，保证审计完整。

订阅超限后扣信用额度需要同时支持全局开关和分组开关，优先级为：

```text
分组配置优先，分组未配置时使用全局配置
```

## 第一阶段：最小闭环

### 数据库与模型

新增用户字段：

```sql
ALTER TABLE users
  ADD COLUMN IF NOT EXISTS credit_balance DECIMAL(20,8) NOT NULL DEFAULT 0;
```

迁移要求：

- `credit_balance` 新字段默认值为 `0`。
- 不从 `balance` 迁移历史金额。
- 不从历史充值、历史邀请返利、历史兑换码回填信用额度。

需要同步修改：

- `backend/ent/schema/user.go`：新增 `field.Float("credit_balance")`。
- `backend/internal/service/user.go`：新增 `CreditBalance float64`。
- `backend/internal/repository/user_repo.go`：用户实体和 service 模型互转增加 `CreditBalance`。
- `backend/internal/handler/dto` 相关用户 DTO：用户详情、管理员用户列表、当前用户信息需返回 `credit_balance`。
- `frontend/src/types/index.ts`：`User` / `AdminUser` 增加 `credit_balance`。

### 后台调整接口

现有后台余额调整接口：

```text
POST /api/v1/admin/users/:id/balance
```

不建议复用该接口隐式调整信用额度。建议新增接口：

```text
POST /api/v1/admin/users/:id/credit-balance
```

请求体：

```json
{
  "amount": 100.0,
  "operation": "add",
  "notes": "manual credit grant"
}
```

`operation` 与余额接口保持一致：

- `set`：设置为指定值。
- `add`：增加指定值。
- `subtract`：扣减指定值。

约束建议：

- 信用额度不允许被后台调整为负数。
- 信用额度消费也不允许扣成负数。
- 订阅超限后信用额度不足时，不扣余额，直接拒绝请求。
- 管理员扣减信用额度时，若当前信用额度不足，直接拒绝，不自动扣到 0。
- 调整后必须失效用户鉴权缓存和计费缓存。

后端新增或修改：

- `AdminService.UpdateUserCreditBalance`
- `UserRepository.UpdateCreditBalance`
- `Admin UserHandler` 新增 handler。
- `backend/internal/server/routes/admin.go` 新增路由。

### 兑换码和优惠码接入

第一版信用额度来源支持管理员手动调整、兑换码、优惠码，不接入余额充值和邀请返利。

兑换码建议新增类型：

```text
credit_balance
```

需要修改：

- `backend/internal/domain/constants.go`：新增 `RedeemTypeCreditBalance`。
- `backend/ent/schema/redeem_code.go`：允许新类型。
- `backend/internal/service/redeem_service.go`：兑换 `credit_balance` 时增加 `users.credit_balance`，并写入信用额度流水。
- `backend/internal/service/admin_service.go`：生成兑换码时支持 `credit_balance`。
- `frontend/src/types/index.ts`：`RedeemCodeType` 增加 `credit_balance`。
- `frontend/src/views/admin/RedeemView.vue`：管理员可生成信用额度兑换码。
- `frontend/src/views/user/RedeemView.vue`：用户兑换后展示新的信用额度余额。

兑换码使用规则：

- 信用额度兑换码允许用户主动兑换。
- 兑换成功后增加 `users.credit_balance`。
- 兑换成功必须写入 `user_credit_ledger`，`action=redeem_grant`，`source=redeem`。

优惠码建议新增信用额度奖励字段：

```text
credit_bonus_amount
```

需要修改：

- 优惠码 schema / migration：新增 `credit_bonus_amount DECIMAL(20,8) NOT NULL DEFAULT 0`。
- `PromoService`：使用优惠码时，如果 `credit_bonus_amount > 0`，增加 `users.credit_balance` 并写信用额度流水。
- 优惠码后台表单：允许配置余额奖励和信用额度奖励；两者允许同时存在，但必须分别入账和分别写流水。

明确不做：

- 支付充值订单不增加信用额度。
- 邀请返利不进入信用额度。
- 历史兑换码和历史优惠码不回填信用额度。

### 全局和分组开关

新增全局设置：

```text
subscription_credit_fallback_enabled
```

新增分组级可继承配置，推荐使用 nullable bool：

```sql
ALTER TABLE groups
  ADD COLUMN IF NOT EXISTS subscription_credit_fallback_enabled BOOLEAN NULL;
```

语义：

- `NULL`：继承全局配置。
- `true`：该分组启用订阅超限后信用额度兜底。
- `false`：该分组禁用订阅超限后信用额度兜底。

解析规则：

```text
effective_enabled =
  group.subscription_credit_fallback_enabled
  if group.subscription_credit_fallback_enabled is not null
  else setting.subscription_credit_fallback_enabled
```

需要修改：

- `backend/ent/schema/group.go`
- `backend/internal/service/group.go`
- `backend/internal/repository/group_repo.go`
- `backend/internal/service/setting_service.go`
- `backend/internal/handler/admin/group_handler.go`
- `frontend/src/types/index.ts`
- `frontend/src/views/admin/GroupsView.vue`
- `frontend/src/views/admin/SettingsView.vue`

### 鉴权缓存

当前 `APIKeyAuthUserSnapshot` 只包含 `Balance`。需要增加：

```go
CreditBalance float64 `json:"credit_balance"`
```

修改点：

- `backend/internal/service/api_key_auth_cache.go`
- `backend/internal/service/api_key_auth_cache_impl.go`
- 用户余额、信用额度调整时都要调用 auth cache invalidator。

原因：网关热路径依赖鉴权缓存里的用户快照；如果不放入信用额度，余额资格检查会出现缓存不一致。

### 计费缓存

当前 `BillingCache` 接口是单余额语义：

```go
GetUserBalance(ctx, userID) (float64, error)
SetUserBalance(ctx, userID, balance float64) error
DeductUserBalance(ctx, userID, amount float64) error
```

建议改成钱包快照语义，而不是再加一堆平行方法：

```go
type WalletBalance struct {
    CreditBalance float64 `json:"credit_balance"`
    Balance       float64 `json:"balance"`
}
```

接口建议：

```go
GetUserWallet(ctx, userID) (*WalletBalance, error)
SetUserWallet(ctx, userID, wallet *WalletBalance) error
DeductUserWallet(ctx, userID, creditCost, balanceCost float64) error
InvalidateUserWallet(ctx, userID) error
```

兼容策略：

- 可以保留旧方法名作为 wrapper，减少一次性改动。
- Redis key 可沿用原 `billing:balance:{userID}`，但 value 改为 JSON；或者新增 `billing:wallet:{userID}`，旧 key 逐步废弃。
- 推荐新增 key，避免旧 float value 解析失败造成线上灰度问题。

余额资格检查改为：

```text
credit_balance + balance > 0
```

如果订阅超限只允许扣信用额度，则订阅兜底资格检查为：

```text
credit_balance > 0
```

### 扣费命令与事务

当前 `UsageBillingCommand` 只有：

```go
BalanceCost float64
SubscriptionCost float64
```

建议扩展：

```go
CreditCost  float64
BalanceCost float64
```

或者更明确：

```go
WalletCost float64
```

但为了记录拆分，建议采用 `CreditCost + BalanceCost`。

扣费事务必须在 DB 内一次完成，不能先查再分两次更新。推荐 SQL 逻辑：

1. 锁定用户行。
2. 计算 `credit_cost = LEAST(credit_balance, requested_cost)`。
3. 计算 `balance_cost = requested_cost - credit_cost`。
4. 如果当前计费模式不允许余额参与，则当 `requested_cost > credit_balance` 时失败。
5. 更新 `credit_balance = credit_balance - credit_cost`。
6. 更新 `balance = balance - balance_cost`。
7. 返回扣费拆分和扣后余额。

返回结果扩展：

```go
type UsageBillingApplyResult struct {
    Applied bool
    NewCreditBalance *float64
    NewBalance *float64
    CreditDeducted float64
    BalanceDeducted float64
}
```

余额模式扣款顺序：

```text
cost -> credit_balance -> balance
```

订阅模式扣款顺序：

```text
先尝试 subscription
如果订阅超限且开启信用兜底：cost -> credit_balance
如果 credit_balance 不足：拒绝请求，不扣 balance
```

### 订阅超限后转信用扣款

当前超限发生在两处：

- 中间件 `ValidateAndCheckLimits`
- 网关内二次 `CheckBillingEligibility`

需要新增一个明确的计费决策对象，避免后续继续按 `subscription != nil` 推断计费方式。

建议引入：

```go
type BillingDecision struct {
    Mode BillingDecisionMode
    Group *Group
    Subscription *UserSubscription
    UseCreditFallback bool
}

const (
    BillingDecisionBalance BillingDecisionMode = "balance"
    BillingDecisionSubscription BillingDecisionMode = "subscription"
    BillingDecisionSubscriptionCreditFallback BillingDecisionMode = "subscription_credit_fallback"
)
```

放入 `gin.Context`：

```text
ContextKeyBillingDecision
```

后续使用：

- 资格检查使用 `BillingDecision`。
- 选账号仍使用 effective group。
- 扣费构造使用 `BillingDecision.Mode`，不能再用 `subscription != nil`。
- 使用日志根据 `BillingDecision.Mode` 写入扣费来源。

### usage log 标记扣费来源

当前 `billing_type` 只有：

```text
0 = 钱包余额
1 = 订阅套餐
```

建议不要复用 `billing_type` 表示所有细节，新增字段更清晰：

```sql
ALTER TABLE usage_logs
  ADD COLUMN IF NOT EXISTS billing_source VARCHAR(32) NOT NULL DEFAULT 'balance',
  ADD COLUMN IF NOT EXISTS credit_cost DECIMAL(20,10) NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS balance_cost DECIMAL(20,10) NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS subscription_cost DECIMAL(20,10) NOT NULL DEFAULT 0;
```

可选 `billing_source` 值：

- `balance`
- `credit`
- `credit_balance_mixed`
- `subscription`
- `subscription_credit_fallback`

兼容建议：

- `billing_type` 继续保留，用于现有筛选和历史统计。
- `billing_type = 0` 表示最终走钱包体系，包含信用额度和余额。
- `billing_type = 1` 表示最终走订阅额度。
- 新字段负责细分来源。

最小闭环可以只加：

```sql
billing_source VARCHAR(32)
credit_cost DECIMAL(20,10)
balance_cost DECIMAL(20,10)
```

但建议同时加 `subscription_cost`，避免后续补报表时又迁移一次。

### 测试标准

必须覆盖：

- 余额模式，`credit_balance >= cost`：只扣信用额度，不扣余额。
- 余额模式，`credit_balance < cost`：先扣完信用额度，再扣余额。
- 余额模式，`credit_balance = 0, balance > 0`：扣余额，保持旧行为。
- 余额模式，`credit_balance + balance <= 0`：拒绝请求。
- 订阅模式，订阅未超限：扣订阅，不扣信用额度。
- 订阅模式，订阅日限超限且信用额度充足：放行并扣信用额度。
- 订阅模式，订阅周限超限且信用额度充足：放行并扣信用额度。
- 订阅模式，订阅月限超限且信用额度充足：放行并扣信用额度。
- 订阅模式，订阅超限且信用额度不足：拒绝请求，不扣余额。
- 订阅模式，订阅超限但全局和分组有效开关为关闭：拒绝请求，不扣信用额度。
- 订阅模式，分组开关为 `true` 且全局为 `false`：允许信用额度兜底。
- 订阅模式，分组开关为 `false` 且全局为 `true`：拒绝信用额度兜底。
- usage log 正确写入 `billing_source`、`credit_cost`、`balance_cost`、`subscription_cost`。
- Redis 缓存扣减后与 DB 事务返回结果一致。

## 第二阶段：信用额度流水

### 是否复用 redeem_codes

当前余额历史主要通过 `redeem_codes`、管理员调整记录、邀请返利合并展示。信用额度如果完全复用 `redeem_codes`，短期改动小，但语义会混乱，因为：

- `redeem_codes` 同时承担兑换码、管理员调整、余额历史等职责。
- 信用额度消费是高频请求级扣费，不适合写入 `redeem_codes`。

确认标准：新增专用流水表。兑换码和优惠码只是信用额度来源之一，最终仍必须落入 `user_credit_ledger`。

### 新表设计

```sql
CREATE TABLE IF NOT EXISTS user_credit_ledger (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id),
    amount DECIMAL(20,8) NOT NULL,
    balance_after DECIMAL(20,8) NOT NULL,
    action VARCHAR(32) NOT NULL,
    source VARCHAR(32) NOT NULL,
    request_id VARCHAR(255) NULL,
    api_key_id BIGINT NULL,
    usage_log_id BIGINT NULL REFERENCES usage_logs(id),
    payment_order_id BIGINT NULL REFERENCES payment_orders(id),
    operator_id BIGINT NULL REFERENCES users(id),
    idempotency_key VARCHAR(128) NULL,
    notes TEXT NOT NULL DEFAULT '',
    metadata JSONB NOT NULL DEFAULT '{}',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_user_credit_ledger_user_created
    ON user_credit_ledger(user_id, created_at DESC);

CREATE UNIQUE INDEX IF NOT EXISTS idx_user_credit_ledger_idempotency
    ON user_credit_ledger(idempotency_key)
    WHERE idempotency_key IS NOT NULL;
```

`action` 建议值：

- `admin_set`
- `admin_add`
- `admin_subtract`
- `usage_deduct`
- `redeem_grant`
- `promo_grant`
- `refund_rollback`
- `migration_adjustment`

`source` 建议值：

- `admin`
- `usage_billing`
- `redeem`
- `refund`
- `promo`
- `system`

### 写入规则

后台调整：

- 每次 `credit_balance` 变更都写 ledger。
- `amount` 为正表示增加，为负表示扣减。
- `balance_after` 为变更后信用额度。

请求消费：

- 每次请求只要发生信用额度扣减，都必须写一条 `user_credit_ledger`。
- 流水写入应在 `usage_billing_repo.Apply` 同一事务中完成，保证扣款与流水原子一致。
- 不采用“仅从 `usage_logs` 聚合展示”的方案，因为用户可见流水和审计都要求完整记录。

推荐标准：

- 管理调整必须写 ledger。
- 请求消费必须写 ledger，但只在 `CreditCost > 0` 时写。
- 兑换码增加信用额度必须写 ledger。
- 优惠码增加信用额度必须写 ledger。
- `usage_log_id` 的写入需要注意当前流程是先扣费再 best-effort 写 usage log。若要 ledger 关联 `usage_log_id`，需要调整顺序或引入稳定 `request_id/api_key_id` 关联。

更稳的方案：

- ledger 记录 `request_id`、`api_key_id`，不强依赖 `usage_log_id`。
- usage log 写入失败不影响扣费流水。

用户可见流水脱敏规则：

- 用户侧不返回 `operator_id`。
- 用户侧不返回管理员 `notes` 原文。
- 用户侧只展示金额、类型、扣后信用额度、时间、关联请求。
- 用户侧“关联请求”展示完整 `request_id`。
- 管理员侧可以查看完整字段，包括操作者、备注和 metadata。

### 查询接口

管理员接口：

```text
GET /api/v1/admin/users/:id/credit-ledger?page=1&page_size=20&action=&source=
```

用户接口：

```text
GET /api/v1/user/credit-ledger?page=1&page_size=20
```

返回：

```json
{
  "items": [
    {
      "id": 1,
      "amount": -0.25,
      "balance_after": 19.75,
      "action": "usage_deduct",
      "source": "usage_billing",
      "request_id": "local:xxx",
      "api_key_id": 123,
      "created_at": "2026-05-10T12:00:00Z"
    }
  ],
  "total": 100,
  "page": 1,
  "page_size": 20
}
```

### 退款和回滚

如果信用额度参与扣费，退款逻辑需要确认：

- API 使用费是否支持退款。
- 支付订单退款是否需要扣回赠送信用额度。
- 管理员误加信用额度后扣减是否允许扣到 0 以下。

第一版建议：

- 信用额度只通过管理员调整、兑换码、优惠码发放，不和支付订单自动绑定。
- 不处理支付退款对信用额度的自动回滚。
- 等信用额度发放来源明确后再补退款规则。

## 第三阶段：前端展示

### 用户侧

需要展示：

- 顶部用户信息：显示 `信用额度` 与 `余额`。
- 用户 Dashboard：新增信用额度卡片，或把余额卡片改成钱包总览。
- 充值页：显示当前余额、信用额度，以及扣款顺序说明。
- 个人资料页：在账号概览增加信用额度。
- Key Usage 页面：当返回 `billing_source` 时展示本次或统计中的扣费来源。

建议文案：

```text
信用额度：$10.00
账户余额：$20.00
消费顺序：优先使用信用额度，信用额度不足时再扣账户余额。
```

订阅页建议提示：

```text
套餐额度用完后，将按全局/分组配置使用信用额度继续扣费。
```

订阅超限后不扣余额，文案必须明确：

```text
套餐额度用完后仅使用信用额度，不会自动扣账户余额。
```

### 管理员侧

需要展示：

- 用户列表：新增 `信用额度` 列。
- 用户详情/编辑：显示 `credit_balance`。
- 用户余额调整弹窗：不要混在同一个弹窗里，建议新增“调整信用额度”操作。
- 用户余额历史弹窗：新增 Tab 或单独弹窗展示信用额度流水。
- 用量记录：新增 `扣费来源`、`信用扣费`、`余额扣费` 字段。
- 用量清理：如果未来按扣费来源清理或筛选，需要支持 `billing_source`。

建议后台操作入口：

```text
用户列表行操作：
- 加余额
- 扣余额
- 余额历史
- 调整信用额度
- 信用额度流水
```

### 类型和 API 客户端

前端类型修改：

- `User.credit_balance`
- `AdminUser.credit_balance`
- `UsageLog.billing_source`
- `UsageLog.credit_cost`
- `UsageLog.balance_cost`
- `UsageLog.subscription_cost`
- `CreditLedgerItem`

API 增加：

- `adminAPI.users.updateCreditBalance`
- `adminAPI.users.getUserCreditLedger`
- `userAPI.getCreditLedger`

### 展示标准

金额展示统一使用 `$` 和两位小数：

```text
$10.00
```

当 `billing_source` 为：

- `subscription`：展示“订阅额度”
- `credit`：展示“信用额度”
- `credit_balance_mixed`：展示“信用额度 + 余额”
- `subscription_credit_fallback`：展示“订阅超限后信用额度”
- `balance`：展示“账户余额”

## 已确认口径

以下口径已确认，后续开发按此执行：

1. `credit_balance` 初始值统一为 `0`，不做历史余额迁移。
2. 信用额度来源第一版支持管理员手动调整、兑换码、优惠码，不接入充值、邀请返利。
3. 全局/分组开关优先级为“分组配置优先，分组未配置时使用全局配置”。
4. 信用额度流水用户可见；用户侧隐藏管理员备注和操作者信息，只展示金额、类型、扣后信用额度、时间、关联请求。
5. 请求消费信用额度时，每次请求都写一条信用流水，保持和余额流水记录一致，使审计完整。
6. 订阅超限后信用不足不扣余额。
7. 信用额度不允许为负。
8. 信用额度不参与低余额通知。
9. 优惠码允许同时发放余额和信用额度。
10. 信用额度兑换码允许用户主动兑换。
11. 管理员扣减信用额度时，若当前信用额度不足，直接拒绝。
12. 用户侧信用额度流水中的“关联请求”展示完整 `request_id`。

## 建议开发顺序

1. 数据字段、模型和 DTO。
2. 后台信用额度调整接口与缓存失效。
3. 鉴权缓存和计费缓存改造。
4. 扣费事务支持信用额度优先。
5. BillingDecision 引入，订阅超限后切换信用额度扣费。
6. usage log 增加扣费来源字段。
7. 单元测试和集成测试。
8. 信用额度流水表、写入和查询接口。
9. 前端展示与后台操作入口。

## 风险控制

- 不要在第一版删除或改变 `users.balance` 语义。
- 不要直接把 `billing_type=0` 改成信用额度，否则会破坏历史统计。
- 不要只在应用层拆分信用额度和余额扣款，必须在 DB 事务内原子完成。
- 不要让订阅超限 fallback 隐式发生，必须通过 `BillingDecision` 显式传递。
- 不要让 usage log 写入失败影响实际扣费，但扣费流水如果作为审计凭证，需要与扣费同事务写入或基于扣费结果异步可靠写入。
