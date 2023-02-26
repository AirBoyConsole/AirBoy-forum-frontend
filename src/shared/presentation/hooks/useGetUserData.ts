import ArticleModel from "../../infra/http/httpClient/model/Article.model";
import {useEffect, useState} from "react";
import {searchArticlesUsecase} from "../../usecases";
import {toast} from "react-toastify";
import UserModel from "../../infra/http/httpClient/model/User.model";
import {getUserDataUsecase} from "../../usecases";

type getUserDataHook = () => {
    reload(): Promise<void>;
    user: UserModel | null;
};

export const useGetUserData: getUserDataHook = () => {
    const [user, setUser] = useState<UserModel | null>(null);

    useEffect(() => {
        reload();
    }, [])

    const reload = async () => {

        const response = await getUserDataUsecase.execute();

        if (response.status && response.status === 200) {
            setUser(response.data)
        } else {
            toast.error("Błąd ładowania strony.")
        }
    }

    return {
        reload,
        user
    };
};
