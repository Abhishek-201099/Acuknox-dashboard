import { useState } from "react";
import { useDispatch } from "react-redux";
import { PlusCircleIcon } from "@heroicons/react/16/solid";

import { addNewCategory } from "../Dashboard/dashboardSlice";

export default function AddCategoryForm({ onClose }) {
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError(() => (!categoryName ? "Please enter a category name" : ""));
    if (!categoryName) return;

    dispatch(addNewCategory({ categoryName }));
    onClose();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-lg bg-gray-200 p-2"
    >
      <label
        htmlFor="categoryName"
        className="text-sm font-semibold text-gray-500 uppercase [word-spacing:4px]"
      >
        Enter category name
      </label>
      <input
        id="categoryName"
        type="text"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="e.g. Registry scan"
        className="rounded-lg border-1 border-gray-200 bg-gray-50 p-2 placeholder:text-gray-300"
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-300 p-2 text-base font-semibold transition-all hover:bg-gray-400"
      >
        <span>
          <PlusCircleIcon className="h-5 w-5" />
        </span>
        <span>Add</span>
      </button>
    </form>
  );
}
