import {useFilteredArticles} from "../hooks/useFilteredArticles";
import {useSortedArticles} from "../hooks/useSortedArticles";
import {useFavoriteArticles} from "../hooks/useFavoriteArticles";
import {useSearch} from "../hooks/useSearch";
import {useArticlesData} from "../hooks/useArticlesData";
import {useSort} from "../hooks/useSort";
import "./ArticlesList.module.css";

export function ArticlesList() {
    const {articles, deleteArticle, updateArticle} = useArticlesData();
    const {favorites, toggleFavorite} = useFavoriteArticles();
    const {search, setSearch} = useSearch();
    const {sortOrder, setSortOrder} = useSort();

    const filteredArticles = useFilteredArticles(articles, search);
    const sortedArticles = useSortedArticles(filteredArticles, sortOrder);

    return (
        <div>
            <input
                placeholder="Search by title or content"
                value={search}
                onChange={event => setSearch(event.target.value)}
            />
            <select
                value={sortOrder}
                onChange={event => setSortOrder(event.target.value)}
            >
                <option value="asc">Sort by length: Ascending</option>
                <option value="desc">Sort by length: Descending</option>
            </select>

            <ul className="articles-list">
                {sortedArticles.map(article => (
                        <li key={article.id}>
                            <h2>{article.title}</h2>
                            <p>{article.content}</p>
                            <button onClick={() => deleteArticle(article.id)}>Delete</button>
                            <button onClick={() => updateArticle(article.id)}>Edit</button>
                            <span
                                className="favorite-icon"
                                onClick={() => toggleFavorite(article.id)}
                            >
                            {favorites.includes(article.id) ? "⭐" : "☆"}
                        </span>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}