import TodoList from '../TodoList';

interface Todos {
  id: number;
  todo: string;
  completed: boolean;
}

interface TodosProps {
  todos: Todos[];
}

const CheckList = ({ todos }: TodosProps): JSX.Element => {
  return (
    <ul>
      {todos.map((el: Todos) => (
        <li key={el.id}>{el.todo}</li>
      ))}
    </ul>
  );
};

export default CheckList;
