import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/16/solid";

import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import Menus from "../../ui/Menus";
import Search from "./Search";
import SearchBtn from "./SearchBtn";
import CategoryMenu from "./CategoryMenu";
import GlobalAddWidgetForm from "../Dashboard/GlobalAddWidgetForm";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Modal>
        <h1 className="text-2xl font-semibold">Dashboard</h1>

        <Modal.Open opens="searchForm">
          <SearchBtn />
        </Modal.Open>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden md:block">
            <Modal.Open opens="globalAddWidgetForm">
              <Button icon={<PlusIcon className="h-5 w-5" />}>
                Add widget
              </Button>
            </Modal.Open>
          </div>

          <CategoryMenu />

          <div className="md:hidden">
            <Menus>
              <Menus.Toggle id="headerNav" direction="vertical" />

              <Menus.List id="headerNav">
                <Modal.Open opens="searchForm">
                  <Menus.Button
                    icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  >
                    Search
                  </Menus.Button>
                </Modal.Open>

                <Modal.Open opens="globalAddWidgetForm">
                  <Menus.Button icon={<PlusIcon className="h-5 w-5" />}>
                    Add Widget
                  </Menus.Button>
                </Modal.Open>
              </Menus.List>
            </Menus>
          </div>
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
