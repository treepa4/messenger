package main

import (
	"messenger/back/handlers"
	"messenger/back/middleware"
	"messenger/back/models"
	"net/http"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	// Промежуточное ПО
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// Подключение к базе данных PostgreSQL
	models.ConnectDB()

	// Маршруты
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Добро пожаловать в бэкенд мессенджера!")
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
