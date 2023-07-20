import React, { useState } from "react";

interface TodoItemProps {
	todo: TodoItem;
	onDelete: (id: number) => void;
	onUpdate: (updatedTodo: TodoItem) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onUpdate }) => {
	const [isEdit, setIsEdit] = useState(false);
	const [editedText, setEditedText] = useState(todo.text);

	const handleDelete = () => {
		onDelete(todo.id);
	};

	const handleEdit = () => {
		setIsEdit(true);
	};

	const handleSave = () => {
		setIsEdit(false);
		onUpdate({ ...todo, text: editedText });
	};
	const handleToggleCompleted = () => {
		onUpdate({ ...todo, completed: !todo.completed });
	};

	return (
		<div>
			{isEdit ? (
				<div>
					<input
						type="text"
						value={editedText}
						onChange={(e) => setEditedText(e.target.value)}
					/>
					<button onClick={handleSave}>Save</button>
				</div>
			) : (
				<>
					<input
						type="checkbox"
						checked={todo.completed}
						onChange={handleToggleCompleted}
					/>
					<span
						style={{ textDecoration: todo.completed ? "line-through" : "none" }}
					>
						{todo.text}
					</span>
					<button onClick={handleEdit}>Edit</button>
					<button onClick={handleDelete}>Delete</button>
				</>
			)}

			

			{/* <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleCompleted}
      />
      <span>{todo.text}</span>
      <button onClick={handleDelete}>Edit</button>
      <button onClick={handleDelete}>Delete</button> */}
		</div>
	);
};

export default TodoItem;