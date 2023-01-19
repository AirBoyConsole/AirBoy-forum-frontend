import httpClient from "../../../shared/infra/http/httpClient";
import AddArticleUsecase from "./addArticle.usecase";

const addArticleUsecase = new AddArticleUsecase(httpClient);

export {
    addArticleUsecase
};
