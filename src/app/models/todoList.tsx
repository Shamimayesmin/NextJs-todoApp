import React, { useState } from "react";
import { deleteTodo, getTodos, updateTodo } from "./todos";
import TodoItem from "./todoItem";



const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<TodoItem[]>(getTodos());
	const [newTodoText, setNewTodoText] = useState<string>("");
	

// Add a new to-do
    const handleAddTodo = () => {
		if (newTodoText.trim() === "") return;
		const newTodo: TodoItem = {
			id: Date.now(),
			text: newTodoText,
			completed: false,
		};
		setTodos([...todos, newTodo]);
		setNewTodoText("");
	};


    // Delete to-do
    const handleDeleteTodo = (id: number) => {
		deleteTodo(id);
		setTodos(todos.filter((todo) => todo.id !== id));
	};

    
    // Update To-do
	const handleUpdateTodo = (updatedTodo: TodoItem) => {
		updateTodo(updatedTodo);
		setTodos(
			todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
		);
	};
    
	return (
		<div>
			<h1>Todo List</h1>
			<div>
				<input
					type="text"
					value={newTodoText}
					onChange={(e) => setNewTodoText(e.target.value)}
				/>
				<button onClick={handleAddTodo}>Add Todo</button>
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