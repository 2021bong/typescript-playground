import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '../types/types_todolist';

interface TodoState {
  todos: Todo[] | [];
  idNum: number;
}

const initialState: TodoState = { todos: [], idNum: 0 };

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      const newTodos = [
        ...state.todos,
        { id: state.idNum, todo: payload, checked: false, edit: false },
      ];
      state.idNum += 1;
      state.todos = newTodos;
    },

    editMode: (state, { payload }) => {
      const newTodos = [...state.todos].map((el) =>
        el.id === payload
          ? { id: el.id, todo: el.todo, checked: el.checked, edit: true }
          : { id: el.id, todo: el.todo, checked: el.checked, edit: false }
      );
      state.todos = newTodos;
    },

    editTodo: (state, { payload }) => {
      const newTodos = [...state.todos].map((el) =>
        el.id === payload.id
          ? {
              id: el.id,
              todo: payload.text,
              checked: el.checked,
              edit: false,
            }
          : el
      );
      state.todos = newTodos;
    },

    deleteTodo: (state, { payload }) => {
      const newTodos = [...state.todos].filter((el) => el.id !== payload);
      state.todos = newTodos;
    },

    checkTodo: (state, { payload }) => {
      const newTodos = [...state.todos].map((el) =>
        el.id === payload
          ? { id: el.id, todo: el.todo, checked: !el.checked, edit: el.edit }
          : { id: el.id, todo: el.todo, checked: el.checked, edit: el.edit }
      );
      state.todos = newTodos;
    },
  },
});

export const { addTodo, editMode, editTodo, deleteTodo, checkTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
