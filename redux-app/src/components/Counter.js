import React, { useState } from "react";
import "../App.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="counter">
        <button className="increment btn" onClick={() => setCount(count + 1)}>
          +
        </button>
        <h3>Counter : {count}</h3>
        <button className="decrement btn" onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
    </>
  );
};

export default Counter;
