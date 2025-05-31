import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { PlusIcon } from "@heroicons/react/16/solid";

import { addWidgetToCategory, getCategories } from "./dashboardSlice";

export default function GlobalAddWidgetForm({
  isGlobal,
  categoryCur,
  onCloseModal,
}) {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const [category, setCategory] = useState(categories[0]?.id || "");
  const [widgetTitle, setWidgetTitle] = useState("");
  const [widgetContent, setWidgetContent] = useState("");
  const [errors, setErrors] = useState({ widgetTitle: "", widgetContent: "" });

  function handleSubmit(e) {
    e.preventDefault();
    const modErrors = {
      widgetTitle: widgetTitle ? "" : "Please enter the title",
      widgetContent: widgetContent ? "" : "Please enter the content",
    };
    setErrors(modErrors);

    if (!widgetTitle || !widgetContent) return;

    isGlobal
      ? dispatch(
          addWidgetToCategory({
            categoryId: category,
            widgetTitle,
            widgetContent,
          }),
        )
      : dispatch(
          addWidgetToCategory({
            categoryId: categoryCur.id,
            widgetTitle,
            widgetContent,
          }),
        );

    onCloseModal();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 bg-gray-100">
      <h3 className="text-xl font-semibold text-gray-500 uppercase">
        {isGlobal ? "Add widget" : categoryCur.name}
      </h3>

      {isGlobal && (
        <div className="flex flex-col gap-4">
          <label
            htmlFor="category"
            className="font-semibold text-gray-700 uppercase [word-spacing:4px]"
          >
            Select category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg border-2 border-gray-200 bg-gray-50 p-2 placeholder:text-gray-300"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="flex flex-col gap-4">
        <label
          htmlFor="title"
          className="font-semibold text-gray-700 uppercase [word-spacing:4px]"
        >
          Widget title
        </label>
        <input
          type="text"
          id="title"
          placeholder="e.g. Aggregate data"
          value={widgetTitle}
          onChange={(e) => setWidgetTitle(e.target.value)}
          className="rounded-lg border-2 border-gray-200 bg-gray-50 p-2 placeholder:text-gray-300"
        />
        {errors.widgetTitle && (
          <p className="text-sm text-red-600">{errors.widgetTitle}</p>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <label
          htmlFor="content"
          className="font-semibold text-gray-700 uppercase [word-spacing:4px]"
        >
          Widget content
        </label>
        <input
          type="text"
          id="content"
          placeholder="e.g Data calculated as ..."
          value={widgetContent}
          onChange={(e) => setWidgetContent(e.target.value)}
          className="rounded-lg border-2 border-gray-200 bg-gray-50 p-2 placeholder:text-gray-300"
        />
        {errors.widgetContent && (
          <p className="text-sm text-red-600">{errors.widgetContent}</p>
        )}
      </div>

      <button
        type="submit"
        className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-300 p-2 text-base font-semibold transition-all hover:bg-gray-200"
      >
        <span>
          <PlusIcon className="h-6 w-6" />
        </span>
        <span>Add widget</span>
      </button>
    </form>
  );
}
