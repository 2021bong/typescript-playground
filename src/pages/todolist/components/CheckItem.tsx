import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

type DeleteFunction = (text: string) => void;

interface ItemProps {
  todo: string;
  onDelete: DeleteFunction;
}

const CheckItem = ({ todo, onDelete }: ItemProps) => {
  const [checked, setChecked] = useState(false);
  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const handleDelete = () => {
    onDelete(todo);
  };

  const handleEdit = () => {};

  return (
    <Li>
      <input type='checkbox' id={todo} onChange={handleChecked} />
      <label htmlFor={todo} className={checked ? 'complete' : 'now'}>
        {todo}
      </label>
      <button onClick={handleDelete}>수정</button>
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
