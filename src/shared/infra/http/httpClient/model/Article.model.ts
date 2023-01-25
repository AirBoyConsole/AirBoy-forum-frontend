import UserModel from "./User.model";

export default interface ArticleModel {
    id: number;
    title: string;
    content: string;
    download_url: string;
    added: string;
    last_edit: string;
    author: UserModel;
    tags: string[];
    views: number;
    file: any;
    image_url: string;
    image: any;
}
