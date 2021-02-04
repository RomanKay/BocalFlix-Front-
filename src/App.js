import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Import Formulaire Inscription//
import Inscription from "./PageInscription/Inscription";
// Import Page de co //
import LogoBocal from "./LoginPage/LogoBocal.js";
import BackgroundLogin from "./LoginPage/BackgroundLogin.js";
import LoginForm from "./LoginPage/LoginForm.js";
// Import Page de co //

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <LogoBocal />
        <BackgroundLogin />
        <LoginForm />
        <Inscription />
      </header>
    </div>
  );
}

export default App;
