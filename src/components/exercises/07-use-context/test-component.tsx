import { Button, Container, InputArea } from "../../styles";

import { useAppContext } from "./context-provider";

const TestComponent = () => {
  return (
    <Container>
      <InputArea />
      Your text is:
      {/* <pre>{text}</pre> */}
      <div style={{ display: "flex" }}>
        <Button>+</Button>
        <Button>-</Button>
      </div>
      {/* <div>
        {list.map((el) => (
          <div key={el}>{el}</div>
        ))}
      </div> */}
    </Container>
  );
};

export default TestComponent;
