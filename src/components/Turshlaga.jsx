import { Ttree } from "./Turslga/Ttree";
import { Tone } from "./Turslga/Tone";
import { Ttwo } from "./Turslga/Ttwo";
export const Turshlaga = () => {
  return (
    <div className=" md:w-full  max-h-[1140px] dark:bg-[#111827] flex justify-center">
      <div className="container flex flex-col gap-8  ">
        <div className=" ] ">
          <Tone />
          <Ttwo />
          <Ttree />
        </div>
      </div>
    </div>
  );
};
