import React from "react";
import Key from "./characters";

const Operations = props => {
  const { operations, onClick } = props;
  return (
    <div className='calculator__operations'>
      {operations.map(operand => {
        const { id, operation } = operand;
        return <Key className='calculator__operation' key={id} character={operation} onClick={onClick} />;
      })}
    </div>
  );
};

export default Operations;
