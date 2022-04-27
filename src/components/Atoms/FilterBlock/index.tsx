import {useDispatch} from "react-redux";
import React, {useState} from "react";
import classNames from "classnames";

import {clearAllFilters, filterHeroesBySex, filterHeroesByStatus} from "redux/actions/heroActions";

import {Button} from "../Button";

import {genderConfig, statusConfig} from "./config";
import {LOCAL_STORAGE_FILTERS} from "utils/constants";

import styles from './style.module.scss';

interface IProps {
    closeFilterModal: () => void
}

export const FilterBlock: React.FC<IProps> = ({closeFilterModal}) => {
    const dispatch = useDispatch();

    const [radioSex, setRadioSex] = useState<string>(localStorage.getItem(LOCAL_STORAGE_FILTERS.SEX)!)
    const [radioStatus, setRadioStatus] = useState<string>(localStorage.getItem(LOCAL_STORAGE_FILTERS.STATUS)!)

    const {title, fields} = genderConfig(radioSex)
    const {title: statusTitle, fields: statusFields} = statusConfig(radioStatus)

    const changeStatus = (status: string) => () => {
        setRadioStatus(status);
        dispatch(filterHeroesByStatus(status))

        localStorage.setItem(LOCAL_STORAGE_FILTERS.STATUS, status)
    }
    const changeMale = (sex: string) => () => {
        setRadioSex(sex);
        dispatch(filterHeroesBySex(sex))

        localStorage.setItem(LOCAL_STORAGE_FILTERS.SEX, sex)
    }
    const deleteAllFilters = () => {
        dispatch(clearAllFilters())
        setRadioSex('')
        setRadioStatus('')

        localStorage.removeItem(LOCAL_STORAGE_FILTERS.SEX);
        localStorage.removeItem(LOCAL_STORAGE_FILTERS.STATUS);
    }
    return (
        <div className={styles.component}>
            <div className={styles.content}>
                <div className={styles.block}>
                    <h1 className={styles.header}>{title}</h1>
                    {fields.map(elem => {
                        return <label key={elem.value} className={classNames(styles.label, {
                            [styles.activeRadio]: radioSex === elem.value}
                        )} >{elem.label}
                            <input
                                className={styles.radio}
                                type="radio"
                                name="sex"
                                value={elem.value}
                                checked={elem.checked}
                                onChange={changeMale(elem.value)}
                            />
                        </label>
                    })}
                </div>
                <div className={styles.block}>
                    <h1 className={styles.header}>{statusTitle}</h1>
                    {statusFields.map(elem => {
                        return   <label key={elem.value} className={classNames(styles.label, {
                            [styles.activeRadio]: radioStatus === elem.value}
                        )} >{elem.label}
                            <input
                                className={styles.radio}
                                type="radio"
                                name="status"
                                value={elem.value}
                                checked={elem.checked}
                                onChange={changeStatus(elem.value)}
                            />
                        </label>
                    })}
                </div>
                <Button className={styles.button} onClick={deleteAllFilters}>Delete All filters</Button>
            </div>
            <div className={styles.activeButton} onClick={closeFilterModal}><span>x</span></div>
            <div className={styles.overlay} onClick={closeFilterModal}/>
        </div>
    )
}