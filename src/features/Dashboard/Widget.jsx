import { XMarkIcon } from "@heroicons/react/16/solid";
import { useDispatch } from "react-redux";
import { deleteWidgetFromCategory } from "./dashboardSlice";

export default function Widget({ widget, category }) {
  const dispatch = useDispatch();

  return (
    <div className="flex min-h-[200px] flex-col gap-6 rounded-xl bg-gray-50 p-4 transition-all hover:bg-gray-100">
      <div className="flex items-center justify-between">
        <h3>{widget.title}</h3>

        <button
          className="cursor-pointer"
          onClick={() =>
            dispatch(
              deleteWidgetFromCategory({
                categoryId: category.id,
                widgetId: widget.id,
              }),
            )
          }
        >
          <XMarkIcon className="h-6 w-6 text-gray-400" />
        </button>
      </div>
      <p>{widget.content}</p>
    </div>
  );
}
