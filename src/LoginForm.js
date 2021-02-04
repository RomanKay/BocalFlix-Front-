import "./LoginForm.css";

function FormLog() {
  return (
    <div className="content">
      <form action="">
        <h2 className="TitleForm">S'identifier</h2>

        <input
          type="text"
          className="inp"
          name="mail"
          id=""
          placeholder="Entrez votre email"
        />
        <input
          type="text"
          name="Mot de passe"
          placeholder="Entrez votre mot de passe"
        />
        <input type="submit" value="connexion" />
        <span className="box">
          <input className="LogInp" type="checkbox" id="save" />
          <label htmlFor="save">Se souvenir de moi</label>
        </span>

        <p className="Visite">
          Première visite sur Bocalflix? <a href="#">S'incrire</a>
        </p>
        <div id="Social">
          <img src="Images/Social/facebook.png" alt="" />
          <p>
            <a href="#">Se connecter via Facebook</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default FormLog;
