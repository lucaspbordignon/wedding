import { animated } from "@react-spring/web";
import usePageState from "@wedding/state/page";
import { FC } from "react";

const OverlaySolid: FC = () => {
  const scrollYProgress = usePageState((state) => state.scrollYProgress);

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

export default OverlaySolid;
