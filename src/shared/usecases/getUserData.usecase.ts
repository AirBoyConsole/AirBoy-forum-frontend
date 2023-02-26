import {AxiosResponse} from "axios";
import {HttpClient} from "./ports/httpClient";
import ArticleModel from "../infra/http/httpClient/model/Article.model";
import UserModel from "../infra/http/httpClient/model/User.model";
class GetUserDataUsecase {
    constructor(private readonly httpClient: HttpClient) {}

    async execute(): Promise<AxiosResponse<UserModel> | any> {
        try {
            const params = {
            }

            return await this.httpClient.get<UserModel[]>({url: 'api/self', params});
        } catch (error) {
            return error;
        }
    }
}

export default GetUserDataUsecase;
