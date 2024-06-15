"use client";

import usePageState from "@wedding/state/page";
import clsx from "clsx";
import { FC } from "react";
import { X } from "react-feather";

const Sidebar: FC = () => {
  const isMenuOpen = usePageState((state) => state.isMenuOpen);
  const setIsMenuOpen = usePageState((state) => state.setIsMenuOpen);

  const onClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <aside
      className={clsx(
        "absolute inset-0 bg-white text-primary",
        "transition-all duration-300 ease-in-out h-screen w-screen",
        "flex flex-col items-center justify-center",
        {
          "opacity-0 -z-10": !isMenuOpen,
          "opacity-100 z-50": isMenuOpen,
        }
      )}
    >
      <header className="flex justify-between size-full font-header p-5">
        <p>gabriela e lucas</p>

        <X onClick={onClose} className="cursor-pointer" />
      </header>

      <nav className="flex flex-col gap-y-6 pb-20 font-sans font-extralight text-lg">
        <a href="#">INÍCIO</a>

        <a href="#">PROGRAMAÇÃO</a>

        <a href="#">LOCAL</a>

        <a href="#">PRESENÇA</a>

        <a href="#">ESTADIA</a>

        <a href="#">PRESENTES</a>

        <a href="#">GALERIA</a>

        <a href="#">PADRINHOS</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
