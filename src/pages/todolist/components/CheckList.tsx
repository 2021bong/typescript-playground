import CheckItem from './CheckItem';

interface Todos {
  id: number;
  todo: string;
  edit: boolean;
}

type DeleteFunction = (text: string) => void;
type EditFunction = (id: number, text: string) => void;
type HandleEditFunction = (id: number) => void;

interface TodosProps {
  todos: Todos[];
  onDelete: DeleteFunction;
  onEdit: EditFunction;
  handleEditMode: HandleEditFunction;
}

const CheckList = ({ todos, onDelete, onEdit, handleEditMode }: TodosProps) => {
  return (
    <ul>
      {todos.map((el: Todos) => (
        <CheckItem
          key={el.id}
          id={el.id}
          todo={el.todo}
          onDelete={onDelete}
          onEdit={onEdit}
          edit={el.edit}
          handleEditMode={handleEditMode}
        />
      ))}
    </ul>
  );
};

export default CheckList;
