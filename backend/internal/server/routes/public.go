package routes

import (
	"github.com/Wei-Shaw/sub2api/internal/handler"

	"github.com/gin-gonic/gin"
)

// RegisterPublicRoutes 注册无需认证的公开接口。
func RegisterPublicRoutes(v1 *gin.RouterGroup, h *handler.Handlers) {
	v1.GET("/models", h.ModelCatalog.List)
}
