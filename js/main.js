document.addEventListener('DOMContentLoaded', () => {
    const sendMessageButton = document.getElementById('send-message');
    const chatInput = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');

    sendMessageButton.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            chatBox.appendChild(messageElement);
            chatInput.value = '';
        }
    });
});
