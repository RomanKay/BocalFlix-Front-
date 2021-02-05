// Import Css
import "./carousel.css";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item className="slider horror">
        <Carousel.Caption />
      </Carousel.Item>

      <Carousel.Item className="slider marvel">
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="slider starwars">
        <Carousel.Caption />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
