import React from "react";
import Numbers from "./numbers";
import Operations from "./operations";

import Equals from "./equals";
import ClearButton from "./clear";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]; // this order visually fits
const operations = [
  { id: 1, operation: "^2" },
  { id: 2, operation: "/" },
  { id: 3, operation: "*" },
  { id: 4, operation: "-" },
  { id: 5, operation: "+" }
];

const Numpad = props => {
  const { onClick, onClear, onEval } = props;
  return (
    <div className='calculator__numpad'>
      <Numbers numbers={numbers} onClick={onClick} onClear={onClear} />
      <Operations operations={operations} onClick={onClick} />
      <Equals onEval={onEval} />
      <ClearButton onClear={onClear} />
    </div>
  );
};

export default Numpad;
