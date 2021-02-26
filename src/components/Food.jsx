import React from 'react';

const Food = ({ foodArray }) => {
  return (
    <ul>
      {foodArray.map((food, index) => (
        <li key={index}>{food}</li>
      ))}
    </ul>
  );
};

export default Food;
