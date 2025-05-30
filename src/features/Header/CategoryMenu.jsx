import {
  BookmarkIcon,
  PencilSquareIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteWidgetFromCategory,
  getCategories,
} from "../Dashboard/dashboardSlice";
import CategoryItem from "./CategoryItem";
import AddCategoryForm from "./AddCategoryForm";
import Overlay from "../../ui/Overlay";
import CloseBtn from "../../ui/CloseBtn";

export default function CategoryMenu() {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [openAddCat, setOpenAddCat] = useState(false);
  const [uncheckedIds, setUncheckedIds] = useState([]);

  function handleSave() {
    uncheckedIds.forEach((uncheckedId) =>
      dispatch(
        deleteWidgetFromCategory({
          categoryId: uncheckedId.categoryId,
          widgetId: uncheckedId.widgetId,
        }),
      ),
    );
  }

  return (
    <>
      <Button
        onClick={() => setIsOpenMenu((isOpenMenu) => !isOpenMenu)}
        icon={<PencilSquareIcon className="h-5 w-5" />}
      >
        Category
      </Button>

      {isOpenMenu && (
        <Overlay onClick={() => setIsOpenMenu((isOpenMenu) => !isOpenMenu)} />
      )}

      <div
        className={`absolute top-0 right-0 z-50 flex h-full w-[350px] flex-col gap-4 bg-gray-50 p-2 transition-transform duration-300 sm:w-[400px] md:w-[500px] md:p-4 ${isOpenMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-500 uppercase [word-spacing:4px]">
            Manage categories
          </h2>
          <CloseBtn
            onClick={() => setIsOpenMenu((isOpenMenu) => !isOpenMenu)}
          />
        </div>

        <div className="flex flex-col gap-4">
          {!categories.length ? (
            <p className="mb-2 text-sm text-gray-400 [word-spacing:2px]">
              No categories to show. Add a category.
            </p>
          ) : (
            categories.map((category) => (
              <CategoryItem
                key={category.id}
                category={category}
                setUncheckedIds={setUncheckedIds}
              />
            ))
          )}
        </div>

        {openAddCat && <AddCategoryForm onClose={setOpenAddCat} />}

        <div className="flex items-center justify-between p-2">
          {categories.length ? (
            <div className="flex items-center gap-4">
              <Button
                icon={<XMarkIcon className="h-5 w-5" />}
                onClick={() => setIsOpenMenu((isOpenMenu) => !isOpenMenu)}
              >
                Cancel
              </Button>
              <Button
                icon={<BookmarkIcon className="h-5 w-5" />}
                onClick={handleSave}
              >
                Confirm
              </Button>
            </div>
          ) : null}

          <Button
            onClick={() => setOpenAddCat((openAddCat) => !openAddCat)}
            icon={<PlusIcon className="h-5 w-5" />}
          >
            Category
          </Button>
        </div>
      </div>
    </>
  );
}
