import React, { FC } from "react";
import { InputProps } from "./type";

const styles = {
    inputStyle: 'outline-none border-input-color border-2 rounded-md p-1 text-2xl',
}

const Input: FC<InputProps> = ({ value, changeHandler}) => {
    return(
        <input
            className={styles.inputStyle}
            type='text'
            value={value}
            onChange={changeHandler}
            placeholder='Search Rick or Morty'
        />
    );
}

export default Input;