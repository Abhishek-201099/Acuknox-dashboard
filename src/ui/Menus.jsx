import {
  EllipsisVerticalIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";
import { createContext, useState, useContext } from "react";

const MenusContext = createContext();

export default function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id, direction }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  function handleToggle(e) {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x + 20,
      y: rect.y + rect.height + 10,
    });

    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <button
      onClick={handleToggle}
      className="translate-x-2 transform cursor-pointer rounded-sm text-gray-600 transition-all duration-200"
    >
      {direction === "vertical" ? (
        <EllipsisVerticalIcon className="h-10 w-10" />
      ) : (
        <EllipsisHorizontalIcon className="h-10 w-10" />
      )}
    </button>
  );
}

function List({ id, children }) {
  const { openId, position } = useContext(MenusContext);

  if (openId !== id) return null;

  return (
    <ul
      className="fixed overflow-hidden rounded-md shadow-lg"
      style={{ top: `${position.y}px`, right: `${position.x}px` }}
    >
      {children}
    </ul>
  );
}

function Button({ icon, children, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <button
        onClick={handleClick}
        className="flex w-full cursor-pointer items-center gap-4 border-none bg-gray-200 p-4 text-sm font-semibold text-gray-800 transition-all [word-spacing:4px] hover:bg-gray-100"
      >
        {icon}
        <span>{children}</span>
      </button>
    </li>
  );
}

Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;
