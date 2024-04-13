"use client";

import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import OverlayVideo from "@wedding/components/OverlayVideo";
import Sidebar from "@wedding/components/Sidebar";
import { useEffect, useRef, useState } from "react";

/**
 * The homepage contains a parallax effect for all the visible elements on the screen,
 * which follow the pages pattern below:
 *
 * Page 1
 *
 * @element - Logo, with a sticky behavior
 * @element - Menu, with a sticky behavior
 * @element - Sidebar, at half-width
 * @element - Date, centralized
 *
 * Page 2
 *
 * @element - Logo, with a sticky behavior
 * @element - Menu, with a sticky behavior
 * @element - Sidebar, at full-width
 * @element - Date, right-aligned
 * @element - Location, bottom-aligned
 *
 * Page 3
 *
 * TODO
 */
const Home = () => {
  const [scrollYProgress, setScrollYProgress] = useState(0);

  const parallaxReference = useRef<IParallax>(null);

  const onScroll = () => {
    if (parallaxReference.current)
      setScrollYProgress(parallaxReference.current.current);
  };

  useEffect(() => {
    if (!parallaxReference?.current?.container?.current) return;

    const element = parallaxReference.current.container.current as HTMLElement;

    element.addEventListener("scroll", onScroll);

    return () => element.removeEventListener("scroll", onScroll);
  }, [parallaxReference.current]);

  return (
    <main className="font-header">
      <OverlayVideo />

      <Parallax ref={parallaxReference} pages={3} config={{ tension: 400 }}>
        {/* Page 1 */}
        <ParallaxLayer offset={0} speed={-1} sticky={{ start: 0, end: 1 }}>
          <Sidebar scrollYProgress={scrollYProgress} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.2} speed={1}>
          {/* TODO - Introduce the header  */}
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={2}>
          {/* TODO - Introduce the header  */}
        </ParallaxLayer>
      </Parallax>
    </main>
  );
};

export default Home;
