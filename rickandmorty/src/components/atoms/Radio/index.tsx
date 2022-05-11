import React from 'react';

import styles from './style.module.scss';

interface IProps {
    name: string,
    value: string,
    onChange: (e:any) => void
    checked: boolean
}

export const Radio:React.FC<IProps> = ({name, value, onChange, checked}) => {

return (
    <label className={styles.radioLabel}>
        {value}
        <input
            className={styles.radioInput}
            type="radio"
            id={value}
            name={name}
            value={value}
            onChange={onChange}
            checked={checked}
        />
    </label>
)
}

