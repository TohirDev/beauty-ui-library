import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="flex-1m mt-[100px]">{children}</div>;
};
