import { useCookies } from "react-cookie";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getImageSelector } from "redux/selectors/contentfulSelectors";
import { logoutAC } from "redux/actions/UserActions";

import SearchBlock from "../SearchBlock";
import {Button, Image, UserSnack} from "components/Atoms";

import { ImageTypes } from "utils/constants";

import styles from "./index.module.scss";

interface IProps {
  userMail: string;
}

const HeaderBlock: React.FC<IProps> = ({userMail}) => {
  const dispatch = useDispatch()

  const [cookies, setCookie] = useCookies([userMail]);
  const [isUserSlackOpen, setIsUserSlackOpen] = useState<boolean>(false)
  const img = useSelector(getImageSelector)

  const logout = () => {
    dispatch(logoutAC())
  }
  
  return (
    <header className={styles.Header}>
      <Image type={ImageTypes.logSvg} className={styles.HeaderLogo} img={img} />
      <SearchBlock userMail={userMail}/>
      <div className={styles.mailBlock}>
        <div className={styles.link} onClick={() => setIsUserSlackOpen(!isUserSlackOpen)}>
          {userMail}
        </div>
        {userMail && <Button className={styles.button} onClick={logout}>Logout</Button>}
        {isUserSlackOpen && <UserSnack userMail={userMail} setIsUserSlackOpen={setIsUserSlackOpen} setCookie={setCookie} user={cookies[userMail]}/>}
      </div>
    </header>
  );
}

export default HeaderBlock;
