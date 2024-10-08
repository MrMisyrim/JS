/**
 *Функция создает тег с указанным именем
 * @param {string} element  - имя тега
 * @param {string[][]} attributes - иногомерный массив с иенем и значением атрибуита [[имя, значение], [имя, значение] ...]
 * @param text - текст элемента
 * @return {*} - новый html элемент
 */

export const createElement = (element, attributes, text) => {
	let newElement = document.createElement(element)
	text && newElement.append(text)

	attributes &&
		attributes?.map(([name, value]) => {
			newElement.setAttribute(name, value)
		})

	return newElement
}

/**
 *Функция для создания пользовательского события
 */
export const createCustomEvent = (name, detail) => {
	return new CustomEvent(name, {
		detail: detail,
		bubbles: true,
		cancelable: true,
		composed: true
	})
}

/**
 *
 * @param element - элемент , который нужно добавить в элемент с селекором rootSelector
 * @param rootSelector - селектор контейнера
 */
export const render = (element, rootSelector) => {
	let root = document.querySelector(rootSelector)
	root.append(element)
}
export const groupBy = (array, key) =>
	array.reduce((accumulator, object) => {
		(accumulator[object[key]] ??= []).push(object)
		return accumulator
	}, {})
export const getTotalPrice = (products) => {
	let prices =products?.length ?  products?.map((product) => product?.price) : [0]
	return prices?.reduce((accum, current) => accum + current)
}

export const findId= (array=[], element) =>{
	return array.indexOf(array.find(id => id.id === element))
}
export const findProduct= (array=[], element) =>{
	return array.find(id => id.id === element)
}