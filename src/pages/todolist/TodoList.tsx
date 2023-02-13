import { memo, ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import CheckList from './components/CheckList';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  addTodo,
  deleteTodo,
  editMode,
  editTodo,
  checkTodo,
} from '../../reducers/todoSlice';
import { RootState } from '../../store';

const TodoList = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos);

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodos = () => {
    if (!inputValue) return alert('내용을 입력해주세요.');
    dispatch(addTodo(inputValue));
    setInputValue('');
  };

  const onDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleEditMode = (id: number) => {
    dispatch(editMode(id));
  };

  const handleChecked = (id: number) => {
    dispatch(checkTodo(id));
  };

  const onEdit = (id: number, text: string) => {
    dispatch(editTodo({ id, text }));
  };

  return (
    <Main>
      <h1 className='title'>TodoList</h1>
      <form className='inputContainer' onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          placeholder='할 일을 적어주세요.'
          value={inputValue}
          onChange={handleInputValue}
        />
        <button onClick={handleAddTodos}>입력</button>
      </form>
      {todos.length !== 0 && (
        <CheckList
          todos={todos}
          onDelete={onDelete}
          onEdit={onEdit}
          handleEditMode={handleEditMode}
          handleChecked={handleChecked}
        />
      )}
    </Main>
  );
};

export default memo(TodoList);

const Main = styled.div`
  width: 500px;
  margin: 50px auto;
  padding: 10px;
  border: 1px solid #000;
  text-align: center;

  .title {
    margin-top: 30px;
    font-weight: 700;
    font-size: 2rem;
  }

  .inputContainer {
    margin-bottom: 10px;

    input {
      width: 50%;
    }
  }
`;
