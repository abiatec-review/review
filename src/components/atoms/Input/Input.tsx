
import React from 'react';

interface InputProps {
  value: string,
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void
  disabled?: boolean,
  testId?: string,
}

const Input = ({ value, handleChange, disabled, testId }: InputProps) => (
  <div>
    <input
      disabled={disabled}
      value={value}
      onChange={handleChange}
      data-testid={testId}
    />
  </div>
);

export default Input;