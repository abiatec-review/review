interface IProps {
  children: JSX.Element
}

export const Sitelayout: React.FC<IProps> = ( { children } ) => {
  return ( 
    <>
      <header>
        
      </header>
      <main>
        {children}
      </main>
      <footer>

      </footer>
    </>
  )
}