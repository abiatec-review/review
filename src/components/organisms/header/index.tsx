import { useDispatch, useSelector } from 'react-redux';
import { SearchInput, Image, Button, UserInfo } from 'components/atoms';
import { getUser } from 'redux/selectors/user';
import { logout } from 'redux/actions/user';

const styles = {
    header: `flex fixed top-0 left-0 right-0 justify-between h-[128px] items-center
    shadow-lg rounded-3xl bg-white/50`,
    header__logo: ` ml-[30px]  h-20 w-20 animate-[spin_20s_linear_infinite]`,
    header__button: ` right-6 flex`
};

export const Header: React.FC = () => {
    const user = useSelector(getUser);
    const dispatch = useDispatch();
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Image type='logo' />
            </div>
            <SearchInput />
            <div className={styles.header__button}>
                {
                    user.email &&
                    <>
                        <UserInfo />
                        <Button onClick={() => { dispatch(logout()) }}>
                            Logout
                        </Button>
                    </>


                }
            </div>
        </header>
    );
};