import { useState } from "react";
import { Container, Button } from "../../styles";

// https://reactjs.org/docs/hooks-state.html

export const Exercise1 = () => {
  const [number, setNumber] = useState(0);
  return (
    <Container>
      <>
        <p>{number}</p>
        <Button onClick={() => setNumber(number + 1)}>+</Button>
        <Button onClick={() => setNumber(number - 1)}>-</Button>
      </>
    </Container>
  );
};
