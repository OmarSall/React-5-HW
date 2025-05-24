import "./App.css"
import {ArticlesList} from "./components/ArticlesList"
import {ArticleForm} from "./components/ArticleForm"
import {useArticlesData} from "./hooks/useArticlesData";

function App() {
    const {
        articles,
        loading,
        error,
        createArticle,
        deleteArticle,
        updateArticle,
    } = useArticlesData();
    return (
        <main className="app-container">
            <h1>Articles CRUD App</h1>
            <ArticleForm createArticle={createArticle}/>
            <ArticlesList
                articles={articles}
                loading={loading}
                error={error}
                deleteArticle={deleteArticle}
                updateArticle={updateArticle}/>
        </main>
    );
}

export default App
