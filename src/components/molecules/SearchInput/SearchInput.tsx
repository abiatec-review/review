import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useDebounce from '../../../hooks/useDebounce.js';
import { FetchCharacters, SaveCharacterName } from '../../../store/actions/CharacterActions';
import { RootReducer } from '../../../store/reducers/index';
import Input from '../../atoms/Input/Input';
// import { FetchCharacters, SaveCharacterName } from '../../../store/actions/CharacterActions'

const SearchInput = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const searchString = useDebounce(searchQuery, 500); // TODO: Change that custom hook to useDeferredValue
  const isMounted = useRef(false);
  const pageNumber = useSelector((state: RootReducer) => state.characters.page);

  const handleInputChange = (evt: any) => { // TODO: Fix type
    setSearchQuery(evt.target.value);
  };

  useEffect(() => {
    if (isMounted.current) {
      dispatch(FetchCharacters({ searchString, pageNumber }));
      dispatch(SaveCharacterName(searchQuery));
    } else {
      isMounted.current = true;
    }
  }, [searchString]);

  return (
    <div>
      <Input value={searchQuery} handleChange={handleInputChange} />
    </div>
  );
};

export default SearchInput;