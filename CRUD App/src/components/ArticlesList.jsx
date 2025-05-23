import {useFilteredArticles} from "../hooks/useFilteredArticles";
import {useSortedArticles} from "../hooks/useSortedArticles";
import {useFavoriteArticles} from "../hooks/useFavoriteArticles";
import {useSearch} from "../hooks/useSearch";
import {useArticlesData} from "../hooks/useArticlesData";
import {useSort} from "../hooks/useSort";
import styles from "./ArticlesList.module.css";
import {ArticleItem} from "./ArticleItem";
import { Loader } from "./Loader";

export function ArticlesList() {
    const { articles, loading, error, deleteArticle, updateArticle } = useArticlesData();
    const {favorites, toggleFavorite} = useFavoriteArticles();
    const {search, setSearch} = useSearch();
    const {sortOrder, setSortOrder} = useSort();

    const filteredArticles = useFilteredArticles(articles, search);
    const sortedArticles = useSortedArticles(filteredArticles, sortOrder);

    if (loading) {
        return <Loader />;
    }

    return (
        <div>
            <input
                type="text"
                aria-label="Search articles"
                placeholder="Search by title or content"
                value={search}
                onChange={event => setSearch(event.target.value)}
                className={styles["search-input"]}
            />
            <select
                aria-label="Sort articles"
                value={sortOrder}
                onChange={event => setSortOrder(event.target.value)}
                className={styles["sort-select"]}
            >
                <option value="asc">Content length ↑</option>
                <option value="desc">Content length ↓</option>
            </select>

            <ul className={styles["articles-list"]}>
                {sortedArticles.map(article => (
                        <li key={article.id}>
                            <ArticleItem
                                article={article}
                                isFavorite={favorites.includes(article.id)}
                                toggleFavorite={toggleFavorite}
                                deleteArticle={deleteArticle}
                                updateArticle={(id, newContent) => updateArticle(id, {content: newContent})}
                            />
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}