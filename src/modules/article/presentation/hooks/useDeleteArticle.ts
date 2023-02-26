import ArticleModel from "../../../../shared/infra/http/httpClient/model/Article.model";
import {useState} from "react";
import {getArticleById} from "../../usecases";
import {toast} from "react-toastify";
import {useNavigate} from "react-router";

type DeleteArticleById = () => {
    deleteArticle(id: number): Promise<void>;
    isDeleting: boolean;
};

export const useDeleteArticle: DeleteArticleById = () => {
    const [isDeleting, setIsDeleting] = useState(false);

    const navigate = useNavigate();

    const deleteArticle = async (id: number) => {
        setIsDeleting(true);

        const response = await getArticleById.execute(id);
        if (response.status && response.status === 200) {
            navigate("/");
            toast.success("Article successfully deleted.");
        } else {
            toast.error("Article deleting error.");
        }

        setIsDeleting(false);
    }

    return {
        isDeleting,
        deleteArticle
    };
};
