import { TodoItemType } from "./todoInterface";

let todos: TodoItemType[] = [
	
	{ id: "1", text: "Buy groceries", completed: false },
	{ id: "2", text: "Do homework", completed: false },
];

// create function for getting all the task
export const getTodos = (): TodoItemType[] => {
	return todos;
};

// function for adding a new task
export const addTodo = (todo: TodoItemType): TodoItemType => {
	todos.push(todo);
	return todo;
};

// Make a function for update task
export const updateTodo = (updatedTodo: TodoItemType): TodoItemType => {
	const index = todos.findIndex((todo) => todo.id === updatedTodo.id);
	todos[index] = updatedTodo;
	return updatedTodo;
};


// filter todos for delete specific one
export const deleteTodo = (id: string): void => {
	todos = todos.filter((todo) => todo.id !== id);
};
