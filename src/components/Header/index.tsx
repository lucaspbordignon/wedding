"use client";

import usePageState from "@wedding/state/page";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import { Menu } from "react-feather";

interface HeaderProps {
  dark?: boolean;
}

const Header: FC<HeaderProps> = ({ dark = false }) => {
  const isMenuOpen = usePageState((state) => state.isMenuOpen);
  const setIsMenuOpen = usePageState((state) => state.setIsMenuOpen);

  const onClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={clsx("flex justify-between font-header p-5", {
        "text-primary": dark,
      })}
    >
      <Link href="/preview">gabriela e lucas</Link>

      <Menu onClick={onClick} className="cursor-pointer" />
    </header>
  );
};

export default Header;
