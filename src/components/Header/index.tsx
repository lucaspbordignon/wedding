"use client";

import usePageState from "@wedding/state/page";
import Link from "next/link";
import { Menu } from "react-feather";

/* TODO: @lucas - Make text-primary when on top of a white background */
const Header = () => {
  const isMenuOpen = usePageState((state) => state.isMenuOpen);
  const setIsMenuOpen = usePageState((state) => state.setIsMenuOpen);

  const onClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between font-header p-5">
      <Link href="/preview">gabriela e lucas</Link>

      <Menu onClick={onClick} className="cursor-pointer" />
    </header>
  );
};

export default Header;
