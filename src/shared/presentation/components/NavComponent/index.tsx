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
                <div className={styles.wrapper}>
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
                </div>
            </nav>
            <header className={styles.header}>
                <div className={styles.wrapper}>
                    <Link to="/" style={{all: 'unset'}}><h1>Airboy forum</h1></Link>
                    <div className={styles.buttons_wrapper}>
                        <button onClick={() => setSearchOpen(true)}>Search</button>
                        <Link to="/upload"><button>Upload shader</button></Link>
                    </div>
                </div>
            </header>
            <div className={styles.wrapper}>
                <Outlet/>
            </div>
            <footer className={styles.footer}>
                <div className={styles.wrapper}>
                    <div>
                        <p>©2023 AirBoy</p>
                        <p><a href="https://github.com/AirBoyConsole">Our github</a></p>
                    </div>
                    <button>Donate Us</button>
                </div>
            </footer>
        </>
    );
}

export default NavComponent;
