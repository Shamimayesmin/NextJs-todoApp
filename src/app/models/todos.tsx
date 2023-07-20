import { TodoItemType } from "./todoInterface";

let todos: TodoItemType[] = [
	{ id: 1, text: "Buy groceries", completed: false },
	{ id: 2, text: "Do homework", completed: false },
];

// get all todos
export const getTodos = (): TodoItemType[] => {
	return todos;
};

export const addTodo = (todo: TodoItemType): TodoItemType => {
	todos.push(todo);
	return todo;
};

export const updateTodo = (updatedTodo: TodoItemType): TodoItemType => {
	const index = todos.findIndex((todo) => todo.id === updatedTodo.id);
	todos[index] = updatedTodo;
	return updatedTodo;
};

export const deleteTodo = (id: number): void => {
	todos = todos.filter((todo) => todo.id !== id);
};
