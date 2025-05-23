import {useEffect, useState} from "react";

export function useFavoriteArticles() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem("favorites");
        if (stored) {
            setFavorites(JSON.parse(stored));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (id) => {
        setFavorites((previousArticle) =>
            previousArticle.includes(id) ? previousArticle.filter((favourite) => favourite !== id) : [...previousArticle, id]
        );
    };
    return {favorites, toggleFavorite};
}