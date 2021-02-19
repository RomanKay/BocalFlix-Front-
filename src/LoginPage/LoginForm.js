import "./LoginForm.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";

/* Variable d'état */

//Formulaire
function FormLog(props) {
  const history = useHistory();
  let [newCo, setCo] = useState({
    mail: "",
    password: "",
  });

  // Récupération des données UserLogin //
  async function postloginData(e) {
    e.preventDefault();
    const options = {
      method: "POST",
      body: JSON.stringify(newCo),
      headers: { "content-type": "application/json" },
    };

    // Attente de la réponse du back //

    const response = await fetch("http://localhost:8000/login", options);
    const responseData = await response.json();
    console.log(responseData);
    history.push("/home");
  }

  //Mise à jour des users
  function handleInput(e) {
    setCo({ ...newCo, [e.target.name]: e.target.value });
    console.log(e.target.value);
  }
  // Fonction s'inscrire
  function Subscribe(e) {
    e.preventDefault();
    if (
      (newCo.password, newCo.mail != "") &
      (newCo.password, newCo.mail != undefined)
    ) {
      props.history.push("/");
    } else {
      alert("Remplir tout les champs");
    }
  }

  return (
    <div className="content">
      <div id="FlixLogo">
        <img src="Images\bocalLogo.png" alt="" />
      </div>
      <div className="content-box">
        <form action="">
          <h2 className="TitleForm">S'identifier</h2>

          <input
            type="text"
            className="inP"
            name="mail"
            onChange={handleInput}
            value={newCo.mail}
            placeholder="Entrez votre email"
          />
          <input
            className="inP"
            type="password"
            name="pass"
            onChange={handleInput}
            value={newCo.pass}
            placeholder="Entrez votre mot de passe"
          />
          <input
            className="inP"
            type="submit"
            value="connexion"
            onClick={postloginData}
          />
          <span className="box">
            <input type="checkbox" id="Save" />
            <label htmlFor="" id="remember">
              Se souvenir de moi
            </label>
          </span>

          <p className="Visite">
            Première visite sur Bocalflix?{" "}
            <Link to="/inscription">S'inscrire</Link>
          </p>
          <div id="Social">
            <img src="Images/Social/facebook.png" alt="" />
            <p>
              <a href="#">Se connecter via Facebook</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default FormLog;
