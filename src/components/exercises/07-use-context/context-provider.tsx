import React, {
  createContext,
  PropsWithChildren,
  ReactElement,
  useContext,
} from "react";
import { useUnitedReducer } from "../06-united-reducer/hooks";

type State = {
  text: string;
  list: string[];
};

const initialState = {
  text: "",
  list: [],
};

type AppContext = {
  state: State;
  storeDispatch: (action: Partial<State>) => void;
};

const StoreContext = createContext<AppContext>({
  state: initialState,
  storeDispatch: () => {},
});

export function StoreProvider({
  children,
}: PropsWithChildren<{}>): ReactElement {
  const [state, storeDispatch] = useUnitedReducer<State>(initialState);

  return (
    <StoreContext.Provider
      value={{
        state,
        storeDispatch,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export const useAppContext = (): AppContext => useContext(StoreContext);
