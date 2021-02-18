import "./Card.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function FilmCard(props) {
  return (
    <Col id="#BoxCards" sm="4" md="2" lg="2" xl="2">
      <Card
        onClick={() => {
          props.openModal(props.data);
        }}
        className="CardsEffect"
      >
        <Card.Img
          className="BackImg"
          id="ImgCard"
          src={"http://localhost:8000" + props.data.image}
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
  );
}

export default FilmCard;
