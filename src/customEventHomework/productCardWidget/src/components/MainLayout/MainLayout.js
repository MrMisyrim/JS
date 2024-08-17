
import {createElement} from "../../helper/helper.js";

/**
 *
 * @return шаблон верстки страницы
 */
export const createMainLayout = () => {
	let mainLayout = createElement('div', [['class', 'main-layout']])

	mainLayout.innerHTML = ` 
        <div class="main-layout__cart-container"></div>
       
        <div class="main-layout__product-container">
            <div class="main-layout__product-active"></div>
            <div class="main-layout__product-list"></div>
        </div>`

	return mainLayout
}