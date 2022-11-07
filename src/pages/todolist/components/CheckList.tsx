import CheckItem from './CheckItem';

interface Todos {
  id: number;
  todo: string;
}

interface TodosProps {
  todos: Todos[];
}

const CheckList = ({ todos }: TodosProps) => {
  return (
    <ul>
      {todos.map((el: Todos) => (
        <CheckItem key={el.id} todo={el.todo} />
      ))}
    </ul>
  );
};

export default CheckList;
