import {useState} from "react";
import {toast} from "react-toastify";
import ArticleModel from "../../../../shared/infra/http/httpClient/model/Article.model";
import {addArticleUsecase} from "../../usecases";
import {UseFormReset} from "react-hook-form";
type AddArticleHook = (reset: UseFormReset<ArticleModel>) => {
    add(article: ArticleModel): Promise<void>;
    isLoading: boolean;
};

export const useAddArticle: AddArticleHook = (reset:  UseFormReset<ArticleModel>) => {
    const [isLoading, setIsLoading] = useState(false);

    const add = async (article: ArticleModel) => {
        setIsLoading(true);
        console.log(article.file)
        article.file = article.file[0];


        const response = await addArticleUsecase.execute(article);
        if (response.status && response.status === 200) {
            toast.success("Dodano artykuł pomyślnie.");
            reset();
        } else {
            toast.error("Błąd ładowania strony.");
        }


        setIsLoading(false);
    }

    return {
        isLoading,
        add
    };
};
