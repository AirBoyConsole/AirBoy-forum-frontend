import React from "react";
import {Outlet} from "react-router";
import styles from "./styles.module.scss";

function NavComponent(): JSX.Element {

    return (
        <>
            <nav className={styles.nav}>
                <div></div>
                <div className={styles.buttons_wrapper}>
                    <button>Sign in</button>
                    <button>Sign up</button>
                </div>
            </nav>
            <header className={styles.header}>
                <h1>Airboy forum</h1>
                <div className={styles.buttons_wrapper}>
                    <button>Search</button>
                    <button>Upload shader</button>
                </div>
            </header>
            <Outlet/>
            <footer className={styles.footer}>
                <div>
                    <p>©2023 AirBoy</p>
                    <p><a href="https://github.com/AirBoyConsole">Our github</a></p>
                </div>
                <button>Donate Us</button>
            </footer>
        </>
    );
}

export default NavComponent;
