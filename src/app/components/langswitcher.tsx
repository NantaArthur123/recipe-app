"use client";

import { getFlagEmoji } from "@/util/resource";
import { languages } from "@/util/variable";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { usePathname, useRouter } from "next/navigation";
import { IoChevronDownOutline } from "react-icons/io5";

export function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1];

  const currentLanguage =
    languages.find((lang) => lang.code === currentLocale) ?? languages[0];

  const handleChange = (selectedLang: (typeof languages)[0]) => {
    router.push(
      `/${selectedLang.code}${pathname.replace(/^\/(en|id|jp|kr)/, "")}`
    );
  };

  return (
    <Listbox value={currentLanguage} onChange={handleChange}>
      <div className="relative">
        <ListboxButton className="px-4 py-2 flex items-center gap-2 bg-primary text-text rounded-lg shadow-md hover:bg-primary-200 hover:text-text-title transition">
          <img
            src={getFlagEmoji(currentLanguage.code)}
            alt={currentLanguage.label}
            className="w-5 h-5"
          />
          <span>{currentLanguage.label}</span>
          <IoChevronDownOutline className="w-4 h-4" />
        </ListboxButton>

        <ListboxOptions className="absolute mt-2 w-48 bg-background-200 border-accent-200 rounded-lg shadow-lg overflow-hidden z-50">
          {languages.map((language) => (
            <ListboxOption
              key={language.code}
              value={language}
              className="px-4 py-2 flex items-center gap-2 cursor-pointer data-[focus]:bg-primary-200 data-[selected]:bg-primary data-[selected]:font-semibold"
            >
              <img
                src={getFlagEmoji(language.code)}
                alt={language.label}
                className="w-5 h-5"
              />
              {language.label}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
