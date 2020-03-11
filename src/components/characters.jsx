import React from "react";

const Key = props => {
  const { character, onClick } = props;
  return <input className='button' onClick={onClick} type='button' value={character} />;
};

export default Key;
