import SearchArticlesUsecase from "./searchArticles.usecase";
import httpClient from "../infra/http/httpClient";

const searchArticlesUsecase = new SearchArticlesUsecase(httpClient);


export {
    searchArticlesUsecase,
};
