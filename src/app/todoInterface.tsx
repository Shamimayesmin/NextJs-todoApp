export interface TodoItemType {
	// id: number;
	id: string;
	text: string;
	completed: boolean;
}

// create an interface for to-do items props
export interface TodoItemProps {
	todo: TodoItemType;
	onDelete: (id: string) => void;
	onUpdate: (updatedTodo: TodoItemType) => void;
}
