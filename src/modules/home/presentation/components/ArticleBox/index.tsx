import React from "react";
import styles from "./styles.module.scss";
import ArticleModel from "../../../../../shared/infra/http/httpClient/model/Article.model";
import ImageLoader from "../../../../../shared/presentation/utils/ImageLoader";

interface ArticleBoxProps {
    children: ArticleModel;
}


function ArticleBox({children}: ArticleBoxProps): JSX.Element {
    return (
        <div className={styles.box}>
            <img src={ImageLoader.load(children.download_url)} />
            <div>
                <p>Category</p>
                <h3>{children.title}</h3>
            </div>
        </div>
    );
}

export default ArticleBox;
