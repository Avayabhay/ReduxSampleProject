import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";
import { upAction, downAction } from "../actions/action";

const Counter = () => {
  // const [count, setCount] = useState(0);
  const count = useSelector((state) => state.updown);
  const dispatch = useDispatch();
  return (
    <>
      <div className="counter">
        <button className="increment btn" onClick={() => dispatch(upAction(1))}>
          +
        </button>
        <h3>Counter : {count}</h3>
        <button
          className="decrement btn"
          onClick={() => dispatch(downAction(2))}
        >
          -2
        </button>
      </div>
    </>
  );
};

export default Counter;
