import httpClient from "../../../shared/infra/http/httpClient";
import GetArticleById from "./getArticleById";
import DeleteArticleById from "./deleteArticleById";

const getArticleById = new GetArticleById(httpClient);
const deleteArticleById = new DeleteArticleById(httpClient);

export {
    getArticleById,
    deleteArticleById
};
