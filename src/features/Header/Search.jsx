import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import SearchResults from "./SearchResults";
import { getCategories } from "../Dashboard/dashboardSlice";

export default function Search() {
  const categories = useSelector(getCategories);
  const [query, setQuery] = useState("");
  const [debounceQ, setDebounceQ] = useState("");

  useEffect(
    function () {
      const timeout = setTimeout(() => {
        setDebounceQ(query);
      }, 1000);

      return () => clearTimeout(timeout);
    },
    [query],
  );

  const filtered = !debounceQ.trim()
    ? []
    : categories
        .map((category) => {
          const matchedCategory = category.name
            .toLowerCase()
            .includes(debounceQ.toLowerCase());

          const matchedWidgets = category.widgets.filter((widget) =>
            widget.title.toLowerCase().includes(debounceQ.toLowerCase()),
          );

          if (matchedCategory || matchedWidgets.length > 0) {
            return {
              ...category,
              widgets: matchedCategory ? category.widgets : matchedWidgets,
            };
          }

          return null;
        })
        .filter(Boolean);

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search anything..."
        className="rounded-lg border-2 border-gray-400 bg-gray-50 p-3 placeholder:text-gray-400"
      />

      <SearchResults debounceQ={debounceQ} filtered={filtered} />
    </div>
  );
}
