import { Aboutinfo } from "@/components/Aboutinfo";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Turshlaga } from "@/components/Turshlaga";
import { Work } from "@/components/Work";
import { Footer } from "@/components/Footer";
import { Lastfooter } from "@/components/Lastfooter";
import { useAmp } from "next/amp";
import { useState } from "react";
import { Toggle } from "@/components/Toggle";
import { Menu } from "@/components/Menu";
export default function Home({}) {
  const [qwer, setqwer] = useState(true);
  const changeScreen = () => setqwer(!qwer);

  return qwer ? (
    <div className=" md: flex flex-col items-center w-full  dark:bg-[#030712] ">
      <Header viewMenu={changeScreen} />
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
    <Menu />
  );
}
