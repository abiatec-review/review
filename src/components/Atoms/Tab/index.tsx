/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';

import { ITab } from 'Atoms/types';

import { tabStyles } from './styles.tailwind';

export const Tab: React.FC<ITab> = ({ clickHandler, text, active }) => (
  <div
    onClick={clickHandler}
    className={`${tabStyles} ${active ? 'shadow-blue-300' : ''}`}
    role="button"
  >
    {text}
  </div>
);
