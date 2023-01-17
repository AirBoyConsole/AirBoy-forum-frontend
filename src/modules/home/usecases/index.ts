import httpClient from "../../../shared/infra/http/httpClient";
import GetArticleBoxesUsecase from "./getArticleBoxes.usecase";
import GetArticleClipsUsecase from "./getArticleClips.usecase";

const getArticleBoxesUsecase = new GetArticleBoxesUsecase(httpClient);
const getArticleClipsUsecase = new GetArticleClipsUsecase(httpClient);


export {
    getArticleBoxesUsecase,
    getArticleClipsUsecase
};
