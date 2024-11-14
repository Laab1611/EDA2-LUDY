import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementBy } from "./Store/CounterSlice";
import "./App.css";

const App = () => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>App</h1>
      <hr />
      <span>Counter is: {counter}</span>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(increment())}
        >
          +1
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(decrement())}
        >
          -1
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            const value = prompt("Enter a value to increment by:");
            if (value) {
              dispatch(incrementBy(Number(value)));
            }
          }}
        >
          Increment By
        </button>
      </div>
    </div>
  );
};
export default App;