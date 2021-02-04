{
  /*import Forms from "react-bootstrap/Button";


  /*function Inscription() {
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-3">Fluid jumbo heading</h1>
      <p class="lead">Jumbo helper text</p>
      <hr class="my-2" />
      <p>More info</p>
      <p class="lead">
        <a
          class="btn btn-primary btn-lg"
          href="Jumbo action link"
          role="button"
        >
          Jumbo action name
        </a>
      </p>
    </div>
  </div>;
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Row";
import logo from "./Images/logo.png";
import background from "./Images/background.jpeg";
import "./inscription.css";

function Inscription() {
  return (
    <div>
      <div id="containerLogoF">
        <img id="inscriptionLogo" alt="Bocalflix" src={logo} />
        <Form.Group>
          <Col sm="12">
            <a>
              <Button
                id="buttonIdentity"
                href="#"
                className="justify-content-sm-center"
                type="submit"
              >
                S'identifier
              </Button>
            </a>
          </Col>
        </Form.Group>
      </div>
      <Form id="formInscriptionContent">
        <h2 className="inscriptionTitle">Informations personnels</h2>
        {/******** NOM - PRENOM *********/}
        <Form.Row className="justify-content-sm-center">
          <Col sm="4">
            <Form.Label>Nom : </Form.Label>
            <Form.Control placeholder="Votre nom..." />
          </Col>
          <Col sm="4">
            <Form.Label>Prénom: </Form.Label>
            <Form.Control placeholder="Votre prénom..." />
          </Col>
        </Form.Row>
        {/******** Email *********/}
        <Form.Row className="justify-content-sm-center">
          <Col sm="8">
            <Form.Group>
              <Form.Label>Email : </Form.Label>
              <Form.Control type="email" placeholder="Entrer votre email..." />
            </Form.Group>
          </Col>
        </Form.Row>
        {/******** MOT DE PASSE *********/}
        <Form.Row className="justify-content-sm-center">
          <Col sm="8">
            <Form.Group>
              <Form.Label>Mot de passe : </Form.Label>
              <Form.Control
                type="password"
                placeholder="Votre mot de passe..."
              />
            </Form.Group>
          </Col>
        </Form.Row>
        {/******** ABONNEMENT *********/}
        <Form.Row className="justify-content-sm-center">
          <Form.Group>
            <Form.Label className="labelIncription">Abonnements : </Form.Label>
            <Form.Row className="justify-content-sm-center">
              <Col>
                <Form.Check
                  type="radio"
                  label="Un écran - 9,90 €"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="Quatres écrans - 14,90 €"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Row>
          </Form.Group>
        </Form.Row>

        <h2 className="inscriptionTitle">Mode de paiement</h2>

        {/********  CARTE *********/}
        <Form.Row className="justify-content-sm-center">
          <Col sm="6">
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Type de carte :</Form.Label>
              <Form.Control as="select">
                <option>Visa</option>
                <option>MasterCard</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Form.Row>

        {/******** NUMERO CARTE *********/}
        <Form.Row className="justify-content-sm-center">
          <Col sm="6">
            <Form.Label>Numéro de carte : </Form.Label>
            <Form.Control placeholder="294465645..." />
          </Col>
          <Col sm="2">
            <Form.Label>CVV : </Form.Label>
            <Form.Control placeholder="294..." />
          </Col>
        </Form.Row>

        {/******** BOUTTON *********/}
        <Form.Row className="justify-content-sm-center">
          <Col sm="6">
            <Form.Group id="button">
              <Col sm="12">
                <Button className="justify-content-sm-center" type="submit">
                  S'inscrire
                </Button>
              </Col>
            </Form.Group>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
}

export default Inscription;
/*/
}
