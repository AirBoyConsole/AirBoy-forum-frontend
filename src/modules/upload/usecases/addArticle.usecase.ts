import {HttpClient} from "../../../shared/usecases/ports/httpClient";
import {AxiosResponse} from "axios";
import ArticleModel from "../../../shared/infra/http/httpClient/model/Article.model";
class addArticleUsecase {
    constructor(private readonly httpClient: HttpClient) {}

    async execute(data: ArticleModel): Promise<AxiosResponse<void> | any> {
        try {

            return await this.httpClient.post<ArticleModel[]>({url: 'api/article', data});
        } catch (error) {
            return error;
        }
    }
}

export default addArticleUsecase;
