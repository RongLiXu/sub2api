# Proxy Failed Status Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a persisted failed proxy status, delete-failed-proxies UI action, and wider reauthorization dialogs.

**Architecture:** Extend existing string status flow without schema migration. Backend marks a proxy failed inside the existing test connection path. Frontend reuses the existing list and batch-delete APIs and only adds type/status UI support plus one action button.

**Tech Stack:** Go service tests with `go test`; Vue 3 + TypeScript + Vitest for frontend behavior/type checks.

---

### Task 1: Backend failed status on proxy test failure

**Files:**
- Modify: `backend/internal/domain/constants.go`
- Modify: `backend/internal/service/proxy.go`
- Modify: `backend/internal/service/admin_service.go`
- Test: `backend/internal/service/admin_service_proxy_test.go`

- [ ] **Step 1: Write failing backend test**

Create `backend/internal/service/admin_service_proxy_test.go` with a fake proxy repository and prober. Test `TestAdminServiceTestProxyMarksProxyFailedOnProbeError` must call `TestProxy`, assert the returned result is unsuccessful, and assert the stored proxy status is `StatusFailed`.

- [ ] **Step 2: Run backend test and verify RED**

Run: `cd backend && go test ./internal/service -run TestAdminServiceTestProxyMarksProxyFailedOnProbeError -count=1`
Expected: FAIL because status remains `active` or `StatusFailed` is undefined.

- [ ] **Step 3: Implement backend status**

Add `StatusFailed = "failed"` to status constants and ensure the service package can use it. In `TestProxy`, when `ProbeProxy` returns an error, set `proxy.Status = StatusFailed` and call `s.proxyRepo.Update(ctx, proxy)` before returning the unsuccessful result. Preserve the latency-cache write.

- [ ] **Step 4: Run backend test and verify GREEN**

Run: `cd backend && go test ./internal/service -run TestAdminServiceTestProxyMarksProxyFailedOnProbeError -count=1`
Expected: PASS.

### Task 2: Frontend failed proxy status and delete-failed action

**Files:**
- Modify: `frontend/src/types/index.ts`
- Modify: `frontend/src/api/admin/proxies.ts`
- Modify: `frontend/src/views/admin/ProxiesView.vue`
- Modify: `frontend/src/i18n/locales/zh.ts`
- Modify: `frontend/src/i18n/locales/en.ts`
- Test: add focused static/type coverage for failed proxy UI.

- [ ] **Step 1: Write failing frontend check**

Add `frontend/src/views/__tests__/ProxiesView.failedStatus.spec.ts` with static assertions that failed status is present in the API type unions, ProxiesView options/action, and locale keys.

- [ ] **Step 2: Run frontend test and verify RED**

Run: `cd frontend && pnpm vitest run src/views/__tests__/ProxiesView.failedStatus.spec.ts`
Expected: FAIL because `failed` UI/action support is missing.

- [ ] **Step 3: Implement frontend behavior**

Extend proxy status unions to include `failed`. Add `failed` to status filter/edit options. Update status badge label/class mapping. Add a delete-failed button and confirmation dialog; implementation fetches failed proxies with current protocol/search/sort filters and calls existing `adminAPI.proxies.batchDelete`.

- [ ] **Step 4: Run frontend test and verify GREEN**

Run the focused Vitest command again. Expected: PASS.

### Task 3: Reauthorization dialog width

**Files:**
- Modify: `frontend/src/components/admin/account/ReAuthAccountModal.vue`
- Modify: `frontend/src/components/account/ReAuthAccountModal.vue`
- Test: covered by `frontend/src/views/__tests__/ProxiesView.failedStatus.spec.ts` static assertions.

- [ ] **Step 1: Add failing static assertions**

The frontend static test must assert both reauth modal files contain `width="wide"`; before implementation this fails.

- [ ] **Step 2: Implement width change**

Change both `BaseDialog` usages from `width="normal"` to `width="wide"`.

- [ ] **Step 3: Verify static check passes**

Run the focused Vitest command and confirm it passes.

### Task 4: Final verification

**Files:**
- All modified files.

- [ ] **Step 1: Run backend targeted tests**

Run: `cd backend && go test ./internal/service -run 'TestAdminServiceTestProxyMarksProxyFailedOnProbeError|TestFinalizeProxyQualityResult' -count=1`
Expected: PASS.

- [ ] **Step 2: Run frontend checks**

Run: `cd frontend && pnpm vitest run src/views/__tests__/ProxiesView.failedStatus.spec.ts`
Expected: PASS.

- [ ] **Step 3: Review diff**

Run: `git diff --stat && git diff --check`
Expected: no whitespace errors; changed files match scope.
