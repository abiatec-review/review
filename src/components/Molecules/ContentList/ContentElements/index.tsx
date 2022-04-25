import React from "react";

import { Button, ContentItem } from "components/Atoms"

import { IContentItem } from "redux/reducers/HeroesReducer/types"

import styles from './styles.module.scss'

export interface IProps {
  isShowFetchButton: boolean;
  characters:IContentItem[];
  setSelectedHeroId: (id: string) => () => void;
  fetchMore: () => void;
}

export const ContentElements: React.FC<IProps> = ({isShowFetchButton, characters, setSelectedHeroId, fetchMore}) => {
  const fetchButton = isShowFetchButton && <Button className={styles.button} onClick={fetchMore}>Fetch more</Button>
  return (
    <>
      <div className={styles.header}>Rick and Morty</div>
      <ul className={styles.list}>
          {!characters.length && <div className={styles.nobodyText}>Nobody found</div> }
          {characters?.map((character: IContentItem) => {
            return <ContentItem 
                      key={character.id} 
                      image={character.image}
                      name={character.name}
                      id={character.id}
                      setSelectedHeroId={setSelectedHeroId}
                    />
        })}
      </ul>
      {fetchButton}
  </>
  )
}