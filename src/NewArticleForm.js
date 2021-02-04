/**
 * NewArticleForm.js - Composant formulaire
 */

/* Imports */
import { useState } from "react";
import "./newArticleForm.css";

/**
 * Composant formulaire de nouvel article
 */
function NewArticleForm(props) {
    /* Variable d'état */
    let [newArticle, setNewArticle] = useState({
        title: "",
        author: "",
        date: "",
        content: "",
    });

    /**
     * Mise à jour du nouvel article
     * @param {*} e
     */
    function handleInput(e) {
        setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
    }

    /**
     * Validation du formulaire
     * @param {*} e
     */
    function validateForm(e) {
        e.preventDefault();
        props.addArticle(newArticle);
        setNewArticle({ title: "", author: "", date: "", content: "" });
    }

    return (
        <form>
            <label htmlFor="title">Titre:</label>
            <input
                id="title"
                type="text"
                name="title"
                onChange={handleInput}
                value={newArticle.title}
            />

            <br />

            <label htmlFor="author">Auteur:</label>
            <input
                id="author"
                type="text"
                name="author"
                onChange={handleInput}
                value={newArticle.author}
            />

            <br />

            <label htmlFor="date">Date:</label>
            <input
                id="date"
                type="date"
                name="date"
                onChange={handleInput}
                value={newArticle.date}
            />

            <br />

            <label htmlFor="content">Article</label>
            <textarea
                id="content"
                name="content"
                onChange={handleInput}
                value={newArticle.content}
            ></textarea>

            <br />

            <button onClick={validateForm}>Valider</button>
        </form>
    );
}

export default NewArticleForm;
