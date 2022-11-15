import CheckItem from './CheckItem';
import { memo } from 'react';
import { Todos, TodosProps } from '../../../utils/interface_todolist';

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

export default memo(CheckList);
