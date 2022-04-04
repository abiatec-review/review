import classNames from "classnames";
import styles from "./index.module.scss";

interface IProps {
  isSelectedTab: boolean;
  openEpisode: () => void;
  openHero: () => void
}

const Tabs: React.FC<IProps>= ({isSelectedTab, openEpisode, openHero}) => {
  return (
    <div>
      <span 
        className={classNames(!isSelectedTab && styles.active, styles.tab)} 
        onClick={openHero}
      >
        Hero
      </span>
      <span 
        className={classNames(isSelectedTab && styles.active, styles.tab)} 
        onClick={openEpisode}
      >
        Episode
      </span>
    </div>
    
  )
}

export default Tabs;