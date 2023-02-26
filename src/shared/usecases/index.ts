import SearchArticlesUsecase from "./searchArticles.usecase";
import httpClient from "../infra/http/httpClient";
import GetUserDataUsecase from "./getUserData.usecase";

const searchArticlesUsecase = new SearchArticlesUsecase(httpClient);
const getUserDataUsecase = new GetUserDataUsecase(httpClient);



export {
    searchArticlesUsecase,
    getUserDataUsecase
};
