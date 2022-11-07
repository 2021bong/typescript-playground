import { HashRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import JMC from './pages/jmc/JMC';
import TodoList from './pages/todolist/TodoList';

const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<TodoList />} />
          <Route path='/jmc' element={<JMC />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
};

export default Router;
