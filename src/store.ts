import { createStore } from 'redux';
import bgColorReduers from './reducers/bgColorReducers';

export const bgColorStore = createStore(bgColorReduers);
