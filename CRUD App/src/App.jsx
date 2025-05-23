import "./App.css"
import { ArticlesList } from "./components/ArticlesList"
import { ArticleForm } from "./components/ArticleForm"


function App() {
  return (
      <main className="app-container">
        <h1>Articles CRUD App</h1>
        <ArticleForm />
        <ArticlesList />
      </main>
  );
}

export default App
