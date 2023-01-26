import {AxiosResponse} from "axios";
import {HttpClient} from "./ports/httpClient";
import ArticleModel from "../infra/http/httpClient/model/Article.model";
class SearchArticlesUsecase {
    constructor(private readonly httpClient: HttpClient) {}

    async execute(searchPhrase: string): Promise<AxiosResponse<ArticleModel[]> | any> {
        try {
            const params = {
                search: searchPhrase
            }

            return await this.httpClient.get<ArticleModel[]>({url: 'api/article', params});
        } catch (error) {
            return error;
        }
    }
}

export default SearchArticlesUsecase;
