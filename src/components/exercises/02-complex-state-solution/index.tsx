import React, { useReducer, Reducer, Dispatch } from "react";
import { Button, Container, InputArea, Label } from "../../styles";

export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const INPUT = "INPUT";

export type State = {
  text: string;
  count: number;
};

export type Action = {
  type: string;
  payload?: string;
};

export const initialState = {
  count: 0,
  text: "",
};

export const onChangeReducer = (state = initialState, action: Action): State => {
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

const init = (num: number) => ({
  ...initialState,
  count: num,
  list: []
})

export const Exercise2 = ({ initial = 0 }) => {
  const [state, dispatch] = useReducer(onChangeReducer, initialState, () => init(initial));

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