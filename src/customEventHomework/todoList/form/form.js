import { createElement, render, createCustomEvent } from '../helper/helper.js'

const addTodoEvent = createCustomEvent('addTodoEvent', {
	description: null,
	title: null
})

/**
 *Создаем версткудля формы
 */
export const createForm = () => {
	const form = createElement('form', [['id', 'createTodo']])

	const children = ` 
    <label id="title">title</label>
    <input type="text" name="title" id="title"/>
    
    <label id="description">description</label>
    <input type="text" name="description" id="description"/>
    
    <button type="submit">Add</button>`

	form.innerHTML = children

	render(form, '#root')

	return form
}

/**
 * обрабатываем событие submit
 * @param event - объект встроенного события submit
 * @param customEvent -пользовательское событие
 */
const submitHandle = (event, customEvent) => {
	event.preventDefault()
	let description = event.target.querySelector('input[name="description"]').value
	let title = event.target.querySelector('input[name="title"]').value

	customEvent.detail.description = description
	customEvent.detail.title = title

	document.dispatchEvent(customEvent)
}

let form = createForm()
form.addEventListener('submit', (event) => submitHandle(event, addTodoEvent))
