import CheckItem from './CheckItem';

interface Todos {
  id: number;
  todo: string;
}

type DeleteFunction = (text: string) => void;

interface TodosProps {
  todos: Todos[];
  onDelete: DeleteFunction;
}

const CheckList = ({ todos, onDelete }: TodosProps) => {
  return (
    <ul>
      {todos.map((el: Todos) => (
        <CheckItem key={el.id} todo={el.todo} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default CheckList;
