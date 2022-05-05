import React from 'react'

interface IProps {
  inputValue?: string
  onChangeHandler: any
  name: string
  placeholder: string
  rest?: any
  className: any
}

export const Input: React.FC<IProps> & React.HTMLProps<HTMLInputElement> = ( { inputValue,
                                                                               onChangeHandler, name,
                                                                               placeholder,
                                                                               className,
                                                                               ...rest } ) => {

  return ( 
    <input className={className}
            value={inputValue}
            onChange={onChangeHandler}
            name={name}
            placeholder={placeholder}
            {...rest}>
    </input>
  )
}