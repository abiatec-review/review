import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../../firebase';
import useDebounce from '../../../hooks/useDebounce.js';
import { FetchCharacters, SaveCharacterName } from '../../../store/actions/CharacterActions';
import { RootReducer } from '../../../store/reducers/index';
import Input from '../../atoms/Input/Input';

const SearchInput = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const searchString = useDebounce(searchQuery, 500);
  const isMounted = useRef(false);
  const pageNumber = useSelector((state: RootReducer) => state.characters.page);
  const genderFilterState = useSelector((state: RootReducer) => state.characters.genderFilter);
  const statusFilterState = useSelector((state: RootReducer) => state.characters.statusFilter);

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser !== null && !isAuth) {
      setIsAuth(!!currentUser);
    }
  });

  const handleInputChange = (evt: any) => {
    setSearchQuery(evt.target.value);
  };

  useEffect(() => {
    if (isMounted.current && searchString) {
      dispatch(FetchCharacters({ searchString, pageNumber, statusFilterState, genderFilterState }));
      dispatch(SaveCharacterName(searchQuery));
    } else {
      isMounted.current = true;
    }
  }, [searchString, statusFilterState, genderFilterState]);

  return (
    <div>
      <Input disabled={!isAuth} value={searchQuery} handleChange={handleInputChange} />
    </div>
  );
};

export default SearchInput;