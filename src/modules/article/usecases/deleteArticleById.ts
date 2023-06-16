import {HttpClient} from "../../../shared/usecases/ports/httpClient";
import {AxiosResponse} from "axios/index";
import ArticleModel from "../../../shared/infra/http/httpClient/model/Article.model";

class DeleteArticleById {
    constructor(private readonly httpClient: HttpClient) {}

    async execute(id: number): Promise<AxiosResponse<any> | any> {
        try {
            return await this.httpClient.delete<ArticleModel[]>({url: 'api/article' + id});
        } catch (error) {
            return error;
        }
    }
}

export default DeleteArticleById;
