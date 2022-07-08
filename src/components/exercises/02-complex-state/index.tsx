import React, { useReducer, Reducer, Dispatch } from "react";
import { Button, Container, InputArea, Label } from "../../styles";

const INCREMENT = "increment";
const DECREMENT = "decrement";
const INPUT = "INPUT";

export const Exercise2 = () => {

  return (
    <Container>
      <p>{'state.count'}</p>
      <Button >+</Button>
      <Button >-</Button>
      <Label>Text</Label>
      <InputArea
      />
      Your text is:
      <pre>{'state.text'}</pre>
    </Container>
  );
};

// const reducer = (
//   state: State = { text: "" },
//   action: State = { text: "" }
// ): State => ({
//   ...state,
//   ...action,
// });

// const Input1 = () => {
//   const [state, dispatch] = useReducer<Reducer<State, State>>(reducer, {
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
//   const [state, dispatch] = useReducer<Reducer<State, State>>(reducer, {
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
