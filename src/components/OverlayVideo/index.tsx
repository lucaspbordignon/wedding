"use client";

import MuxPlayer, { MinResolution } from "@mux/mux-player-react";
import { FC, useEffect, useState } from "react";

interface OverlayVideoProps {
  onPlaying?: () => void;
}

const OverlayVideo: FC<OverlayVideoProps> = ({ onPlaying }) => {
  const [opacity, setOpacity] = useState(1);

  setTimeout(() => {
    /* Guarantees the callback is executed on low-battery mode */
    onPlaying?.();
  }, 1000);

  useEffect(() => {
    setOpacity(0.7);
  }, []);

  return (
    <MuxPlayer
      className="w-screen h-screen absolute -z-10 object-cover transition-opacity duration-4000"
      playbackId="URUZfqcvQ2vN900m9JpPo9iSLZZZc3gGpf5Wvenlqq98"
      poster="https://image.mux.com/URUZfqcvQ2vN900m9JpPo9iSLZZZc3gGpf5Wvenlqq98/thumbnail.webp?time=0"
      minResolution={MinResolution.noLessThan1080p}
      style={{ opacity }}
      loop
      muted
      autoPlay
    />
  );
};

export default OverlayVideo;
