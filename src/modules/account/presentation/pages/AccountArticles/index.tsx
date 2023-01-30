import React from "react";
import styles from "./styles.module.scss";

function AccountArticles(): JSX.Element {

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
            </table>

        </div>
    );
}

export default AccountArticles;