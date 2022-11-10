import axios from "axios";
import {Configuration} from "./Configuration";

export class ConfigurationLoader {

    public static async get(): Promise<Configuration> {
        const fileName = 'app.config.json';

        try {
            const response = await axios.get<Configuration>(`../${fileName}`);

            return response.data;

        } catch (error) {

            throw error;
        }
    }
}
