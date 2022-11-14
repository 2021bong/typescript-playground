import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { handleFoodArr } from '../../utils/food';
import { Menu } from '../../utils/interface_jmc';

const JMC = () => {
  const [foodTypes, setFoodTypes] = useState([
    { id: 1, type: '한식', selected: true },
    { id: 2, type: '분식', selected: true },
    { id: 3, type: '양식', selected: true },
    { id: 4, type: '일식', selected: true },
    { id: 5, type: '중식', selected: true },
    { id: 6, type: '동남아식', selected: true },
    { id: 7, type: '세계음식', selected: true },
  ]);
  const [todayMenu, setTodayMenu] = useState<Menu>('뭘까요?');
  const [foodArr, setFoodArr] = useState(handleFoodArr(foodTypes));

  const handleSelectedTypes = (e: React.MouseEvent) => {
    const li = e.target as HTMLLIElement;
    setFoodTypes((prev) => {
      const newTypes = [...prev].map((el) => {
        return el.type == li.textContent
          ? { id: el.id, type: el.type, selected: !el.selected }
          : el;
      });
      return newTypes;
    });
  };

  const getRandomMenu = () => {
    const randomNum = Math.floor(Math.random() * foodArr.length);
    const menu =
      foodArr[randomNum] !== undefined
        ? foodArr[randomNum]
        : '분류를 선택해주세요';
    setTodayMenu(menu);
  };

  useEffect(() => {
    setFoodArr(handleFoodArr(foodTypes));
  }, [foodTypes]);

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
      <button className='btn' onClick={getRandomMenu}>
        메뉴 고르기
      </button>
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
