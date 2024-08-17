// Функция для обработки пользовательского события и обновления содержимого выпадающего списка
function handleDropdownUpdate(event) {
    const dropdown = document.getElementById('dropdown');

    // Обновление значений пунктов меню на основе деталей события
    const newOptions = event.detail.options;
    updateDropdownOptions(dropdown, newOptions);

    // Подтверждение изменения в консоли
    console.log('Dropdown content updated:', newOptions);
}

// Функция для обновления пунктов выпадающего списка
function updateDropdownOptions(dropdown, options) {
    // Очистка существующих пунктов
    dropdown.innerHTML = '';

    // Добавление новых пунктов
    options.forEach((option, index) => {
        const optionElement = document.createElement('option');

        optionElement.value = index;
        optionElement.textContent = option.name.common; // Отображение названия страны
        dropdown.appendChild(optionElement);
    });
}

// Добавление слушателя событий для обработки пользовательского события
document.addEventListener('updateDropdown', handleDropdownUpdate);

// Функция для запуска пользовательского события с новыми пунктами выпадающего списка
function triggerDropdownUpdate(newOptions) {
    const updateEvent = new CustomEvent('updateDropdown', {
        detail: {
            options: newOptions,
        },
    });

    // Отправка пользовательского события
    document.dispatchEvent(updateEvent);
}

// Слушатель событий click кнопки для обновления выпадающего списка
document.getElementById('updateButton').addEventListener('click', function () {
    // Получение случайных стран из Restcountries API
    fetch('https://restcountries.com/v3.1/all?fields=name,alpha3Code')
        .then(response => response.json())
        .then(data => {
            // Случайным образом выбираем 5 стран из ответа API
            const randomCountries = getRandomElements(data, 5);
            // Запуск пользовательского события с новыми опциями
            triggerDropdownUpdate(randomCountries);
        })
        .catch(error => console.error('Error fetching countries:', error));
});

// Функция для получения случайных элементов из массива
function getRandomElements(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}