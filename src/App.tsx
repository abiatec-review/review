import "./App.css";

import { MainLayout } from "./layouts/MainLayoute";
import { MainContent } from "./components/Organismes/MainContent";

const App: React.FC= () => {
  return (
    <div className="App">
      <MainLayout>
        <MainContent />
      </MainLayout>
    </div>
  )
}

export default App;
