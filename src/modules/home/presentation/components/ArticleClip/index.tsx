import React from "react";
import styles from "./styles.module.scss";
import ArticleModel from "../../../../../shared/infra/http/httpClient/model/Article.model";
import ImageLoader from "../../../../../shared/presentation/utils/ImageLoader";

interface ArticleClipProps {
    children: ArticleModel;
}

function ArticleBox({children}: ArticleClipProps): JSX.Element {
    return (
        <div className={styles.box}>
            <div className={styles.image}
                 style={{backgroundImage: `url(${ImageLoader.load(children.image_url)})`}} />
            <div className={styles.content}><h3>{children.title}</h3></div>
        </div>
    );
}

export default ArticleBox;
