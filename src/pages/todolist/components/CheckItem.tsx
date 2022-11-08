import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

type DeleteFunction = (text: string) => void;
type EditFunction = (id: number, text: string) => void;
type HandleEditFunction = (id: number) => void;

interface ItemProps {
  id: number;
  todo: string;
  edit: boolean;
  onDelete: DeleteFunction;
  onEdit: EditFunction;
  handleEditMode: HandleEditFunction;
}

const CheckItem = ({
  id,
  todo,
  edit,
  onDelete,
  onEdit,
  handleEditMode,
}: ItemProps) => {
  const [checked, setChecked] = useState(false);
  const [editTodo, setEditTodo] = useState(todo);

  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const handleDelete = () => {
    onDelete(todo);
  };

  const handleEditModeOn = () => {
    handleEditMode(id);
  };

  const handleEditModeOff = () => {
    onEdit(id, editTodo);
  };

  const handleEditTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTodo(e.target.value);
  };

  return edit ? (
    <Li>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type='text' value={editTodo} onChange={handleEditTodo} />
        <button onClick={handleEditModeOff}>확인</button>
      </form>
    </Li>
  ) : (
    <Li>
      <input type='checkbox' id={id.toString()} onChange={handleChecked} />
      <label htmlFor={todo} className={checked ? 'complete' : 'now'}>
        {todo}
      </label>
      <button onClick={handleEditModeOn}>수정</button>
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
