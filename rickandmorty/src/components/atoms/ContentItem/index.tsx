// @ts-ignore
import styles from './style.module.scss';
// @ts-ignore
import {FetchMoreButton} from '../FetchMoreButton'
import React from "react";
import { Link } from 'react-router-dom';
// @ts-ignore
interface IProps{data: array};

// @ts-ignore
export const ContentOne:React.FC<IProps> = ({data, visible, setVisible}) => {



    return (
          <>
              <div className={styles.gallery}>
                  { data.characters.slice(0, visible).map((item:any) => {
                          return (
                              <figure key={item.id}>
                                  <img src={item.image} alt={item.name}/>
                                  <div className={styles.figcaptionCont}>
                                      <figcaption><Link to={`/${item.id}`}>{item.name}</Link></figcaption>
                                  </div>
                              </figure>
                          )
                      }
                  )}
              </div>
              {visible < data.characters.length &&
                  <FetchMoreButton visible={visible} setVisible={setVisible}/>
              }
          </>
    )
}
