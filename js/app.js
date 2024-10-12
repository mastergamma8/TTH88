// app.js

document.addEventListener('DOMContentLoaded', () => {
  // Функция для отправки сообщения
  function sendMessage() {
    const messageInput = document.getElementById("chat-input");
    const message = messageInput.value.trim();

    if (message) {
      const chatBox = document.getElementById("chat-box");
      const newMessage = document.createElement("div");
      newMessage.classList.add("message");
      newMessage.textContent = message;
      chatBox.appendChild(newMessage);
      messageInput.value = ""; // Очистить поле ввода
      chatBox.scrollTop = chatBox.scrollHeight; // Прокрутка вниз
    }
  }

  // Обработчик клика для отправки сообщения
  document.getElementById("send-message").addEventListener("click", sendMessage);

  // Отправка сообщения по нажатию Enter
  document.getElementById("chat-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  // Логика для TTH Premium
  const premiumButton = document.getElementById('premium-button');
  const premiumStatus = document.getElementById('premium-status');
  let isPremium = false;

  premiumButton.addEventListener('click', () => {
    isPremium = !isPremium; // Переключаем статус премиума
    premiumStatus.textContent = isPremium ? "TTH Premium активирован!" : "TTH Premium неактивен.";
    premiumStatus.style.color = isPremium ? "green" : "red";
  });
});
