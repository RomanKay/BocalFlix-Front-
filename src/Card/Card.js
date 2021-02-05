import "./Card.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function FilmCard(props) {
  return (
    <div>
      <Col sm="6" md="4" lg="3" xl="3">
        <Card className="CardsEffect">
          <Card.Img
            className="BackImg"
            id="ImgCard"
            src={"Images/Card/" + props.img}
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Img
              className="LogoBocals"
              id="ImgCard"
              src="Images/bocalLogo.png"
              alt="Card image"
            />
          </Card.ImgOverlay>
        </Card>
      </Col>
    </div>
  );
}

export default FilmCard;
