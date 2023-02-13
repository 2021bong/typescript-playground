import { Routes, Route, BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import { Provider } from 'react-redux';
import store from './store';

import JMC from './pages/jmc/JMC';
import TodoList from './pages/todolist/TodoList';
import BirthdayCake from './pages/birthday-cake/BirthdayCake';
import Save from './pages/save/Save';
import ChangeBgColor from './pages/chagebg/ChangeBgColor';

const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename='/typescript-playground'>
        <GlobalStyle />
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<ChangeBgColor />} />
            <Route path='/todolist' element={<TodoList />} />
            <Route path='/save' element={<Save />} />
            <Route path='/bdaycake' element={<BirthdayCake />} />
            <Route path='/jmc' element={<JMC />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
