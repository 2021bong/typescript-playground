import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './reducers/todoSlice';
import bgColorSlice from './reducers/bgColorSlice';

const store = configureStore({
  reducer: { todo: todoSlice, bgColor: bgColorSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
