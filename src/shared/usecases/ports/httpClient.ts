import {AxiosResponse} from "axios";
import LoginRequestModel from "../../infra/http/httpClient/model/LoginRequest.model";
import LoginResponseModel from "../../infra/http/httpClient/model/LoginResponse.model";

export type HttpRequest = {
    url: string;
    data?: any;
    params?: any;
    headers?: any;
};

export type VanillaRequest = {
    url: string;
    data?: any;
    params?: any;
    headers?: any;
    method: string;
};

export interface HttpClient {
    get: <Data = any>(data: HttpRequest) => Promise<AxiosResponse<Data>>;
    post: <Data = any>(data: HttpRequest) => Promise<AxiosResponse<Data>>;
    put: <Data = any>(data: HttpRequest) => Promise<AxiosResponse<Data>>;
    delete: <Data = any>(data: HttpRequest) => Promise<AxiosResponse<Data>>;
    login: (data: LoginRequestModel) => Promise<AxiosResponse<LoginResponseModel>>;
    request: <Data = any>(data: VanillaRequest) => Promise<AxiosResponse<Data>>;
}
