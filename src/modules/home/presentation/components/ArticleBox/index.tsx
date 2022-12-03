import React from "react";
import styles from "./styles.module.scss";
import sunsetImage from "../../../../../assets/sunset.jpg";

function ArticleBox(): JSX.Element {
    return (
        <div className={styles.box}>
            <img src={sunsetImage} />
            <div>
                <p>Category</p>
                <h3>Incredibly long article title</h3>
            </div>
        </div>
    );
}

export default ArticleBox;
