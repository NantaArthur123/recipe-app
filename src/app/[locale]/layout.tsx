import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
// For global layout
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
// CSS
import "../globals.css";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Await params before destructuring
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header /> {/* Global header */}
          {children} {/* main page content */}
          <Footer /> {/* Global footer */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
