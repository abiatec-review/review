import React, { SetStateAction, useEffect, useState } from 'react';
import { defaultActiveLoginTab } from '../../../../utils/constants';
import Tabs from '../../Tabs/Tabs';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

interface AuthModalProps {
  setIsModalVisible: React.Dispatch<SetStateAction<boolean>>,
}

const AuthModal = (props: AuthModalProps) => {
  const { setIsModalVisible } = props;
  const [currentActiveTab, setCurrentActiveTab] = useState<string>('');

  const authTabs = [
    { name: 'Sign In' },
    { name: 'Sign Up' },
  ];

  useEffect(() => {
    setCurrentActiveTab(defaultActiveLoginTab);
  }, []);

  return (
    <div>
      <Tabs tabsControl={setCurrentActiveTab} currentActiveTab={currentActiveTab} availableTabs={authTabs} />
      <div className='contentWrapper'>
        {currentActiveTab === authTabs[0].name ? <SignIn setIsModalVisible={setIsModalVisible} /> : null}
        {currentActiveTab === authTabs[1].name ? <SignUp setIsModalVisible={setIsModalVisible} /> : null}
      </div>
    </div>
  );
};

export default AuthModal;