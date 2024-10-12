// auth.js

// Проверка на наличие зарегистрированного пользователя
function checkUser() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('chat-container').style.display = 'block';
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('username-display').textContent = username;
    } else {
        document.getElementById('chat-container').style.display = 'none';
        document.getElementById('login-container').style.display = 'block';
    }
}

// Регистрация нового пользователя
document.getElementById('register-button').addEventListener('click', () => {
    const usernameInput = document.getElementById('username-input').value.trim();
    if (usernameInput) {
        localStorage.setItem('username', usernameInput);
        alert('Регистрация успешна!');
        checkUser();
    } else {
        alert('Пожалуйста, введите имя пользователя.');
    }
});

// Логаут
document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('username');
    alert('Вы вышли из аккаунта.');
    checkUser();
});

// Проверка пользователя при загрузке
document.addEventListener('DOMContentLoaded', checkUser);
