import React from "react";

const Equals = props => {
  return <input className='button' type='button' defaultValue='=' onClick={props.onEval} />;
};

export default Equals;
