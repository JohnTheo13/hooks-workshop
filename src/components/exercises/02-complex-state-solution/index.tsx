import { useReducer } from "react";
import { Container, InputArea, Label } from "../../styles";

export const CHANGE = "CHANGE";

export type State = {
  text: string;
};

export type Action = {
  type: string;
  payload: string;
};

export const initialState = {
  text: "",
};

export const onChangeReducer = (state: State, { type, payload }: Action) => {
  if (type === CHANGE) {
    return { ...state, text: payload };
  }
  return { ...state };
};

const init = (text: string): State => ({
  text
})

export const Exercise2 = ({ startingText = "hooks" }) => {
  const [state, dispatch] = useReducer(onChangeReducer, initialState, () => init(startingText));

  return (
    <Container>
      <Label>Text</Label>
      <InputArea
        value={state.text}
        onChange={({ target: { value } }) =>
          dispatch({ type: CHANGE, payload: value })
        }
      />
      Your text is:
      <pre>{state.text}</pre>
    </Container>
  );
};