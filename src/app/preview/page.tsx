"use client";

import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import BannerEventDate from "@wedding/components/BannerEventDate";
import BannerEventLocation from "@wedding/components/BannerEventLocation";
import OverlayVideo from "@wedding/components/OverlayVideo";
import OverlaySolid from "@wedding/components/OverlaySolid";
import TemplateQuote from "@wedding/components/TemplateQuote";
import TemplateSchedule from "@wedding/components/TemplateSchedule";
import usePageState from "@wedding/state/page";
import { useEffect, useRef } from "react";
import ScrollIndicator from "@wedding/components/ScrollIndicator";
import Header from "@wedding/components/Header";

const Home = () => {
  const scrollYProgress = usePageState((state) => state.scrollYProgress);
  const setScrollYProgress = usePageState((state) => state.setScrollYProgress);

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
    <main className="dark font-header text-base lg:text-lg">
      <Header />

      <Parallax ref={parallaxReference} pages={5} className="no-scrollbar">
        {/* Page 1 */}
        <ParallaxLayer speed={0} sticky={{ start: 0, end: 1 }}>
          <OverlayVideo opaque />
        </ParallaxLayer>

        <ParallaxLayer speed={1} sticky={{ start: 0, end: 1 }}>
          <OverlaySolid />
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
        <ParallaxLayer offset={2} speed={0}>
          <img
            src="/assets/cover.png"
            loading="eager"
            className="object-cover w-full h-full max-h-dvh"
          />
        </ParallaxLayer>

        {/* Page 4 */}
        <ParallaxLayer offset={3} speed={0}>
          <TemplateQuote />
        </ParallaxLayer>

        {/* Page 5 */}
        <ParallaxLayer speed={0} sticky={{ start: 4, end: 5 }}>
          <TemplateSchedule />
        </ParallaxLayer>

        {/* Floating Elements */}
        <ParallaxLayer sticky={{ start: 0, end: 3 }}>
          <ScrollIndicator />
        </ParallaxLayer>
      </Parallax>
    </main>
  );
};

export default Home;
