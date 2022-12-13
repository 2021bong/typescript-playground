import { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';
import styled from 'styled-components';

const Save = () => {
  const listRef = useRef<HTMLDivElement>(null);

  const onButtonClick = useCallback(() => {
    if (listRef.current === null) {
      return;
    }

    toPng(listRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'my-image.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [listRef]);

  return (
    <Container>
      <div className='wrap' ref={listRef}>
        <div className='icon'></div>
        <ul>
          <li>올해는 취직하기</li>
          <li>하와이에 가서 밥먹고 어쩌고 저쩌고</li>
          <li>신라호텔에 어쩌고 저쩌고 랄랄랄ㄹ라랄</li>
          <li>돈많이 벌기</li>
          <li>부자되기</li>
          <li>
            로또 1등에 당첨된다면 서울시 ㅇㅇ구에 아파트를 사서 어쩌고 뭐해서
            뭐하기
          </li>
          <li>장문이 될 수 있는 어떤 목표를 랄라</li>
          <li>짧게 쓰는 목표 하나 랄라</li>
          <li>길게 쓰고 짧게 쓰고 야호</li>
          <li>친구를 좋아하는!</li>
        </ul>
      </div>
      <button onClick={onButtonClick}>다운로드</button>
    </Container>
  );
};

export default Save;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .wrap {
    width: 280px;
    height: 600px;
    padding: 50px;
    background-color: beige;
    overflow-y: scroll;

    .icon {
      width: 150px;
      height: 150px;
      margin-bottom: 50px;
      border-radius: 50%;
      background-color: red;
    }

    ul {
      li {
        margin-bottom: 20px;
        line-height: 1.2rem;
      }
    }
  }

  button {
    width: 100px;
    margin-top: 20px;
  }
`;
