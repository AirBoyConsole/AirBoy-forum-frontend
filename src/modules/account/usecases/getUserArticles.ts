import ArticleModel from "../../../shared/infra/http/httpClient/model/Article.model";
import {AxiosResponse} from "axios";
import {HttpClient} from "../../../shared/usecases/ports/httpClient";

class GetUserArticlesUsecase {
    constructor(private readonly httpClient: HttpClient) {}

    async execute(): Promise<AxiosResponse<ArticleModel[]> | any> {
        try {
            const params = {
                limit: 20,
                sort_by: 'DATE',
                order: 1
            }

            return await this.httpClient.get<ArticleModel[]>({url: 'api/user/articles', params});
        } catch (error) {
            return error;
        }
    }
}

export default GetUserArticlesUsecase;