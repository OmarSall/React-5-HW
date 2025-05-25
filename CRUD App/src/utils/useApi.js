import { ARTICLES_API_URL } from "../constants/api";

// GET: Fetch all articles
export async function fetchArticlesAPI() {
    const response = await fetch(ARTICLES_API_URL);
    if (!response.ok) {
        throw new Error("Failed to fetch articles");
    }
    return response.json();
}

// POST: Create a new article
export async function createArticleAPI(article) {
    const response = await fetch(ARTICLES_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(article),
    });
    if (!response.ok) {
        throw new Error("Failed to create article");
    }

    return response.json();
}

// DELETE: Remove an article by ID
export async function deleteArticleAPI(id) {
    const response = await fetch(`${ARTICLES_API_URL}/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("Failed to delete article");
    }

    return;
}

// PATCH: Update an article partially
export async function updateArticleAPI(id, updatedFields) {
    const response = await fetch(`${ARTICLES_API_URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFields),
    });
    if (!response.ok) {
        throw new Error("Failed to update article");
    }

    return response.json();
}
