import {useState} from "react";
import {toast} from "react-toastify";
import ArticleModel from "../../infra/http/httpClient/model/Article.model";
import {searchArticlesUsecase} from "../../usecases";
type SearchArticlesHook = () => {
    load(searchPhrase: string): Promise<void>;
    isLoading: boolean;
    articles: ArticleModel[];
};

export const useSearchArticles: SearchArticlesHook = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [articles, setArticles] = useState<ArticleModel[]>([]);


    const load = async (searchPhrase: string) => {
        setIsLoading(true);

        if(searchPhrase.length > 0) {
            const response = await searchArticlesUsecase.execute(searchPhrase);
            if (response.status && response.status === 200) {
                setArticles(response.data)
            } else {
                toast.error("Błąd ładowania strony.")
            }
        } else{
            setArticles([]);
        }

        setIsLoading(false);
    }

    return {
        isLoading,
        load,
        articles,
    };
};
