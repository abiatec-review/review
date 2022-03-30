import React from 'react';
import HeaderBlock from '../../components/Molecules/HeaderBlock';
interface IProps {
  children: JSX.Element
  color?: string
  font?: string
}
export const MainLayout:React.FC<IProps> = ({children, color, font}) => {
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