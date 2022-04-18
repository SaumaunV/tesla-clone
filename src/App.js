import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import SectionInfo from "./components/SectionInfo";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
