
import React from 'react';

interface IInputProps {
  value: string,
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void
}

const Input: React.FC<IInputProps> = ({ value, handleChange }) => (
  <div>
    <input
      value={value}
      onChange={handleChange}
    />
  </div>
);

export default Input;