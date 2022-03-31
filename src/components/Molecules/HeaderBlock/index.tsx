import { ImageTypes } from "../../../utils/constants";

import styles from "./index.module.scss";
import SearchBlock from "../SearchBlock";
import {Image} from "../../Atoms";

const HeaderBlock: React.FC = () => {

    return (
        <header className={styles.Header}>
          <Image type={ImageTypes.logSvg} className={styles.HeaderLogo}/>
          <SearchBlock/>
        </header>
    );
}

export default HeaderBlock;
