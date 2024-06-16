import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import Header from "@wedding/components/Header";

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
      <section className="sticky w-full h-fit">
        <Header dark />
      </section>

      <section
        style={{ height: "calc(100dvh - 4rem)" }}
        className={clsx(
          "size-full p-6 pt-16 max-w-screen-sm mx-auto",
          "flex flex-col items-center",
          className
        )}
      >
        {children}
      </section>
    </section>
  );
};

export default ContainerBase;
