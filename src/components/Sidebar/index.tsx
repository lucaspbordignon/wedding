import { animated } from "@react-spring/web";
import { FC } from "react";

interface SidebarProps {
  scrollYProgress: number;
}

const Sidebar: FC<SidebarProps> = ({ scrollYProgress = 0 }) => {
  const windowHeight = window.innerHeight;

  const width = Math.max(
    50,
    Math.min(((scrollYProgress + windowHeight) / windowHeight) * 50, 100)
  );

  return (
    <animated.aside
      className="min-h-screen bg-primary"
      style={{ width: `${width}%` }}
    />
  );
};

export default Sidebar;
