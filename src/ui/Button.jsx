import { PlusIcon } from "@heroicons/react/16/solid";

export default function Button({ onClick, icon, children }) {
  return (
    <button
      onClick={onClick}
      className="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-400 bg-gray-50 p-2 text-gray-600 transition-all hover:bg-gray-200"
    >
      <span>{icon}</span>
      <span className="text-sm font-semibold">{children}</span>
    </button>
  );
}
