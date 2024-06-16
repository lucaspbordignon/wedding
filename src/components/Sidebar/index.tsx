"use client";

import usePageState from "@wedding/state/page";
import clsx from "clsx";
import Link from "next/link";
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
        "transition-all duration-300 ease-in-out h-dvh w-screen",
        "flex flex-col items-center justify-start gap-y-20",
        {
          "opacity-0 -z-10": !isMenuOpen,
          "opacity-100 z-50": isMenuOpen,
        }
      )}
    >
      <header className="flex justify-between w-full h-fit font-header p-5">
        <p>gabriela e lucas</p>

        <X onClick={onClose} className="cursor-pointer" />
      </header>

      <nav
        className="flex flex-col h-full justify-between pb-20 font-sans font-normal tracking-widest text-lg"
        onClick={onClose}
      >
        <Link href="/preview">INÍCIO</Link>

        <Link href="/preview#schedule">PROGRAMAÇÃO</Link>

        <Link href="/location">LOCAL</Link>

        <Link href="/rsvp">PRESENÇA</Link>

        <Link href="/hotels">ESTADIA</Link>

        <Link href="/gifts">PRESENTES</Link>

        <Link href="/galeria">GALERIA</Link>

        <Link href="/maids-of-honor">PADRINHOS</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
