import React from 'react';

interface ButtonProps {
  className?: string;
  handleClick: () => void;
  children: string;
}

const Button = (props: ButtonProps) => {
  const { className, handleClick, children, ...rest } = props;
  return (
    <button onClick={handleClick} className={className} {...rest}>{children}</button>
  );
};

export default Button;