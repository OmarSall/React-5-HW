import {useState} from "react";
import styles from "./ArticleForm.module.css";

export function ArticleForm({ createArticle }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        await createArticle({title, content});
        setTitle("");
        setContent("");
    };

    return (
        <form onSubmit={handleSubmit} className={styles["article-form"]}>
            <input
                placeholder="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <input
                placeholder="Content"
                value={content}
                onChange={(event) => setContent(event.target.value)}
            />
            <button type="submit">Add Article</button>
        </form>
    );
}