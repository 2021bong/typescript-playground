import React, { useState } from 'react';
import styled from 'styled-components';

interface Types {
  type: string;
  selected: boolean;
}

const JMC = () => {
  const [foodTypes, setFoodTypes] = useState([
    {
      type: '한식',
      selected: true,
    },
    {
      type: '분식',
      selected: true,
    },
    {
      type: '양식',
      selected: true,
    },
    {
      type: '일식',
      selected: true,
    },
    {
      type: '중식',
      selected: true,
    },
    {
      type: '동남아식',
      selected: true,
    },
    {
      type: '세계음식',
      selected: true,
    },
  ]);
  const [todayMenu, setTodayMenu] = useState('뭘까요?');

  const handleSelectedTypes = (e: React.MouseEvent) => {
    const li = e.target as HTMLLIElement;
    setFoodTypes((prev) => {
      const newTypes = [...prev].map((el) => {
        return el.type == li.textContent
          ? { type: el.type, selected: !el.selected }
          : el;
      });
      return newTypes;
    });
  };

  return (
    <Main>
      <h3>저녁메뉴추천</h3>
      <ul className='typeContainer'>
        {foodTypes.map((el) => (
          <li
            key={el.type}
            className={el.selected ? 'selectedTypes' : 'types'}
            onClick={handleSelectedTypes}
          >
            {el.type}
          </li>
        ))}
      </ul>
      <div className='menuContainer'>
        <h5>오늘의 메뉴는?</h5>
        <p className='todayMenu'>{todayMenu}</p>
      </div>
      <button className='btn'>메뉴 고르기</button>
    </Main>
  );
};

export default JMC;

const Main = styled.div`
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
