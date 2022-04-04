import { useSelector } from "react-redux";

import { getImageSelector } from "redux/selectors/contentfulSelectors";

import SearchBlock from "../SearchBlock";
import {Image} from "components/Atoms";

import { ImageTypes } from "utils/constants";

import styles from "./index.module.scss";

const HeaderBlock: React.FC = () => {
  const img = useSelector(getImageSelector)
    return (
        <header className={styles.Header}>
          <Image type={ImageTypes.logSvg} className={styles.HeaderLogo} img={img} />
          <SearchBlock/>
        </header>
    );
}

export default HeaderBlock;
