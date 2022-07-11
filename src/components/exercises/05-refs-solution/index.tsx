import { useState, useRef } from "react";
import { Button, Container, InputArea } from "../../styles";

// https://reactjs.org/docs/hooks-reference.html#usereducer

export const Exercise5 = () => {
  const [text, setText] = useState("");
  const input = useRef<HTMLInputElement>(null);
  return (
    <Container>
      <InputArea
        ref={input}
        value={text}
        onChange={({ target: { value } }) => setText(value)}
      />
      Your text is:
      <pre>{text}</pre>
      <Button onClick={() => input?.current.focus()}>
        Click here to focus the field above!
      </Button>
    </Container>
  );
};
