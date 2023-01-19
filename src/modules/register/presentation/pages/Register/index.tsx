import React from "react";
import styles from "./styles.module.scss";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useSignUp} from "../../../hooks/useSignUp";
import RegisterRequestModel from "../../../domain/models/RegisterRequest.model";

function Register(): JSX.Element {
    const {signup} = useSignUp();

    const {
        handleSubmit,
        register
    } = useForm<RegisterRequestModel>();


    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <form onSubmit={handleSubmit(signup)}>
                    <h2>Sign up here</h2>
                    <div>
                        <label>Username</label><br/><br/>
                        <input type="text"
                               {...register("username")}
                               className={styles.username}
                               placeholder="exampleuser"/>
                    </div>
                    <div>
                        <label>Email</label><br/><br/>
                        <input type="email"
                               className={styles.email}
                               placeholder="john.doe@example.com"
                               {...register("email")}/>
                    </div>
                    <div>
                        <label>Password</label><br/><br/>
                        <input type="password"
                               className={styles.password}
                               placeholder="type your password here"
                               {...register("password")}/>
                    </div>
                    <div>
                        <label>Repeat</label><br/><br/>
                        <input type="password"
                               className={styles.password}
                               placeholder="repeat your password here"
                               {...register("confirmPassword")}/>
                    </div>
                    <input type="submit" className={styles.submit} value="Sign up"/>
                    <Link to="/login"><label className={styles.no_account}>Already have an account? Sign in!</label></Link>

                </form>
            </div>
        </div>
    );
}

export default Register;
