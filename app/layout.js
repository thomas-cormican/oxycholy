import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oxycholy - Premier Agency for Top-Tier Leads",
  description:
    "Welcome to Oxycholy, your premier Hull-based agency specializing in delivering top-tier, quote-ready leads for promising businesses. Our strategic advertising campaigns on popular social media platforms ensure targeted growth, allowing you to focus on your core work while attracting genuinely interested clients.",
  keywords:
    "Oxycholy, agency, Hull, top-tier leads, quote-ready leads, strategic advertising, social media, business growth",
  author: "Oxycholy",
  robots: "index, follow",
  language: "English",
  copyright: "Copyright © 2024 Oxycholy. All rights reserved.",
  openGraph: {
    title: "Oxycholy",
    description:
      "Welcome to Oxycholy, your premier Hull-based agency specializing in delivering top-tier, quote-ready leads for promising businesses. Our strategic advertising campaigns on popular social media platforms ensure targeted growth, allowing you to focus on your core work while attracting genuinely interested clients.",
    url: "https://www.oxycholy.com",
    siteName: "Oxycholy",
    images: [
      {
        url: "https://oxycholy.vercel.app/Logo_dark.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      ,
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
