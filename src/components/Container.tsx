import { ReactNode } from "react";

type TContainer = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainer) => {
  return (
    <section
      className={`w-full sm:max-w-3xl md:max-w-4xl lg:max-w-[80rem] mx-auto ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
