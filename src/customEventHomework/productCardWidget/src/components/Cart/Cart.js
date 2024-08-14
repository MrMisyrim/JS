import { createElement, createCustomEvent } from '../../helper/helper.js'

export const createCart = (products = []) => {

	// создаем элемент и добавляем класс
	let cartContainer = createElement('div', [['class', 'cart']])
	// считаем сумму товаров, которые были добавлены в корзину
	let prices =products?.length ?  products?.map((product) => product?.price) : [0]
	let cost = prices?.reduce((accum, current) => accum + current)
	// верстка компонента Корзина (Cart)
	let template = `<div>В корзине : ${products?.length}</div> <div>Сумма ${cost}</div>`
	// вставляем верстку в созданный cartContainer
	cartContainer.insertAdjacentHTML('afterBegin', template)

	// событие, которое понадробится для отдельной страницы ,где будут все товары в корзине
	cartContainer.addEventListener('click', () => {
		document.dispatchEvent(createCustomEvent('openCart', { products }))
	})
	// возвращаем созданный элемент
	return cartContainer
}
