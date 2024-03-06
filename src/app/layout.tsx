import type { Metadata } from "next";
import localFont from "next/font/local";
import { Outfit } from "next/font/google";
import cn from "classnames";

import "./globals.css";

const bastiaFont = localFont({
  src: "./styles/Bastia-Bold.otf",
  variable: "--font-header",
});
const outfitFont = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Save the date",
  description: "Casamento - Gabriela e Lucas",
  openGraph: {
    images: ["/preview.png"],
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={cn(
          "text-white bg-black overflow-y-hidden",
          bastiaFont.variable,
          outfitFont.variable
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
