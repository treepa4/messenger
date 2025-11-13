package models

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq"
)

// Определение структур
type User struct {
	ID       string `json:"id"`
	Username string `json:"username"`
	Password string `json:"password"`
}

type Message struct {
	ID      string `json:"id"`
	UserID  string `json:"user_id"`
	Content string `json:"content"`
}

var DB *sql.DB

// Подключение к базе данных PostgreSQL
func ConnectDB() {
	var err error
	connStr := "user=youruser dbname=yourdb sslmode=disable password=yourpassword"
	DB, err = sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}
}
