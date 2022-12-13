import { HashRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import JMC from './pages/jmc/JMC';
import TodoList from './pages/todolist/TodoList';
import BirthdayCake from './pages/birthday-cake/BirthdayCake';
import Save from './pages/save/Save';

const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Save />} />
          <Route path='/bdaycake' element={<BirthdayCake />} />
          <Route path='/todolist' element={<TodoList />} />
          <Route path='/jmc' element={<JMC />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
};

export default Router;
