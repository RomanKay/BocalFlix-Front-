import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Row";
import logo from "./Images/logo.png";

import { useState } from "react";

import "./inscription.css";

function Inscription(props) {
  /* Variable d'état */
  let [newUser, setUser] = useState({
    nom: "",
    prenom: "",
    mail: "",
    pass: "",
    carte: "",
    cvv: "",
  });

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
      (newUser.nom,
      newUser.prenom,
      newUser.pass,
      newUser.mail,
      newUser.carte,
      newUser.cvv != "") &
      (newUser.nom,
      newUser.prenom,
      newUser.pass,
      newUser.mail,
      newUser.carte,
      newUser.cvv != undefined)
    ) {
      props.history.push("/home");
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
                  value={newUser.nom}
                  name="nom"
                  placeholder="Votre nom..."
                />
              </Col>
              <Col sm="4" xl={5}>
                <Form.Label>Prénom: </Form.Label>
                <Form.Control
                  className="inputSubscribe"
                  type="text"
                  value={newUser.prenom}
                  onChange={handleInput}
                  name="prenom"
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
              <Col sm={6} xl={10}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Type de carte :</Form.Label>
                  <Form.Control as="select" className="inputSubscribe">
                    <option>Visa</option>
                    <option>MasterCard</option>
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
                  value={newUser.carte}
                  type="text"
                  onChange={handleInput}
                  name="carte"
                  placeholder="294465645..."
                />
              </Col>
              <Col sm="2" xl={3}>
                <Form.Label>CVV : </Form.Label>
                <Form.Control
                  className="inputSubscribe"
                  value={newUser.cvv}
                  type="text"
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
                      onClick={Subscribe}
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
