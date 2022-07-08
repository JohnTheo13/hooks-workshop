import React, {useState, useCallback, useEffect} from 'react';
import {Container, Button} from '../../styles';

export const Exercise9 = () => {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount(c => c + 1);
  };

  return (
    <Container>
      <p>{count}</p>
      <ChildComponent inc={inc} />
    </Container>
  );
};

const ChildComponent = ({inc}: {inc: () => void}) => {
  console.log('The Button component has rerended');
  return (
    <div>
      <Button onClick={inc}>+</Button>
    </div>
  );
};
