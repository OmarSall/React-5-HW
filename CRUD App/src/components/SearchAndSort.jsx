import React from "react";

export function SearchAndSort({ searchTerm, setSearchTerm, sortOrder, setSortOrder }) {
    return (
        <div style={{ marginBottom: 20 }}>
            <input
                type="text"
                placeholder="Search by title or content"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginRight: 10 }}
            />
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                <option value="asc">Content length ↑</option>
                <option value="desc">Content length ↓</option>
            </select>
        </div>
    );
}
