import TestComponent from "./test-component";
import { StoreProvider } from "./context-provider";

// GO to Context Store to Create the store and to Test component to repliacate the solution from exercise-3
export const Exercise7 = () => (
  <StoreProvider>
    <TestComponent />
  </StoreProvider>
);
