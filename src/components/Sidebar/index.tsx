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
        "text-base lg:text-lg",
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

      <nav className="flex flex-col h-full justify-between pb-20 font-sans font-normal tracking-widest text-lg">
        <Link
          className="hover:underline"
          href="/preview#home"
          onClick={onClose}
        >
          INÍCIO
        </Link>

        <Link
          className="hover:underline"
          href="/preview#schedule"
          onClick={onClose}
        >
          PROGRAMAÇÃO
        </Link>

        <Link className="hover:underline" href="/location" onClick={onClose}>
          LOCAL
        </Link>

        <Link className="hover:underline" href="/rsvp" onClick={onClose}>
          PRESENÇA
        </Link>

        <Link className="hover:underline" href="/hotels" onClick={onClose}>
          ESTADIA
        </Link>

        <Link className="hover:underline" href="/gifts" onClick={onClose}>
          PRESENTES
        </Link>

        <Link className="hover:underline" href="/galeria" onClick={onClose}>
          GALERIA
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
