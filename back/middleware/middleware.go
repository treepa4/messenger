package middleware

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

// Логгер middleware
func Logger() echo.MiddlewareFunc {
	return middleware.Logger()
}

// Восстановление middleware
func Recover() echo.MiddlewareFunc {
	return middleware.Recover()
}
