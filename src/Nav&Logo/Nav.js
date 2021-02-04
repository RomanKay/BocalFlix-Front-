import "./Nav.css";

function Nav() {
  return <div className="nav">
      <img src="Images\bocalLogo.png" alt=""/>
      <ul className="nav-links">
          <li> <a href="#">Acceuil</a> </li>
          <li> <a href="#">Film</a> </li>
          <li> <a href="#">Série</a> </li>
          <li> <a href="#">Documentaire</a> </li>
      </ul>
      <div className="Search">
          <input type="text" placeholder="recherche"/>
      </div>
  </div>;
}

export default Nav;
