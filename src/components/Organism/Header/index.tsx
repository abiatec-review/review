import { SubmitBlock } from 'components/Molecules';
import React from 'react';

const Header: React.FC = () => {
  console.log('Header');
  return (
    <div className="shadow-2xl mb-10 p-5 rounded">
      <SubmitBlock />
    </div>
  );
};

export default Header;
