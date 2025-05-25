import { useMemo } from "react";

export function useSortedArticles(articles, sortOrder) {
    return useMemo(() => {
        return [...articles].sort((articleA, articleB) => {
           const lengthArticleA = articleA.content.length;
           const lengthArticleB = articleB.content.length;

           return sortOrder === "asc" ? lengthArticleA - lengthArticleB : lengthArticleB - lengthArticleA;
        });
    },[articles, sortOrder]);
}