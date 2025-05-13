// Открытие модального окна
function openModal() {
    document.getElementById('callbackModal').style.display = 'flex';
}

// Закрытие модального окна
function closeModal() {
    document.getElementById('callbackModal').style.display = 'none';
}

// Закрытие при клике вне окна
window.onclick = function (event) {
    const modal = document.getElementById('callbackModal');
    if (event.target === modal) {
        closeModal();
    }
};

// Отправка формы
document.getElementById('callbackForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Форма отправлена! Мы скоро вам перезвоним.');
    closeModal();
});