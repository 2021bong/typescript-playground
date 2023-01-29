import { Todo } from '../types/types_todolist';
import { TodoActionType } from '../actions/todoActions';

export interface TodoListState {
  todos: Todo[] | [];
  idNum: number;
}

export const initialState: TodoListState = {
  todos: [],
  idNum: 0,
};

const todoReducers = (state = initialState, action: TodoActionType) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodos = [
        ...state.todos,
        { id: state.idNum, todo: action.input, checked: false, edit: false },
      ];
      const newIdNum = state.idNum + 1;
      return (state = {
        todos: newTodos,
        idNum: newIdNum,
      });
    }
    case 'EDIT_MODE': {
      const newTodos = [...state.todos].map((el) =>
        el.id === action.id
          ? { id: el.id, todo: el.todo, checked: el.checked, edit: true }
          : { id: el.id, todo: el.todo, checked: el.checked, edit: false }
      );
      return (state = {
        todos: newTodos,
        idNum: state.idNum,
      });
    }
    case 'EDIT_TODO': {
      const newTodos = [...state.todos].map((el) =>
        el.id === action.id
          ? { id: el.id, todo: action.text, checked: el.checked, edit: false }
          : el
      );
      return (state = {
        todos: newTodos,
        idNum: state.idNum,
      });
    }
    case 'DELETE_TODO': {
      const newTodos = [...state.todos].filter((el) => el.todo !== action.text);
      return (state = {
        todos: newTodos,
        idNum: state.idNum,
      });
    }
    case 'CHECK_TODO': {
      const newTodos = [...state.todos].map((el) =>
        el.id === action.id
          ? { id: el.id, todo: el.todo, checked: !el.checked, edit: el.edit }
          : { id: el.id, todo: el.todo, checked: el.checked, edit: el.edit }
      );
      return (state = {
        todos: newTodos,
        idNum: state.idNum,
      });
    }
    default:
      return state;
  }
};

export default todoReducers;
