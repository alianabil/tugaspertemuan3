import React from "react";
import Counter from "./Components/Counter";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar title="TECHMART" />
      <Counter />
    </div>
  );
}

export default App;
