import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface BtnSize {
  btnSize: boolean;
}

interface FlameUrl {
  flameUrl: string;
}

const url = ['/images/flame1.png', '/images/flame2.png', '/images/flame3.png'];

const BirthdayCake = () => {
  const [btnSize, setBtnSize] = useState(false);
  const [candleFlame, setCandleFlame] = useState(true);
  const [flameUrl, setFlameUrl] = useState('/images/flame1.png');

  useEffect(() => {
    if (!candleFlame) {
      setBtnSize(false);
      setFlameUrl('');
      return;
    }
    const btnSizeTime = setInterval(() => {
      setBtnSize((prev) => !prev);
    }, 700);

    const flameUrlTime = setInterval(() => {
      setFlameUrl(url[Math.floor(Math.random() * url.length)]);
    }, 300);

    return () => {
      clearInterval(btnSizeTime);
      clearInterval(flameUrlTime);
    };
  }, [candleFlame]);

  const handleCandleFlame = () => {
    setCandleFlame(false);
  };

  return (
    <Cake>
      <CandleFlame flameUrl={flameUrl}>
        {!candleFlame && (
          <h1>
            <br />
            💕 정예원 💕
            <br />
            생일 축하해 🎉
          </h1>
        )}
        <BlowBtn btnSize={btnSize} onClick={handleCandleFlame}>
          {!candleFlame ? '생일 축하해' : '촛불 끄기'}
        </BlowBtn>
      </CandleFlame>
    </Cake>
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

const CandleFlame = styled.div<FlameUrl>`
  width: inherit;
  height: inherit;
  padding: 80px;
  background: ${({ flameUrl }) => `no-repeat bottom/150% url(${flameUrl})`};
`;

const Cake = styled.div`
  position: relative;
  width: 100%;
  height: 50rem;
  max-width: 1024px;
  margin: 20px auto;
  background: no-repeat bottom/150% url('/images/birthday_cake.jpg');
  text-align: center;

  h1 {
    line-height: 3.5rem;
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
  }
`;
