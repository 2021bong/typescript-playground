import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const BoardLayout = () => {
  return (
    <Container>
      <header>
        <h1>happy board</h1>
      </header>
      <BodyContainer>
        <aside>
          <ul>
            <li className='board-menu'>
              <a href='/board/all'>전체보기</a>
            </li>
            <li className='board-menu'>
              <a href='/board/popular'>인기글</a>
            </li>
            <li className='board-menu'>
              <a href='/board/happy'>행복게시판</a>
            </li>
            <li className='board-menu'>
              <a href='/board/free'>자유게시판</a>
            </li>
            <li className='board-menu'>
              <a href='/board/notice'>공지사항</a>
            </li>
            <li className='board-menu'>
              <a href='/board/suggestions'>건의사항</a>
            </li>
          </ul>
        </aside>
        <main>
          <Outlet />
        </main>
      </BodyContainer>
    </Container>
  );
};

export default BoardLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 600px;
  margin: 0 auto;

  header {
    width: 100%;
    padding: 50px 30px;
    border-bottom: 1px solid lightgray;
    background-color: #eee;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
  }
`;

const BodyContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  aside {
    width: 30%;
    padding: 30px;
    background-color: #eee;
    border-right: 1px solid lightgray;

    .board-menu {
      margin-bottom: 20px;

      a:active {
        color: lightgray;
      }
    }
  }

  main {
    width: 70%;
    height: 100%;
  }
`;
