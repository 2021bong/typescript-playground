import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

type DeleteFunction = (text: string) => void;
type EditFunction = (id: string | number, text: string) => void;

interface ItemProps {
  id: number;
  todo: string;
  onDelete: DeleteFunction;
  onEdit: EditFunction;
}

const CheckItem = ({ id, todo, onDelete, onEdit }: ItemProps) => {
  const [checked, setChecked] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editTodo, setEditTodo] = useState(todo);

  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const handleDelete = () => {
    onDelete(todo);
  };

  const handleEditMode = () => {
    setEditMode((prev) => !prev);
    onEdit(id, editTodo);
  };

  const handleEditTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTodo(e.target.value);
  };

  return editMode ? (
    <Li>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type='text' value={editTodo} onChange={handleEditTodo} />
        <button onClick={handleEditMode}>확인</button>
      </form>
    </Li>
  ) : (
    <Li>
      <input type='checkbox' id={id.toString()} onChange={handleChecked} />
      <label htmlFor={todo} className={checked ? 'complete' : 'now'}>
        {todo}
      </label>
      <button onClick={handleEditMode}>수정</button>
      <button onClick={handleDelete}>X</button>
    </Li>
  );
};

export default CheckItem;

const Li = styled.li`
  .now {
    color: #000;
    text-decoration: none;
  }
  .complete {
    color: #888;
    text-decoration: line-through;
  }
`;
