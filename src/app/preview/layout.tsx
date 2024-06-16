import { Viewport } from "next";
import { FC, PropsWithChildren } from "react";

export const viewport: Viewport = {
  themeColor: "#122C2C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const Layout: FC<PropsWithChildren> = ({ children }) => children;

export default Layout;
