package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

type PingResponse struct {
	Value string `json:"value"`
}

func setupRouter() *gin.Engine {
	r := gin.Default()

	// Add request header to prevent CORS errors
	r.Use(func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", "http://localhost:5173")
	})

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, PingResponse{Value: "pong"})
	})

	return r
}

func main() {
	r := setupRouter()
	r.SetTrustedProxies([]string{"127.0.0.1"})
	r.Run(":8080")
}
