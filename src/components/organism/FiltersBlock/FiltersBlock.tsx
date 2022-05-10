import React, { useEffect, useState } from 'react';
import { genderFilterValues, statusFilterValues } from './FilterValues';
import styles from './FiltersBlock.module.scss';
import { useDispatch } from 'react-redux';
import { SetGenderFilter, SetStatusFilter } from '../../../store/actions/CharacterActions';

const FiltersBlock = () => {
  const [genderFilter, setGenderFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const dispatch = useDispatch();

  const handleGenderFilter = (evt: any) => {
    setGenderFilter(evt.target.value);
    dispatch(SetGenderFilter(evt.target.value));
  };

  const handleStatusFilter = (evt: any) => {
    setStatusFilter(evt.target.value);
    dispatch(SetStatusFilter(evt.target.value));
  };

  useEffect(() => {
    dispatch(SetGenderFilter(''));
    dispatch(SetStatusFilter(''));
  }, []);

  return (
    <div className={styles.filtersWrapper}>
      <div className={styles.filters}>
        Gender:
        {genderFilterValues.map((current) => (
          <div key={current.value}>
            <label key={current.value}>{current.label}
            <input
                type="radio"
                name="gender"
                value={current.value}
                checked={genderFilter === current.value}
                onChange={(evt) => handleGenderFilter(evt)}
                />
            </label>
          </div>
        ))}
      </div>
      <div className={styles.filters}>
        Status:
        {statusFilterValues.map((current) => (
          <div key={current.value}>
            <label key={current.value}>{current.label}
            <input
                type="radio"
                name="status"
                value={current.value}
                checked={statusFilter === current.value}
                onChange={handleStatusFilter}
                />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiltersBlock;