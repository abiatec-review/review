import { SearchInput, Image } from 'components/atoms';

const styles = {
    header: `flex fixed top-0 left-0 right-0 justify-center p-12 
    shadow-lg rounded-3xl bg-white/50`,
    header__logo:`absolute top-6 left-6 h-20 w-20 animate-[spin_20s_linear_infinite]`
};

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Image type='logo' />
            </div>
            <SearchInput />
        </header>
    );
};