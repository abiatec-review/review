import React, {
  FC, ChangeEvent, useState, useEffect,
} from 'react';

import { useDispatch } from 'react-redux';

import { fetchCardsAction } from '../../../redux/actions/card';
import { useDebouncing } from '../../../utils/hooks/useDebounce';
import { useTypedSelector } from '../../../utils/hooks/useTypedSelector';
import { Input } from '../../atoms';

const styles = {
  inputBlockStyle: 'mb-2',
};

const InputBlock: FC = () => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebouncing(value, 1000);
  const { filters } = useTypedSelector((state) => state.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    if (debouncedValue) {
      dispatch(fetchCardsAction({
        ...filters,
        name: debouncedValue,
      }));
    }
  }, [debouncedValue]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.inputBlockStyle}>
      <Input value={value} changeHandler={changeHandler} type="text" placeholder="Search Rick or Morty" />
    </div>
  );
};

export default InputBlock;
