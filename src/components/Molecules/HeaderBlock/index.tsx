import { useDispatch, useSelector } from "react-redux";

import { getImageSelector } from "redux/selectors/contentfulSelectors";

import SearchBlock from "../SearchBlock";
import {Button, Image, UserSnack} from "components/Atoms";

import { cookiesName, ImageTypes } from "utils/constants";

import styles from "./index.module.scss";
import { logoutAC } from "redux/actions/UserActions";
import { useCookies } from "react-cookie";
import { useState } from "react";

interface IProps {
  userMail: string;
}

const HeaderBlock: React.FC<IProps> = ({userMail}) => {
  const [cookies, setCookie, removeCookie] = useCookies([cookiesName]);

  const [isUserSlackOpen, setIsUserSlackOpen] = useState(false)
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(logoutAC())
  }
  const img = useSelector(getImageSelector)
    return (
        <header className={styles.Header}>
          <Image type={ImageTypes.logSvg} className={styles.HeaderLogo} img={img} />
          <SearchBlock/>
          <div className={styles.mailBlock}>
              <div className={styles.link} onClick={() => setIsUserSlackOpen(!isUserSlackOpen)}>
                {userMail}
              </div>
              {userMail && <Button className={styles.button} onClick={logout}>Logout</Button>}
              {isUserSlackOpen && <UserSnack setIsUserSlackOpen={setIsUserSlackOpen} setCookie={setCookie} user={cookies[cookiesName]}/>}
            </div>
        </header>
    );
}

export default HeaderBlock;
