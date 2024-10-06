import React, { useState } from 'react';
import type { FunctionComponent } from 'react';
import IncrementByOne from '../../components/increment-by-one/increment-by-one';
import DisplayValue from '../../components/display-value/display-value';
import IncrementByInput from '../../components/increment-by-input/increment-by-input';
import './value-manager.css';

const ValueManager: FunctionComponent = () => {
    const [value, setValue] = useState(0);

    const handleIncrement = async (amount = 1) => {
        if (amount > 1) {
            for (let i = 0; i < amount; i++) {
                await window.electron.incrementValue();
            }
        } else {
            await window.electron.incrementValue();
        }
        const newValue = await window.electron.getValue();
        setValue(newValue);
    };

    return (
        <div className='container'>
            <div className="glow"></div>
            <div className="inner-container">
                <DisplayValue value={value} />
                <IncrementByOne handleIncrement={handleIncrement} />
                <IncrementByInput handleIncrement={handleIncrement} />
            </div>
        </div>
    );
};

export default ValueManager;
