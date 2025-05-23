import { useMemo } from "react";

export function useFilteredArticles(articles, search) {
    return useMemo(() => {
        if (!search) {
            return articles;
        }
        return articles.filter((article) =>
            (article.title + article.content).toLowerCase().includes(search.toLowerCase())
        );
    },[articles, search]);
}