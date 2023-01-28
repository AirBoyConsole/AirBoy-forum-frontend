import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {HttpClient, HttpRequest, VanillaRequest} from '../../../usecases/ports/httpClient';
import storage from "../../storage";
import LoginRequestModel from "./model/LoginRequest.model";
import LoginResponseModel from "./model/LoginResponse.model";

export default class AxiosHttpClient implements HttpClient {
    private readonly baseUrl: string = "https://api.akinhet.xyz/";

    private readonly axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({});
    }

    public async login(data: LoginRequestModel): Promise<AxiosResponse<LoginResponseModel>> {
        const res = await this.post<LoginResponseModel>({url: 'api/login', data});
        if(res.data && res.data.token) {
            storage.save('token', res.data.token);
        }
        
        return res;
    }

    public get<TResponse>({
                              url,
                              params = null,
                              headers = null,
                          }: HttpRequest): Promise<AxiosResponse<TResponse>> {
        return this.request<TResponse>({
            method: 'GET',
            url: url,
            params,
            headers,
        });
    }

    public post<TResponse>({
                               url,
                               params = null,
                               data = null,
                               headers = null,
                           }: HttpRequest): Promise<AxiosResponse<TResponse>> {
        return this.request({
            method: 'POST',
            url: url,
            params,
            data,
            headers,
        });
    }

    public delete<TResponse>({
                                 url,
                                 params = null,
                                 headers = null,
                             }: HttpRequest): Promise<AxiosResponse<TResponse>> {
        return this.request({
            method: 'DELETE',
            url: url,
            params,
            headers,
        });
    }

    public put<TResponse>({
                              url,
                              params = null,
                              headers = null,
                          }: HttpRequest): Promise<AxiosResponse<TResponse>> {
        return this.request({
            method: 'PUT',
            url: url,
            params,
            headers,
        });
    }

    request<T>({
                           url,
                           params = null,
                           data = {},
                           headers = null,
                           method = 'GET'
                           }: VanillaRequest): Promise<AxiosResponse<T>> {

        const token = storage.get('token');

        const finalHeaders = {
            Authorization: `Bearer ${token}`,
            ...headers
        }

        const formData = new FormData();

        // im not very proud of it...
        for ( let key in data ) {
            if (Array.isArray(data[key])) {
                data[key].forEach((x: any) => {
                    formData.append(key, x);
                })
            } else {
                formData.append(key, data[key]);
            }
        }

        return this.axiosInstance({
            method,
            url: `${this.baseUrl}${url}`,
            params,
            data: formData,
            headers: finalHeaders,
        }).then(x => {
            if(x.status === 401) {
                storage.save('token', '');
            }

            return x;
        })
    }
}
