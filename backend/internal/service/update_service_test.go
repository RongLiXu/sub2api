package service

import (
	"context"
	"fmt"
	"testing"
	"time"
)

type updateTestCache struct {
	data string
	err  error
}

func (c *updateTestCache) GetUpdateInfo(context.Context) (string, error) {
	return c.data, c.err
}

func (c *updateTestCache) SetUpdateInfo(_ context.Context, data string, _ time.Duration) error {
	c.data = data
	return c.err
}

type updateTestGitHubClient struct {
	release *GitHubRelease
	err     error
}

func (c updateTestGitHubClient) FetchLatestRelease(context.Context, string) (*GitHubRelease, error) {
	return c.release, c.err
}

func (c updateTestGitHubClient) DownloadFile(context.Context, string, string, int64) error {
	return nil
}

func (c updateTestGitHubClient) FetchChecksumFile(context.Context, string) ([]byte, error) {
	return nil, nil
}

func TestCompareVersionsReleaseRevision(t *testing.T) {
	tests := []struct {
		name    string
		current string
		latest  string
		want    int
	}{
		{
			name:    "release revision is newer than base tag",
			current: "v0.1.119-r1",
			latest:  "v0.1.119",
			want:    1,
		},
		{
			name:    "base tag is older than release revision",
			current: "v0.1.119",
			latest:  "v0.1.119-r1",
			want:    -1,
		},
		{
			name:    "higher release revision wins",
			current: "v0.1.119-r2",
			latest:  "v0.1.119-r1",
			want:    1,
		},
		{
			name:    "higher patch beats release revision",
			current: "v0.1.119-r1",
			latest:  "v0.1.120",
			want:    -1,
		},
		{
			name:    "optional v prefix is ignored",
			current: "v0.1.119-r1",
			latest:  "0.1.119-r1",
			want:    0,
		},
		{
			name:    "build metadata is ignored",
			current: "v0.1.119-r1+abc123",
			latest:  "v0.1.119-r1",
			want:    0,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := compareVersions(tt.current, tt.latest); got != tt.want {
				t.Fatalf("compareVersions(%q, %q) = %d, want %d", tt.current, tt.latest, got, tt.want)
			}
		})
	}
}

func TestCheckUpdateReleaseRevisionDoesNotReportBaseTagAsUpdate(t *testing.T) {
	svc := NewUpdateService(
		&updateTestCache{},
		updateTestGitHubClient{
			release: &GitHubRelease{
				TagName: "v0.1.119",
				Name:    "v0.1.119",
			},
		},
		"v0.1.119-r1",
		"release",
	)

	info, err := svc.CheckUpdate(context.Background(), true)
	if err != nil {
		t.Fatalf("CheckUpdate returned error: %v", err)
	}
	if info.HasUpdate {
		t.Fatalf("expected no update when current release revision is newer than latest base tag: %#v", info)
	}
	if info.LatestVersion != "0.1.119-r1" {
		t.Fatalf("expected latest version display to use current revision, got %q", info.LatestVersion)
	}
}

func TestCheckUpdateCachedReleaseRevisionDoesNotShowOlderLatest(t *testing.T) {
	cacheData := fmt.Sprintf(`{"latest":"0.1.119","timestamp":%d}`, time.Now().Unix())
	svc := NewUpdateService(
		&updateTestCache{data: cacheData},
		updateTestGitHubClient{},
		"v0.1.119-r1",
		"release",
	)

	info, err := svc.CheckUpdate(context.Background(), false)
	if err != nil {
		t.Fatalf("CheckUpdate returned error: %v", err)
	}
	if info.HasUpdate {
		t.Fatalf("expected no update from cached base tag when current release revision is newer: %#v", info)
	}
	if info.LatestVersion != "0.1.119-r1" {
		t.Fatalf("expected cached latest version display to use current revision, got %q", info.LatestVersion)
	}
}
