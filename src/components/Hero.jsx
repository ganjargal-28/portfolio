import { Location } from "./icon/Location";
import { Icon } from "./icon/Icons";
import { Image } from "./icon/Image";
import { Toggle } from "./Toggle";
export const Hero = () => {
  return (
    <div className=" md: w-full  p-22 flex dark:bg-[ #111827]  ">
      <div className="container flex mx-auto ">
        <div className=" mx-auto flex flex-col p-5 gap-12">
          <div className=" flex justify-center items-center md:hidden w-full ">
            <img src="tommobile.png" alt="" />
          </div>

          <div className="max-w-[600px] dark:text-white ">
            <h1 className="text-3xl">Hi, I’m jerry 👋</h1>
            <p>
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
              fgsfgfwsrg
            </p>
          </div>
          <div className=" max-w-[600px] dark:text-white  flex ">
            <Location />
          </div>
          <div className=" ">
            <Icon />
          </div>
        </div>

        <div className="max-w-[568px] md:flex hidden">
          <Image />
        </div>
      </div>
    </div>
  );
};
