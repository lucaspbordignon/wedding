"use client";

import cn from "classnames";
import { useEffect, useState } from "react";

const SaveTheDateContent = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);
  }, []);

  return (
    <section className="flex flex-col w-full h-screen items-center justify-center gap-20 pt-8">
      <div
        className={cn(
          "grid grid-cols-12 gap-4",
          "transition-opacity duration-1000"
        )}
        style={{ opacity }}
      >
        <div className="relative col-span-2">
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
          <h1 className="-mb-3">29</h1>
          <h1>mar</h1>
          <h1>25</h1>
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col items-center justify-center font-sans gap-1",
          "transition-opacity delay-1000 duration-1000"
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
