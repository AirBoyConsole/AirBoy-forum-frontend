import React from "react";
import styles from "./styles.module.scss";
import ArticleModel from "../../../infra/http/httpClient/model/Article.model";
import ImageLoader from "../../utils/ImageLoader";

interface SearchArticleProps {
    article: ArticleModel;
}

function SearchArticle({article}: SearchArticleProps): JSX.Element {

    return (
        <div className={styles.box}>
            <div className={styles.image}
                 style={{backgroundImage: `url(${ImageLoader.load(article.image_url)})`}} />
            <div className={styles.info}>
                <h3>{article.title}</h3>
                <p>{article.tags.map((x,i) => i < 3 ? x + ", " : "")}</p>
            </div>
        </div>
    );
}

export default SearchArticle;
