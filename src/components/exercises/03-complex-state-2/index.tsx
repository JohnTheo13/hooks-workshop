import { useReducer } from "react";
import { Button, Container, InputArea } from "../../styles";
import { Action } from "../02-complex-state-solution";

const ADD = "ADD";
const REMOVE = "REMOVE";
const CHANGE = "CHANGE";

type UpdatedState = {
  text: string;
  list: string[];
};

const onChangeReducer = (state: UpdatedState, { type, payload }: Action) => {
  return state;
};

const updateListReducer = (
  state: UpdatedState,
  { type, payload }: Action
): // @ts-ignore
UpdatedState => {
  return state;
};

// combine the 2 reducers
const reducerHandler = (state: UpdatedState, action: Action): UpdatedState => {
  return state;
};

export const Exercise3 = () => {
  const [{ text, list }, dispatch] = useReducer(reducerHandler, {
    text: "",
    list: [],
  });

  return (
    <Container>
      <InputArea
        value={text}
        onChange={({ target: { value } }) => dispatch({})}
      />
      Your text is:
      <pre>{text}</pre>
      <div style={{ display: "flex" }}>
        <Button onClick={() => dispatch({})}>+</Button>
        <Button onClick={() => dispatch({})}>-</Button>
      </div>
      <div>
        {list.map((el) => (
          <div key={el}>{el}</div>
        ))}
      </div>
    </Container>
  );
};
