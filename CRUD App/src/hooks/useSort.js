import { useState } from "react";

export function useSort() {
    const [sortOrder, setSortOrder] = useState("asc");
    return { sortOrder, setSortOrder };
}