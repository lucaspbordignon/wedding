"use client";

import usePageState from "@wedding/state/page";
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
      <p>gabriela e lucas</p>

      <Menu onClick={onClick} className="cursor-pointer" />
    </header>
  );
};

export default Header;
