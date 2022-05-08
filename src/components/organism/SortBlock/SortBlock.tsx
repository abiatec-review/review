import React, { useState } from 'react';
import styles from './SortBlock.module.scss';
import Image from '../../atoms/Image/Image';
import UpArrow from '../../../assets/up-arrow.svg';
import DownArrow from '../../../assets/down-arrow.svg';
import { useDispatch } from 'react-redux';
import { SetSortState } from '../../../store/actions/CharacterActions';
import { Ascending, Descending } from '../../../utils/constants';

const SortBlock = () => {
  const [isAscendingSort, setIsAscendingSort] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(SetSortState(isAscendingSort ? Descending : Ascending));
    setIsAscendingSort(!isAscendingSort);
  };

  return (
    <div className={styles.sortWrapper}>
      <div className={styles.sortByNameWrapper} onClick={handleClick}>
        <Image className={styles.sortArrow} textAlt='sort' sourceToImg={isAscendingSort ? UpArrow : DownArrow} />
        <div>Sort by Name</div>
      </div>
    </div>
  );
};

export default SortBlock;