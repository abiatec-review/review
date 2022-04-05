import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { getPictures } from 'redux/actions/pictures';


const SearchInput: React.FC = () => {

    const dispatch = useDispatch();

    const onSearchChange = debounce((e) => {
        dispatch(getPictures(''));
    }, 1000);

    return (
        <div className='flex justify-center items-center' >
            <input className={'h-8 text-2xl border border-black mr-4'}
                onChange={onSearchChange} />
        </div>
    );
};

export default SearchInput;