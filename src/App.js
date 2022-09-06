import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const Increment = () => {
    let count = 0;

    setInterval(() => {
      if (count <= 9) {
        count++;
        setCounter(count);
      }
    }, 1000);
  };

  const Decrement = () => {
    let count = counter;
    setInterval(() => {
      if (count > 0) {
        count--;
        setCounter(count);
      }
    }, 1000);
  };

  return (
    <div className="App">
      <div className="content">
        <h>{counter}</h>
        <br />
        <button onClick={Increment} className="plus">
          Increment +
        </button>
        <button onClick={Decrement} className="minus">
          Decrement -
        </button>
      </div>
    </div>
  );
};

export default App;
