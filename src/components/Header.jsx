import { IoMdMenu } from "react-icons/io";
import { Toggle } from "./Toggle";
import { HamburgerMenuIcon } from "./icon/HamburgerMenuIcon";

export const Header = ({changeScreen}) => {
  return (
    <div className="w-full dark:bg-[#030712] h-[68] flex  justify-center ">
      <div className=" container flex p-7 justify-between ">
        <div className="flex justify-between items-center">
          <p className="text-2x dark:text-white p-4">JERRY</p>
        </div>
        <button className="lg:hidden flex items-center  p-5" onClick={changeScreen}>
          <IoMdMenu  />
        </button>
        <div className="hidden dark:text-white  gap-5 items-center text-1xl md:flex    p-5 ">
          <p>about</p>
          <p>work</p>
          <p>Testimonials</p>
          <p>content</p>
          <div className="flex">
            <Toggle />
            <button >
              <HamburgerMenuIcon/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
