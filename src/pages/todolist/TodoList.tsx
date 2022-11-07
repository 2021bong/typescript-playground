import React, { useState } from 'react';
import styled from 'styled-components';
import CheckList from './components/CheckList';

interface Todos {
  id: number;
  todo: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todos[] | never[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [idNum, setIdNum] = useState(1);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodos = () => {
    console.log('newIdNum', idNum);
    setTodos((prev) => [
      ...prev,
      { id: idNum, todo: inputValue, completed: false },
    ]);
    setInputValue('');
    setIdNum((el) => el + 1);
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
      {todos.length !== 0 && <CheckList todos={todos} />}
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
