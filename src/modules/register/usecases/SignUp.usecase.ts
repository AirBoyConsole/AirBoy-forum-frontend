import {HttpClient} from "../../../shared/usecases/ports/httpClient";
import {AxiosResponse} from "axios";
import RegisterRequestModel from "../domain/models/RegisterRequest.model";

class SignUpUsecase {
    constructor(private readonly httpClient: HttpClient) {}

    async execute(data: RegisterRequestModel): Promise<AxiosResponse<void> | any> {
        try {
            return await this.httpClient.post<void>({url: 'api/user', data});
        } catch (error) {
            return error;
        }
    }
}

export default SignUpUsecase;
