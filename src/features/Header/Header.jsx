import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/16/solid";
import Modal from "../../ui/Modal";
import GlobalAddWidgetForm from "../Dashboard/GlobalAddWidgetForm";
import CategoryMenu from "./CategoryMenu";
import Button from "../../ui/Button";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      {/* Search bar */}
      <div className="flex cursor-pointer items-center gap-4 rounded-md border-2 border-gray-400 bg-gray-50 px-8 py-1 text-gray-500 transition-all hover:bg-gray-200 hover:text-gray-500">
        <span>
          <MagnifyingGlassIcon className="h-5 w-5" />
        </span>
        <span className="text-base">Search</span>
      </div>

      <div className="flex items-center gap-4">
        <Modal>
          <Modal.Open opens="globalAddWidgetForm">
            <Button icon={<PlusIcon className="h-5 w-5" />}>Add widget</Button>
          </Modal.Open>
          <Modal.Window name="globalAddWidgetForm">
            <GlobalAddWidgetForm isGlobal={true} />
          </Modal.Window>
        </Modal>

        <CategoryMenu />
      </div>
    </header>
  );
}
