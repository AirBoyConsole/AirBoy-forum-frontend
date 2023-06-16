import {Dispatch, SetStateAction, useState} from "react";
import {signInUsecase} from "../../usecases";
import {toast} from "react-toastify";
import {useNavigate} from "react-router";
import LoginRequestModel from "../../../../shared/infra/http/httpClient/model/LoginRequest.model";
type SignInHook = (setAuthenticated: Dispatch<SetStateAction<boolean>>) => {
    signin(data: LoginRequestModel): Promise<void>;
    isLoading: boolean;
    setPathname: Dispatch<SetStateAction<string>>;
};

export const useSignIn: SignInHook = (setAuthenticated: Dispatch<SetStateAction<boolean>>) => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [pathname, setPathname] = useState('/');

    const signin = async (data: LoginRequestModel) => {
            setIsLoading(true);

            const response = await signInUsecase.execute(data);
            if (response.status && response.status === 200) {
                setAuthenticated(true);
                navigate(pathname);
                toast.success('Sign in successfully');
            } else {
                toast.error('Sign in error');
            }

            setIsLoading(false);
        }

    return {
        isLoading,
        signin,
        setPathname
    };
};
