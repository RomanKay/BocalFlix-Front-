import "./iron.css";
import { Link } from "react-router-dom";

function Iron() {
  return (
    <div className="error">
      <div>
        <h1 id="Erreur">Erreur 404</h1>
        <h2 id="IronT">Vous n'auriez jamais dû venir par ici....</h2>
        <p className="Introuvable">
          la page que vous recherchez semble introuvale
        </p>
        <input
          className="Ibutton"
          type="submit"
          value="Retour vers l'acceuil"
        />
      </div>
    </div>
  );
}

export default Iron;
