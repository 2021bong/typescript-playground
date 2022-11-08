import CheckItem from './CheckItem';

interface Todos {
  id: number;
  todo: string;
}

type DeleteFunction = (text: string) => void;
type EditFunction = (id: string | number, text: string) => void;

interface TodosProps {
  todos: Todos[];
  onDelete: DeleteFunction;
  onEdit: EditFunction;
}

const CheckList = ({ todos, onDelete, onEdit }: TodosProps) => {
  return (
    <ul>
      {todos.map((el: Todos) => (
        <CheckItem
          key={el.id}
          id={el.id}
          todo={el.todo}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default CheckList;
