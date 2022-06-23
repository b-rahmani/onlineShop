import { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const SidebarContext = createContext({
  isOpen: false,
  sidebarTogglehandler: () => {},
  sidebarCloseHandler: () => {},
});

export const SidebarProvider = ({ children }: Props) => {
  const [isOpen, SetIsOPen] = useState<boolean>(false);

  const sidebarTogglehandler = () => {
    SetIsOPen((prev) => !prev);
  };

  const sidebarCloseHandler = () => {
    SetIsOPen(false);
  };

  const ctx = { sidebarCloseHandler, sidebarTogglehandler, isOpen };

  return (
    <SidebarContext.Provider value={ctx}>{children}</SidebarContext.Provider>
  );
};

export default SidebarContext;
