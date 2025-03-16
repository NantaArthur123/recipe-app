"use client";

import "@/app/[locale]/recipe/recipe.css";
import { TextSweepEffect } from "@/app/components/anim/textanim";
import { getAdjustedIngredients, validateRange } from "@/util/resource";
import { baseIngredients } from "@/util/variable"; // Importing baseIngredients
import { useTranslations } from "next-intl";
import { ChangeEvent, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function Recipe() {
  const t = useTranslations();

  // Default portion size
  const [portion, setPortion] = useState(1);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPortion(validateRange(parseInt(e.target.value), 0, 99));
  };

  // Call the function with baseIngredients as a parameter
  const ingredients = getAdjustedIngredients(baseIngredients, portion);

  return (
    <div className="p-4">
      <div className="bg-background rounded-lg shadow-lg max-w-6xl w-full mx-auto overflow-hidden">
        {/* Food Image with Gradient Mask */}
        <div className="relative">
          {/* Mask Container */}
          <div
            className="absolute inset-0 bg-background"
            style={{
              maskImage:
                "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
            }}
          ></div>
          {/* Image */}
          <img
            src="https://assets-pergikuliner.com/f8ISiJ8XKfv_1bbndSwMpB5IGko=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/image/picture/1920055/picture-1586772417.jpg" // Replace with your food image URL
            alt="Food Image"
            className="w-full h-64 object-cover"
          />
          {/* Overlay Text (Title and Description) */}
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <h1 className="text-7xl text-text-title title-text-font">
              Semur tahu
            </h1>
            <p className="text-xs text-primary-200 mt-3">
              Toetoek Hariyati •{" "}
              <TextSweepEffect
                text="The Ultimate Foodie"
                className=""
                letterClassName="tracking-wide text-text-title"
              />{" "}
              <span>3,320,954 Points</span>
            </p>
          </div>
        </div>

        {/* Portion Size Slider */}
        <div className="px-8 py-4">
          <div className="flex items-center mb-4">
            <label className="text-sm font-medium mr-4">
              {t("global.messages.portion_size")}:
            </label>
            <div className="flex items-center">
              <button
                onClick={() => portion > 1 && setPortion(portion - 1)}
                disabled={portion <= 1}
                className="bg-background-300 text-white h-8 w-8 rounded-l-lg flex items-center justify-center disabled:opacity-50"
              >
                <FiMinus size={16} />
              </button>
              <input
                type="number"
                value={portion}
                onChange={handleInputChange}
                min="1"
                max="99"
                className="h-8 w-16 text-center font-medium outline-none bg-background appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              <button
                onClick={() => portion < 50 && setPortion(portion + 1)}
                disabled={portion >= 50}
                className="bg-background-300 text-white h-8 w-8 rounded-r-lg flex items-center justify-center disabled:opacity-50"
              >
                <FiPlus size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Recipe Section */}
        <div className="px-8 pb-8 space-y-1">
          <h2 className="text-2xl font-bold mb-4">
            Recipe for {portion} Serving
          </h2>
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="flex items-center rounded-lg bg-background-300 px-4 py-2 max-w-screen-sm"
            >
              {/* Amount + Unit */}
              <span className="flex-none text-sm text-white">
                {ingredient.amount} {ingredient.unit}
              </span>
              {/* Ingredient Name */}
              <span className="flex-grow text-sm font-medium text-white mx-3">
                {t("ingredient." + ingredient.name)}
              </span>
              <span className="flex-grow text-sm font-medium text-primary-300 mx-3">
                {ingredient.optional ? t("global.messages.optional") : ""}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
