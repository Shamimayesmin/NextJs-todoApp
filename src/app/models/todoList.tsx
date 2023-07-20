import React, { useState } from "react";



const TodoList: React.FC = () => {

	
    
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