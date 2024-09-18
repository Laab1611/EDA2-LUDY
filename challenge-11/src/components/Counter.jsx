import { useCounter } from "../Hooks/useCounter";
import PropTypes from "prop-types"; //Instalar los props "npm install prop-types"

const Counter = ({value}) => {
  const { count, increment, decrement, reset } = useCounter(value);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
};

Counter.defaultProps = {
  value: 0,
};

export default Counter;