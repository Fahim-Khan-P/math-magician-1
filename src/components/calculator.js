import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';
import '../logic/operate';

class Calculator extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(e) {
    const result = (calculate(this.state, e.target.innerText));
    this.setState(result);
  }

  render() {
    const { total, next } = this.state;
    const resultSreen = !next ? total : next;
    return (
      <div>
        <div className="screen">
          {' '}
          {resultSreen || 0}
          {' '}
        </div>
        <div className="buttons">
          <button type="button" onClick={(e) => { this.handleClick(e); }}>AC</button>
          <button type="button" onClick={(e) => { this.handleClick(e); }}>+/-</button>
          <button type="button" onClick={(e) => { this.handleClick(e); }}>%</button>
          <button type="button" className="orange-color" onClick={(e) => { this.handleClick(e); }}>÷</button>
          <button type="button" onClick={(e) => { this.handleClick(e); }}>7</button>
          <button type="button" onClick={(e) => { this.handleClick(e); }}>8</button>
          <button type="button" onClick={(e) => { this.handleClick(e); }}>9</button>
          <button type="button" className="orange-color" onClick={(e) => { this.handleClick(e); }}>x</button>
          <button type="button" onClick={(e) => { this.handleClick(e); }}>4</button>
          <button type="button" onClick={(e) => { this.handleClick(e); }}>5</button>
          <button type="button" onClick={(e) => { this.handleClick(e); }}>6</button>
          <button type="button" className="orange-color" onClick={(e) => { this.handleClick(e); }}>-</button>
          <button type="button" onClick={(e) => { this.handleClick(e); }}>1</button>
          <button type="button" onClick={(e) => { this.handleClick(e); }}>2</button>
          <button type="button" onClick={(e) => { this.handleClick(e); }}>3</button>
          <button type="button" className="orange-color" onClick={(e) => { this.handleClick(e); }}>+</button>
          <button type="button" className="wide" onClick={(e) => { this.handleClick(e); }}>0</button>
          <button type="button" onClick={(e) => { this.handleClick(e); }}>.</button>
          <button type="button" className="orange-color" onClick={(e) => { this.handleClick(e); }}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
