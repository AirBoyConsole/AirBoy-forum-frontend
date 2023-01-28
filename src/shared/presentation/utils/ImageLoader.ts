export default class ImageLoader {

    public static baseUrl = 'https://api.akinhet.xyz/'
    public static load(url: string) {
        return `${this.baseUrl}${url}`
    }
}
