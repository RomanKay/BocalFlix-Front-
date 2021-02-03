import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Import Formulaire Inscription//
import Inscription from "./PageInscription/Inscription";

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <Inscription></Inscription>
      </header>
    </div>
  );
}

export default App;
