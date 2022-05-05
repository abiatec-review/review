import React from "react";

interface IProps {
  buttonText?: string
  handleClick: any
  className: string
  type: any
  rest?: any
}

export const Button: React.FC<IProps & React.HTMLProps<HTMLButtonElement>> = ( { buttonText, handleClick, className, type, ...rest } ) => {
  return ( 
    <button className={className}
            onClick={handleClick}
            type={type}
            {...rest}>
            {buttonText}
            </button>
  )
}