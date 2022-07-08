import React, { useReducer, Reducer, Dispatch } from "react";
import { Button, Container, InputArea, Label } from "../../styles";

const INCREMENT = "increment";
const DECREMENT = "decrement";
const INPUT = "INPUT";

type State = {
  text: string;
  count: number;
};

type Action = {
  type: string;
  payload?: string;
};

const initialState = {
  count: 0,
  text: "",
};
const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count -1 };
    case INPUT:
      return { ...state, text: action.payload ?? '' };
    default:
      return state
  }
};

export const Exercise2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <p>{state.count}</p>
      <Button onClick={() => dispatch({ type: INCREMENT })}>+</Button>
      <Button onClick={() => dispatch({ type: DECREMENT })}>-</Button>
      <Label>Text</Label>
      <InputArea
        value={state.text}
        onChange={({ target: { value } }) =>
          dispatch({ type: INPUT, payload: value })
        }
      />
      Your text is:
      <pre>{state.text}</pre>
    </Container>
  );
};