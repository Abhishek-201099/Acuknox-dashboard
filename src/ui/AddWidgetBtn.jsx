import { PlusIcon } from "@heroicons/react/16/solid";

export default function AddWidgetBtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-400 bg-gray-50 p-2 text-gray-600 transition-all hover:bg-gray-200"
    >
      <span>
        <PlusIcon className="h-5 w-5" />
      </span>
      <span className="text-sm font-semibold">Add widget</span>
    </button>
  );
}
