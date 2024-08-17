import { createElement } from '../../helper/helper.js'

/**
 *
 * @param name - название товара
 * @param id - иднетифткатор
 * @param imgSource -ссылка на изображение
 * @param price - цена
 * @return - возвращаем верстку элемента
 */
export const activeProductCard = (name, id, imgSource, price) => {
	// создаем элемент
	let productCardContainer = createElement('div', [['class', 'activeProductCard'], ["id", id]])
	// добавляем вертску
	productCardContainer.innerHTML = ` 
        <div class="activeProductCard__image">
             <img src=${imgSource} alt="name">       
        </div>
        <div class="activeProductCard__text">${name}, Цена: ${price}</div> `
	// возвращаем созданный элемент
	return productCardContainer
}