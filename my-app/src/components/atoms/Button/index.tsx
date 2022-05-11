import React from "react";

interface IProps {
  children?: string
  handleClick: any
  className: string
  type: any
  rest?: any
}

export const Button: React.FC<IProps & React.HTMLProps<HTMLButtonElement>> = ( { children, handleClick, className, type, ...rest } ) => {
  return ( 
    <button className={className}
            onClick={handleClick}
            type={type}
            {...rest}>
            {children}
            </button>
  )
}