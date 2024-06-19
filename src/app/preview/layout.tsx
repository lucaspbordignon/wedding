import { Viewport } from "next";
import { FC, PropsWithChildren } from "react";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#122C2C" },
    { media: "(prefers-color-scheme: dark)", color: "#122C2C" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <section className="dark">{children}</section>
);

export default Layout;
