import { createElement, createCustomEvent } from '../../helper/helper.js'

/**
 * Компонент представляет собой кнопку для добавления товара в корзину
 * @param name - название товара
 * @param id - идентификатор товара
 * @param price - цена товара
 * @return {*}
 */
export const createAddProductButton = (name, id, price) => {
	// создаем элемент
	const addButton = createElement('button', [['class', 'productButton'], []], 'Добавить в корзину')
	// создаем событие, куда добавляем данные товара, который добавляем в корзину
	addButton.addEventListener('click', () => {
	})
	// возвращаем элемент
	return addButton
}
