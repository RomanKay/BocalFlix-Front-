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
        id="showMod"
        onHide={function () {
          setShowModal(false);
        }}
        show={showModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="closeModal" closeButton>
          <Modal.Title id="topModal">
            <img src="Images/Card/arrow.jpg" alt="" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer id="svgModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-play-circle"
            className="svgPlay"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-plus-circle"
            viewBox="0 0 16 16"
            className="svgAdd"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-heart"
            viewBox="0 0 16 16"
            className="svgLove"
          >
            <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FilmSelect;
