import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { getUser } from 'redux/selectors/user';


const styles = {
    userInfo: `mx-[20px]`
};

export const UserInfo: React.FC = () => {
    const user = useSelector(getUser);
    const [cookies, setCookie, removeCookie] = useCookies();
    const info = cookies[user.email];
    return (
        <div className={styles.userInfo}>
            {info && <>
            {info.email &&
            <div>
                {info.email}
            </div> 
            }
            {info.name &&
            <div>
               name: {info.name}
            </div> 
            }
            {info.age &&
            <div>
               age: {info.age}
            </div> 
            }
            </>}
        </div>
    );
};

