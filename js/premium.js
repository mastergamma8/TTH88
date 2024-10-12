// premium.js

document.addEventListener('DOMContentLoaded', () => {
  const premiumButton = document.getElementById('premium-button');
  const premiumStatus = document.getElementById('premium-status');
  let isPremium = false; // Начальное значение для статуса TTH Premium

  // Обработка кнопки для активации TTH Premium
  premiumButton.addEventListener('click', () => {
    isPremium = !isPremium; // Переключаем статус премиума
    premiumStatus.textContent = isPremium ? "TTH Premium активирован!" : "TTH Premium неактивен.";
    premiumStatus.style.color = isPremium ? "green" : "red";

    // Можно добавить дополнительные функции при активации премиума
    if (isPremium) {
      activatePremiumFeatures();
    }
  });

  // Функция для активации функций TTH Premium
  function activatePremiumFeatures() {
    // Добавьте логику для дополнительных функций, например:
    alert("Вы получили доступ к эксклюзивным функциям!");
  }
});
