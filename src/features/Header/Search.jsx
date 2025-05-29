import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCategories } from "../Dashboard/dashboardSlice";
import SearchResults from "./SearchResults";

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

  // Check for empty query ---> return empty results array.
  const filtered = !query.trim()
    ? []
    : categories
        .map((category) => {
          // matching category name
          const matchedCategory = category.name
            .toLowerCase()
            .includes(debounceQ.toLowerCase());

          // matching widgets
          const matchedWidgets = category.widgets.filter((widget) =>
            widget.title.toLowerCase().includes(debounceQ.toLowerCase()),
          );

          // If any one matches then return the category details + matched/original widgets
          // or else return null

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
        className="rounded-lg border-1 border-gray-200 bg-gray-50 p-3 placeholder:text-gray-300"
      />

      <SearchResults debounceQ={debounceQ} filtered={filtered} />
    </div>
  );
}
