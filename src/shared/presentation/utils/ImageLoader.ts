export default class ImageLoader {

    public static baseUrl = 'https://forum.akinhet.xyz'
    public static load(url: string) {
        return `${this.baseUrl}${url}`
    }
}
