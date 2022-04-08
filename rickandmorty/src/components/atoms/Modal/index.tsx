import React, { useEffect, useState } from 'react';
// @ts-ignore
import styles from './style.module.scss';
import { useParams } from 'react-router-dom';
// @ts-ignore
export const Modal = ({}) => {

    const { id } = useParams();

    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?name=${id}`)
            .then(res => res.json)
            // @ts-ignore
            .then(data => setCharacter(data))
    }, [])

    console.log(character)

    if(character === null) {
        return <h3>...is loading</h3>
    }


    return (

                <div className={styles.modal}>
                    <figure>
                    <img src={character.image} alt={character.name}/>
                    <figcaption>{character.id}</figcaption>
                    <figcaption>{character.name}</figcaption>
                    <figcaption>{character.status}</figcaption>
                    <figcaption>{character.species}</figcaption>
                    <figcaption>{character.gender}</figcaption>
                    <figcaption>{character.origin.name}</figcaption>
                    <figcaption>{character.location.name}</figcaption>
                    </figure>
                </div>
                )

}
