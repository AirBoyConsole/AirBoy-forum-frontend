import httpClient from "../../../shared/infra/http/httpClient";
import GetArticleById from "./getArticleById";

const getArticleById = new GetArticleById(httpClient);

export {
    getArticleById,
};
