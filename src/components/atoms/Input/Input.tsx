
import React from 'react';

interface IInputProps {
  value: string,
  // eslint-disable-next-line no-unused-vars
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