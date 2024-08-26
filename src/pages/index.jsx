import { Aboutinfo } from "@/components/Aboutinfo";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Turshlaga } from "@/components/Turshlaga";
import { Work } from "@/components/Work";
import { Footer } from "@/components/Footer";
import { Lastfooter } from "@/components/Lastfooter";
import { useState } from "react";
import { Toggle } from "@/components/Toggle";
import { Menu } from "@/components/Menu";



export default function Home() {
  const [showMenu, setShowMenu] = useState(true);
  const changeScreen = () => {
    // console.log("hh")
     setShowMenu(!showMenu)
  };

  return <>
  {showMenu ? (
    <div className=" md: flex flex-col items-center w-full  dark:bg-[#030712] ">
      {/* <div>
        <button onClick={changeScreen}>aaaaa</button>
      </div> */}
      <Header changeScreen={changeScreen} />
      <Hero />
      <Aboutinfo />
      <Skills />
      <Turshlaga />
      <Work />
      <Footer />
      <Lastfooter />
      <Toggle />
    </div>
  ) : (
    <Menu  changeScreen={changeScreen}/>
  )}
  </>
  
}
