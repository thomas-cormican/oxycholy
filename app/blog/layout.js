import { Inter } from "next/font/google";
import blogMetaData from "./blogMetaData";

const inter = Inter({ subsets: ["latin"] });

export const metadata = blogMetaData;

export default function RootLayout({ children }) {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
