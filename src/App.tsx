import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Container, Content } from "./components/styles";

import {
  Exercise1,
  Exercise2,
  Exercise3,
  Exercise4,
  Exercise5,
  Exercise6,
  Exercise7,
  Exercise8,
  Exercise9,
} from "./components/exercises";

export const App = () => (
  <BrowserRouter>
    <Sidebar />
    <Content>
      <Routes>
        <Route path="/exercise-1" element={<Exercise1 />} />
        <Route path="/exercise-2" element={<Exercise2 />} />
        <Route path="/exercise-3" element={<Exercise3 />} />
        <Route path="/exercise-4" element={<Exercise4 />} />
        <Route path="/exercise-5" element={<Exercise5 />} />
        <Route path="/exercise-6" element={<Exercise6 />} />
        <Route path="/exercise-7" element={<Exercise7 />} />
        <Route path="/exercise-8" element={<Exercise8 />} />
        <Route path="/exercise-9" element={<Exercise9 />} />
        <Route
          path="/"
          element={<Container>Please pick an exercise</Container>}
        />
      </Routes>
    </Content>
  </BrowserRouter>
);
