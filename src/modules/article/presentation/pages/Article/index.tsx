import React, {useEffect} from "react";
import {useParams} from "react-router";
import {useGetArticle} from "../../hooks/useGetArticle";
import styles from "./styles.module.scss";
import ImageLoader from "../../../../../shared/presentation/utils/ImageLoader";


function Article(): JSX.Element {

    const {id} = useParams();

    const {load, isLoading, article} = useGetArticle();

    useEffect(() => {
        if(id) {
            load(parseInt(id)).then();
        }
    }, []);

    if (isLoading) {
        return(
            <main>article loading</main>
        );
    }

    if (article == null) {
        return(
            <main>article null</main>
        );
    }

    return (
        <main className={styles.main}>
            <div className={styles.image} style={{backgroundImage: `url(${ImageLoader.load(article.image_url)})`}}></div>
            <h1 className={styles.title}>{article.title}</h1>
            <div className={styles.content} dangerouslySetInnerHTML={{__html: article.content}}></div>
            <a href={ImageLoader.load(article.download_url)} download={article.title} target="_blank">
                <p>Download content</p>
            </a>
            <div>Author: {article.author.username}</div>
            <p>Tags:</p>
            <div className={styles.tags}>
                {article.tags.map((x, i) => <div className={styles.tag} key={i}>{x}</div>)}
            </div>
        </main>

    );
}

export default Article;
