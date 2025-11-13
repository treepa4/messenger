import axios from "axios";

// Создаём единый экземпляр axios для всех запросов к серверу
export const api = axios.create({
  baseURL: "http://localhost:8080/api", // адрес твоего Go-сервера
});

// Пример функции для теста соединения
export async function testConnection() {
  try {
    const res = await api.get("/ping");
    console.log("Server response:", res.data);
  } catch (err) {
    console.error("Failed to connect to server:", err);
  }
}
