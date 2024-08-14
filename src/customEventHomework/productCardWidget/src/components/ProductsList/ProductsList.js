import { createElement, createCustomEvent } from '../../helper/helper.js'

/**
 *
 * @param name - название товара
 * @param id - иднетифткатор
 * @param imgSource -ссылка на изображение
 * @param price - цена
 * @return {*} вертска элемента
 */
const createProductItem = (name, id, imgSource, price) => {
	let productItem = createElement(
		'div',
		[
			['class', 'productItem'],
			['id', id],
		],
	)

	productItem.innerHTML = `
	<div class="productItem__image">
		<img src=${imgSource} alt=${name}>
	</div>
	<div class="product__text">${name}</div>`

	// дгенерируем событие onSelectProduct. которое отрбатывает при выборе товара из списка справа
	productItem.addEventListener('click', () => {
		// добавляем все данные товара в событие
		document.dispatchEvent(createCustomEvent('onSelectProduct', { name, id, imgSource, price }))
	})

	return productItem
}

// создаем список товаров справа
export const createProductsList = (products = []) => {
	// контейнер для всех товаров в меня справа
	const productsList = createElement('div', [['class', 'productsList']])

	products?.forEach((product) => {
		const { productId, productName, price, img } = product
		// жлбавляем каждый товар в productsList
		productsList.append(createProductItem(productName, productId, img, price))
	})

	return productsList
}
