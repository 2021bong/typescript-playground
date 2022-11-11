import CheckItem from './CheckItem';

interface Todos {
  id: number;
  todo: string;
  checked: boolean;
  edit: boolean;
}

type DeleteFunction = (text: string) => void;
type EditFunction = (id: number, text: string) => void;
type HandleEditFunction = (id: number) => void;
type HandleCheckedFunction = (id: number) => void;

interface TodosProps {
  todos: Todos[];
  onDelete: DeleteFunction;
  onEdit: EditFunction;
  handleEditMode: HandleEditFunction;
  handleChecked: HandleCheckedFunction;
}

const CheckList = ({
  todos,
  onDelete,
  onEdit,
  handleEditMode,
  handleChecked,
}: TodosProps) => {
  return (
    <ul>
      {todos.map((el: Todos) => (
        <CheckItem
          key={el.id}
          id={el.id}
          todo={el.todo}
          checked={el.checked}
          onDelete={onDelete}
          onEdit={onEdit}
          edit={el.edit}
          handleEditMode={handleEditMode}
          handleChecked={handleChecked}
        />
      ))}
    </ul>
  );
};

export default CheckList;
