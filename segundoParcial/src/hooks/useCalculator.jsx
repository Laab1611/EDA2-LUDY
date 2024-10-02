import { useState } from 'react';

const useCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);

  const handleClick = (value) => {
    if (isResultDisplayed && !isNaN(value)) {      setInput(value);
      setIsResultDisplayed(false);
    } else if (isResultDisplayed && isNaN(value)) {
      setInput(result + value);
      setIsResultDisplayed(false);
    } else {
      setInput(input + value);
    }
  };

  const handleDecimal = () => {
    const lastNumber = input.split(/[\+\-\*\/]/).pop();
    if (!lastNumber.includes('.')) {
      setInput(input + '.');
    }
  };

  const calculate = () => {
    try {
      const evalResult = Function('return ' + input)();
      setResult(evalResult);
      setInput(evalResult.toString());
      setIsResultDisplayed(true);
    } catch (err) {
      setResult('Error');
      setInput('Error');
    }
  };

  const deleteLast = () => {
    if (!isResultDisplayed) {
      setInput(input.slice(0, -1));
    }
  };

  const clearInput = () => {
    setInput('');
    setResult(null);
    setIsResultDisplayed(false);
  };

  return {
    input,
    result,
    handleClick,
    handleDecimal,
    calculate,
    deleteLast,
    clearInput,
  };
};

export default useCalculator;