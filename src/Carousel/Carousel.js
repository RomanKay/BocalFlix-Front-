// Import Css
import "./carousel.css";
import Carousel from "react-bootstrap/Carousel";
import horror from "./Images/dracula.jpg";
import Marvel from "./Images/marvel.jpg";
import StarWars from "./Images/Star_Wars.svg";
function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={horror} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Marvel} alt="Third slide" />

        <Carousel.Caption>
          <p>Découvrez la licence Marvel.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={StarWars} alt="Third slide" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
