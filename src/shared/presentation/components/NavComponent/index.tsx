import React, {Dispatch, SetStateAction, useState} from "react";
import {Outlet} from "react-router";
import styles from "./styles.module.scss";
import {Link} from "react-router-dom";
import storage from "../../../infra/storage";
import Search from "../Search";
import PortalReactDOM from 'react-dom'

interface NavComponentProps {
    authenticated: boolean,
    setAuthenticated: Dispatch<SetStateAction<boolean>>;
}


function NavComponent({authenticated, setAuthenticated}: NavComponentProps): JSX.Element {

    const [searchOpen, setSearchOpen] = useState(false);

    const signOut = () => {
        storage.save('token', '');
        setAuthenticated(false);
    }

    return (
        <>
            {PortalReactDOM.createPortal(<Search open={searchOpen} setOpen={setSearchOpen}/>, document.body)}
            <nav className={styles.nav}>
                <div></div>
                <div className={styles.buttons_wrapper}>
                    {authenticated ?
                        <>
                            <Link to="/" onClick={signOut}><button>Sign out</button></Link>
                            <Link to="/account"><button className={styles.button2}>Account</button></Link>
                        </>
                        :
                        <>
                            <Link to="/login"><button>Sign in</button></Link>
                            <Link to="/register"><button className={styles.button2}>Sign up</button></Link>
                        </>}
                </div>
            </nav>
            <header className={styles.header}>
                <h1>Airboy forum</h1>
                <div className={styles.buttons_wrapper}>
                    <button onClick={() => setSearchOpen(true)}>Search</button>
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
