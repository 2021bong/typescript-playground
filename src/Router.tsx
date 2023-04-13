import { createBrowserRouter } from 'react-router-dom';

import Index from './pages';
import ChangeBgColor from './pages/chagebg/ChangeBgColor';
import TodoList from './pages/todolist/TodoList';
import Save from './pages/save/Save';
import BirthdayCake from './pages/birthday-cake/BirthdayCake';
import JMC from './pages/jmc/JMC';

import Board from './pages/board';
import AllBoard from './pages/board/AllBoard';
import PopularBoard from './pages/board/PopularBoard';
import HappyBoard from './pages/board/HappyBoard';
import Notice from './pages/board/Notice';
import FreeBoard from './pages/board/FreeBoard';
import Suggestions from './pages/board/Suggestions';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      { path: 'save', element: <Save /> },
      { path: 'change-bg', element: <ChangeBgColor /> },
      {
        path: 'bdaycake',
        element: <BirthdayCake />,
      },
      {
        path: 'todolist',
        element: <TodoList />,
      },
      {
        path: 'jmc',
        element: <JMC />,
      },
      {
        path: 'board',
        element: <Board />,
        children: [
          {
            index: true,
            path: 'all',
            element: <AllBoard />,
          },
          {
            path: 'popular',
            element: <PopularBoard />,
          },
          {
            path: 'happy',
            element: <HappyBoard />,
          },
          {
            path: 'notice',
            element: <Notice />,
          },
          {
            path: 'free',
            element: <FreeBoard />,
          },
          {
            path: 'suggestions',
            element: <Suggestions />,
          },
        ],
      },
    ],
  },
]);

export default Router;
