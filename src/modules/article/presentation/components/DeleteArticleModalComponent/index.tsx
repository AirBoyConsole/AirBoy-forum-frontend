import React, {Dispatch, SetStateAction} from "react";
import styles from "./styles.module.scss";

interface DeleteArticleModalComponent {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    onDelete: (...args: any[]) => void;
}

function DeleteArticleModalComponent({open, setOpen, onDelete}: DeleteArticleModalComponent): JSX.Element {

    if(!open) {
        return <></>;
    }

    return (
        <div className={styles.background}>
            <div className={styles.box}>
                <h3>Are you sure you want to delete this article?</h3>
                <p>If you will delete this article you wouldn't have ability to restore it.</p>
                <div className={styles.buttons}>
                    <button onClick={() => setOpen(false)}>Close</button>
                    <button onClick={onDelete}>Delete </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteArticleModalComponent;