import React from 'react';

import { FilterFormGender} from "../FilterFormGender";
import { FilterFormStatus} from "../FilterFormStatus";

import styles from './style.module.scss';

interface IProps {
    filterGender: string,
    filterStatus: string,
    setFilterGender: (arg: string) => void,
    setFilterStatus: (arg: string) => void,
    onClose: () => void
}


export const FilterModal: React.FC<IProps> = ({filterGender, filterStatus, setFilterGender, setFilterStatus, onClose}) => {


    const deleteFilters = () => {
        setFilterGender('')
        setFilterStatus('')
    }


    return (
        <div className={styles.filterModal}>
            <div className={styles.filter}>
                <div className={styles.formCont}>
                <FilterFormGender
                    filterGender={filterGender}
                    setFilterGender={setFilterGender}
                />
                <FilterFormStatus
                    filterStatus={filterStatus}
                    setFilterStatus={setFilterStatus}
                />
                </div>
                <button onClick={deleteFilters}>Delete all filters</button>
            </div>
            <div onClick={onClose} className={styles.filterShadow}/>
        </div>
    )
}
