import { MouseEvent, useEffect, useState } from 'react';
import { handleFoodArr } from '../../utils/food';
import { Menu } from '../../types/types_jmc';
import { Main } from './JMC.styled';

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

  const handleSelectedTypes = (e: MouseEvent) => {
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
