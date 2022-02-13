import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Toilet from "./routes/toilet/Toilet";
import Test from "./routes/test/Test";
import Library from "./routes/library/Library";

import "./App.css";

function App() {
    return (
      <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Test />} />
          <Route path="toilet" element={<Toilet />} />
          <Route path="Library" element={<Library />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
