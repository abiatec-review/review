
import { useCallback, useState } from 'react';

import { useDispatch } from 'react-redux';
import Button from "../Button";


interface IProps {
    onSearch: any
}

const SearchInput: React.FC<IProps> = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const onSearchChange = useCallback((e) => {
      setName(e.target.value)
  }, []);

  const onSubmit = useCallback(() => {
    dispatch({type: 'FETCH_IMAGES', payload: name });
  }, [name]);

    const onKeyPressHandler = (e: any) => {
        if (e.charCode === 13) {
            onSubmit();
        }
    }

  return (
    <div className="flex justify-center items-center" >
      <input value={name} className= {'h-8 text-2xl border border-black mr-4'}
      onChange={onSearchChange} onKeyPress={onKeyPressHandler} />
      <Button onClick={onSubmit}>Submit</Button>
    </div>
  );
};

export default SearchInput;