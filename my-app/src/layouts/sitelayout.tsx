import { Header} from "../components/organisms";

interface IProps {
  children: JSX.Element
}

export const Sitelayout: React.FC<IProps> = ( { children } ) => {
  return ( 
    <>
      <header>
        <Header />
      </header>
      <main>
      </main>
      <footer>

      </footer>
    </>
  )
}