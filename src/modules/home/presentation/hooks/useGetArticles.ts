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

        const [articleBoxesResponse, articleClipsResponse] = await Promise.allSettled([
            getArticleBoxesUsecase.execute(sortBoxesBy),
            getArticleClipsUsecase.execute()
        ]);

        if (articleClipsResponse.status !== "rejected" && articleBoxesResponse.status !== "rejected") {
            if(articleBoxesResponse.value.status && articleBoxesResponse.value.status === 200
                && articleClipsResponse.value.status && articleClipsResponse.value.status === 200) {

                setArticleBoxes(articleBoxesResponse.value.data);
                setArticleClips(articleClipsResponse.value.data);

            } else {
                console.log(articleBoxesResponse.value);
                toast.error("Błąd ładowania strony.");

            }
        } else {
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
