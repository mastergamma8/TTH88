// chat.js

document.addEventListener('DOMContentLoaded', () => {
  const sendMessageButton = document.getElementById('send-message');
  const chatInput = document.getElementById('chat-input');
  const chatBox = document.getElementById('chat-box');

  // Функция для отправки сообщения в чате
  function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
      const newMessage = document.createElement('div');
      newMessage.classList.add('message');
      newMessage.textContent = message;
      chatBox.appendChild(newMessage);
      chatInput.value = ''; // Очистить поле ввода
      chatBox.scrollTop = chatBox.scrollHeight; // Прокрутка вниз
    }
  }

  // Обработчик клика для отправки сообщения
  sendMessageButton.addEventListener('click', sendMessage);

  // Отправка сообщения по нажатию Enter
  chatInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
});
