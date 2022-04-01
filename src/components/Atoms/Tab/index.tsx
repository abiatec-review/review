/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { ITab } from 'Atoms/types';
import { tabStyles } from './styles.tailwind';

const Tab: React.FC<ITab> = ({ clickHandler, text, active }) => {
  console.log('Tab');

  return (
    <div
      onClick={clickHandler}
      className={`${tabStyles} ${active ? 'shadow-blue-300' : ''}`}
      role="button"
    >
      {text}
    </div>
  );
};

export default Tab;
