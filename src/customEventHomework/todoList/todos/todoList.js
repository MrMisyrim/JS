
import {createElement, render, createCustomEvent} from '../helper/helper.js'
/**
 * СОБЫТИЕ МОЖНО СОЗДАТЬ ТУТ . НУЖНО ИСПОЛЬЗОВАТЬ ФУНКЦИЮ createCustomEvent
 */



/**
 *
 * @param id - идентификаор записи
 * @param title- заголоаок
 * @param description - описание
 * @return {*}
 */
const createToDoItem = (id, title, description) => {
	let todoItem = createElement('div', [
		['class', 'todo__item'],
		['id', id]
	])
	let todoTitle = createElement('div', [['class', 'todo__title']], title)
	let todoDescription = createElement('div', [['class', 'todo__description']], description)
	// добавляем в созданный эжлемент заголовок и описание
	todoItem.append(todoTitle, todoDescription)

	/**
	 * создать элемент в виде крестика для удаления содержимого списка
	 * удаляем по 1 штуке
	 */

	return todoItem
}


export const addTodos = (todoData = []) => {
	if(!todoData?.length){
		return
	}

	// создаем главный контейнер для всех элементов списка
	const todos = createElement('div',	[['class', 'todo']] )

	todoData?.map(data => {
		const {id, title, description} = data

		let newTodo = createToDoItem(id, title, description)
		// добавляем элементы в контейнер todos
		todos.append(newTodo)
	})

	// отрисовывем в div с id root содержимое
	render(todos, "#root")

}

