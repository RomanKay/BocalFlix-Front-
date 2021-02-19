import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Row";
import logo from "./Images/logo.png";
import { useHistory } from "react-router-dom";
import { useState } from "react";

import "./inscription.css";

function Inscription(props) {
  let history = useHistory();

  // States //
  /* Variable d'état */
  let [newUser, setUser] = useState({
    lastName: "",
    firstName: "",
    mail: "",
    pass: "",
    subscription: "",
    cardType: "",
    cardNumber: "",
    cvv: "",
  });

  // Envoie des données User //
  async function sendUserData(e) {
    e.preventDefault();
    const options = {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { "content-type": "application/json" },
    };

    const response = await fetch("http://localhost:8000/subscribe", options);
    const responseData = await response.json();
    console.log(responseData);

    history.push("/");
  }

  //Mise a jour des valeur user
  function handleInput(e) {
    setUser({ ...newUser, [e.target.name]: e.target.value });
    console.log(e.target.value);
  }

  // Fonction s'inscrire
  function Subscribe(e) {
    e.preventDefault();
    console.log(newUser);
    if (
      (newUser.lastName,
      newUser.firstName,
      newUser.pass,
      newUser.subscription,
      newUser.mail,
      newUser.carte,
      newUser.cardNumber,
      newUser.cvv != "") &
      (newUser.lastName,
      newUser.firstName,
      newUser.pass,
      newUser.subscription,
      newUser.mail,
      newUser.carte,
      newUser.cardNumber,
      newUser.cvv != undefined)
    ) {
      props.history.push("/");
    } else {
      alert("Vous n'avez pas remplie tous les champs");
    }
  }

  //Lien page login
  function LinkLoginPage(e) {
    e.preventDefault();
    props.history.push("/");
  }
  return (
    <div id="containerInscription">
      <div id="containerLogoF">
        <img id="inscriptionLogo" alt="Bocalflix" src={logo} />
        <Form.Group>
          <Col sm="12">
            <Button
              onClick={LinkLoginPage}
              type="submit"
              id="buttonIdentity"
              to="/"
            >
              S'identifier
            </Button>
          </Col>
        </Form.Group>
      </div>
      <Row id="rowForm" className="justify-content-sm-center">
        <Col xs={12} sm={8} md={8} lg={6} xl={4}>
          <Form id="formInscriptionContent">
            <h2 className="inscriptionTitle">Informations personnels</h2>
            {/******** NOM - PRENOM *********/}
            <Form.Row className="justify-content-sm-center">
              <Col xs={12} sm="4" xl={5}>
                <Form.Label>Nom : </Form.Label>
                <Form.Control
                  className="inputSubscribe"
                  type="text"
                  onChange={handleInput}
                  value={newUser.lastName}
                  name="lastName"
                  placeholder="Votre nom..."
                />
              </Col>
              <Col sm="4" xl={5}>
                <Form.Label>Prénom: </Form.Label>
                <Form.Control
                  className="inputSubscribe"
                  type="text"
                  value={newUser.firstName}
                  onChange={handleInput}
                  name="firstName"
                  placeholder="Votre prénom..."
                />
              </Col>
            </Form.Row>
            {/******** Email *********/}
            <Form.Row className="justify-content-sm-center">
              <Col sm="8" xl={10}>
                <Form.Group>
                  <Form.Label>Email : </Form.Label>
                  <Form.Control
                    className="inputSubscribe"
                    onChange={handleInput}
                    type="email"
                    value={newUser.mail}
                    name="mail"
                    placeholder="Entrer votre email..."
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            {/******** MOT DE PASSE *********/}
            <Form.Row className="justify-content-sm-center">
              <Col sm="8" xl={10}>
                <Form.Group>
                  <Form.Label>Mot de passe : </Form.Label>
                  <Form.Control
                    className="inputSubscribe"
                    value={newUser.pass}
                    onChange={handleInput}
                    name="pass"
                    type="password"
                    placeholder="Votre mot de passe..."
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            {/******** ABONNEMENT *********/}
            <Form.Row className="justify-content-sm-center">
              <Form.Group>
                <Form.Label className="labelIncription">
                  Abonnements :{" "}
                </Form.Label>
                <Form.Row className="justify-content-sm-center">
                  <Col>
                    <Form.Check
                      type="radio"
                      label="Un écran - 9,90 €"
                      name="subscription"
                      onChange={handleInput}
                      value="9.90€"
                      id="formHorizontalRadios1"
                    />
                    <Form.Check
                      type="radio"
                      label="Quatres écrans - 14,90 €"
                      name="subscription"
                      onChange={handleInput}
                      value="14.90€"
                      id="formHorizontalRadios2"
                    />
                  </Col>
                </Form.Row>
              </Form.Group>
            </Form.Row>

            <h2 className="inscriptionTitle">Mode de paiement</h2>

            {/********  CARTE *********/}
            <Form.Row className="justify-content-sm-center">
              <Col sm={6} xl={10}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>
                    Type de carte{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-credit-card-2-back"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                      <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                    </svg>
                  </Form.Label>
                  <Form.Control
                    name="cardType"
                    onChange={handleInput}
                    as="select"
                    className="inputSubscribe"
                  >
                    <option>Visa</option>
                    <option>Mastercard</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>

            {/******** NUMERO CARTE *********/}
            <Form.Row className="justify-content-sm-center">
              <Col sm="6" xl={7}>
                <Form.Label>Numéro de carte : </Form.Label>
                <Form.Control
                  className="inputSubscribe"
                  value={newUser.cardNumber}
                  type="number"
                  step="1"
                  max="9999999999999999"
                  onChange={handleInput}
                  name="cardNumber"
                  placeholder="294465645 ..."
                />
              </Col>
              <Col sm="2" xl={3}>
                <Form.Label>CVV : </Form.Label>
                <Form.Control
                  className="inputSubscribe"
                  value={newUser.cvv}
                  type="number"
                  step="1"
                  max="999"
                  onChange={handleInput}
                  name="cvv"
                  placeholder="294..."
                />
              </Col>
            </Form.Row>

            {/******** BOUTTON *********/}
            <Form.Row className="justify-content-sm-center">
              <Col xs={12} sm={8} md={8} lg={8} xl={11}>
                <Form.Group>
                  <Col sm="12" xl="12">
                    <Button
                      onClick={sendUserData}
                      id="buttonInscrire"
                      type="submit"
                      as="input"
                      value="S'inscrire"
                      className="justify-content-sm-center"
                    ></Button>
                  </Col>
                </Form.Group>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Inscription;
