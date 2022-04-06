import React, { useRef } from 'react';

import { useDispatch } from 'react-redux';

import { Button, Input } from 'components/Atoms';
import { getCards } from 'redux&saga/actions/cardsActions';

export const SubmitBlock: React.FC = () => {
  const dispatch = useDispatch();

  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  const validateCharName = (name: string) => name.toLowerCase();

  const clickHandler = () => {
    dispatch(getCards(validateCharName(inputRef?.current?.value ? inputRef.current.value : '')));
  };

  return (
    <div className="grid justify-center">
      <Input reference={inputRef} />
      <Button clickHandler={clickHandler} text="Click" />
    </div>
  );
};
