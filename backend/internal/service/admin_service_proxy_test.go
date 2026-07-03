package service

import (
	"context"
	"errors"
	"testing"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/pkg/pagination"
	"github.com/stretchr/testify/require"
)

type testProxyRepository struct {
	proxy       Proxy
	updated     bool
	updateError error
}

func (r *testProxyRepository) Create(context.Context, *Proxy) error { return nil }
func (r *testProxyRepository) GetByID(_ context.Context, id int64) (*Proxy, error) {
	if r.proxy.ID != id {
		return nil, ErrProxyNotFound
	}
	p := r.proxy
	return &p, nil
}
func (r *testProxyRepository) ListByIDs(context.Context, []int64) ([]Proxy, error) { return nil, nil }
func (r *testProxyRepository) Update(_ context.Context, p *Proxy) error {
	if r.updateError != nil {
		return r.updateError
	}
	r.updated = true
	r.proxy = *p
	return nil
}
func (r *testProxyRepository) Delete(context.Context, int64) error { return nil }
func (r *testProxyRepository) List(context.Context, pagination.PaginationParams) ([]Proxy, *pagination.PaginationResult, error) {
	return nil, nil, nil
}
func (r *testProxyRepository) ListWithFilters(context.Context, pagination.PaginationParams, string, string, string) ([]Proxy, *pagination.PaginationResult, error) {
	return nil, nil, nil
}
func (r *testProxyRepository) ListWithFiltersAndAccountCount(context.Context, pagination.PaginationParams, string, string, string) ([]ProxyWithAccountCount, *pagination.PaginationResult, error) {
	return nil, nil, nil
}
func (r *testProxyRepository) ListActive(context.Context) ([]Proxy, error) { return nil, nil }
func (r *testProxyRepository) ListActiveWithAccountCount(context.Context) ([]ProxyWithAccountCount, error) {
	return nil, nil
}
func (r *testProxyRepository) ExistsByHostPortAuth(context.Context, string, int, string, string) (bool, error) {
	return false, nil
}
func (r *testProxyRepository) CountAccountsByProxyID(context.Context, int64) (int64, error) {
	return 0, nil
}
func (r *testProxyRepository) ListAccountSummariesByProxyID(context.Context, int64) ([]ProxyAccountSummary, error) {
	return nil, nil
}
func (r *testProxyRepository) SweepExpiredProxies(context.Context, time.Time) (int64, error) {
	return 0, nil
}
func (r *testProxyRepository) ListAllForFallback(context.Context) ([]Proxy, error) { return nil, nil }
func (r *testProxyRepository) CountExpired(context.Context) (int64, error)         { return 0, nil }
func (r *testProxyRepository) CountExpiringSoon(context.Context, time.Time) (int64, error) {
	return 0, nil
}

type failingProxyProber struct{ err error }

func (p failingProxyProber) ProbeProxy(context.Context, string) (*ProxyExitInfo, int64, error) {
	return nil, 0, p.err
}

func TestAdminServiceTestProxyMarksProxyFailedOnProbeError(t *testing.T) {
	repo := &testProxyRepository{proxy: Proxy{
		ID:       42,
		Name:     "bad proxy",
		Protocol: "http",
		Host:     "127.0.0.1",
		Port:     18080,
		Status:   StatusActive,
	}}
	svc := &adminServiceImpl{
		proxyRepo:   repo,
		proxyProber: failingProxyProber{err: errors.New("dial failed")},
	}

	result, err := svc.TestProxy(context.Background(), 42)

	require.NoError(t, err)
	require.False(t, result.Success)
	require.Equal(t, "dial failed", result.Message)
	require.True(t, repo.updated)
	require.Equal(t, StatusFailed, repo.proxy.Status)
}
