import { todoData } from './data.js'
import { addTodos } from './todos/todoList.js'
import './form/form.js'

document.addEventListener('addTodoEvent', (event) => {
	// добавляем новую информацию
	todoData.push({
		...event.detail,
		id: `${event.detail.title}_${event.detail.description}`
	})
	// удаляем старый список
	let todo = document.querySelector('.todo')
	todo.remove()
	// перерисовывем его снова с другими данными
	addTodos(todoData)
})

/**
 * обработку нового события onDeleteToDoItem можно написать тут
 */


// отрисовывет те элементы, что в data.js
addTodos(todoData)
