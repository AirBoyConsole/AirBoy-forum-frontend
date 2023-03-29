import React from "react";
import styles from "./styles.module.scss";
import {Outlet, useLocation} from "react-router";
import {NavLink} from "react-router-dom";

function Account(): JSX.Element {

    const location = useLocation();
    console.log(location);

    return(
        <main className={styles.main}>
            <div className={styles.side_nav}>
                <ul>
                    <li>
                        <NavLink
                            to="/account"
                            className={({ isActive }) =>
                                isActive ? styles.active : ""}>
                            <h3>Admin panel</h3><h3>{">"}</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/account/settings"
                            className={({ isActive }) =>
                                isActive ? styles.active : ""}>
                            <h3>Account settings</h3><h3>{">"}</h3>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <Outlet/>
        </main>
    );
}

export default Account;