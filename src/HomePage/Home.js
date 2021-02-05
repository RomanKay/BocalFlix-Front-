// Import Css
import "./home.css";

import Nav from "../Nav&Logo/Nav.js";
import Slider from "../Carousel/Carousel";
import FilmSelect from "../Card/Card.js";
import { Form } from "react-bootstrap";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="header">
      <Nav />
      <Slider />
      <FilmSelect />
      <Footer />
    </div>
  );
}

export default Home;
