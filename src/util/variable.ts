// variables.tsx

export const languages = [
  { code: "en", label: "English", flag: "gb" },
  { code: "id", label: "Bahasa Indonesia", flag: "id" },
  { code: "jp", label: "日本語", flag: "jp" },
  { code: "kr", label: "한국어", flag: "kr" },
];

// variables.tsx

export const rank = [
  { level: 1, name: "title.level1" },
  { level: 2, name: "title.level2" },
  { level: 3, name: "title.level3" },
  { level: 4, name: "title.level4" },
  { level: 5, name: "title.level5" },
  { level: 6, name: "title.level6" },
  { level: 7, name: "title.level7" },
  { level: 8, name: "title.level8" },
  { level: 9, name: "title.level9" },
  { level: 10, name: "title.level10" },
  { level: 11, name: "title.level11" },
  { level: 12, name: "title.level12" },
  { level: 13, name: "title.level13" },
  { level: 14, name: "title.level14" },
  { level: 15, name: "title.level15" },
  { level: 16, name: "title.level16" },
  { level: 17, name: "title.level17" },
  { level: 18, name: "title.level18" },
  { level: 19, name: "title.level19" },
  { level: 20, name: "title.level20" },
  { level: 21, name: "title.level21" },
  { level: 22, name: "title.level22" },
  { level: 23, name: "title.level23" },
  { level: 24, name: "title.level24" },
  { level: 25, name: "title.level25" },
];

export const measurements = [
  { name: "teaspoon", metric: 5, isLiquid: true },
  { name: "tablespoon", metric: 15, isLiquid: true },
  { name: "cup", metric: 240, isLiquid: true },
  { name: "pint", metric: 473.18, isLiquid: true },
  { name: "quart", metric: 946.35, isLiquid: true },
  { name: "gallon", metric: 3785, isLiquid: true },
  { name: "milliliter", metric: 1, isLiquid: true },
  { name: "liter", metric: 1000, isLiquid: true },
  { name: "gram", metric: 1, isLiquid: false },
  { name: "kilogram", metric: 1000, isLiquid: false },
  { name: "pound", metric: 453.59, isLiquid: false },
  { name: "pinch", metric: 0.31, isLiquid: true },
  { name: "dash", metric: 0.62, isLiquid: true },
  { name: "smidgen", metric: 0.15, isLiquid: true },
  { name: "drop", metric: 0.05, isLiquid: true },
  { name: "piece", metric: 1, isLiquid: false }, // For countable items like leaves, cloves, sticks, etc.
];


export const baseIngredients = [
  { amount: 5, unit: "piece", name: "tofu", optional: false },            // Tahu → tofu
  { amount: 50, unit: "gram", name: "soun", optional: false },              // Soun → soun
  { amount: 5, unit: "piece", name: "garlic", optional: false },            // Bawang Putih → garlic
  { amount: 0.5, unit: "teaspoon", name: "black_pepper", optional: false }, // Merica Butir → black_pepper
  { amount: 0.5, unit: "teaspoon", name: "nutmeg", optional: false },       // Pala → nutmeg
  { amount: 1, unit: "piece", name: "ginger", optional: false },            // Jahe → ginger
  { amount: 1, unit: "piece", name: "lemongrass", optional: false },        // Serai → lemongrass
  { amount: 3, unit: "piece", name: "kaffir_lime_leaves", optional: false },// Daun Jeruk → kaffir_lime_leaves
  { amount: 10, unit: "piece", name: "red_chili", optional: false },        // Cabe Utuh → red_chili
  { amount: 0.5, unit: "liter", name: "water", optional: false },           // Air → water
  { amount: 0.5, unit: "teaspoon", name: "sugar", optional: false },        // Gula → sugar
  { amount: 3, unit: "tablespoon", name: "sweet_soy_sauce", optional: false }, // Kecap Manis → sweet_soy_sauce
  { amount: 0.25, unit: "teaspoon", name: "msg", optional: false },         // Penyedap (MSG) → msg
  { amount: 3, unit: "tablespoon", name: "cooking_oil", optional: false },  // Minyak Goreng → cooking_oil
  { amount: 2, unit: "tablespoon", name: "asian_fried_shallot", optional: true }  // Bawang Merah Goreng → asian_fried_shallot
];

