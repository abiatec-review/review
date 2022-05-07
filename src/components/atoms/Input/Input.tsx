
import React from 'react';

interface IInputProps {
  value: string,
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void
  disabled?: boolean
}

const Input: React.FC<IInputProps> = ({ value, handleChange, disabled }) => (
  <div>
    <input
      disabled={disabled}
      value={value}
      onChange={handleChange}
    />
  </div>
);

export default Input;