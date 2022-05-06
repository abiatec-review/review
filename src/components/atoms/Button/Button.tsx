import React from 'react';

interface ButtonProps {
  className?: string;
  handleClick: () => void;
  children: string;
}

const Button = (props: ButtonProps) => {
  const { className, handleClick, children } = props;
  return (
    <button onClick={handleClick} className={className}>{children}</button>
  );
};

export default Button;