let todos: TodoItem[] = [
	{ id: 1, text: "Buy groceries", completed: false },
	{ id: 2, text: "Do laundry", completed: false },
];

export const getTodos = (): TodoItem[] => {
	return todos;
};

export const addTodo = (todo: TodoItem): TodoItem => {
	todos.push(todo);
	return todo;
};

export const updateTodo = (updatedTodo: TodoItem): TodoItem => {
	const index = todos.findIndex((todo) => todo.id === updatedTodo.id);
	todos[index] = updatedTodo;
	return updatedTodo;
};

export const deleteTodo = (id: number): void => {
	todos = todos.filter((todo) => todo.id !== id);
};
