import "./FilmSelect.css";
import Row from "react-bootstrap/Row";
import FilmCard from "./Card.js";
import { movies } from "../movies.json";

function FilmSelect() {
  function renderFilmCards() {}
  return (
    <div className="Content">
      <h2 className="Categorie">Film</h2>
      <Row>
        <FilmCard img="img1.jpg" />
        <FilmCard img="img1.jpg" />
        <FilmCard img="img1.jpg" />
      </Row>
    </div>
  );
}

export default FilmSelect;
