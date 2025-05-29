import { XMarkIcon } from "@heroicons/react/16/solid";
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import CloseBtn from "./CloseBtn";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const open = setOpenName;
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  if (openName !== name) return null;

  return createPortal(
    <div className="fixed top-0 right-0 bottom-0 left-0 z-1000 backdrop-blur-sm transition-all">
      <div className="scrollbar-hide mx-auto mt-20 flex h-auto max-h-[450px] w-[360px] flex-col gap-6 overflow-scroll rounded-xl bg-gray-200 px-4 py-5 pb-8 shadow-2xl md:mt-10 md:w-[500px] md:px-10 md:py-6 lg:mt-5 lg:max-h-[600px] lg:w-[600px]">
        <div className="flex items-center justify-end">
          <CloseBtn onClick={close} />
        </div>

        {cloneElement(children, { onCloseModal: close })}
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
