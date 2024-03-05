"use client";

import OverlayVideo from "@wedding/app/components/OverlayVideo";
import SaveTheDateContent from "@wedding/app/components/SaveTheDateContent";
import { useState } from "react";

const Home = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  const onPlaying = () => {
    setAnimationStarted(true);
  };

  return (
    <main className="flex min-h-screen min-w-screen font-header">
      <OverlayVideo onPlaying={onPlaying} />

      <SaveTheDateContent animationStarted={animationStarted} />
    </main>
  );
};

export default Home;
