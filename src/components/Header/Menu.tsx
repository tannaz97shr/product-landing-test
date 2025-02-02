import { useState } from "react";
import { ICategoryItem } from "../../types/general.ts";
import MenuItem from "../MenuItem/index.tsx";
import Backdrop from "../UI/Backdrop/index.tsx";
import { BurgerMenuIcon } from "../UI/Icons/index.tsx";

// eslint-disable-next-line react-refresh/only-export-components
export const CategoryItems: ICategoryItem[] = [
  {
    name: "headphones",
    href: "#",
    image: "/assets/image-category-thumbnail-headphones.png",
  },
  {
    name: "speakers",
    href: "#",
    image: "/assets/image-category-thumbnail-speakers.png",
  },
  {
    name: "earphones",
    href: "#",
    image: "/assets/image-category-thumbnail-earphones.png",
  },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button
        className="lg:hidden"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <BurgerMenuIcon />
      </button>
      {isOpen && (
        <Backdrop
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      )}
      {isOpen && (
        <div className="bg-white absolute top-[90px] z-20 w-full left-0 rounded-b px-4 py-6 lg:hidden">
          <div className="flex flex-col md:flex-row px-2.5 gap-2">
            {CategoryItems.map((item: ICategoryItem) => (
              <MenuItem key={item.name} item={item} />
            ))}
          </div>
        </div>
      )}
      <div className="hidden lg:flex lg:order-2">
        <a
          href={"/"}
          className=" text-white mx-8 uppercase font-bold text-sm tracking-wide"
        >
          home
        </a>
        {CategoryItems.map((item: ICategoryItem) => (
          <a
            key={item.name}
            href={item.href}
            className=" text-white mx-8 uppercase font-bold text-sm tracking-wide"
          >
            {item.name}
          </a>
        ))}
      </div>
    </>
  );
};

export default Menu;
