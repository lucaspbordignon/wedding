"use client";

import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import BannerEventDate from "@wedding/components/BannerEventDate";
import BannerEventLocation from "@wedding/components/BannerEventLocation";
import Header from "@wedding/components/Header";
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

      <Parallax ref={parallaxReference} pages={6}>
        {/* Page 1 */}
        <ParallaxLayer speed={1} sticky={{ start: 0, end: 1 }}>
          <Sidebar scrollYProgress={scrollYProgress} />
        </ParallaxLayer>

        <ParallaxLayer speed={1} sticky={{ start: 0, end: 6 }}>
          <Header />
        </ParallaxLayer>

        <ParallaxLayer
          speed={1}
          sticky={{ start: 0, end: 1 }}
          className="flex items-center justify-center"
        >
          <BannerEventDate />
        </ParallaxLayer>

        {/* Page 2 */}
        <ParallaxLayer
          speed={1}
          sticky={{ start: 0, end: 1 }}
          style={{ opacity: scrollYProgress / 500 }}
          className="flex items-end pb-28"
        >
          <BannerEventLocation />
        </ParallaxLayer>

        {/* Page 3 */}
        <ParallaxLayer offset={2.4} speed={1}>
          <div>PICTURE</div>
        </ParallaxLayer>

        {/* Page 4 */}
        <ParallaxLayer offset={3.4} speed={1}>
          <div>QUOTE</div>
        </ParallaxLayer>

        {/* Page 5 */}
        <ParallaxLayer offset={4.4} speed={1}>
          <div>SCHEDULE</div>
        </ParallaxLayer>

        {/* Page 6 */}
        <ParallaxLayer offset={5.4} speed={1}>
          <div>LOCATION</div>
        </ParallaxLayer>
      </Parallax>
    </main>
  );
};

export default Home;
