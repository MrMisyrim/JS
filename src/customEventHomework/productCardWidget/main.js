import {createCart} from './src/components/Cart/Cart.js'
import {createAddProductButton} from './src/components/AddProductButton/AddProductButton.js'
import {createProductsList} from './src/components/ProductsList/ProductsList.js'
import {activeProductCard} from './src/components/ActiveProductCard/ActiveProductCard.js'
import {createMainLayout} from './src/components/MainLayout/MainLayout.js'
import {render} from './src/helper/helper.js'
import {products} from './src/data/data.js'

const {productId, price, productName, img} = products[0]

render(createMainLayout(), '#root')

let activeProduct = activeProductCard(productName, productId, img, price)
let addButton = createAddProductButton(productName, productId, price)
let cart = createCart()
let productList = createProductsList(products)

const addedProducts = []


//обрабатываем событие
document.addEventListener('onSelectProduct', (e) => {
    // получаем данные из события
    const {name, id, imgSource, price} = e.detail
    // удаляем элементы, которыен нужно перерисовать
    activeProduct.remove()
    addButton.remove()
    // создаем заново  новыми данными
    activeProduct = activeProductCard(name, id, imgSource, price)
    addButton = createAddProductButton(name, id, price)
    // перерисовываем
    render(activeProduct, '.main-layout__product-active')
    render(addButton, '.main-layout__product-active')
})
// событие происходит, когда пользователь нажал на кнопку добавить в корзину
document.addEventListener('addToCart', (e) => {
    addedProducts.push(e.detail)

    cart.remove()
    cart = createCart(addedProducts)
    render(cart, '.main-layout__cart-container')
})

document.addEventListener('openCart', (e) => {
    // console.log(e.detail)
    /** Событие openCart реализовано не для удаления товаров из корзизины
     * метод remove не принимает параметров https://developer.mozilla.org/ru/docs/Web/API/Element/remove
     * строчка  cart.remove(addedProducts.length = 0) некорректная,
     * так как в createCart используется параметр по умолчанию (пустой массив)
     */

    cart.remove(addedProducts.length = 0)
    // некорректно
    cart = createCart()
    render(cart, '.main-layout__cart-container')


    /**
     *    addedProducts.length = 0
     *     cart.remove()
     *     cart = createCart(addedProducts)
     *     render(cart, '.main-layout__cart-container')
     */
})

render(cart, '.main-layout__cart-container')
render(activeProduct, '.main-layout__product-active')
render(addButton, '.main-layout__product-active')
render(productList, '.main-layout__product-list')



