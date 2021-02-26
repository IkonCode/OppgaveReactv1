import React, { useState } from 'react';

const Alert = ({ callBack }) => {
  const [searchInput, setSearchInput] = useState('');
  const stateChange = (event) => {
    setSearchInput(event.target.value);
    console.log(event.target.value);
  };
  const buttonclick = () => {
    alert(searchInput);
    callBack(searchInput);
  };
  return (
    <>
      <input
        placeholder="Søk etter addresse her..."
        type="text"
        value={searchInput}
        onChange={stateChange}
      />
      <button onClick={buttonclick}>Click me</button>
    </>
  );
};

export default Alert;
