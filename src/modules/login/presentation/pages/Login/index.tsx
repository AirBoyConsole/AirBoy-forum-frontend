import React from "react";
import styles from "./styles.module.scss";

function Login(): JSX.Element {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <form>
                    <h2>Sign in here</h2>
                    <div>
                        <label>Email</label><br/><br/>
                        <input type="text" className={styles.email} placeholder="john.doe@example.com"/>
                    </div>
                    <div>
                        <label>Password</label><br/><br/>
                        <input type="password" className={styles.password} placeholder="type your password here"/>
                    </div>
                    <input type="submit" className={styles.submit} value="Sign in"/>
                </form>
            </div>
        </div>
    );
}

export default Login;
