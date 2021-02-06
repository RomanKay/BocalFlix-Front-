import "./FilmSelect.css";
import Row from "react-bootstrap/Row";
import FilmCard from "./Card.js";
import { movies } from "../movies.json";
import { series } from "../movies.json";
import { horrors } from "../movies.json";
import { marvel } from "../movies.json";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function FilmSelect() {
  let [showModal, setShowModal] = useState(false);

  function renderFilmCards() {
    return movies.map(function (movie) {
      return <FilmCard onClick={openModal} img={movie.img} />;
    });
  }
  function renderSerieCards() {
    return series.map(function (serie) {
      return <FilmCard onClick={openModal} img={serie.img} />;
    });
  }

  function renderHorrorCards() {
    return horrors.map(function (horror) {
      return <FilmCard onClick={openModal} img={horror.img} />;
    });
  }

  function renderMarvelCards() {
    return marvel.map(function (marvels) {
      return <FilmCard onClick={openModal} img={marvels.img} />;
    });
  }

  // Afficher Modal

  function openModal() {
    setShowModal(true);
  }

  return (
    <div className="Content">
      <h2 className="Categorie">Notre selection de film</h2>
      <Row id="BoxCards">{renderFilmCards()}</Row>

      <h2 className="Categorie">Nos series</h2>
      <Row id="BoxCards">{renderSerieCards()}</Row>

      <h2 className="Categorie">Notre categorie Horreur</h2>
      <Row id="BoxCards">{renderHorrorCards()}</Row>

      <h2 className="Categorie">Notre selection pour Marvel</h2>
      <Row id="BoxCards">{renderMarvelCards()}</Row>

      <Modal
        onHide={function () {
          setShowModal(false);
        }}
        show={showModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default FilmSelect;
