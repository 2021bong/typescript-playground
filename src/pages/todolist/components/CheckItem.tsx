import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { ItemProps } from '../../../utils/interface_todolist';

const CheckItem = ({
  id,
  todo,
  checked,
  edit,
  onDelete,
  onEdit,
  handleEditMode,
  handleChecked,
}: ItemProps) => {
  const [editTodo, setEditTodo] = useState(todo);

  const handleDelete = () => {
    onDelete(todo);
  };

  const handleEditModeOn = () => {
    handleEditMode(id);
  };

  const handleEditModeOff = () => {
    onEdit(id, editTodo);
  };

  const handleEditTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setEditTodo(e.target.value);
  };

  const setHandleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    handleChecked(id);
  };

  return edit ? (
    <Li>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          value={editTodo}
          onChange={handleEditTodo}
          checked={checked}
          autoFocus
        />
        <button onClick={handleEditModeOff}>확인</button>
      </form>
    </Li>
  ) : (
    <Li>
      <input
        type='checkbox'
        id={id.toString()}
        onChange={setHandleChecked}
        checked={checked}
      />
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
