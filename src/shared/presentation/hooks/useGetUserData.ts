import ArticleModel from "../../infra/http/httpClient/model/Article.model";
import {useEffect, useState} from "react";
import {searchArticlesUsecase} from "../../usecases";
import {toast} from "react-toastify";
import UserModel from "../../infra/http/httpClient/model/User.model";
import {getUserDataUsecase} from "../../usecases";

type getUserDataHook = (authenticated: boolean) => {
    reload(): Promise<void>;
    user: UserModel | null;
};

export const useGetUserData: getUserDataHook = (authenticated: boolean) => {
    const [user, setUser] = useState<UserModel | null>(null);

    useEffect(() => {
        reload();
    }, [authenticated])

    const reload = async () => {
        if(authenticated) {
            const response = await getUserDataUsecase.execute();

            if (response.status && response.status === 200) {
                setUser(response.data)
            } else {
                toast.error("Błąd ładowania strony.")
            }
        }
    }

    return {
        reload,
        user
    };
};
