import React, {Dispatch, SetStateAction} from "react";
import styles from "./styles.module.scss";
import {Link} from "react-router-dom";
import {useSignIn} from "../../hooks/useSignIn";
import {useForm} from "react-hook-form";
import LoginRequestModel from "../../../../../shared/infra/http/httpClient/model/LoginRequest.model";
import {Navigate} from "react-router";

interface LoginProps {
    authenticated: boolean;
    setAuthenticated: Dispatch<SetStateAction<boolean>>;
}

function Login({authenticated, setAuthenticated}: LoginProps): JSX.Element {
    const {isLoading, signin} = useSignIn(setAuthenticated);

    const {
        handleSubmit,
        register
    } = useForm<LoginRequestModel>();

    if(authenticated) {
        return <Navigate to="/" replace={true} />
    }

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <form onSubmit={handleSubmit(signin)}>
                    <h2>Sign in here</h2>
                    <div>
                        <label>Username</label><br/><br/>
                        <input type="text"
                               className={styles.email}
                               placeholder="myusername"
                               {...register("username")}/>
                    </div>
                    <div>
                        <label>Password</label><br/><br/>
                        <input type="password"
                               className={styles.password}
                               placeholder="type your password here"
                               {...register("password")}/>
                    </div>
                    <input type="submit" className={styles.submit} value="Sign in"/>
                    <div>{isLoading}</div>
                    <Link to="/register"><label className={styles.no_account}>Don't have an account? Sign up!</label></Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
