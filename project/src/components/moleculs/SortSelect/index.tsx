import React, { FC } from 'react';

import { useDispatch } from 'react-redux';

import { sortCardsAction } from '../../../redux/actions/card';
import { useTypedSelector } from '../../../utils/hooks/useTypedSelector';
import { Option } from '../../atoms/Option';

const sortTypes = [
  { type: 'nameA', value: 'Name Ascending' },
  { type: 'nameD', value: 'Name Descending' },
];

const SortSelect: FC = () => {
  const { sort } = useTypedSelector((state) => state.cards);
  const dispatch = useDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(sortCardsAction(e.target.value));
  };

  return (
    <select value={sort} onChange={changeHandler}>
      {sortTypes.map(({ type, value }) => (
        <Option
          value={value}
          type={type}
          key={type}
        />
      ))}
    </select>
  );
};

export default SortSelect;
