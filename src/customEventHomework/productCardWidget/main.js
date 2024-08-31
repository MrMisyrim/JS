import { createCart } from './src/components/Cart/Cart.js'
import { createAddProductButton } from './src/components/AddProductButton/AddProductButton.js'
import { createProductsList } from './src/components/ProductsList/ProductsList.js'
import { activeProductCard } from './src/components/ActiveProductCard/ActiveProductCard.js'
import { createMainLayout } from './src/components/MainLayout/MainLayout.js'
import {findId, findProduct, render} from './src/helper/helper.js'
import { products } from './src/data/data.js'
import {CreatCartPopover} from './src/components/Cart/components/CartPopover/CartPopover.js'

const {productId, price, productName, img} = products[0]

render(createMainLayout(),'#root')
let open = false
let activeProduct = activeProductCard(productName, productId, img, price)
let addButton = createAddProductButton(productName,productId, price, img)
let cart = createCart()
let cartPopover = CreatCartPopover([],open)
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
    addButton = createAddProductButton(name, id, price, imgSource)
    // перерисовываем
    render(activeProduct, '.main-layout__product-active')
    render(addButton, '.main-layout__product-active')
})
// событие происходит, когда пользователь нажал на кнопку добавить в корзину
document.addEventListener('addToCart', (e) => {
    addedProducts.push(e.detail)
    // console.log(addedProducts)
    cart.remove()
    cart=createCart(addedProducts)
    cartPopover.remove()
    cartPopover=CreatCartPopover(addedProducts, open)
    render(cartPopover,'.main-layout__cart-container')
    render(cart, '.main-layout__cart-container')
})

document.addEventListener( 'openCart', (e) => {
    open = !open
    // console.log(e.detail, `openCart`)
    // console.log(addedProducts)
    cartPopover.remove()
    cartPopover=CreatCartPopover(e.detail.products, open)
    render(cartPopover,'.main-layout__cart-container')
})
document.addEventListener( 'addToProduct', (e) => {
    console.log(e.detail)
    addedProducts.push(findProduct(addedProducts,e.detail.id))
    cart.remove()
    cart=createCart(addedProducts)
    cartPopover.remove()
    cartPopover=CreatCartPopover(addedProducts, open)
    render(cart, '.main-layout__cart-container')
    render(cartPopover,'.main-layout__cart-container')
})
document.addEventListener( 'deleteToProduct', (e) => {
    addedProducts.splice(findId(addedProducts, e.detail.id),1)
    cart.remove()
    cart=createCart(addedProducts)
    cartPopover.remove()
    cartPopover=CreatCartPopover(addedProducts, open)
    render(cart, '.main-layout__cart-container')
    render(cartPopover,'.main-layout__cart-container')
})


render(cart, '.main-layout__cart-container')
render(activeProduct, '.main-layout__product-active')
render(addButton, '.main-layout__product-active')
render(productList, '.main-layout__product-list')



