import React, {useEffect, useState} from "react";
import styles from './styles.module.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {useAddArticle} from "../../hooks/useAddArticle";
import {useForm} from "react-hook-form";
import LoginRequestModel from "../../../../../shared/infra/http/httpClient/model/LoginRequest.model";
import ArticleModel from "../../../../../shared/infra/http/httpClient/model/Article.model";
import {TagsInput} from "react-tag-input-component";

function Upload(): JSX.Element {
    const [quillState, setQuillState] = useState<any>('');
    const [tags, setTags] = useState<string[]>([]);

    const {add, isLoading} = useAddArticle();

    const {
        handleSubmit,
        register,
        setValue
    } = useForm<ArticleModel>();

    useEffect(() => {
        register("content");
    }, [register]);

    useEffect(() => {
        setValue("content", quillState);
        setValue("tags", tags);
    }, [quillState, tags]);

    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],

        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['link', 'image'],

        ['clean']
    ]

    return (
        <main className={styles.main} onSubmit={handleSubmit(add)}>

            <form>
                <label>Title</label>
                <br/><br/>
                <input type="text" className={styles.title} {...register("title")}/>
                <br/><br/>

                <label>Content</label>
                <br/><br/>
                <ReactQuill theme="snow"
                            value={quillState}
                            modules={{toolbar: toolbarOptions}}
                            onChange={setQuillState}
                            />

                <br/><br/>

                <label htmlFor="file" className={styles.drop_container}>
                    <span className={styles.drop_title}>Drop article file here</span>
                    or
                    <input type="file" id='file' accept="*" required {...register("file")}/>
                </label>
                <br/><br/>
                <label htmlFor="image" className={styles.drop_container}>
                    <span className={styles.drop_title}>Drop article image here</span>
                    or
                    <input type="file" id='image' accept="image/*" required />
                </label>
                <br/><br/>

                <label>Tags (separated by enter)</label>
                <br/><br/>
                <TagsInput
                    value={tags}
                    onChange={setTags}
                    name="tags"
                    placeHolder="enter tags"
                />
                <br/><br/>

                <input type="submit" className={styles.submit} value="Submit article"/>
            </form>
        </main>
    );
}

export default Upload;
