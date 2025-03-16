"use client";

import { useEffect, useState } from "react";
// React-Icon
import { GiAcorn, GiChocolateBar } from "react-icons/gi";
import { LuCupSoda } from "react-icons/lu";

// Our 3 themes, each with a display name and an icon
const themes = {
  "midnight-chocolate": {
    name: "Midnight Chocolate",
    icon: <GiChocolateBar className="w-3 h-3 text-text-title" />,
  },
  "soda-splash": {
    name: "Soda Splash",
    icon: <LuCupSoda className="w-3 h-3 text-text-title" />,
  },
  "autumn-caramel": {
    name: "Autumn Caramel",
    icon: <GiAcorn className="w-3 h-3 text-text-title" />,
  },
};

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] =
    useState<keyof typeof themes>("midnight-chocolate");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as keyof typeof themes;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  // Cycle to the next theme in the array
  const themeKeys = Object.keys(themes) as (keyof typeof themes)[];
  function cycleTheme() {
    const currentIndex = themeKeys.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    const nextTheme = themeKeys[nextIndex];

    setCurrentTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  }

  // We'll map each theme index (0,1,2) to a specific translateX value
  // so the circle slides neatly from left to center to right.
  function getTranslateX() {
    const index = themeKeys.indexOf(currentTheme);
    // Container is w-10 => ~40px wide, circle is w-5 => ~20px wide
    // We'll keep a 4px margin on both sides, so positions are:
    // Left = 0, Middle = 6px, Right = 12px
    // const positions = [0, 6, 12];
    return index * 10;
  }

  // Current icon
  const Icon = themes[currentTheme].icon;

  return (
    <div className="flex items-center gap-2">
      {/* If you want the theme name somewhere else, you can display it here */}
      {/* <span>{themes[currentTheme].name}</span> */}

      {/* Switch Container */}
      <div
        className="relative w-10 h-5 bg-primary rounded-full cursor-pointer"
        onClick={cycleTheme}
      >
        {/* Moving 'thumb' / circle */}
        <div
          className="absolute top-0.5 left-0.5 w-4 h-4 
                     flex items-center justify-center
                     bg-primary-200 text-sm rounded-full
                     transition-transform duration-300"
          style={{ transform: `translateX(${getTranslateX()}px)` }}
        >
          {Icon}
        </div>
      </div>
    </div>
  );
}
