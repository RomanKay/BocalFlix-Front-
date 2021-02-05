import "./Card.css";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function FilmSelect() {
  return (
    <div className="Content">
      <h2 className="Film">Film</h2>
      <Row>
        <Col sm="6" md="4" lg="3" xl="3">
          <Card className="bg-dark text-white">
            <Card.Img
              className="BackImg"
              id="ImgCard"
              src="Images/Card/img1.jpg"
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
        <Col sm="6" md="4" lg="3" xl="3">
          <Card className="bg-dark text-white">
            <Card.Img
              className="BackImg"
              id="ImgCard"
              src="Images/Card/img1.jpg"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Img
                id="LogoBocal"
                id="ImgCard"
                src="Images/bocalLogo.png"
                alt="Card image"
              />

              <Card.Text></Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col sm="6" md="4" lg="3" xl="3">
          <Card className="bg-dark text-white">
            <Card.Img
              className="BackImg"
              id="ImgCard"
              src="Images/Card/img1.jpg"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Img
                id="LogoBocal"
                id="ImgCard"
                src="Images/bocalLogo.png"
                alt="Card image"
              />

              <Card.Text></Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col sm="6" md="4" lg="3" xl="3">
          <Card className="bg-dark text-white">
            <Card.Img
              className="BackImg"
              id="ImgCard"
              src="Images/Card/img1.jpg"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Img
                id="LogoBocal"
                id="ImgCard"
                src="Images/bocalLogo.png"
                alt="Card image"
              />

              <Card.Text></Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default FilmSelect;
