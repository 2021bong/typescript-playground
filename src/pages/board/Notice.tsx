import styled from 'styled-components';

const Notice = () => <Board>공지사항</Board>;

export default Notice;

const Board = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: lightseagreen;
  font-size: 16px;
  font-weight: 700;
`;
