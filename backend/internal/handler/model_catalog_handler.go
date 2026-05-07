package handler

import (
	"github.com/Wei-Shaw/sub2api/internal/pkg/response"
	"github.com/Wei-Shaw/sub2api/internal/service"

	"github.com/gin-gonic/gin"
)

// ModelCatalogHandler 提供公开模型广场接口。
type ModelCatalogHandler struct {
	modelCatalogService *service.ModelCatalogService
}

// NewModelCatalogHandler 创建公开模型广场 handler。
func NewModelCatalogHandler(modelCatalogService *service.ModelCatalogService) *ModelCatalogHandler {
	return &ModelCatalogHandler{modelCatalogService: modelCatalogService}
}

// List 列出公开模型广场数据。
// GET /api/v1/models
func (h *ModelCatalogHandler) List(c *gin.Context) {
	response.Success(c, h.modelCatalogService.ListPublicModels())
}
