import React, {useEffect} from "react";
import styles from "./styles.module.scss";
import {useLoadUserArticles} from "../../hooks/useLoadUserArticles";
import {useQuery} from "react-query";

function AccountArticles(): JSX.Element {

    const {articles, load, isLoading} = useLoadUserArticles();

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
                {articles.map((article, index) => (
                    <tr>
                        <td>{article.title}</td>
                        <td>{article.added}</td>
                        <td>{article.last_edit}</td>
                        <td>{article.views}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    );
}

export default AccountArticles;