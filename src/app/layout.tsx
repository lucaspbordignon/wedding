import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Outfit } from "next/font/google";
import clsx from "clsx";

import Authenticator from "@wedding/components/Authenticator";

import "../globals.css";
import { Suspense } from "react";
import { Toaster } from "@wedding/components/Toaster";

const bastiaFont = localFont({
  src: "../styles/Bastia-Bold.otf",
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
    images: ["/preview.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#FFFFFF" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={clsx(
          "text-white bg-primary no-scrollbar",
          bastiaFont.variable,
          outfitFont.variable
        )}
      >
        {children}

        <Analytics />

        <Toaster />

        <Suspense>
          <Authenticator />
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
