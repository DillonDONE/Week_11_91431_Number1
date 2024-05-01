import React, { useState } from "react";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button className="button plus" onClick={increase}>
        +
      </button>
      <button className="button minus" onClick={decrease}>
        -
      </button>
    </div>
  );
}

export default App;