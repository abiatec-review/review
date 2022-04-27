import React from 'react';

interface IProps {
  children: JSX.Element
}

const MainLayout:React.FC<IProps> = ({children}) => {
    return (
      <>
        <main>
          {children}
        </main>
        <footer></footer>
      </>
    )
}

export default MainLayout;