import {useState} from "react";
import {toast} from "react-toastify";
import ArticleModel from "../../../../shared/infra/http/httpClient/model/Article.model";
import {getArticleById} from "../../usecases";
type GetArticleByIdHook = () => {
    load(id: number): Promise<void>;
    isLoading: boolean;
    article: ArticleModel | null;
};

export const useGetArticle: GetArticleByIdHook = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [article, setArticle] = useState<ArticleModel | null>(null);


    const load = async (id: number) => {
        setIsLoading(true);

        const response = await getArticleById.execute(id);
        if (response.status && response.status === 200) {
            setArticle(response.data);
        } else {
            toast.error("Błąd ładowania strony.");
        }

        setIsLoading(false);
    }

    return {
        isLoading,
        load,
        article
    };
};
