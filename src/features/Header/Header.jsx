import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/16/solid";
import Modal from "../../ui/Modal";
import GlobalAddWidgetForm from "../Dashboard/GlobalAddWidgetForm";
import CategoryMenu from "./CategoryMenu";
import Button from "../../ui/Button";
import SearchBtn from "./SearchBtn";
import Search from "./Search";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Modal>
        <h1 className="text-2xl font-semibold">Dashboard</h1>

        <Modal.Open opens="searchForm">
          <SearchBtn />
        </Modal.Open>

        <div className="flex items-center gap-4">
          <Modal.Open opens="globalAddWidgetForm">
            <Button icon={<PlusIcon className="h-5 w-5" />}>Add widget</Button>
          </Modal.Open>

          <CategoryMenu />
        </div>

        <Modal.Window name="searchForm">
          <Search />
        </Modal.Window>

        <Modal.Window name="globalAddWidgetForm">
          <GlobalAddWidgetForm isGlobal={true} />
        </Modal.Window>
      </Modal>
    </header>
  );
}
