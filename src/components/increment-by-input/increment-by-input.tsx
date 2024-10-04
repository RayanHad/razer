import React, { useState } from 'react';
import './increment-by-input.css';

interface IncrementByInputProps {
    handleIncrement: (amount: number) => void;
}

const IncrementByInput: React.FC<IncrementByInputProps> = ({ handleIncrement }) => {
    const [inputValue, setInputValue] = useState(1);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(parseInt(e.target.value) || 1);
    };

    return (
        <div className='increment-by-input'>
            <input
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                min="1"
            />
            <button onClick={() => handleIncrement(inputValue)}>Increment by {inputValue}</button>
        </div>
    );
};

export default IncrementByInput;
