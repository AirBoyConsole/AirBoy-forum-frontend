export default class ImageLoader {

    public static baseUrl = 'http://158.101.167.78:8080'
    public static load(url: string) {
        return `${this.baseUrl}${url}`
    }
}
