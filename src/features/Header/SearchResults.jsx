export default function SearchResults({ debounceQ, filtered }) {
  return (
    <div className="flex flex-col gap-4">
      {debounceQ && filtered.length === 0 && (
        <p className="p-2 text-sm text-gray-500">No results found.</p>
      )}

      {filtered.map((category) => (
        <div key={category.id} className="flex flex-col gap-2">
          <h3 className="text-base text-gray-500 uppercase [word-spacing:4px]">
            {category.name}
          </h3>
          <div className="flex flex-col gap-2">
            {category.widgets.map((widget, index) => (
              <div
                key={widget.id}
                className="text-sm text-gray-400 [word-spacing:4px]"
              >
                {index + 1}. {widget.title}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
