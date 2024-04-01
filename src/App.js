import "./App.css";
import React from "react";
import Home from "./core/pages/home/Home"
import Projects from "./core/pages/projects/Projects"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
