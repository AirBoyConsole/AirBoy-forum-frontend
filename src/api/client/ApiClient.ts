import {Configuration} from "../../configuration/Configuration";
import {ConfigurationLoader} from "../../configuration/ConfigurationLoader";
import axios, {AxiosRequestConfig} from "axios";

export class ApiClient {

    private readonly _apiBaseUrl: string;

    constructor(configuration: Configuration) {
        this._apiBaseUrl = configuration.api.url;

        if (!this._apiBaseUrl.endsWith("/")) {
            this._apiBaseUrl += "/";
        }
    }

    private async _callApi(path: string, method: string, dataToSend: any): Promise<any> {

        const url = `${this._apiBaseUrl}${path}`;

        const options = {
            url,
            method,
            data: dataToSend,
            headers: this._getHeaders(),
            withCredentials: true
        } as AxiosRequestConfig;

        try{
            const response = await axios.request(options);

            return response.data;
        }catch (error: any){
            if(error.response && error.response.status === 401){
                
            }

            if(error.response && error.response.status === 403){

            }

            throw error;
        }
    }

    private _getHeaders(): any {

        const headers: any = {

        };

        return headers;
    }

}
