import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import Formulaire Inscription//
import Inscription from "./PageInscription/Inscription";
// Import Page de co //
import LoginForm from "./LoginPage/LoginForm.js";
import Home from "./HomePage/Home";
import Iron from "./iron/iron.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginForm} />
        <Route path="/inscription" exact component={Inscription} />
        <Route path="/home" exact component={Home} />

        <Route path="*" exact component={Iron}>
          <Iron />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
