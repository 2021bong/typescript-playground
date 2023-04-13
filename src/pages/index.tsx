import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Index = () => {
  return (
    <Container>
      <nav className='nav-menu'>
        <ul>
          <li>
            <a href='/change-bg'>change BG</a>
          </li>
          <li>
            <a href='/jmc'>JMC</a>
          </li>
          <li>
            <a href='/bdaycake'>Birthday Cake</a>
          </li>
          <li>
            <a href='/board/all'>Board</a>
          </li>
          <li>
            <a href='/save'>save</a>
          </li>
          <li>
            <a href='/todolist'>todolist</a>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </Container>
  );
};

export default Index;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  gap: 50px;

  .nav-menu {
    ul {
      display: flex;
      justify-content: center;

      a {
        width: 100%;
        height: 100%;
        margin-right: 10px;
        padding: 30px;
        border-radius: 20px;
        background-color: #ececec;
        font-size: 16px;
        font-weight: 700;

        &:active {
          background-color: #333;
          color: #fff;
        }
      }
    }
  }
`;
