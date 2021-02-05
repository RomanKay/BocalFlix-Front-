import "./FilmSelect.css";
import Row from "react-bootstrap/Row";
import FilmCard from "./Card.js";
import { movies } from "../movies.json";
import { series } from "../movies.json";

function FilmSelect() {
  function renderFilmCards() {
    return movies.map(function (movie) {
      return <FilmCard img={movie.img} />;
    });
  }
  function renderSerieCards() {
    return series.map(function (serie) {
      return <FilmCard img={serie.img} />;
    });
  }
  return (
    <div className="Content">
      <h2 className="Categorie">Film</h2>

      <Row>{renderFilmCards()}</Row>
      <h2 className="Categorie">Serie</h2>
      <Row>{renderSerieCards()}</Row>
    </div>
  );
}

export default FilmSelect;
