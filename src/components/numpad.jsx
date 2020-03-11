import React from "react";
import Key from "./characters";
import ClearButton from "./clear";
import Equals from "./equals";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operations = [
  { id: 1, operation: "/" },
  { id: 2, operation: "*" },
  { id: 3, operation: "-" },
  { id: 4, operation: "+" }
];

const Numpad = props => {
  const { onClick, onClear, onEval } = props;
  return (
    <div className='calculator__numpad'>
      <ClearButton onClear={onClear} />
      <div className='calculator__numbers'>
        {numbers.map(number => {
          return <Key className='calculator__number' onClick={onClick} key={number} character={number} />;
        })}
        <Equals onEval={onEval} />
      </div>
      <div className='calculator__operations'>
        {operations.map(operand => {
          return (
            <Key className='calculator__operation' key={operand.id} character={operand.operation} onClick={onClick} />
          );
        })}
      </div>
    </div>
  );
};

export default Numpad;
