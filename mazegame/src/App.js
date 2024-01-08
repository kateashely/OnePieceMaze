import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Instruction from "./component/Instruction/Instruction";
import TitleScreen from "./component/TitleScreen/TitleScreen";
import About from "./component/About/About";
import Level1 from "./component/Level1/Level1";
import Level2 from "./component/Level2/Level2";
import Level3 from "./component/Level3/Level3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TitleScreen />} />
        <Route path="/Instructions" element={<Instruction />} />
        <Route path="/About" element={<About />} />
        <Route path="/Level1" element={<Level1 />} />
        <Route path="/Level2" element={<Level2 />} />
        <Route path="/Level3" element={<Level3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
