import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { getPictures } from 'redux/actions/pictures';

const styles = {
    search: `flex justify-center items-center`,
    search__input: `h-8 text-2xl border border-black mr-4`
};


export const SearchInput: React.FC = () => {

    const dispatch = useDispatch();

    const onSearchChange = debounce((e) => {
        dispatch(getPictures(e.target.value));
    }, 1000);

    return (
        <div className={styles.search}>
            <input className={styles.search__input}
                onChange={onSearchChange} />
        </div>
    );
};
