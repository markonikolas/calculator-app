import React from "react";

const ClearButton = props => {
  return (
    <button className='calculator__clear' onClick={props.onClear}>
      clear
    </button>
  );
};

export default ClearButton;
