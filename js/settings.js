document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.getElementById('toggle-theme');
    const logoutButton = document.getElementById('logout');

    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    logoutButton.addEventListener('click', () => {
        alert('Вы вышли из аккаунта.');
        // Здесь можно указать ссылку на страницу входа
    });
});
