import { useEffect, useState } from "react";
import { Container, InputArea } from "../../styles";

// https://reactjs.org/docs/hooks-reference.html#useeffect

export const Exercise4 = () => {
  const [title, setTitle] = useState("Change this");

  useEffect(() => {
    document.title = title;

    return () => {
      document.title = "Change this";
    };
  }, [title]);

  return (
    <Container>
      <h1>Check the title of the tab</h1>
      <InputArea
        value={title}
        onChange={({ target: { value } }) => setTitle(value)}
      />
    </Container>
  );
};
