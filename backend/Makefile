.PHONY: build generate test lint test-unit test-integration test-e2e-local

VERSION ?= $(shell ./scripts/resolve-version.sh)
LDFLAGS ?= -s -w -X main.Version=$(VERSION)
GOLANGCI_LINT_VERSION ?= v2.9.0

build:
	CGO_ENABLED=0 go build -ldflags="$(LDFLAGS)" -trimpath -o bin/server ./cmd/server

generate:
	go generate ./ent
	go generate ./cmd/server

test:
	go test ./...
	$(MAKE) lint

lint:
	@if command -v golangci-lint >/dev/null 2>&1; then \
		golangci-lint run ./... --timeout=30m; \
	else \
		go run github.com/golangci/golangci-lint/v2/cmd/golangci-lint@$(GOLANGCI_LINT_VERSION) run ./... --timeout=30m; \
	fi

test-unit:
	go test -tags=unit ./...

test-integration:
	go test -tags=integration ./...

test-e2e-local:
	go test -tags=e2e -v -timeout=300s ./internal/integration/...
