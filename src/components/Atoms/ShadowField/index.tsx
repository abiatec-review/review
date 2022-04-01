import { IShadowField } from 'Atoms/types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { hideModal } from 'redux&saga/actions/modalActions';
import { shadowFieldStyles } from './styles.tailwind';

const ShadowField: React.FC<IShadowField> = ({ isVisible }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(hideModal());
  };

  return (
    <div className={`${shadowFieldStyles} ${isVisible ? '' : 'hidden'}`} role="main" onMouseDown={handleClick} />
  );
};

export default ShadowField;
