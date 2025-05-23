import { useMemo } from "react";

export function useFilteredArticles(articles, search) {
    return useMemo(() => {
        return articles.filter((article) =>
            (article.title + article.content).toLowerCase().includes(search.toLowerCase())
        );
    },[articles, search]);
}