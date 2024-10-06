import React from 'react';
import type { FunctionComponent } from 'react';
import './display-value.css';

// displays the current value
const DisplayValue: FunctionComponent<{ value: number }> = ({ value }) => {
  return <div className='display-value'>VΛLUΞ: {value}</div>;
};

export default DisplayValue;