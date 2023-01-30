import React from "react";
import styles from "./styles.module.scss";
import {Outlet, useLocation} from "react-router";

function Account(): JSX.Element {

    const location = useLocation();
    console.log(location);

    return(
        <main className={styles.main}>
            <div className={styles.side_nav}>
                <ul>
                    <li className={`${location.pathname === '/account/' 
                    || location.pathname=== "/account" ? styles.active : ""}`}>
                        <h3>Admin panel</h3><h3>{">"}</h3>
                    </li>
                    <li><h3>Account settings</h3><h3>{">"}</h3></li>
                </ul>
            </div>
            <Outlet/>
        </main>
    );
}

export default Account;