import React, { useState } from "react";

// Icons
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemProps } from "./todoInterface";

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onUpdate }) => {
	const [isEdit, setIsEdit] = useState(false);
	const [editedText, setEditedText] = useState(todo.text);

	// Deleting todo from the list
	const handleDelete = () => {
		onDelete(todo.id);
	};

	// Edit task or change the task
	const handleEdit = () => {
		setIsEdit(true);
	};

	// After editing save that task
	const handleSave = () => {
		setIsEdit(false);
		onUpdate({ ...todo, text: editedText });
	};

	// If the task is complete mark the checkbox
	const handleToggleCompleted = () => {
		onUpdate({ ...todo, completed: !todo.completed });
	};

	return (
		<div className="flex justify-center items-center">
			{/* implemented conditional rendaring {if need editing show input otherwise show checkbox for mark as completed}  */}

			{isEdit ? (
				<div>
					<input
						type="text"
						value={editedText}
						onChange={(e) => setEditedText(e.target.value)}
						className="p-2 border-2 border-slate-400 rounded-lg mt-3"
					/>
					<button
						className="bg-sky-500 p-2 border-2 rounded-lg ml-4"
						onClick={handleSave}
					>
						Save
					</button>
				</div>
			) : (
				<>
					<input
						type="checkbox"
						checked={todo.completed}
						onChange={handleToggleCompleted}
						className="mr-2"
					/>
					<span
						style={{
							textDecoration: todo.completed ? "line-through" : "none",
							fontSize: "20px",
						}}
					>
						{todo.text}
					</span>
					<button
						className="bg-blue-300 p-1 border-2 rounded-lg ml-4 my-2"
						onClick={handleEdit}
					>
						<span className="flex items-center gap-2">
							Edit
							<FiEdit />
						</span>
					</button>
					<button
						className="bg-red-400 p-2 border-2 rounded-lg ml-4"
						onClick={handleDelete}
					>
						<span className="flex items-center gap-2">
							Delete
							<MdDeleteForever />
						</span>
					</button>
				</>
			)}
		</div>
	);
};

export default TodoItem;
