import httpClient from "../../../shared/infra/http/httpClient";
import SignInUsecase from "./SignIn.usecase";

const signInUsecase = new SignInUsecase(httpClient);


export {
    signInUsecase,
};
