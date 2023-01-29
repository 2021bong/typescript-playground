const ADD_TODO = 'ADD_TODO' as const;
const EDIT_MODE = 'EDIT_MODE' as const;
const EDIT_TODO = 'EDIT_TODO' as const;
const DELETE_TODO = 'DELETE_TODO' as const;
const CHECK_TODO = 'CHECK_TODO' as const;

export type TodoActionType =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof goEditMode>
  | ReturnType<typeof editTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof checkTodo>;

export const addTodo = (input: string) => {
  return {
    type: ADD_TODO,
    input,
  };
};

export const goEditMode = (id: number) => {
  return {
    type: EDIT_MODE,
    id,
  };
};

export const editTodo = (id: number, text: string) => {
  return {
    type: EDIT_TODO,
    id,
    text,
  };
};

export const deleteTodo = (text: string) => {
  return {
    type: DELETE_TODO,
    text,
  };
};

export const checkTodo = (id: number) => {
  return {
    type: CHECK_TODO,
    id,
  };
};
