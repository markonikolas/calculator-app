import React from "react";

const Equals = props => {
  return <input className='calculator__equals button' type='button' defaultValue='=' onClick={props.onEval} />;
};

export default Equals;
