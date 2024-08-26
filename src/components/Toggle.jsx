import { useState } from "react";
import { SunIcon } from "./icon/SunIcon";

import { MoonIcon } from "./icon/MoonIcon";

// const [dark, setDark] = useState(false);
// setDark(!dark);

export const Toggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className=" text-black bg-white dark:bg-[#030712] dark:text-white">
      {isDark ? (
        <button onClick={toggleTheme}>
          <MoonIcon />
        </button>
      ) : (
        <button onClick={toggleTheme}>
          <SunIcon />
        </button>
      )}
    </div>
  );
};
