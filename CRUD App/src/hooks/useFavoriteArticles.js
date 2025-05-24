import { useEffect, useState } from "react";
import { loadFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";

const FAVORITES_KEY = "favorites";

export function useFavoriteArticles() {
    const [favorites, setFavorites] = useState(() => {
        const stored = loadFromLocalStorage(FAVORITES_KEY);
        return stored || [];
    });

    useEffect(() => {
        saveToLocalStorage(FAVORITES_KEY, favorites);
    }, [favorites]);

    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
        );
    };

    return { favorites, toggleFavorite };
}