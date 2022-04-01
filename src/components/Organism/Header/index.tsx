import { SubmitBlock } from 'components/Molecules';
import React from 'react';

const Header: React.FC = () => {
  console.log('Header');
  return (
    <div className="shadow-3xl m-10 p-5 rounded-full">
      <SubmitBlock />
    </div>
  );
};

export default Header;
