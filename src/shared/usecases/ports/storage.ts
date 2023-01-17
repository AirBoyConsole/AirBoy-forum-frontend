export default interface Storage {
    save(key: string, value: string): void;
    get(key: string): string;
}
