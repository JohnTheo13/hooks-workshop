import React, { useReducer, Reducer, Dispatch } from "react";
import { Button, Container, InputArea, Label } from "../../styles";

const INCREMENT = "increment";
const DECREMENT = "decrement";
const INPUT = "INPUT";

export const Exercise2 = () => {
  const state = {}
  const dispatch = () => {}

  return (
    <Container>
      <p>playground</p>
      <p>{state.count}</p>
      <Button onClick={() => dispatch({type: INCREMENT})}>+</Button>
      <Button onClick={() => dispatch({type: DECREMENT})}>-</Button>
      <Label>Text</Label>
      <InputArea
        value={state.text}
        onChange={({target: {value}}) => dispatch({type: INPUT, payload: value})}
      />
      Your text is:
      <pre>
        {state.text}
      </pre>
    </Container>
  )
}

// type TestState = {
//   text: string;
// };

// const reducer = (
//   state: TestState = { text: "" },
//   action: TestState = { text: "" }
// ): TestState => ({
//   ...state,
//   ...action,
// });

// const Input1 = () => {
//   const [state, dispatch] = useReducer<Reducer<TestState, TestState>>(reducer, {
//     text: "",
//   });
//   return (
//     <InputArea
//       value={state.text}
//       onChange={({ target: { value } }) => dispatch({ text: value })}
//     />
//   );
// };
// const Input2 = () => {
//   const [state, dispatch] = useReducer<Reducer<TestState, TestState>>(reducer, {
//     text: "",
//   });

//   return (
//     <InputArea
//       value={state.text}
//       onChange={({ target: { value } }) => dispatch({ text: value })}
//     />
//   );
// };

// export const Exercise2 = () => (
//   <Container>
//     <Input1 />
//     <Input2 />
//   </Container>
// );
