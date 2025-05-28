import AddWidgetBtn from "../../ui/AddWidgetBtn";
import Modal from "../../ui/Modal";
import GlobalAddWidgetForm from "./GlobalAddWidgetForm";
import Widget from "./Widget";

export default function Category({ category }) {
  return (
    <div className="flex flex-col gap-4 p-2">
      <h2 className="text-lg font-semibold text-gray-600">{category.name}</h2>

      <div className="grid grid-cols-3 gap-6">
        {category.widgets.map((widget) => (
          <Widget key={widget.id} widget={widget} category={category} />
        ))}
        <div className="flex min-h-[200px] items-center justify-center rounded-xl bg-gray-50 p-4">
          <Modal>
            <Modal.Open opens="addWidgetForm">
              <AddWidgetBtn />
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
