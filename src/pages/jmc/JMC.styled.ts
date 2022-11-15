import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 20px;
    font-weight: 700;
    margin: 20px 0;
  }

  .typeContainer {
    display: flex;
    margin-bottom: 30px;

    .types {
      width: 100px;
      margin-right: 5px;
      padding: 20px;
      border-radius: 5px;
      text-align: center;
      background-color: #ccc;
      color: #fff;
      cursor: pointer;

      &:hover {
        background-color: #999;
      }

      &:active {
        background-color: #777;
      }
    }

    .selectedTypes {
      width: 100px;
      margin-right: 5px;
      padding: 20px;
      border-radius: 5px;
      text-align: center;
      background-color: #ff0000;
      color: #fff;
      cursor: pointer;

      &:hover {
        background-color: #cc1111;
      }

      &:active {
        background-color: #ee5555;
      }
    }
  }

  .menuContainer {
    margin-bottom: 30px;
    text-align: center;

    .todayMenu {
      padding: 30px;
      border: 2px solid #ddd;
      border-radius: 10px;
    }
  }

  .btn {
    width: 300px;
    height: 3rem;
    border: none;
    border-radius: 10px;
    background-color: #333;
    color: #fff;
    &:hover {
      background-color: #777;
    }

    &:active {
      background-color: #444;
    }
  }
`;
