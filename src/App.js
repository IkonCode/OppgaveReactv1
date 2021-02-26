import React, { useState } from 'react';
import './styles.scss';
import MyComponent from './components/MyComponent';
import Food from './components/Food';
import Wrapper from './components/Wrapper';
import Alert from './components/Alert';
const App = () => {
  const food = ['Pizza', 'Hamburger', 'Coke'];
  const [inputFromChild, setInputFromChild] = useState('');
  const updateInput = (childData) => {
    setInputFromChild(childData);
  };
  return (
    <>
      <Wrapper>
        <MyComponent title={'it works'} />
        <Food foodArray={food} />{' '}
        <Alert
          callBack={(liftState) => {
            updateInput(liftState);
          }}
        />
        <p>{inputFromChild}</p>
      </Wrapper>
    </>
  );
};
export default App;
