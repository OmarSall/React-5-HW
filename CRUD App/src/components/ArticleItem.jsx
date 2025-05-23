import React from "react";

export function ArticleItem({ article, isFavorite, toggleFavorite, deleteArticle, updateArticle }) {
    return (
        <div style={{ border: "1px solid #ccc", margin: 8, padding: 8, borderRadius: 6 }}>
            <h3>
                {article.title}{" "}
                <span
                    onClick={() => toggleFavorite(article.id)}
                    style={{ cursor: "pointer", color: isFavorite ? "gold" : "gray" }}
                    title={isFavorite ? "Remove from favorites" : "Add to favorites"}
                >
          ★
        </span>
            </h3>
            <p>{article.content}</p>
            <button onClick={() => {
                const newContent = prompt("Edit content:", article.content);
                if (newContent !== null && newContent.trim() !== "") {
                    updateArticle(article.id, newContent);
                }
            }}>Edit</button>{" "}
            <button onClick={() => deleteArticle(article.id)}>Delete</button>
        </div>
    );
}
