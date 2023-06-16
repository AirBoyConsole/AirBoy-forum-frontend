import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router";
import {useGetArticle} from "../../hooks/useGetArticle";
import styles from "./styles.module.scss";
import ImageLoader from "../../../../../shared/presentation/utils/ImageLoader";
import {Link} from "react-router-dom";
import {UserContext} from "../../../../../shared/presentation/context/UserContext";
import {Download} from "@carbon/icons-react";
import PortalReactDOM from "react-dom";
import Search from "../../../../../shared/presentation/components/Search";
import DeleteArticleModalComponent from "../../components/DeleteArticleModalComponent";
import {useDeleteArticle} from "../../hooks/useDeleteArticle";


function Article(): JSX.Element {

    const {id} = useParams();

    const {load, isLoading, article} = useGetArticle();

    const {deleteArticle, isDeleting} = useDeleteArticle();

    const userContext = useContext(UserContext);

    const [deleteOpen, setDeleteOpen] = useState(false);

    useEffect(() => {
        if(id) {
            load(parseInt(id))
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

    const onDeleteArticle = () => {
        deleteArticle(article.id)
    }

    return (
        <main className={styles.main}>
            {PortalReactDOM.createPortal(<DeleteArticleModalComponent open={deleteOpen} setOpen={setDeleteOpen} onDelete={onDeleteArticle}/>, document.body)}
            {userContext?.username === article.author.username &&
                <div className={styles.author_header}>
                    <div>
                        <button onClick={() => setDeleteOpen(true)}>Delete article</button>
                        <button>Edit article</button>
                    </div>
                </div>}
            <img className={styles.image} src={ImageLoader.load(article.image_url)} width={"100%"}></img>
            <h1 className={styles.title}>{article.title}</h1>
            <div className={styles.content} dangerouslySetInnerHTML={{__html: article.content}}></div>
            <hr/>
            <a href={ImageLoader.load(article.download_url)}
               target={"_blank"}
               download={article.title}
               className={styles.download}>
                <p><Download/>Download content</p>
            </a >
            <br/>
            <div className={styles.author}>Author: <span>{article.author.username}</span></div>
            <br/>
            <div className={styles.tags}>
                {article.tags && article.tags.map((x, i) => <div className={styles.tag} key={i}>{x}</div>)}
            </div>
            <br/>
        </main>

    );
}

export default Article;
