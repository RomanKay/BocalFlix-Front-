import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Import Formulaire Inscription//
import Inscription from "./PageInscription/Inscription";
// Import Page de connexion //
import LoginPage from "./Loginpage.js";

function App() {
  return (
    <div className="App">
      <LoginPage />
      <header className="AppHeader">{/*<Inscription></Inscription>*/}</header>
    </div>
  );
}

export default App;
