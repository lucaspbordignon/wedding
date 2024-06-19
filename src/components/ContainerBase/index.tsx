import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

interface ContainerBaseProps extends PropsWithChildren {
  className?: string;
}

const ContainerBase: FC<ContainerBaseProps> = ({ className, children }) => {
  return (
    <section
      className={clsx(
        "min-h-dvh size-full bg-white relative",
        "font-sans font-extralight text-black relative",
        "text-base lg:text-lg"
      )}
    >
      <section
        className={clsx(
          "w-full h-dvh p-6 max-w-screen-sm mx-auto",
          "flex flex-1 flex-col items-center",
          "pt-24 lg:pt-32",
          className
        )}
      >
        {children}
      </section>
    </section>
  );
};

export default ContainerBase;
