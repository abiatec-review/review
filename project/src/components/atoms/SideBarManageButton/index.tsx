import React, { FC } from 'react';

import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import { SideBarManageButtonProps } from './type';

const styles = {
  manageButtonStyle: 'rounded-full bg-card-color fixed top-44 w-10 h-10 flex justify-center items-center cursor-pointer',
};

export const SideBarManageButton: FC<SideBarManageButtonProps> = ({ isOpenSideBar, manageHandler }) => (
  <div
    className={`${styles.manageButtonStyle} ${isOpenSideBar ? 'left-44' : 'left-10'}`}
    onClick={manageHandler}
  >
    {isOpenSideBar ? <FiArrowLeft /> : <FiArrowRight />}
  </div>
);
