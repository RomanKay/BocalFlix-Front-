// Import Css
import "./home.css";

import Nav from "../Nav&Logo/Nav.js";
import Slider from "../Carousel/Carousel";

function Home() {
  return (
    <div className="header">
      <Nav />
      <Slider />
    </div>
  );
}

export default Home;
