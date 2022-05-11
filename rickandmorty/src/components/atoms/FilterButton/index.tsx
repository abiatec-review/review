import React from 'react';
import styles from './style.module.scss';

interface IProps {
    onOpen: () => void
}

export const FilterButton:React.FC<IProps> = ({onOpen}) => {

    return (
        <button className={styles.filterButton} onClick={onOpen}>Open filtration</button>
    )
}
