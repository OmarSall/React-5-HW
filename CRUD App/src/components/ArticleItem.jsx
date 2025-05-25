import React from "react";
import styles from "./ArticleItem.module.css";

export function ArticleItem({article, isFavorite, toggleFavorite, deleteArticle, updateArticle}) {
    return (
        <div className={styles.articleItem}>
            <h3 className={styles.articleTitle}>
                {article.title}
                <span
                    onClick={() => toggleFavorite(article.id)}
                    className={`${styles.favoriteStar} ${isFavorite ? styles.favorite : ""}`}
                    title={isFavorite ? "Remove from favorites" : "Add to favorites"}
                >
                    ★
                </span>
            </h3>
            <p className={styles.articleContent}>{article.content}</p>
            <button
                onClick={() => {
                    const newContent = prompt("Edit content:", article.content);
                    if (newContent !== null && newContent.trim() !== "") {
                        updateArticle(article.id, newContent);
                    }
                }}
                className={styles.editBtn}
            >
                Edit
            </button>
            <button
                onClick={() => deleteArticle(article.id)}
                className={styles.deleteBtn}
            >
                Delete
            </button>
        </div>
    );
}
