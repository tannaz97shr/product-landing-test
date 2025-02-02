import { LogoIcon } from "../UI/Icons";
import Cart from "./Cart";
import Menu from "./Menu";

const Header = () => {
  const cartItems: [] = [];
  return (
    <div className="bg-black h-[90px] flex items-center px-6 py-8 border-b-grey-dark z-20 lg:justify-between w-full">
      <Menu />
      <a href={"/"} className="mx-auto md:ml-11 lg:order-1 lg:mr-0">
        <LogoIcon />
      </a>
      <Cart items={cartItems} />
    </div>
  );
};

export default Header;
