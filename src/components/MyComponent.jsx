import React from 'react';
import Title from './Title';
const MyComponent = ({ title }) => {
  return (
    <div>
      <h1>My First Component</h1>
      <Title title={title} />
    </div>
  );
};

export default MyComponent;
