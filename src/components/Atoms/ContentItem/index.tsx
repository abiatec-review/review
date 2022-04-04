import { IContentItem } from "redux/reducers/HeroesReducer/types";

import styles from "./index.module.scss";

interface IProps extends IContentItem {
  setSelectedHeroId: (id: string) => () => void;
}

export const ContentItem: React.FC<IProps> = ({id, image, name, setSelectedHeroId}) => {

  return (
    <div className={styles.item} onClick={setSelectedHeroId(id)}>
        <img className={styles.image} src={image} alt={`${name} character`}/>
        <div className={styles.itemName}>{name}</div>
    </div>
  )
}