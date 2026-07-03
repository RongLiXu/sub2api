# IP 管理失败状态设计

## 目标
- IP 管理新增“失败”状态，测试连接失败时自动把对应代理状态落库为 `failed`。
- IP 管理页新增批量删除失败状态代理的入口。
- 重新授权账号弹窗宽度增大，降低长凭据输入和多段说明的拥挤感。

## 设计
- 后端复用 `proxies.status` 字符串列，不做数据库迁移；状态集合扩展为 `active | inactive | expired | failed`。
- `AdminService.TestProxy` 在 `ProbeProxy` 返回错误时，保存 latency 失败信息，并把代理状态更新为 `failed`。测试成功不自动恢复状态，避免覆盖用户手动停用或过期状态。
- 前端代理 API、类型、筛选项、编辑状态选项和状态 badge 增加 `failed`。
- 前端新增“删除失败代理”按钮：按当前协议/搜索/排序筛选获取 `status=failed` 的代理 ID，复用现有 `/admin/proxies/batch-delete`，被账号使用的代理继续由后端跳过。
- `frontend/src/components/admin/account/ReAuthAccountModal.vue` 与 `frontend/src/components/account/ReAuthAccountModal.vue` 的 `BaseDialog` 宽度从 `normal` 改为 `wide`。

## 验收
- 代理测试失败返回 `success=false`，代理状态持久化为 `failed`。
- IP 管理列表可筛选/显示/编辑 `failed` 状态。
- 点击“删除失败代理”后删除当前筛选范围内失败代理，已绑定账号的代理被跳过并提示。
- 重新授权账号弹窗使用宽版布局。
