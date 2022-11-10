import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';
import '../logic/operate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
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
          <button type="button" onClick={this.handleClick}>AC</button>
          <button type="button" onClick={this.handleClick}>+/-</button>
          <button type="button" onClick={this.handleClick}>%</button>
          <button type="button" className="orange-color" onClick={this.handleClick}>÷</button>
          <button type="button" onClick={this.handleClick}>7</button>
          <button type="button" onClick={this.handleClick}>8</button>
          <button type="button" onClick={this.handleClick}>9</button>
          <button type="button" className="orange-color" onClick={this.handleClick}>x</button>
          <button type="button" onClick={this.handleClick}>4</button>
          <button type="button" onClick={this.handleClick}>5</button>
          <button type="button" onClick={this.handleClick}>6</button>
          <button type="button" className="orange-color" onClick={this.handleClick}>-</button>
          <button type="button" onClick={this.handleClick}>1</button>
          <button type="button" onClick={this.handleClick}>2</button>
          <button type="button" onClick={this.handleClick}>3</button>
          <button type="button" className="orange-color" onClick={this.handleClick}>+</button>
          <button type="button" className="wide" onClick={this.handleClick}>0</button>
          <button type="button" onClick={this.handleClick}>.</button>
          <button type="button" className="orange-color" onClick={this.handleClick}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
