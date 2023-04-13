import styled from 'styled-components';

const FreeBoard = () => <Board>자유 게시판</Board>;

export default FreeBoard;

const Board = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: lightsalmon;
  font-size: 16px;
  font-weight: 700;
`;
