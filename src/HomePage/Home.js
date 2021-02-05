// Import Css
import "./home.css";

import Nav from "../Nav&Logo/Nav.js";
import Slider from "../Carousel/Carousel";
import FilmSelect from "../Card/Card.js";

function Home() {
  return (
    <div className="header">
      <Nav />
      <Slider />
      <FilmSelect />
    </div>
  );
}

export default Home;
