import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';
import '../logic/operate';

const Calculator = () => {
  const [state, setState] = React.useState(
    {
      total: null,
      next: null,
      operation: null,
    },
  );

  const handleClick = (e) => {
    const result = (calculate(state, e.target.innerText));
    setState(result);
  };

  const { total, next } = state;
  const resultSreen = !next ? total : next;
  return (
    <div className="calculator">
      <h3>Lets do some math!</h3>
      <div className="box">
        <div className="screen">
          {' '}
          {resultSreen || 0}
          {' '}
        </div>
        <div className="buttons">
          <button type="button" onClick={handleClick}>AC</button>
          <button type="button" onClick={handleClick}>+/-</button>
          <button type="button" onClick={handleClick}>%</button>
          <button type="button" className="orange-color" onClick={handleClick}>÷</button>
          <button type="button" onClick={handleClick}>7</button>
          <button type="button" onClick={handleClick}>8</button>
          <button type="button" onClick={handleClick}>9</button>
          <button type="button" className="orange-color" onClick={handleClick}>x</button>
          <button type="button" onClick={handleClick}>4</button>
          <button type="button" onClick={handleClick}>5</button>
          <button type="button" onClick={handleClick}>6</button>
          <button type="button" className="orange-color" onClick={handleClick}>-</button>
          <button type="button" onClick={handleClick}>1</button>
          <button type="button" onClick={handleClick}>2</button>
          <button type="button" onClick={handleClick}>3</button>
          <button type="button" className="orange-color" onClick={handleClick}>+</button>
          <button type="button" className="wide" onClick={handleClick}>0</button>
          <button type="button" onClick={handleClick}>.</button>
          <button type="button" className="orange-color" onClick={handleClick}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
