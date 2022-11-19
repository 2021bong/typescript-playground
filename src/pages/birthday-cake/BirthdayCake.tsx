import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface BtnSize {
  btnSize: boolean;
}

const BirthdayCake = () => {
  const [btnSize, setBtnSize] = useState(false);
  const [candleFlame, setCandleFlame] = useState(true);

  useEffect(() => {
    if (!candleFlame) {
      return setBtnSize(false);
    }
    const btnSizeTime = setInterval(() => {
      setBtnSize((prev) => !prev);
    }, 700);

    return () => {
      clearInterval(btnSizeTime);
    };
  }, [candleFlame]);

  const handleCandleFlame = () => {
    setCandleFlame(false);
  };

  return (
    <Main>
      <h1>
        <br />
        💕 정예원 💕
        <br />
        생일 축하해 🎉
      </h1>
      <BlowBtn btnSize={btnSize} onClick={handleCandleFlame}>
        {!candleFlame ? '생일 축하해' : '촛불 끄기'}
      </BlowBtn>
    </Main>
  );
};
export default BirthdayCake;

const BlowBtn = styled.button<BtnSize>`
  position: absolute;
  width: 10rem;
  bottom: 8%;
  left: 43%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #f0446d;
  color: #fff;
  font-size: 1rem;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.3), 0 1px 3px rgba(0, 0, 0, 0.1);
  transform: ${({ btnSize }) => (btnSize ? 'scale(1)' : 'scale(1.2)')};
  transition: 0.3s;

  &:hover {
    background-color: #6952f8;
  }

  &:active {
    background-color: #031bb2;
  }
`;

const Main = styled.div`
  position: relative;
  width: 100%;
  height: 50rem;
  max-width: 1024px;
  margin: 20px auto;
  padding: 80px;
  background: no-repeat bottom/150% url('/images/birthday_cake.jpg');
  text-align: center;

  h1 {
    line-height: 3.5rem;
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
  }
`;
