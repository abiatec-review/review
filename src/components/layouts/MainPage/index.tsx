import { SearchInput, Image } from 'components/atoms';
import { Footer, Header } from 'components/organisms';

interface IProps {
    children: JSX.Element
}

const styles = {
    header: `flex fixed top-0 left-0 right-0 justify-center p-12 
    shadow-lg rounded-3xl bg-white/50`,
    header__logo: `absolute top-6 left-6 h-20 w-20 animate-[spin_20s_linear_infinite]`,
    main: `mt-[140px] text-center`
};


const MainLayout: React.FC<IProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default MainLayout;