import { rank } from "@/util/variable";
import { useTranslations } from "next-intl";

// Define the RankBadge component using function declaration
export function RankBadge() {
  const userLevel = 25; // Example user level
  const userRank = rank.find((r) => r.level === userLevel);
  const t = useTranslations("global");

  return (
    <div className="text-center px-4">
      <h1
        className={`font-bold ${
          userRank?.name === "The Ultimate Foodie"
            ? "animate-rainbow drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            : ""
        }`}
      >
        {t(userRank?.name)}
      </h1>
    </div>
  );
}
