"use client";

import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import { Menu } from "react-feather";

import Sidebar from "@wedding/components/Sidebar";

import usePageState from "@wedding/state/page";

const Header: FC = () => {
  const isMenuOpen = usePageState((state) => state.isMenuOpen);
  const setIsMenuOpen = usePageState((state) => state.setIsMenuOpen);

  const onClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={clsx(
          "absolute top-0 left-0 w-full z-50 flex justify-between font-header p-5",
          "dark:text-white text-primary",
          {
            hidden: isMenuOpen,
          }
        )}
      >
        <Link href="/">gabriela e lucas</Link>

        <Menu onClick={onClick} className="cursor-pointer" />
      </header>

      <Sidebar />
    </>
  );
};

export default Header;
