import styled from 'styled-components';

const AllBoard = () => <Board>전체 보기</Board>;

export default AllBoard;

const Board = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  font-size: 16px;
  font-weight: 700;
`;
