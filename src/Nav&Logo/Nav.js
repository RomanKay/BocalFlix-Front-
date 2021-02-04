import "./Nav.css";

function Nav() {
  return (
    
  <div className="navsContent">
       <img id="LogoHome"src="Images\bocalLogo.png" alt=""/>
     
   
      <ul id="navigation">
          <li> <a href="#">Acceuil</a> </li>
          <li> <a href="#">Film</a> </li>
          <li> <a href="#">Série</a> </li>
          <li> <a href="#">Manga</a> </li>
          
      </ul>
      <div id="Search">
          <input type="text" placeholder="Rechercher"/>
      </div>
      </div>
  

  )}

export default Nav;
