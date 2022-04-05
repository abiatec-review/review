import { IShadowField } from 'Atoms/types';
import React from 'react';
import { shadowFieldStyles } from './styles.tailwind';

const ShadowField: React.FC<IShadowField> = ({ isVisible, closeModalFunction }) => (
  <div className={`${shadowFieldStyles} ${isVisible ? '' : 'hidden'}`} role="main" onMouseDown={closeModalFunction} />
);

export default ShadowField;
