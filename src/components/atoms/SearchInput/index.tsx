import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';
import { getPictures } from 'redux/actions/pictures';
import { getUser } from 'redux/selectors/user';
import { useEffect, useRef } from 'react';

const styles = {
    search: `flex justify-center items-center`,
    search__input: `h-8 text-2xl border border-black mr-4`
};


export const SearchInput: React.FC = () => {
    const auth = useSelector(getUser);
    const inputRef= useRef<null | HTMLInputElement>(null);

    const dispatch = useDispatch();
    useEffect(() => {
        if((!auth || !auth.email) && inputRef.current){
            inputRef.current.value = '';
        }

    }, [auth]);
    useEffect(() => {
            dispatch(getPictures(''));
    }, []);

    const onSearchChange = debounce((e) => {
        dispatch(getPictures(e.target.value));
    }, 1000);

    return (
        <div className={styles.search}>
            <input className={styles.search__input}
                ref={inputRef}
                disabled={!auth || !auth.email}
                onChange={onSearchChange} />
        </div>
    );
};
