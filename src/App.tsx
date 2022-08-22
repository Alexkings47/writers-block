import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import ReadProfile from "./pages/ReadProfile";

const App = () => {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/readprofile" element={<ReadProfile />} />
      </Routes>
    </div>
  );
};

export default App;
