import React from 'react'

interface IProps {
  inputValue?: string
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  placeholder: string
  rest?: object
  className: string
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