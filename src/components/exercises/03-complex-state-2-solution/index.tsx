import { useReducer } from "react";
import { Button, Container, InputArea } from "../../styles";
import { Action, State, onChangeReducer } from "../02-complex-state-solution";

const ADD = "ADD";
const REMOVE = "REMOVE";

type UpdatedState = State & {
  list: string[];
};

const CHANGE = "CHANGE";

const updateListReducer = (
  state: UpdatedState,
  { type, payload }: Action
): // @ts-ignore
UpdatedState => {
  const { list } = state;
  if (type === ADD) {
    return { ...state, list: [...list, (payload as string)], text: "" };
  } else if (type === REMOVE) {
    const reduced = list.slice(0, -1);
    return { ...state, list: reduced };
  }
};

const reducerHandler = (state: UpdatedState, action: Action): UpdatedState => {
  console.log(action.type);
  if (action.type === CHANGE) {
    return onChangeReducer(state, action) as UpdatedState;
  }
  return updateListReducer(state, action);
};

export const Exercise3 = () => {
  const [{ text, list }, dispatch] = useReducer(reducerHandler, {
    text: "sktat",
    list: [],
  });

  return (
    <Container>
      <InputArea
        value={text}
        onChange={({ target: { value } }) =>
          dispatch({ type: CHANGE, payload: value })
        }
      />
      Your text is:
      <pre>{text}</pre>
      <div style={{ display: "flex" }}>
        <Button onClick={() => dispatch({ type: ADD, payload: text })}>
          +
        </Button>
        <Button onClick={() => dispatch({ type: REMOVE, payload: '' })}>-</Button>
      </div>
      <div>
        {list.map((el) => (
          <div key={el}>{el}</div>
        ))}
      </div>
    </Container>
  );
};
