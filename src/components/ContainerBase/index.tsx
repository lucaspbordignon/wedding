"use client";

import { animated, useSpringRef, useTransition } from "@react-spring/web";
import clsx from "clsx";
import { FC, PropsWithChildren, useEffect } from "react";

interface ContainerBaseProps extends PropsWithChildren {
  className?: string;
  wide?: boolean;
}

const ContainerBase: FC<ContainerBaseProps> = ({
  className,
  wide = false,
  children,
}) => {
  const ref = useSpringRef();

  const transitions = useTransition(0, {
    ref,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const initializeAnimation = () => {
    ref.start();
  };

  useEffect(initializeAnimation, []);

  return (
    <section
      className={clsx(
        "min-h-dvh size-full bg-white relative",
        "font-sans font-extralight text-black relative",
        "text-base lg:text-lg"
      )}
    >
      {transitions((style) => (
        <animated.div
          style={style}
          className={clsx(
            "w-full h-dvh p-6 mx-auto",
            "flex flex-1 flex-col items-center",
            "pt-24 lg:pt-32",
            {
              "max-w-screen-lg": wide,
              "max-w-screen-sm": !wide,
            },
            className
          )}
        >
          {children}
        </animated.div>
      ))}
    </section>
  );
};

export default ContainerBase;
