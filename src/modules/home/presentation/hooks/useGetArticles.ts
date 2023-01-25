import {useState} from "react";
import {toast} from "react-toastify";
import ArticleModel from "../../../../shared/infra/http/httpClient/model/Article.model";
import {getArticleBoxesUsecase, getArticleClipsUsecase} from "../../usecases";
type GetArticlesHook = () => {
    load(sortBoxesBy: string): Promise<void>;
    isLoading: boolean;
    articleBoxes: ArticleModel[],
    articleClips: ArticleModel[]

};

export const useGetArticles: GetArticlesHook = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [articleBoxes, setArticleBoxes] = useState<ArticleModel[]>([]);
    const [articleClips, setArticleClips] = useState<ArticleModel[]>([]);


    const load = async (sortBoxesBy: string) => {
        setIsLoading(true);

        let error = false;

        const articleBoxesResponse = await getArticleBoxesUsecase.execute(sortBoxesBy);
        if (articleBoxesResponse.status && articleBoxesResponse.status === 200) {
            setArticleBoxes(articleBoxesResponse.data)
        } else {
            error = true;
        }

        const articleClipsResponse = await getArticleClipsUsecase.execute();
        if (articleClipsResponse.status && articleClipsResponse.status === 200) {
            setArticleClips(articleClipsResponse.data)
        } else {
            error = true;
        }

        if (error) {
            toast.error("Błąd ładowania strony.");
        }

        setIsLoading(false);
    }

    return {
        isLoading,
        load,
        articleBoxes,
        articleClips
    };
};
