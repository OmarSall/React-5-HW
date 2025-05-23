import { useState, useCallback } from "react";

export function useArticleForm(onSubmit) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if (!title.trim() || !content.trim()) return;
            onSubmit({ title, content });
            setTitle("");
            setContent("");
        },
        [title, content, onSubmit]
    );

    return {
        title,
        content,
        setTitle,
        setContent,
        handleSubmit,
    };
}
