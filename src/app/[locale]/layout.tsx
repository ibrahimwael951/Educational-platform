import type { Metadata } from "next";

import "./globals.css";

//translation
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

//components
import { ThemeProvider } from "@/components/theme-provider";
import ScrollTopBtn from "@/components/scrollTopBtn";

export const metadata: Metadata = {
  title: "EduQuest",
  description:
    "We are experienced in educational platform and skilled strategies for online learning.",
};

//components
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

//use that while u make testing
// import Testing from "@/components/testing";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  type Locale = 'en'| 'ar';
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  console.log(locale);

  return (
    <html lang={locale} dir={locale ==="en"? "ltr":"rtl"} suppressHydrationWarning>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {/* <Testing /> */}
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
        <ScrollTopBtn />
      </body>
    </html>
  );
}
