"use client";

import cn from "classnames";
import { FC, useEffect, useState } from "react";
import Logo from "@wedding/app/components/Logo";

const FIRST_STAGE_CLASSNAMES = "transition-opacity duration-1000";
const SECOND_STAGE_CLASSNAMES = "transition-opacity delay-1000 duration-2000";
const THIRD_STAGE_CLASSNAMES = "transition-opacity delay-3000 duration-2000";

interface SaveTheDateContentProps {
  animationStarted: boolean;
}

const SaveTheDateContent: FC<SaveTheDateContentProps> = ({
  animationStarted = false,
}) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (!animationStarted) return;

    setOpacity(1);
  }, [animationStarted]);

  return (
    <section className="flex flex-col w-full h-screen items-center justify-center gap-20 pt-8">
      <section
        key="navbar"
        className={cn("fixed top-0 w-full", SECOND_STAGE_CLASSNAMES)}
        style={{ opacity }}
      >
        <Logo className="m-6" />
      </section>

      <div className="grid grid-cols-12 gap-4">
        <div
          className={cn("relative col-span-2", SECOND_STAGE_CLASSNAMES)}
          style={{ opacity }}
        >
          <div
            className={cn(
              "absolute -rotate-90 font-sans text-lg font-light tracking-[.35rem]",
              "top-14 -left-32 w-64"
            )}
          >
            SAVE THE DATE
          </div>
        </div>

        <div className="col-span-10 flex flex-col justify-center text-7xl">
          <h1
            className={cn("-mb-3", SECOND_STAGE_CLASSNAMES)}
            style={{ opacity }}
          >
            29
          </h1>
          <h1 className={FIRST_STAGE_CLASSNAMES} style={{ opacity }}>
            mar
          </h1>
          <h1 className={SECOND_STAGE_CLASSNAMES} style={{ opacity }}>
            25
          </h1>
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col items-center justify-center font-sans gap-1",
          THIRD_STAGE_CLASSNAMES
        )}
        style={{ opacity }}
      >
        <p className="text-2xl font-medium">Gabriela & Lucas</p>
        <p className="text-xl font-light">Florianópolis - SC</p>
      </div>
    </section>
  );
};

export default SaveTheDateContent;
