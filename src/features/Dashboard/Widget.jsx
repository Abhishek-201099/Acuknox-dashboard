import { XMarkIcon } from "@heroicons/react/16/solid";
import { useDispatch } from "react-redux";
import { deleteWidgetFromCategory } from "./dashboardSlice";
import CloseBtn from "../../ui/CloseBtn";

export default function Widget({ widget, category }) {
  const dispatch = useDispatch();

  return (
    <div className="flex min-h-[200px] flex-col gap-6 rounded-xl bg-gray-50 p-4 transition-all hover:bg-gray-100">
      <div className="flex items-center justify-between">
        <h3>{widget.title}</h3>

        <CloseBtn
          onClick={() =>
            dispatch(
              deleteWidgetFromCategory({
                categoryId: category.id,
                widgetId: widget.id,
              }),
            )
          }
        />
      </div>
      <p>{widget.content}</p>
    </div>
  );
}
