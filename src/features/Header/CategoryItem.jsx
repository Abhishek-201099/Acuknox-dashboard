import {
  ChevronDownIcon,
  ChevronUpIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../Dashboard/dashboardSlice";

export default function CategoryItem({ category, setUncheckedIds }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  function checkUnchecked(uncheckedIds, widgetId) {
    return uncheckedIds.some(
      (uncheckedId) => uncheckedId.widgetId === widgetId,
    );
  }

  function handleClick(widgetId) {
    setUncheckedIds((uncheckedIds) => {
      if (checkUnchecked(uncheckedIds, widgetId)) {
        return uncheckedIds.filter((id) => id.widgetId !== widgetId);
      }

      return [...uncheckedIds, { categoryId: category.id, widgetId }];
    });
  }

  function handleDelCat() {
    dispatch(deleteCategory({ categoryId: category.id }));
  }

  return (
    <div>
      <div className="flex items-center gap-2">
        <div
          className="flex flex-1 cursor-pointer items-center justify-between rounded-md bg-gray-200 p-2 transition-all hover:bg-gray-300"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          <span className="text-base">{category.name}</span>
          <span>
            {isOpen ? (
              <ChevronUpIcon className="h-6 w-6" />
            ) : (
              <ChevronDownIcon className="h-6 w-6" />
            )}
          </span>
        </div>

        <div
          onClick={handleDelCat}
          className="cursor-pointer rounded-md bg-gray-200 p-2 text-gray-500 transition-all hover:text-gray-400"
        >
          <TrashIcon className="h-5 w-5" />
        </div>
      </div>

      {isOpen && (
        <div>
          {!category.widgets.length ? (
            <div className="bg-gray-100 px-2 py-4 text-sm text-gray-400">
              No widgets to show. Please add widget.
            </div>
          ) : (
            category.widgets.map((widget) => {
              return (
                <div
                  key={widget.id}
                  className="flex items-center gap-4 bg-gray-100 p-2"
                >
                  <input
                    type="checkbox"
                    id={widget.id}
                    defaultChecked={true}
                    onClick={() => handleClick(widget.id)}
                  />
                  <label htmlFor={widget.id} className="text-sm">
                    {widget.title}
                  </label>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
