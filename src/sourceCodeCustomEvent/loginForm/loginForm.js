
// Пользовательское событие для уведомления о логине пользователя
const userLoginEvent = new CustomEvent('userLogin', {
    detail: {
        username: null,
        timestamp: null
    }
});

// Функция для обработки отправки формы (логин)
function handleLoginFormSubmit(event, userLoginEvent) {
    event.preventDefault(); // Предотвращение отправки формы по умолчанию

    // Логика заполнителя для аутентификации
    const username = document.querySelector('#username').value;
    const timestamp = new Date().toLocaleString();

    // Обновление свойства detail пользовательского события соответствующей информацией
    userLoginEvent.detail.username = username;
    userLoginEvent.detail.timestamp = timestamp;

    // Отправка пользовательского события
    document.dispatchEvent(userLoginEvent);

    // Обновления статуса аутентификации
    const authStatus = document.querySelector('#authStatus');
    authStatus.innerHTML = `
      <p>Authentication Status: Logged in as ${username}</p>
      <p>Last login at: ${timestamp}</p>
    `;
}

document.addEventListener('DOMContentLoaded', function() {

    // Добавление слушателя события в форму логина на отправку
    const loginForm = document.querySelector('#loginForm');

    loginForm.addEventListener('submit', (e) => handleLoginFormSubmit(e, userLoginEvent));

});



document.addEventListener('userLogin', (e) => console.log(e))