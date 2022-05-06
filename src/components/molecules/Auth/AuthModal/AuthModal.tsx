import React, { SetStateAction, useState } from 'react';
import Tabs from '../../Tabs/Tabs';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

const AuthModal = (props: { modalControl: React.Dispatch<SetStateAction<boolean>> }) => {
  const { modalControl } = props;
  const [currentActiveTab, setCurrentActiveTab] = useState<string>('');

  const authTabs = [
    { name: 'Sign In' },
    { name: 'Sign Up' },
  ];

  return (
    <div>
      <Tabs tabsControl={setCurrentActiveTab} currentActiveTab={currentActiveTab} availableTabs={authTabs} />
      <div className='contentWrapper'>
        {currentActiveTab === authTabs[0].name ? <SignIn modalControl={modalControl} /> : null}
        {currentActiveTab === authTabs[1].name ? <SignUp modalControl={modalControl} /> : null}
      </div>
    </div>
  );
};

export default AuthModal;