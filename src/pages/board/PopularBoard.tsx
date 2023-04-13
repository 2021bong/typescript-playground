import styled from 'styled-components';

const PopularBoard = () => <Board>인기글</Board>;

export default PopularBoard;

const Board = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: lightcoral;
  font-size: 16px;
  font-weight: 700;
`;
