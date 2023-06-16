import {useState} from "react";
import {toast} from "react-toastify";
import {useNavigate} from "react-router";
import RegisterRequestModel from "../domain/models/RegisterRequest.model";
import {signUpUsecase} from "../usecases";
type SignInHook = () => {
    signup(data: RegisterRequestModel): Promise<void>;
    isLoading: boolean;
};

export const useSignUp: SignInHook = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    const signup = async (data: RegisterRequestModel) => {
        setIsLoading(true);

        const response = await signUpUsecase.execute(data);
        if (response.status && response.status === 200) {
            navigate('/login');
            toast.success('Signed up successfully!');
        } else {
            toast.error('Sign up error');
        }

        setIsLoading(false);
    }

    return {
        isLoading,
        signup,
    };
};
