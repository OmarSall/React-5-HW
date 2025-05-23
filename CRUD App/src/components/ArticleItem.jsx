import React from "react";
import styles from "./ArticleItem.module.css";

export function ArticleItem({ article, isFavorite, toggleFavorite, deleteArticle, updateArticle }) {
    return (
        <div className={styles["article-item"]}>
            <h3 className={styles["article-title"]}>
                {article.title}{" "}
                <span
                    onClick={() => toggleFavorite(article.id)}
                    className={`favorite-star ${isFavorite ? "favorite" : ""}`}
                    title={isFavorite ? "Remove from favorites" : "Add to favorites"}
                >
                    ★
                </span>
            </h3>
            <p className={styles["article-content"]}>{article.content}</p>
            <button onClick={() => {
                const newContent = prompt("Edit content:", article.content);
                if (newContent !== null && newContent.trim() !== "") {
                    updateArticle(article.id, newContent);
                }
            }}>Edit</button>{" "}
            <button onClick={() => deleteArticle(article.id)} className={styles["delete-btn"]}>
                Delete
            </button>
        </div>
    );
}
