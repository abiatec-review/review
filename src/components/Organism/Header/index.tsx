import React from 'react';
import { SubmitBlock } from '../../Molecules';

const Header: React.FC = () => {
  console.log('Header');
  return (
    <div className="shadow-2xl mb-10 p-5">
      <SubmitBlock />
    </div>
  );
};

export default Header;
