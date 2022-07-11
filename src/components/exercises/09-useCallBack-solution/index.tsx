import { useState, useCallback, memo } from "react";
import { Container, Button } from "../../styles";

export const Exercise9 = () => {
  const [count, setCount] = useState(0);
  const inc = useCallback(() => {
    setCount((c) => c + 1);
  }, [setCount]);

  return (
    <Container>
      <p>{count}</p>
      <ChildComponent inc={inc} />
    </Container>
  );
};

const ChildComponent = memo(({ inc }: { inc: () => void }) => {
  console.log("The Button component has rerended");
  return (
    <div>
      <Button onClick={inc}>+</Button>
    </div>
  );
});
