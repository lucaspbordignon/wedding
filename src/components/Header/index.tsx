import { Menu } from "react-feather";

/* TODO: @lucas - Make text-primary when on top of a white background */
const Header = () => {
  return (
    <header className="flex justify-between font-header p-5">
      <p>gabriela e lucas</p>

      <Menu />
    </header>
  );
};

export default Header;
