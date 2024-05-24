import { ReactNode } from "react";

const Container = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`container mx-auto px-4 ${className}`}>{children}</div>
  );
};

export default Container;
