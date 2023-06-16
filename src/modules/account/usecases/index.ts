import httpClient from "../../../shared/infra/http/httpClient";
import GetUserArticles from "./getUserArticles";

const getUserArticles = new GetUserArticles(httpClient);

export {
    getUserArticles,
};