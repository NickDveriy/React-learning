import React from "react";
import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <Todos items={["Learn ReACT", "Learn Typescript"]} />
    </div>
  );
}

export default App;
