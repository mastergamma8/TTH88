document.addEventListener('DOMContentLoaded', () => {
    const premiumButton = document.getElementById('premium-button');
    const premiumStatus = document.getElementById('premium-status');
    let isPremium = false;

    premiumButton.addEventListener('click', () => {
        isPremium = !isPremium;
        premiumStatus.textContent = isPremium ? "TTH Premium активирован!" : "TTH Premium неактивен.";
        premiumStatus.style.color = isPremium ? "green" : "red";
    });
});
