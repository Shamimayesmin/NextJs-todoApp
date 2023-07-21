import React, { useState } from "react";
import { deleteTodo, getTodos, updateTodo } from "./todos";
import TodoItem from "./todoItem";
import { TodoItemType } from "./todoInterface";
import { v4 as uuidv4 } from "uuid";

const TodoList: React.FC = () => {
	const [todos, setTodos] = useState<TodoItemType[]>(getTodos());
	const [newTodoText, setNewTodoText] = useState<string>("");

	// Add a new to-do
	const handleAddTodo = () => {
		if (newTodoText.trim() === "") return;
		const newTodo: TodoItemType = {
			// id: Date.now(),
			id: uuidv4(),
			text: newTodoText,
			completed: false,
		};
		setTodos([...todos, newTodo]);
		setNewTodoText("");
	};

	// Delete to-do
	const handleDeleteTodo = (id: string) => {
		deleteTodo(id);
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	// Update To-do
	const handleUpdateTodo = (updatedTodo: TodoItemType) => {
		updateTodo(updatedTodo);
		setTodos(
			todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
		);
	};

	return (
		<div>
			<h1 className="text-3xl text-center font-semibold mt-10 uppercase">
				Todo List
			</h1>
			<hr className="w-2/3 mx-auto border-2 border-slate-600 mt-4" />
			<div className="flex justify-center mt-8 mb-10">
				<input
					type="text"
					value={newTodoText}
					onChange={(e) => setNewTodoText(e.target.value)}
					className="p-3 border-2 border-slate-400 rounded"
				/>
				<button
					className="border-2 ml-3 p-2 bg-gradient-to-t from-emerald-500 rounded-lg border-emerald-200 uppercase"
					onClick={handleAddTodo}
				>
					Add Todo
				</button>
			</div>

			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onDelete={handleDeleteTodo}
					onUpdate={handleUpdateTodo}
				/>
			))}
		</div>
	);
};

export default TodoList;
