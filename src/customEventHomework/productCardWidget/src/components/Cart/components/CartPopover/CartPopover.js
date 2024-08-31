import {createElement, groupBy, getTotalPrice, createCustomEvent} from '../../../../helper/helper.js'

export const CreatCartPopover = (products = [], open) => {
    let openClassName = open ? 'open' : 'close'
    const cartPopover = createElement(`div`, [['class', `cartPopover ${openClassName}`]])
    let result = groupBy(products, `id`)
    // console.log(result, `result`)

    Object.entries(result).forEach(([_,products]) => {
        let price = getTotalPrice(products)
        let {id, img, name} = products[0]
        cartPopover.append(createPopoverItem(name, id, img, price, products.length))
        cartPopover.append(createPopoverPlus(id))
        cartPopover.append(createPopoverMinus(id))
    })

    return cartPopover
}

const createPopoverItem = (name, id, imgSource, price, total) => {
    let popoverItem = createElement(
        'div',
        [
            ['class', 'popoverItem'],
            ['id', id],
        ],
    )

    popoverItem.innerHTML = `
	<div class="popoverItem__image__name">
		<img src=${imgSource} alt=${name}>
		<div class="popoverItem__text">${name}</div>
	</div>
    <div class="popoverItem__price">${price}</div>
    <div class="popoverItem__total">${total} шт</div>`

    return popoverItem
}
export const createPopoverPlus = (id) => {
    let PopoverPlus = createElement(
        'div',
        [
            ['class', 'popoverItem__plus'],
            ['id', id],
        ],
    )
    PopoverPlus.innerHTML = `
    <div class="popoverItem__plus">Добавить</div>`

    PopoverPlus.addEventListener('click', () => {
        const addToProduct = createCustomEvent('addToProduct', {id})
        document.dispatchEvent(addToProduct)
    })
    return PopoverPlus
}
export const createPopoverMinus = (id) => {
    let PopoverMinus = createElement(
        'div',
        [
            ['class', 'popoverItem__minus'],
            ['id', id],
        ],
    )
    PopoverMinus.innerHTML = `
    <div class="popoverItem__plus">Убрать</div>`

    PopoverMinus.addEventListener('click', () => {
        const addToProduct = createCustomEvent('deleteToProduct', {id})
        document.dispatchEvent(addToProduct)
    })
    return PopoverMinus
}

