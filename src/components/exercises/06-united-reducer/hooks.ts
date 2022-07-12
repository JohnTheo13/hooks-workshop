import { Dispatch, Reducer, useReducer } from "react";

export function unitedReducer<S>(state: S, action: Partial<S>): S {
  return { ...state, ...action };
}

export function useUnitedReducer<S>(initialState: S): [S, Dispatch<Partial<S>>] {
  return useReducer<Reducer<S, Partial<S>>>(unitedReducer, initialState);
}
