package handlers

import (
	"database/sql"
	"net/http"

	"messenger/back/models"

	"github.com/labstack/echo/v4"
)

// Обработчики пользователей
func CreateUser(c echo.Context) error {
	user := new(models.User)
	if err := c.Bind(user); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Неверный формат данных"})
	}
	// Логика сохранения пользователя в базе данных
	_, err := models.DB.Exec("INSERT INTO users (username, password) VALUES ($1, $2)", user.Username, user.Password)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Ошибка базы данных"})
	}
	return c.JSON(http.StatusOK, map[string]string{"message": "Пользователь создан"})
}

func GetUser(c echo.Context) error {
	id := c.Param("id")
	var user models.User
	err := models.DB.QueryRow("SELECT id, username, password FROM users WHERE id=$1", id).Scan(&user.ID, &user.Username, &user.Password)
	if err != nil {
		if err == sql.ErrNoRows {
			return c.JSON(http.StatusNotFound, map[string]string{"error": "Пользователь не найден"})
		}
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Ошибка базы данных"})
	}
	return c.JSON(http.StatusOK, user)
}

func UpdateUser(c echo.Context) error {
	id := c.Param("id")
	user := new(models.User)
	if err := c.Bind(user); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Неверный формат данных"})
	}
	// Логика обновления пользователя в базе данных
	_, err := models.DB.Exec("UPDATE users SET username=$1, password=$2 WHERE id=$3", user.Username, user.Password, id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Ошибка базы данных"})
	}
	return c.JSON(http.StatusOK, map[string]string{"message": "Пользователь обновлен"})
}

func DeleteUser(c echo.Context) error {
	id := c.Param("id")
	// Логика удаления пользователя из базы данных
	_, err := models.DB.Exec("DELETE FROM users WHERE id=$1", id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Ошибка базы данных"})
	}
	return c.JSON(http.StatusOK, map[string]string{"message": "Пользователь удален"})
}

// Обработчики сообщений
func CreateMessage(c echo.Context) error {
	message := new(models.Message)
	if err := c.Bind(message); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Неверный формат данных"})
	}
	// Логика сохранения сообщения в базе данных
	_, err := models.DB.Exec("INSERT INTO messages (user_id, content) VALUES ($1, $2)", message.UserID, message.Content)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Ошибка базы данных"})
	}
	return c.JSON(http.StatusOK, map[string]string{"message": "Сообщение создано"})
}

func GetMessage(c echo.Context) error {
	id := c.Param("id")
	var message models.Message
	err := models.DB.QueryRow("SELECT id, user_id, content FROM messages WHERE id=$1", id).Scan(&message.ID, &message.UserID, &message.Content)
	if err != nil {
		if err == sql.ErrNoRows {
			return c.JSON(http.StatusNotFound, map[string]string{"error": "Сообщение не найдено"})
		}
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Ошибка базы данных"})
	}
	return c.JSON(http.StatusOK, message)
}

func GetUserMessages(c echo.Context) error {
	id := c.Param("id")
	rows, err := models.DB.Query("SELECT id, user_id, content FROM messages WHERE user_id=$1", id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Ошибка базы данных"})
	}
	defer rows.Close()

	var messages []models.Message
	for rows.Next() {
		var message models.Message
		if err := rows.Scan(&message.ID, &message.UserID, &message.Content); err != nil {
			return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Ошибка базы данных"})
		}
		messages = append(messages, message)
	}
	return c.JSON(http.StatusOK, messages)
}
