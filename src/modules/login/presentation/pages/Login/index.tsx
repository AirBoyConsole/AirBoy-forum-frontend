import React, {Dispatch, SetStateAction, useEffect} from "react";
import styles from "./styles.module.scss";
import {Link} from "react-router-dom";
import {useSignIn} from "../../hooks/useSignIn";
import {useForm} from "react-hook-form";
import LoginRequestModel from "../../../../../shared/infra/http/httpClient/model/LoginRequest.model";
import {Navigate, useLocation} from "react-router";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

interface LoginProps {
    authenticated: boolean;
    setAuthenticated: Dispatch<SetStateAction<boolean>>;
}

function Login({authenticated, setAuthenticated}: LoginProps): JSX.Element {
    const {isLoading, signin, setPathname} = useSignIn(setAuthenticated);

    const location = useLocation();

    useEffect(() => {
        if(location.state !== null && location.state.from !== null && location.state.from.pathname !== null) {
            setPathname(location.state.from.pathname);
        }
    }, [location]);

    const schema = yup.object().shape({
        username: yup.string().min(3).max(32).required(),
        password: yup.string().min(8).max(32).required(),
    });

    const {
        handleSubmit,
        register,
        formState: {errors}
    } = useForm<LoginRequestModel>({
        resolver: yupResolver(schema)
    });

    if(authenticated) {
        return <Navigate to="/" replace={true} />
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <form onSubmit={handleSubmit(signin)}>
                    <h2>Sign in here</h2>
                    <div>
                        <label>Username</label><br/><br/>
                        {errors.username &&
                            <>
                                <label className={styles.error}>{errors.username.message}</label><br/><br/>
                            </>
                        }
                        <input type="text"
                               className={styles.email}
                               placeholder="myusername"
                               {...register("username")}/>
                    </div>
                    <div>
                        <label>Password</label><br/><br/>
                        {errors.password &&
                            <>
                                <label className={styles.error}>{errors.password.message}</label><br/><br/>
                            </>
                        }
                        <input type="password"
                               className={styles.password}
                               placeholder="type your password here"
                               {...register("password")}/>
                    </div>
                    <input type="submit" className={styles.submit} value="Sign in"/>
                    <div>{isLoading}</div>
                    <Link to="/register">
                        <label className={styles.no_account}>Don't have an account? Sign up!</label>
                    </Link>
                </form>
            </div>
        </main>
    );
}

export default Login;
