import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations();

  return (
    <div>
      <h1>{t("ingredient.sugar")}</h1> {/* This will display "Garam" */}
    </div>
  );
}
