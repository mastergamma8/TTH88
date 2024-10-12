// chat.js

document.addEventListener('DOMContentLoaded', () => {
    const sendMessageButton = document.getElementById('send-message');
    const chatInput = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');

    sendMessageButton.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            messageElement.className = 'message'; // Можно добавить стиль
            chatBox.appendChild(messageElement);
            chatInput.value = '';
            chatBox.scrollTop = chatBox.scrollHeight; // Прокрутка вниз
        }
    });

    // Отправка сообщения по нажатию Enter
    chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessageButton.click();
        }
    });
});
