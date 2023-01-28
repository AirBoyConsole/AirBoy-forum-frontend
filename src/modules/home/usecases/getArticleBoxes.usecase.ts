import {HttpClient} from "../../../shared/usecases/ports/httpClient";
import {AxiosResponse} from "axios";
import ArticleModel from "../../../shared/infra/http/httpClient/model/Article.model";
class GetArticleBoxesUsecase {
    constructor(private readonly httpClient: HttpClient) {}

    async execute(sortBoxesBy: string): Promise<AxiosResponse<ArticleModel[]> | any> {
        try {
            const params = {
                limit: 6,
                sort_by: sortBoxesBy,
                order: sortBoxesBy === 'DATE' ? 1 : 0
            }

            return await this.httpClient.get<ArticleModel[]>({url: 'api/article', params});
        } catch (error) {
            return error;
        }
    }
}

export default GetArticleBoxesUsecase;
