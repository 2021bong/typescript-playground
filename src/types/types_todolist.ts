export interface Todo {
  id: number;
  todo: string;
  checked: boolean;
  edit: boolean;
}

type DeleteFunction = (text: string) => void;
type EditFunction = (id: number, text: string) => void;
type HandleEditFunction = (id: number) => void;
type HandleCheckedFunction = (id: number) => void;

export interface TodosProps {
  todos: Todo[];
  onDelete: DeleteFunction;
  onEdit: EditFunction;
  handleEditMode: HandleEditFunction;
  handleChecked: HandleCheckedFunction;
}

export interface ItemProps {
  id: number;
  todo: string;
  checked: boolean;
  edit: boolean;
  onDelete: DeleteFunction;
  onEdit: EditFunction;
  handleEditMode: HandleEditFunction;
  handleChecked: HandleCheckedFunction;
}
