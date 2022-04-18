import React from 'react';
import styles from './style.module.scss';
import {TCharacter} from "../../../models/character";
interface IProps{
    item: TCharacter<string>;
    showModal: () => void;
    setId: (arg: number) => void
};

export const ContentItem:React.FC<IProps> = ({item, setId, showModal }) => {

    const propId = () => {
        showModal();
        setId(item?.id)
    }


    return (
          <>
              <figure className={styles.figureCont} key={item?.id} onClick={propId}>
                  <img src={item?.image} alt={item?.name}/>
                  <div className={styles.figcaptionCont}>
                      <figcaption>
                          {item?.name}
                      </figcaption>
                  </div>
              </figure>
          </>
    )
}
