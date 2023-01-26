import {HttpClient} from "../../../shared/usecases/ports/httpClient";
import {AxiosResponse} from "axios";
import ArticleModel from "../../../shared/infra/http/httpClient/model/Article.model";
class GetArticleById {
    constructor(private readonly httpClient: HttpClient) {}

    async execute(id: number): Promise<AxiosResponse<ArticleModel[]> | any> {
        try {
            return await this.httpClient.get<ArticleModel[]>({url: 'api/article/' + id});
        } catch (error) {
            return error;
        }
    }
}

export default GetArticleById;
