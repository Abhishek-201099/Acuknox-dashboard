import { PlusIcon } from "@heroicons/react/16/solid";

import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import Widget from "./Widget";
import GlobalAddWidgetForm from "./GlobalAddWidgetForm";

export default function Category({ category }) {
  return (
    <div className="flex flex-col gap-4 p-2">
      <h2 className="text-lg font-semibold text-gray-600">{category.name}</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {category.widgets.map((widget) => (
          <Widget key={widget.id} widget={widget} category={category} />
        ))}
        <div className="flex min-h-[200px] items-center justify-center rounded-xl bg-gray-50 p-4">
          <Modal>
            <Modal.Open opens="addWidgetForm">
              <Button icon={<PlusIcon className="h-5 w-5" />}>
                Add widget
              </Button>
            </Modal.Open>
            <Modal.Window name="addWidgetForm">
              <GlobalAddWidgetForm isGlobal={false} categoryCur={category} />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    </div>
  );
}
