import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

interface State {
  color: string;
}

const ChangeBgColor = () => {
  const color = useSelector((state: State) => state.color);
  const dispatch = useDispatch();

  return (
    <Container>
      <h1>change bg</h1>
      <button className='resetBtn' onClick={() => dispatch({ type: '' })}>
        reset
      </button>
      <div className={`box red ${color}`}>
        Red
        <button onClick={() => dispatch({ type: 'CHANGE_RED' })}>change</button>
      </div>
      <div className={`box green ${color}`}>
        Green
        <button onClick={() => dispatch({ type: 'CHANGE_GREEN' })}>
          change
        </button>
      </div>
      <div className={`box blue ${color}`}>
        Blue
        <button onClick={() => dispatch({ type: 'CHANGE_BLUE' })}>
          change
        </button>
      </div>
    </Container>
  );
};

export default ChangeBgColor;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  h1 {
    margin-bottom: 10px;
    font-size: 2rem;
    font-weight: 700;
  }

  .resetBtn {
    margin-bottom: 10px;
    background-color: #fff;
    border: 1px solid #bbb;
    border-radius: 5px;

    &:active {
      background-color: #555;
      color: #fff;
    }
  }

  .box {
    width: 300px;
    height: 100px;
    margin-bottom: 10px;
    border-radius: 5px;
    color: #aaa;
    text-align: center;
    line-height: 100px;

    button {
      border: 1px solid #fff;
      background-color: #fff;
      border-radius: 5px;

      &:active {
        background-color: #555;
        color: #fff;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .red {
    background-color: #ff0000;
  }
  .green {
    background-color: #00ff00;
  }
  .blue {
    background-color: #0000ff;
  }
  .allRed {
    background-color: #ff0000;
  }
  .allGreen {
    background-color: #00ff00;
  }
  .allBlue {
    background-color: #0000ff;
  }
`;
