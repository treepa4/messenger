package main

import (
	"messenger/back/handlers"
	"messenger/back/middleware"
	"messenger/back/models"
	"net/http"

	"github.com/labstack/echo/v4"
	echomw "github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()

	// Промежуточное ПО
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// Разрешаем запросы с клиента
	e.Use(echomw.CORSWithConfig(echomw.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.GET, echo.POST, echo.PUT, echo.DELETE, echo.OPTIONS},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
	}))

	// Подключение к базе данных PostgreSQL
	models.ConnectDB()

	// Маршруты
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Добро пожаловать в бэкенд мессенджера!")
	})

	e.GET("/api/ping", func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]string{
			"message": "pong",
		})
	})

	// примеры маршрутов
	e.GET("/api/ping", func(c echo.Context) error {
		return c.JSON(200, map[string]string{"message": "pong"})
	})

	// Маршруты пользователей
	e.POST("/users", handlers.CreateUser)
	e.GET("/users/:id", handlers.GetUser)
	e.PUT("/users/:id", handlers.UpdateUser)
	e.DELETE("/users/:id", handlers.DeleteUser)

	// Маршруты сообщений
	e.POST("/messages", handlers.CreateMessage)
	e.GET("/messages/:id", handlers.GetMessage)
	e.GET("/users/:id/messages", handlers.GetUserMessages)

	// Запуск сервера
	e.Logger.Fatal(e.Start(":8080"))
}
