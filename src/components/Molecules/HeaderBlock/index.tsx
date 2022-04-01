import { ImageTypes } from "../../../utils/constants";

import styles from "./index.module.scss";
import SearchBlock from "../SearchBlock";
import {Image} from "../../Atoms";
import { useSelector } from "react-redux";
import { RootReducer } from "../../../redux/reducers";
import { getImageSelector } from "../../../redux/selectors/contentfulSelectors";

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
