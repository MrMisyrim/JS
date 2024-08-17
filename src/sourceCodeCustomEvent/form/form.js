document.addEventListener('DOMContentLoaded', function() {
    // Пользовательское событие для отображения загрузочного спиннера с дополнительными деталями
    const showLoadingSpinnerEvent = new CustomEvent('showLoadingSpinner', {
        detail: {
            message: 'Loading...',
            timestamp: new Date().toLocaleString()
        },
        bubbles: true, // Устанавливаем bubbles в true
    });

    // Пользовательское событие для индикации завершения асинхронной операции с деталями
    const asyncOperationCompleteEvent = new CustomEvent('asyncOperationComplete', {
        detail: {
            message: 'Async operation complete',
            timestamp: new Date().toLocaleString()
        },
        bubbles: true, // Устанавливаем bubbles в true, чтобы событие могло распространяться вверх по DOM
    });

    // Функция обработки отправки формы
    function handleFormSubmit(event) {
        event.preventDefault(); // Предотвращение отправки формы по умолчанию

        // Отправка пользовательского события для отображения спиннера загрузки
        document.dispatchEvent(showLoadingSpinnerEvent);

        // Симуляция асинхронной операции (например, вызов API)
        setTimeout(() => {
            // Отправка пользовательского события при завершении асинхронной операции
            document.dispatchEvent(asyncOperationCompleteEvent);
        }, 2000); // Симуляция двух секундной асинхронной операции
    }

    // Добавление слушателя событий в форму для отправки
    const myForm = document.getElementById('myForm');
    myForm.addEventListener('submit', handleFormSubmit);

    // Слушатель событий для отображения загрузочного спиннера
    document.addEventListener('showLoadingSpinner', function(event) {
        const loadingSpinner = document.getElementById('loadingSpinner');
        loadingSpinner.style.display = 'block';
        console.log('Show Loading Spinner:', event.detail);
    });

    // Слушатель события для скрытия загрузочного спиннера после завершения асинхронной операции
    document.addEventListener('asyncOperationComplete', function(event) {
        const loadingSpinner = document.getElementById('loadingSpinner');
        loadingSpinner.style.display = 'none';
        console.log('Async Operation Complete:', event.detail);
    });
});