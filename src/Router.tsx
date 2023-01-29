import { Routes, Route, BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import { Provider } from 'react-redux';
import { bgColorStore, todoStore } from './store';

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
        <Provider store={bgColorStore}>
          <Routes>
            <Route path='/' element={<ChangeBgColor />} />
          </Routes>
        </Provider>
        <Provider store={todoStore}>
          <Routes>
            <Route path='/todolist' element={<TodoList />} />
          </Routes>
        </Provider>
        <Routes>
          <Route path='/save' element={<Save />} />
          <Route path='/bdaycake' element={<BirthdayCake />} />
          <Route path='/jmc' element={<JMC />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
