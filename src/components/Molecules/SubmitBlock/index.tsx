import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getCards } from '../../../redux/actions/cardsAction';
import { Button, Input } from '../../Atoms';

const SubmitBlock: React.FC = () => {
  const dispatch = useDispatch();

  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  const clickHandler = () => {
    if (inputRef.current != null && inputRef.current.value != null) {
      dispatch(getCards(inputRef.current.value));
    }
  };

  console.log('SubmitBlock');
  return (
    <div className="grid justify-center">
      <Input reference={inputRef} />
      <Button clickHandler={clickHandler} />
    </div>
  );
};

export default SubmitBlock;
