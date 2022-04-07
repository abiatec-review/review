import { useDispatch, useSelector } from "react-redux";

import { getImageSelector } from "redux/selectors/contentfulSelectors";

import SearchBlock from "../SearchBlock";
import {Button, Image} from "components/Atoms";

import { ImageTypes } from "utils/constants";

import styles from "./index.module.scss";
import { logoutAC } from "redux/actions/UserActions";
import { useCookies } from "react-cookie";

interface IProps {
  userMail: string;
}

const HeaderBlock: React.FC<IProps> = ({userMail}) => {
  const [cookies, setCookie, removeCookie] = useCookies(['name']);
  const dispatch = useDispatch()
  console.log(cookies)
  const logout = () => {
    dispatch(logoutAC())
  }
  const img = useSelector(getImageSelector)
    return (
        <header className={styles.Header}>
          <Image type={ImageTypes.logSvg} className={styles.HeaderLogo} img={img} />
          <SearchBlock/>
          <div className={styles.mailBlock}>
            {userMail}
            {cookies?.name}
            <Button className={styles.button} onClick={logout}>Logout</Button>
          </div>
        </header>
    );
}

export default HeaderBlock;
