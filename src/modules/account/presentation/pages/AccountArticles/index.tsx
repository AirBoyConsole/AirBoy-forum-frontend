import React, {useEffect} from "react";
import styles from "./styles.module.scss";
import {useLoadUserArticles} from "../../hooks/useLoadUserArticles";
import {useQuery} from "react-query";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

function AccountArticles(): JSX.Element {

    const {articles, load, isLoading} = useLoadUserArticles();
    const navigate = useNavigate();

    return(
        <div className={styles.main}>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date added</th>
                        <th>Last edit</th>
                        <th>Views</th>
                    </tr>
                </thead>
                <tbody>
                {articles.map((article, index) => {
                    const added = new Date(article.added).toLocaleDateString() + ", "
                        + new Date(article.added).toLocaleTimeString();

                    const edited = new Date(article.last_edit).toLocaleDateString() + ", "
                        + new Date(article.last_edit).toLocaleTimeString();

                    return (
                        <tr onClick={() => navigate(`/article/${article.id}`)} key={index}>
                            <td>{article.title}</td>
                            <td className={styles.center}>{added}</td>
                            <td className={styles.center}>{edited}</td>
                            <td className={styles.center}>{article.views}</td>
                        </tr>
                )})}
                </tbody>
            </table>

        </div>
    );
}

export default AccountArticles;