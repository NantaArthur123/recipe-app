import { languages } from "@/util/variable";





/**
 * Method buat ngambil flag make twemoji
 * @param countryCode code dial
 * @returns
 */

export function getFlagEmoji(countryCode: string) {
  const language = languages.find((lang) => lang.code === countryCode);
  if (!language) return "";

  const flagCode = language.flag.toUpperCase();

  // Convert si flag biar sesuai sama ketentuan penulisan kaya ID,EN,GB
  const flagEmoji = [...flagCode]
    .map((char) => String.fromCodePoint(0x1f1e6 + (char.charCodeAt(0) - 65)))
    .join("");

  // Generate Twemoji CDN URL
  return `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${flagEmoji
    .codePointAt(0)
    ?.toString(16)}-${flagEmoji.codePointAt(2)?.toString(16)}.svg`;
}





/**
 * Convert temperature dari cel ke faren
 * @param value initial value temperatur
 * @param isCelsius
 * @returns
 */
export const convertTemperature = (value: number, isCelsius: boolean) =>
  isCelsius ? value * 1.8 + 32 : (value - 32) / 1.8;



/**
 * Adjust ingredient amounts based on portion size
 * @param baseIngredients array of ingredients
 * @param portion number of servings
 * @returns array of adjusted ingredients
 */
export function getAdjustedIngredients(
  baseIngredients: any[],
  portion: number
) {
  return baseIngredients.map((ingredient) => ({
    ...ingredient,
    amount: (Number(ingredient.amount) * portion)
      .toFixed(2)
      .replace(/\.?0+$/, ""), // Buat ilangin nol dr 0.30 -> 0.3
  }));
}




/**
 *
 * @param value
 * @param min
 * @param max
 * @returns
 */
export function validateRange(value: number, min: number, max: number): number {
  if (isNaN(value)) return min; // Default ke nilai minimum jika bukan angka
  return Math.min(max, Math.max(min, value)); // Batasi dalam rentang min-max
}


