"use client";

import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import BannerEventDate from "@wedding/components/BannerEventDate";
import BannerEventLocation from "@wedding/components/BannerEventLocation";
import OverlayVideo from "@wedding/components/OverlayVideo";
import OverlaySolid from "@wedding/components/OverlaySolid";
import TemplateQuote from "@wedding/components/TemplateQuote";
import TemplateSchedule from "@wedding/components/TemplateSchedule";
import usePageState from "@wedding/state/page";
import { useEffect, useRef, useState } from "react";
import ScrollIndicator from "@wedding/components/ScrollIndicator";
import Header from "@wedding/components/Header";
import clsx from "clsx";

const ANCHORS = {
  home: 0,
  schedule: 4,
} as Record<string, number>;

const Home = () => {
  const scrollYProgress = usePageState((state) => state.scrollYProgress);
  const setScrollYProgress = usePageState((state) => state.setScrollYProgress);

  const parallaxReference = useRef<IParallax>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const onScroll = () => {
    if (parallaxReference.current)
      setScrollYProgress(parallaxReference.current.current);
  };

  const synchronizeAnchorScroll = () => {
    const currentHash = window.location.hash;

    const hash = currentHash.replace("#", "");

    if (!Object.keys(ANCHORS).includes(hash)) return;

    const anchor = ANCHORS[hash];

    parallaxReference.current?.scrollTo?.(anchor);
  };

  const onParallaxContainerInitialized = () => {
    if (!parallaxReference?.current?.container?.current) return;

    const element = parallaxReference.current.container.current as HTMLElement;

    element.addEventListener("scroll", onScroll);
    element.addEventListener("hashchange", synchronizeAnchorScroll);

    synchronizeAnchorScroll();

    return () => {
      element.removeEventListener("scroll", onScroll);
      element.removeEventListener("hashchange", synchronizeAnchorScroll);
    };
  };

  const onParallaxActiveChanged = () => {
    if (!parallaxReference?.current?.current) return;

    setCurrentPage(
      Math.floor(parallaxReference.current.current / window.innerHeight)
    );
  };

  useEffect(onParallaxContainerInitialized, [parallaxReference.current]);
  useEffect(onParallaxActiveChanged, [parallaxReference.current?.current]);

  return (
    <main
      className={clsx("font-header text-base lg:text-lg", {
        dark: currentPage !== 4,
      })}
    >
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
            src="/assets/cover.jpg"
            loading="eager"
            className="object-contain w-full min-h-dvh"
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
