import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oxycholy - Premier Agency for Top-Tier Leads",
  description:
    "Welcome to Oxycholy, your premier Hull-based agency specializing in delivering top-tier, quote-ready leads for promising businesses. Our strategic advertising campaigns on popular social media platforms ensure targeted growth, allowing you to focus on your core work while attracting genuinely interested clients. Experience smooth and efficient business growth with Oxycholy today.",
};

export default function RootLayout({ children }) {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/icon.ico" sizes="any" />
        <meta
          name="description"
          content="Welcome to Oxycholy, your premier Hull-based agency specializing in delivering top-tier, quote-ready leads for promising businesses. Our strategic advertising campaigns on popular social media platforms ensure targeted growth, allowing you to focus on your core work while attracting genuinely interested clients. Experience smooth and efficient business growth with Oxycholy today."
        ></meta>
        <meta
          name="keywords"
          content="Oxycholy, agency, Hull, top-tier leads, quote-ready leads, strategic advertising, social media, business growth"
        ></meta>
        <meta name="author" content="Oxycholy"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="language" content="English"></meta>
        <meta name="revisit-after" content="7 days"></meta>
        <meta
          name="copyright"
          content="Copyright © 2024 Oxycholy. All rights reserved."
        ></meta>
        <meta name="geo.region" content="GB-ERY"></meta>
        <meta name="geo.placename" content="Hull"></meta>
        <meta name="geo.position" content="53.7443;-0.3324"></meta>
        <meta name="ICBM" content="53.7443, -0.3324"></meta>
        <meta
          property="og:title"
          content="Oxycholy - Hull-based Agency for Top-Tier Leads"
        ></meta>
        <meta
          property="og:description"
          content="Welcome to Oxycholy, your premier Hull-based agency specializing in delivering top-tier, quote-ready leads for promising businesses. Our strategic advertising campaigns on popular social media platforms ensure targeted growth, allowing you to focus on your core work while attracting genuinely interested clients. Experience smooth and efficient business growth with Oxycholy today."
        ></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.oxycholy.com"></meta>
        <meta property="og:image" content="/Logo_dark.png"></meta>
        <meta property="og:locale" content="en_GB"></meta>
        <meta property="og:site_name" content="Oxycholy"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta
          name="twitter:description"
          content="Welcome to Oxycholy, your premier Hull-based agency specializing in delivering top-tier, quote-ready leads for promising businesses. Our strategic advertising campaigns on popular social media platforms ensure targeted growth, allowing you to focus on your core work while attracting genuinely interested clients. Experience smooth and efficient business growth with Oxycholy today."
        ></meta>
        <meta
          name="twitter:title"
          content="Oxycholy - Hull-based Agency for Top-Tier Leads"
        ></meta>
        <meta name="twitter:site" content="@oxycholy"></meta>
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
