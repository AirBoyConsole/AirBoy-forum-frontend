import {Dispatch, SetStateAction, useState} from "react";
import {signInUsecase} from "../../usecases";
import {toast} from "react-toastify";
import {useNavigate} from "react-router";
import LoginRequestModel from "../../../../shared/infra/http/httpClient/model/LoginRequest.model";
type SignInHook = (setAuthenticated: Dispatch<SetStateAction<boolean>>) => {
    signin(data: LoginRequestModel): Promise<void>;
    isLoading: boolean;
};

export const useSignIn: SignInHook = (setAuthenticated: Dispatch<SetStateAction<boolean>>) => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    const signin = async (data: LoginRequestModel) => {
            setIsLoading(true);

            const response = await signInUsecase.execute(data);
            if (response.status && response.status === 200) {
                setAuthenticated(true);
                navigate('/');
                toast.success('Zalogowano pomyślnie!');
            } else {
                console.log(response.response.status);
                toast.error('Błąd logowania');
            }

            setIsLoading(false);
        }

    return {
        isLoading,
        signin,
    };
};
