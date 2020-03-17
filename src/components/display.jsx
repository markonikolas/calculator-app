import React from "react";

const Display = props => {
  return (
    <input
      className='calculator__display'
      type='text'
      onChange={props.onChange}
      value={props.expression}
      onKeyPress={props.onKeyPress}
    />
  );
};

export default Display;
