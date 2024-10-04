import React from 'react';
import type { FunctionComponent } from 'react';
import './increment-by-one.css';

interface IncrementByOneProps {
  handleIncrement: (amount?: number) => void;
}

const IncrementByOne: FunctionComponent<IncrementByOneProps> = ({ handleIncrement }) => {
  return (
    <div className='increment-by-one'>
      <button onClick={() => handleIncrement(1)}>Increment</button>
    </div>
  );
};

export default IncrementByOne;
