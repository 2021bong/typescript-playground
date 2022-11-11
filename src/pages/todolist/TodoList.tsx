import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import CheckList from './components/CheckList';

interface Todos {
  id: number;
  todo: string;
  checked: boolean;
  edit: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todos[] | never[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [idNum, setIdNum] = useState(1);

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodos = () => {
    if (!inputValue) return alert('내용을 입력해주세요.');
    setTodos((prev) => [
      ...prev,
      { id: idNum, todo: inputValue, checked: false, edit: false },
    ]);
    setInputValue('');
    setIdNum((el) => el + 1);
  };

  const onDelete = (text: string) => {
    const newTodos = [...todos].filter((el) => el.todo !== text);
    setTodos(newTodos);
  };

  const handleEditMode = (id: number) => {
    const newTodos = [...todos].map((el) =>
      el.id === id
        ? { id: el.id, todo: el.todo, checked: el.checked, edit: true }
        : { id: el.id, todo: el.todo, checked: el.checked, edit: false }
    );
    setTodos(newTodos);
  };

  const handleChecked = (id: number) => {
    const newTodos = [...todos].map((el) =>
      el.id === id
        ? { id: el.id, todo: el.todo, checked: !el.checked, edit: el.edit }
        : { id: el.id, todo: el.todo, checked: el.checked, edit: el.edit }
    );
    setTodos(newTodos);
  };

  const onEdit = (id: number, text: string) => {
    const newTodos = [...todos].map((el) =>
      el.id === id
        ? { id: el.id, todo: text, checked: el.checked, edit: false }
        : el
    );
    setTodos(newTodos);
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

export default TodoList;

const Main = styled.div`
  width: 500px;
  margin: 50px auto;
  padding: 10px;
  border: 1px solid #000;
  text-align: center;

  .title {
    margin-top: 30px;
    font-weight: 700;
    font-size: 3rem;
  }

  .inputContainer {
    margin-bottom: 10px;
  }
`;
