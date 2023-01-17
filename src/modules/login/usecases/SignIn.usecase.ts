import {HttpClient} from "../../../shared/usecases/ports/httpClient";
import {AxiosError, AxiosResponse} from "axios";
import LoginRequestModel from "../../../shared/infra/http/httpClient/model/LoginRequest.model";
import LoginResponseModel from "../../../shared/infra/http/httpClient/model/LoginResponse.model";

class SignInUsecase {
    constructor(private readonly httpClient: HttpClient) {}

    async execute(data: LoginRequestModel): Promise<AxiosResponse<LoginResponseModel> | any> {
        try {
            return await this.httpClient.login(data);
        } catch (error: any) {
            return error;
        }
    }
}

export default SignInUsecase;
