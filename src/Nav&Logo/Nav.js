import "./Nav.css";

function Nav() {
  return (
    <div className="navsContent">
      <img id="LogoHome" src="Images\bocalLogo.png" alt="" />

      <ul id="navigation">
        <span className="Acceuil">
          {" "}
          <li>
            {" "}
            <a href="#">Acceuil</a>{" "}
          </li>{" "}
        </span>
        <li>
          {" "}
          <a href="#">Film</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Série</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Manga</a>{" "}
        </li>
      </ul>
      <div id="UserSection">
        <p className="User">Roman</p>
        <img src="Images\UserIcon\user.1.png" alt=""/>
      </div>
    </div>
  );
}

export default Nav;
