import React from "react";
import {useRouteError} from "react-router";
import styles from './styles.module.scss';

function ErrorPage(): JSX.Element {
    const error: any = useRouteError();

    return (
        <main className={styles.main}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            {error.status && <p>{error.status}</p>}
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </main>
    );
}

export default ErrorPage;
