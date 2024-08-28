import { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1)}

  const handleSubtract = () => {
    setCounter(counter - 1)}

  const handleReset = () => {
    setCounter(0)}

  return (
    <>
      <h1>Counter</h1>
      <span>{counter}</span>
      <button onClick={ () => handleAdd()}> +1 </button>
      <button onClick={ () => handleSubtract()}> -1 </button>
      <button onClick={ () => handleReset()}> Reset </button>
    </>
  );
};

export default App;
