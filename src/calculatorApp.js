import React, { Component } from "react";
import "./styles/App.css";
import Display from "./components/display";
import Numpad from "./components/numpad";
import calculateExp from "./helper-functions/helperFunctions";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: 0
    };
  }

  handleClick = e => {
    return this.state.expression
      ? this.setState({ expression: this.state.expression + e.target.value })
      : this.setState({ expression: e.target.value });
  };

  handleClear = () => {
    if (this.state.expression) {
      this.setState({ expression: 0 });
    }
  };

  handleChange = e => {
    this.setState({ expression: e.target.value });
  };

  handleEval = () => {
    const exp = this.state.expression.split(/[/*+^-]/g);
    const n1 = exp[0];
    const n2 = exp[1];
    const operand = this.state.expression.match(/[/*+^-]/g).join("");
    this.setState({ expression: calculateExp(n1, n2, operand) });
  };

  render() {
    return (
      <div className='calculator'>
        <Display expression={this.state.expression} onChange={this.handleChange} />
        <Numpad
          expression={this.state.expression}
          onClick={this.handleClick}
          onClear={this.handleClear}
          onEval={this.handleEval}
        />
      </div>
    );
  }
}

export default Calculator;
