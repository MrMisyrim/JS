document.addEventListener('DOMContentLoaded', function() {


    const openModalButton = document.querySelector('#openModalButton');
    const closeModalButton = document.querySelector('#closeModalButton');
    const okModalButton = document.querySelector('#okButton');
    const modal = document.querySelector('#modal');
    const overlay = document.querySelector('#overlay');

    const component1 = document.querySelector('#component1');
    const component2 = document.querySelector('#component2');

    // Пользовательское событие, уведомляющее другие компоненты об открытии модального окна
    const modalOpenedEvent = new CustomEvent('modalOpened');
    const modalClosedEvent = new CustomEvent('modalClosed');
    const okEvent = new CustomEvent('okEvent');

    // Функция открытия модального окна и уведомления других компонентов
    function openModal() {
        modal.style.display = 'block';
        overlay.style.display = 'block';

        // Отправка пользовательского события для уведомления других компонентов
        document.dispatchEvent(modalOpenedEvent);
    }

    // Функция закрытия модального окна
    function closeModal(event) {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        // Отправка пользовательского события для уведомления других компонентов
        document.dispatchEvent(event);
    }


    // Слушатель событий для кнопки открытия модального окна
    openModalButton.addEventListener('click', openModal);

    // Слушатель событий для кнопки закрытия модального окна
    closeModalButton.addEventListener('click',() =>  closeModal(modalClosedEvent));

    // Слушатель событий для кнопки ok модального окна
    okModalButton.addEventListener('click',() =>  closeModal(okEvent));

    // Слушатель события для пользовательского события изменения состояния других компонентов
    document.addEventListener('modalOpened', function() {
        // Настройка состояния или выполнение необходимых действий в других компонентах
        component1.innerText = 'Component 1 - Modal Opened';
        component2.innerText = 'Component 2 - Modal Opened';
    });

    // Слушатель события для пользовательского события изменения состояния других компонентов
    document.addEventListener('modalClosed', function() {
        // Настройка состояния или выполнение необходимых действий в других компонентах
        component1.innerText = 'Component 1 -  Modal closed';
        component2.innerText = 'Component 2 -  Modal closed';
    });

    document.addEventListener('okEvent', function() {
        console.log('event okEvent')

        component1.innerText = 'Component 1 - okEvent';
        component2.innerText = 'Component 2 -  okEvent';
    });
});