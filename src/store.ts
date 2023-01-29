import { createStore } from 'redux';
import bgColorReducers from './reducers/bgColorReducers';
import todoReducers from './reducers/todoReducers';

const bgColorStore = createStore(bgColorReducers);

const todoStore = createStore(todoReducers);

export { bgColorStore, todoStore };
