import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FetchCharacters } from '../../../store/actions/CharacterActions';
import Input from '../../atoms/Input/Input';
// import { FetchCharacters, SaveCharacterName } from '../../../store/actions/CharacterActions'

const SearchInput = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (evt: any) => { // TODO: Fix type
    setSearchQuery(evt.target.value);
    dispatch(FetchCharacters(evt.target.value));
    dispatch({ type: 'SAVE_CHARACTER_NAME', payload: evt.target.value });
  };

  return (
    <div>
      <Input value={searchQuery} handleChange={handleInputChange} />
    </div>
  );
};

export default SearchInput;