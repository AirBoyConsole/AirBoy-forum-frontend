import React, {Dispatch, SetStateAction} from "react";
import styles from "./styles.module.scss";
import ArticleModel from "../../../infra/http/httpClient/model/Article.model";
import ImageLoader from "../../utils/ImageLoader";
import {Link} from "react-router-dom";

interface SearchArticleProps {
    article: ArticleModel;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

function SearchArticle({article, setOpen}: SearchArticleProps): JSX.Element {

    return (
        <Link to={`article/${article.id}`} onClick={()=>setOpen(false)}>
            <div className={styles.box}>
                <div className={styles.image}
                     style={{backgroundImage: `url(${ImageLoader.load(article.image_url)})`}} />
                <div className={styles.info}>
                    <h3>{article.title}</h3>
                    <p>{article.tags && article.tags.map((x,i) => i < 3 ? x + ", " : "")}</p>
                </div>
            </div>
        </Link>
    );
}

export default SearchArticle;
