import httpClient from "../../../shared/infra/http/httpClient";
import SignUpUsecase from "./SignUp.usecase";

const signUpUsecase = new SignUpUsecase(httpClient);


export {
    signUpUsecase,
};
