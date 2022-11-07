import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

interface ItemProps {
  todo: string;
}

const CheckItem = ({ todo }: ItemProps) => {
  const [checked, setChecked] = useState(false);
  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const onEdit = () => {};

  const onDelete = () => {};

  return (
    <Li>
      <input type='checkbox' id={todo} onChange={handleChecked} />
      <label htmlFor={todo} className={checked ? 'complete' : 'now'}>
        {todo}
      </label>
      <button onClick={onEdit}>수정</button>
      <button onClick={onDelete}>X</button>
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
