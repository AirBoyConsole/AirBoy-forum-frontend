import ArticleModel from "../../../../shared/infra/http/httpClient/model/Article.model";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import getArticles from "../../usecases/getUserArticles";
import {getUserArticles} from "../../usecases";

type LoadUserArtclesHook = () => {
    load(): Promise<void>;
    isLoading: boolean;
    articles: ArticleModel[];
};

export const useLoadUserArticles: LoadUserArtclesHook = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [articles, setArticles] = useState<ArticleModel[]>([]);

    useEffect(() => {
        load();
    }, []);


    const load = async () => {
        setIsLoading(true);

        const response = await getUserArticles.execute();
        if (response.status && response.status === 200) {
            setArticles(response.data);
        } else {
            toast.error("Site loading error.");
        }

        setIsLoading(false);
    }

    return {
        isLoading,
        load,
        articles
    };
};
