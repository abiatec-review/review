import classNames from "classnames";

import styles from "./index.module.scss";

interface IProps {
  isSelectedTab: boolean;
  openEpisode: () => void;
  openHero: () => void
}

export const Tabs: React.FC<IProps>= ({isSelectedTab, openEpisode, openHero}) => {
  return (
    <div>
      <span 
        className={classNames(styles.tab, {[styles.active]: !isSelectedTab})}
        onClick={openHero}
      >
        Hero
      </span>
      <span 
        className={classNames(styles.tab, {[styles.active]: isSelectedTab})} 
        onClick={openEpisode}
      >
        Episode
      </span>
    </div>
    
  )
}