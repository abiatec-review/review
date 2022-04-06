import React from 'react';

import { SubmitBlock } from 'components/Molecules';

const Header: React.FC = () => (
  <div className="shadow-3xl m-10 p-5 rounded-full hover:shadow-cyan-300">
    <SubmitBlock />
  </div>
);

export default Header;
