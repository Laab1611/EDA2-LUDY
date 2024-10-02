import React from 'react';
import useCalculator from '../hooks/useCalculator';
import '../App.css';

const Calculator = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const operators = ['+', '-', '*', '/'];

    const { input, result, handleClick, handleDecimal, calculate, deleteLast, clearInput } = useCalculator();

    return (
        <div className="calculator">
            <h1>Calculator</h1>
            <div className="display">
                <input type="text" value={input} readOnly />
                <div className="result">{result !== null ? result : ''}</div>
            </div>

            <div className="buttons">
                <button className="clear" onClick={clearInput}>C</button>
                <button className="delete" onClick={deleteLast}>DEL</button>
                <button className="equals" onClick={calculate}>=</button>
                <button onClick={handleDecimal}>.</button>

                {numbers.map((number) => (
                    <button key={number} onClick={() => handleClick(number.toString())}>
                        {number}
                    </button>
                ))}

                {operators.map((operator, index) => (
                    <button key={index} className="operator" onClick={() => handleClick(operator)}>
                        {operator}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;