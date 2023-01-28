import React from "react";
import styles from "./styles.module.scss";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useSignUp} from "../../../hooks/useSignUp";
import RegisterRequestModel from "../../../domain/models/RegisterRequest.model";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

function Register(): JSX.Element {
    const {signup} = useSignUp();

    const schema = yup.object().shape({
        username: yup.string().min(3).max(32).required(),
        email: yup.string().email().required(),
        password: yup.string().min(8).max(32).required(),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required()
    });

    const {
        handleSubmit,
        register,
        formState: {errors}
    } = useForm<RegisterRequestModel>({
        resolver: yupResolver(schema)
    });


    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <form onSubmit={handleSubmit(signup)}>
                    <h2>Sign up here</h2>
                    <div>
                        <label>Username</label><br/><br/>
                        {errors.username &&
                            <>
                                <label className={styles.error}>{errors.username.message}</label><br/><br/>
                            </>
                        }
                        <input type="text"
                               {...register("username")}
                               className={styles.username}
                               placeholder="exampleuser"/>
                    </div>
                    <div>
                        <label>Email</label><br/><br/>
                        {errors.email &&
                            <>
                                <label className={styles.error}>{errors.email.message}</label><br/><br/>
                            </>
                        }
                        <input type="text"
                               className={styles.email}
                               placeholder="john.doe@example.com"
                               {...register("email")}/>
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
                    <div>
                        <label>Repeat</label><br/><br/>
                        {errors.confirmPassword &&
                            <>
                                <label className={styles.error}>{errors.confirmPassword.message}</label><br/><br/>
                            </>
                        }
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
