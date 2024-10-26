import { FC, ReactNode } from "react";
import ReactDOM from "react-dom";

interface CustomModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
  title?: string;
  width?: string;
}

const CustomModal: FC<CustomModalProps> = ({
  isOpen,
  setIsOpen,
  title,
  children,
}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black opacity-75"
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`relative bg-white rounded-lg shadow-lg z-10 lg:max-w-lg w-full lg:m-auto m-5`}
      >
        {title && (
          <div className="flex justify-between px-5 py-4 bg-primary-foreground rounded-t-lg text-white">
            <h4 className="text-lg font-semibold">This is title</h4>
            <button onClick={() => setIsOpen(false)} className="">
              ✕
            </button>
          </div>
        )}
        <div className="p-5">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default CustomModal;
