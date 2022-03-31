import React from 'react';
import HeaderBlock from '../../components/Molecules/HeaderBlock';
interface IProps {
  children: JSX.Element
}
export const MainLayout:React.FC<IProps> = ({children}) => {
    return (
      <>
        <HeaderBlock />
        <main>
          {children}
        </main>
        <footer></footer>
      </>
    )
}