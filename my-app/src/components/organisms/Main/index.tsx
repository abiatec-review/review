import {RootStateOrAny, useSelector} from 'react-redux'

import {
    Button,
    Picture,
    TitleText
} from 'src/components/atoms'
import {Card} from 'src/components/molecules'

import styles from './styles.module.scss'
import React, {useEffect, useState} from "react";
import {constants} from "src/utils/constants";

export const Main: React.FC = () => {
    const {charactersList, error} = useSelector((state: RootStateOrAny) => state.characters);
    const [isActive, setActive] = useState<boolean>(false);
    const checkedInputs = document.querySelectorAll("input[type='checkbox']")
    const [charsForRender, setCharsForRender] = useState<Array<object>>(charactersList)
    let filters: {[key: string]: string[]} = {gender: [], status: [], species: []}
    const [currentFilters, serCurrentFilters] = useState<object>(filters)

    const openFilter = () => {
        setActive(true)
    }

    const closeFilter = () => {
        setActive(false)
    }

    const changeStatus = () => {
        checkedInputs.forEach((i: any) => {
            if (i.checked) {
                if (i.parentElement?.textContent === 'Male' || i.parentElement?.textContent === 'Female' || i.parentElement?.textContent === 'unknown' || i.parentElement?.textContent === "Genderless") {
                    filters.gender.push(i.parentElement?.textContent);
                } else if (i.parentElement?.textContent === 'Dead' || i.parentElement?.textContent === "Alive") {
                    filters.status.push(i.parentElement?.textContent);
                } else if (i.parentElement?.textContent === 'Cronenberg' || i.parentElement?.textContent === "Human" || i.parentElement?.textContent === "Alien") {
                    filters.species.push(i.parentElement?.textContent);
                }
            }
        })

        const filteredData = charactersList.filter((el: any) =>
            Object.entries(filters).every(([k, v]) => el[k].includes(v))
        )
        serCurrentFilters(filters)
        setCharsForRender(filteredData)
    }

    useEffect(() => {
        setCharsForRender(charactersList.filter((el: any) =>
            Object.entries(currentFilters).every(([k, v]) => el[k].includes(v))
        ));
    }, [charactersList])

    return (
        <div className={styles.mainContainer}>
            {charactersList.length === 0 ? null : <TitleText className={styles.mainTitle} titleText='Result list'/>}
            <div id={'cardContainer'} className={styles.cardContainer}>
                {!error && charsForRender.map((char: any) => {
                    return <Card key={char.id} titleText={char.name} srcImage={char.image}/>
                })}
            </div>
            <Button handleClick={openFilter} className={styles.filterButton} type={"button"}>{'Filter'}</Button>
            <div id={'filterBox'}
                 className={`${styles.filterContainer} ${isActive ? styles.filterContainerActive : ''}`}>
                <div className={styles.filterCloseHandler} onClick={closeFilter}><Picture
                    type={constants.FILTER_ARROW} srcImage={""}/></div>
                <div className={styles.filterField}>
                    <TitleText titleText={'Choose a gender'} className={styles.filterFieldTitle}/>
                    <div className={styles.checkField}>
                        <label className={styles.label}>
                            Male
                            <input type={'checkbox'} id={'Male'} name={'Male'} onChange={changeStatus}/>
                        </label>
                        <label className={styles.label}>
                            Female
                            <input type={'checkbox'} id={'Female'} name={'Female'} onChange={changeStatus}/>
                        </label>
                        <label className={styles.label}>
                            unknown
                            <input type={'checkbox'} id={'unknown'} name={'unknown'} onChange={changeStatus}/>
                        </label>
                        <label className={styles.label}>
                            Genderless
                            <input type={'checkbox'} id={'Genderless'} name={'Genderless'} onChange={changeStatus}/>
                        </label>
                    </div>
                </div>
                <div className={styles.filterField}>
                    <TitleText titleText={'Choose a status'} className={styles.filterFieldTitle}/>
                    <div className={styles.checkField}>
                        <label className={styles.label}>
                            Dead
                            <input type={'checkbox'} id={'Dead'} name={'Dead'} onChange={changeStatus}/>
                        </label>
                        <label className={styles.label}>
                            Alive
                            <input type={'checkbox'} id={'Alive'} name={'Alive'} onChange={changeStatus}/>
                        </label>
                    </div>
                </div>
                <div className={styles.filterField}>
                    <TitleText titleText={'Choose a species'} className={styles.filterFieldTitle}/>
                    <div className={styles.checkField}>
                        <label className={styles.label}>
                            Cronenberg
                            <input type={'checkbox'} id={'Cronenberg'} name={'Cronenberg'} onChange={changeStatus}/>
                        </label>
                        <label className={styles.label}>
                            Human
                            <input type={'checkbox'} id={'Human'} name={'Human'} onChange={changeStatus}/>
                        </label>
                        <label className={styles.label}>
                            Alien
                            <input type={'checkbox'} id={'Alien'} name={'Alien'} onChange={changeStatus}/>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}