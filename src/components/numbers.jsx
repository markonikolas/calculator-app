import React from "react";
import Key from "./characters";

const Numbers = props => {
  const { numbers, onClick } = props;
  return (
    <div className='calculator__numbers'>
      {numbers.map(number => {
        return <Key className='calculator__number' onClick={onClick} key={number} character={number} />;
      })}
    </div>
  );
};

export default Numbers;
