export interface TodoItemType {
	id: number;
	text: string;
	completed: boolean;
}

// create an interface for to-do items props
export interface TodoItemProps {
	todo: TodoItemType;
	onDelete: (id: number) => void;
	onUpdate: (updatedTodo: TodoItemType) => void;
}
