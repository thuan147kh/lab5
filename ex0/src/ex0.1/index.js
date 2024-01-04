// import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import "./style.css";

const Ex0_1 = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div class="react3">
      <div className="result">{counter}</div>
      <button onClick={increaseCounter} size="lg">
        Click
      </button>
    </div>
  );
};

export default Ex0_1;
