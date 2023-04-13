import styled from 'styled-components';

const HappyBoard = () => <Board>행복 게시판</Board>;

export default HappyBoard;

const Board = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: lightcyan;
  font-size: 16px;
  font-weight: 700;
`;
