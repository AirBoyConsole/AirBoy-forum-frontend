import React from "react";
import {useRouteError} from "react-router";

function ErrorPage(): JSX.Element {
    const error: any = useRouteError();

    return (
        <main>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </main>
    );
}

export default ErrorPage;
