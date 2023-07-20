import React, { useState } from "react";
import { getTodos } from "./todos";



const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<TodoItem[]>(getTodos());
	const [newTodoText, setNewTodoText] = useState<string>("");
	
    
	return (
		<div>
			<h1>Todo List</h1>
			<div>
				<input
					type="text"
					// value={newTodoText}
					// onChange={(e) => setNewTodoText(e.target.value)}
				/>
				<button >Add Todo</button>
			</div>
			
		</div>
	);
};

export default TodoList;