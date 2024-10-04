import React from 'react';
import type { FunctionComponent } from 'react';
import './display-value.css';

const DisplayValue: FunctionComponent<{ value: number }> = ({ value }) => {
  return <div className='display-value'>Valeur: {value}</div>;
};

export default DisplayValue;