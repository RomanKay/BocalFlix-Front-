/*
 * App.js - Composant principal
 */

/* Imports */
import { useState } from "react";
import Menu from "./Menu/Menu";
import Content from "./Content/Content";
import NewArticleForm from "./NewArticleForm/NewArticleForm";
import "./app.css";

/**
 * Composant App
 */
function App() {
    /* Variables d'état */
    const [articles, setArticles] = useState([]);
    const [showTitle, setTitleDisplay] = useState(false);

    /**
     * Rendu des articles
     */
    function renderArticles() {
        if (articles.length > 1) {
            return articles.map(function (article) {
                return (
                    <Content
                        title={article.title}
                        date={article.date}
                        author={article.author}
                    >
                        {article.content}
                    </Content>
                );
            });
        } else {
            return <p>Aucun article, publiez ;)</p>;
        }
    }

    /**
     * Ajouter un article
     * @param {*} newArticle
     */
    function addArticle(newArticle) {
        setArticles([...articles, newArticle]);
    }

    /**
     * Rendu du titre
     */
    function renderTitle() {
        if (showTitle === true) {
            return <h1>Mon titre qui peut se sacher</h1>;
        }
    }

    /**
     * Afficher ou masquer le titre
     */
    function toggleTitle() {
        setTitleDisplay(!showTitle);
    }

    return (
        <div id="mainContainer">
            <Menu />

            {renderTitle()}

            {renderArticles()}
            <NewArticleForm addArticle={addArticle} />

            <button onClick={toggleTitle}>Montrer le titre</button>
        </div>
    );
}

export default App;
