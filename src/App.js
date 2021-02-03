import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Import Formulaire Inscription//
import Inscription from "./PageInscription/Inscription";
// Import  pour la page de co //
import BackgroundLogin from "./LoginPage/BackgroundLogin.js";
import LogoBocal from "./LoginPage/LogoBocal.js";
import LoginForm from "./LoginForm.js";

function App() {
  return (
    <div className="App">
      <BackgroundLogin />
      <LoginForm />
      <LogoBocal />

      <header className="AppHeader">{/*<Inscription></Inscription>*/}</header>
    </div>
  );
}

export default App;
