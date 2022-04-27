import React, { FC, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { fetchCardsAction, IFilters } from '../../../redux/actions/card';
import { useTypedSelector } from '../../../utils/hooks/useTypedSelector';
import {
  Button, CardTitle, Radio, Label,
} from '../../atoms';
import { FilterBlockProps } from './type';

const styles = {
  itemStyle: 'flex flex-col items-start mb-2',
  wrapperStyle: 'flex justify-between items-center',
};

const getFilterTypeData = (filters: IFilters, type: string): string | undefined => {
  switch (type) {
    case 'gender': return filters.gender;
    case 'status': return filters.status;
    case 'species': return filters.species;
  }
};

const FilterBlock: FC<FilterBlockProps> = ({ type, values }) => {
  const { filters } = useTypedSelector((state) => state.cards);
  const value = getFilterTypeData(filters, type) || '';
  const dispatch = useDispatch();

  const changeHandler = (radioValue: string) => () => {
    dispatch(fetchCardsAction({
      ...filters,
      [type]: radioValue,
    }));
  };

  const clickHandler = () => {
    dispatch(fetchCardsAction({
      ...filters,
      [type]: '',
    }));
  };

  return (
    <li className={styles.itemStyle}>
      <CardTitle title={type.toUpperCase()} />
      {values.map((item: string) => (
        <form className={styles.wrapperStyle} key={item}>
          <Radio
            type="radio"
            name={item}
            value={value}
            changeHandler={changeHandler(item)}
          />
          <Label label={item.toUpperCase()} />
        </form>
      ))}
      <Button title="Reset" clickHandler={clickHandler} />
    </li>
  );
};

export default FilterBlock;
