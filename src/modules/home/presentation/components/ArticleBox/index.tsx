import React from "react";
import styles from "./styles.module.scss";
import ArticleModel from "../../../../../shared/infra/http/httpClient/model/Article.model";
import ImageLoader from "../../../../../shared/presentation/utils/ImageLoader";
import {Link} from "react-router-dom";

interface ArticleBoxProps {
    children: ArticleModel;
}


function ArticleBox({children}: ArticleBoxProps): JSX.Element {
    return (
        <Link to={`/article/${children.id}`} className={styles.link}>
            <div className={styles.box}>
                <div className={styles.image}
                     style={{backgroundImage: `url(${ImageLoader.load(children.image_url)})`}} />
                <div>
                    <p>{children.tags.map((x,i) => i < 3 ? " " + x : "").toString().slice(0, -1)}</p>
                    <h3>{children.title}</h3>
                </div>
            </div>
        </Link>
    );
}

export default ArticleBox;
