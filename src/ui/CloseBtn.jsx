import { XMarkIcon } from "@heroicons/react/16/solid";

export default function CloseBtn({ onClick }) {
  return (
    <button
      className="cursor-pointer text-gray-400 transition-all hover:text-gray-500"
      onClick={onClick}
    >
      <XMarkIcon className="h-6 w-6" />
    </button>
  );
}
