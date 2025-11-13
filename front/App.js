import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { WelcomePage } from "./pages/WelcomePage.js";
import { SignForm } from "./pages/SignForm.js";
import { MainPage } from "./pages/MainPage.js";
import { testConnection } from "./api"; // импорт функции ping

export default function App() {
  const [isWelcomeMenu, setWelcomePage] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [serverMessage, setServerMessage] = useState(""); // состояние для статуса сервера

  // создаем экземпляры страниц
  const welcomePage = new WelcomePage(setWelcomePage);
  const signForm = new SignForm(setLoggedIn);
  const mainPage = new MainPage();

  // функция для пинга сервера
  const handlePing = async () => {
    try {
      const res = await testConnection();
      setServerMessage("✅ Server connected");
      console.log("Ping response:", res);
    } catch (err) {
      console.error("Ping failed:", err.message);
      setServerMessage("❌ Server not reachable");
    }

    // Скрываем сообщение через 3 секунды
    setTimeout(() => setServerMessage(""), 3000);
  };

  // определяем, какую страницу показывать
  const currentPage =
    (isWelcomeMenu && !isLoggedIn && welcomePage) ||
    (!isWelcomeMenu && !isLoggedIn && signForm) ||
    (!isWelcomeMenu && isLoggedIn && mainPage);

  return (
    <View style={{ flex: 1 }}>
      {/* Отображаем текущую страницу */}
      {currentPage}

      {/* Плавающая кнопка Ping */}
      <View
        style={{
          position: "absolute",
          bottom: 30,
          right: 30,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={handlePing}
          style={{
            backgroundColor: "#4CAF50",
            borderRadius: 30,
            paddingVertical: 10,
            paddingHorizontal: 20,
            shadowColor: "#000",
            shadowOpacity: 0.2,
            shadowOffset: { width: 0, height: 2 },
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Ping Server</Text>
        </TouchableOpacity>

        {/* Сообщение о состоянии сервера */}
        {serverMessage !== "" && (
          <Text style={{ marginTop: 8, color: "gray" }}>{serverMessage}</Text>
        )}
      </View>
    </View>
  );
}
