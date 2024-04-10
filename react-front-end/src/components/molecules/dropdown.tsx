import * as React from "react";
import { ReactNode, useContext, useRef } from "react";
import { useOnClickOutside } from "../../hooks.ts";

const DropdownMenuContext = React.createContext<{
  isOpen: boolean;
  close: (event?: Event) => void;
  wrapperRef: React.RefObject<HTMLDivElement>;
  disableAutoClose: boolean;
}>({
  isOpen: false,
  wrapperRef: {} as React.RefObject<HTMLDivElement>,
  close: () => {
    // do nothing
  },
  disableAutoClose: false,
});

type Props = {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  useLIs?: boolean;
  disableAutoClose?: boolean;
};

export function DropdownMenuWrapper({
  className = "",
  children,
  isOpen,
  setIsOpen,
  useLIs = false,
  disableAutoClose = false,
}: Props) {
  const wrapperRef = useRef(null);
  const close = () => setIsOpen(false);
  className = `relative ${className}`;

  const contextValue = {
    close,
    wrapperRef,
    isOpen,
    disableAutoClose,
  };

  if (useLIs) {
    return (
      <li ref={wrapperRef} className={className}>
        <DropdownMenuContext.Provider value={contextValue}>
          {children}
        </DropdownMenuContext.Provider>
      </li>
    );
  }

  return (
    <div ref={wrapperRef} className={className}>
      <DropdownMenuContext.Provider value={contextValue}>
        {children}
      </DropdownMenuContext.Provider>
    </div>
  );
}

export function DropdownMenu({
  children,
  className,
  onClose = () => {
    // do nothing
  },
}: {
  children: ReactNode;
  className?: string;
  onClose?: (event?: Event) => void;
}) {
  const { isOpen, wrapperRef, close, disableAutoClose } =
    useContext(DropdownMenuContext);

  React.useEffect(() => {
    const closeOnEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        close(event);
        onClose(event);
      }
    };
    document.addEventListener("keyup", closeOnEsc);

    return () => {
      document.removeEventListener("keyup", closeOnEsc);
    };
  }, [isOpen, close, onClose]);

  useOnClickOutside(wrapperRef, (event) => {
    if (isOpen && !disableAutoClose) {
      close(event);
      onClose(event);
    }
  });
  if (!isOpen) return null;

  return <div className={`absolute z-10 ${className}`}>{children}</div>;
}
