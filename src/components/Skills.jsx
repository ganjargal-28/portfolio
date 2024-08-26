import { SkillBox } from "@/components/Box";
import {
  JavascriptIcon,
  TypescriptIcon,
  ReactIcon,
  NextJS,
  Nodejs,
  Expressjs,
  Nestjs,
  Socketio,
  PostgreSQL,
  MongoDB,
  Sass,
  Tailwind,
  Figma,
  Cypress,
  Storybook,
  Git,
} from "./icon/Skillicons";

export const Skills = () => {
  return (
    <div className=" md: w-full  flex justify-center items-center ">
      <div className="container   ">
        <div className="  justify-center  g ">
          <div className="  flex justify-center  ">
            <p className=" dark:text-white rounded-lg bg-gray-200 flex justify-center">
              about me
            </p>
          </div>
          <div className=" flex    justify-center mt-2 dark:text-white ">
            <p>The skills, tools and technologies I am really good at:</p>
          </div>
        </div>
        <div className="  gap-3">
          <div className=" dark:text-white flex-wrap  flex justify-around gap-16">
            <SkillBox iconComponent={<JavascriptIcon />} text={"hhhhh"} />
            <SkillBox iconComponent={<TypescriptIcon />} text={"Typescript"} />
            <SkillBox iconComponent={<ReactIcon />} text={"React"} />
            <SkillBox iconComponent={<NextJS />} text={"Nextjs"} />
            <SkillBox iconComponent={<Nodejs />} text={"Nodejs"} />
            <SkillBox iconComponent={<Expressjs />} text={"Expressjs"} />
            <SkillBox iconComponent={<Nestjs />} text={"Nestjs"} />
            <SkillBox iconComponent={<Socketio />} text={"Socketio"} />

            <SkillBox iconComponent={<PostgreSQL />} text={"PostgreSQL"} />
            <SkillBox iconComponent={<MongoDB />} text={"MongoDB"} />
            <SkillBox iconComponent={<Sass />} text={"Sass"} />
            <SkillBox iconComponent={<Tailwind />} text={"Tailwind"} />
            <SkillBox iconComponent={<Figma />} text={"figma"} />
            <SkillBox iconComponent={<Cypress />} text={"cypress"} />
            <SkillBox iconComponent={<Storybook />} text={"storybook"} />
            <SkillBox iconComponent={<Git />} text={"Git "} />
          </div>
        </div>
      </div>
    </div>
  );
};
