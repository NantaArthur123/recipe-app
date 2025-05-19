"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdAdd, IoMdHome, IoMdSearch } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
// Lang
import { useTranslations } from "next-intl";
import { FaSquarePlus } from "react-icons/fa6";
import { GiBowlOfRice } from "react-icons/gi";

// Test API
async function testInsertUser() {
  try {
    const response = await fetch("/api/test-populate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Log the response status and text
    console.log("Response status:", response.status);
    const responseText = await response.text();
    console.log("Response text:", responseText);

    // Attempt to parse the response as JSON
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (error) {
      console.error("❌ Failed to parse response as JSON:", error);
      return;
    }

    if (response.ok) {
      console.log("✅ API Response:", data);
    } else {
      console.error("❌ API Error:", data);
    }
  } catch (error) {
    console.error("❌ Error calling API:", error);
  }
}

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* PC View */}
      {!isMobile && (
        <header className="flex items-center justify-between p-2 bg-background">
          <div className="flex-shrink-0 mr-4">
            <a href="/" className="text-2xl font-bold text-text-title">
              {t("global.common.web_title")}
            </a>
          </div>

          {/* Center section with search */}
          <div className="w-2/4 flex justify-center mx-4">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder={t("global.messages.search_recipe")}
                className="w-full rounded-md px-3 py-2 pl-9 ring-2 ring-primary
                   focus:outline-none focus:ring-2 focus:ring-primary
                   bg-background text-text-title placeholder:text-primary-200
                   transition-all duration-200"
              />
              <IoMdSearch className="w-4 h-4 text-secondary/80 absolute left-3 top-3" />
            </div>
          </div>

          {/* Right section with switchers */}
          <div className="flex-shrink-0 flex justify-end items-center space-x-2 ml-4">
            {/* <LangSwitcher /> */}
            {/* <ThemeSwitcher /> */}
            {/* <RankBadge /> */}
            <Link
              href=""
              className="flex flex-row items-center border"
              onClick={testInsertUser}
            >
              <IoMdAdd className="w-6 h-6" />
              <span className="text-xxs">New Recipe</span>
            </Link>
          </div>
        </header>
      )}

      {/* Mobile Navbar */}
      {isMobile && (
        <nav className="fixed bottom-0 left-0 right-0 bg-background  flex justify-around items-center py-3">
          <Link href="/" className="flex flex-col items-center">
            <IoMdHome className="w-6 h-6" />
            <span className="text-xxs">Home</span>
          </Link>
          <Link href="/search" className="flex flex-col items-center">
            <IoMdSearch className="w-6 h-6" />
            <span className="text-xxs">Search</span>
          </Link>
          <Link
            href=""
            className="flex flex-col items-center"
            onClick={testInsertUser}
          >
            <FaSquarePlus className="w-6 h-6" />
            <span className="text-xxs">Add</span>
          </Link>
          <Link href="/settings" className="flex flex-col items-center">
            <GiBowlOfRice className="w-6 h-6" />
            <span className="text-xxs">Category</span>
          </Link>
          <Link href="/login" className="flex flex-col items-center">
            <IoPersonCircle className="w-6 h-6" />
            <span className="text-xxs">Login</span>
          </Link>
        </nav>
      )}
    </>
  );
}
