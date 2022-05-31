import React from "react";

interface IProps {
    children?: string
    handleClick: any
    className: string
    type: "button" | "submit"
    rest?: object
}

export const Button: React.FC<IProps & React.HTMLProps<HTMLButtonElement>> = ({children, handleClick, className, type, ...rest}) => {
    return (
        <button className={className}
                onClick={handleClick}
                type={type}
                {...rest}>
            {children}
        </button>
    )
}