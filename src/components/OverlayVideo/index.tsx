"use client";

import MuxPlayer, { MinResolution } from "@mux/mux-player-react";
import { FC, useEffect, useState } from "react";

interface OverlayVideoProps {
  onPlaying?: () => void;

  opaque?: boolean;
}

const OverlayVideo: FC<OverlayVideoProps> = ({ onPlaying, opaque = false }) => {
  const [opacity, setOpacity] = useState(1);

  setTimeout(() => {
    /* Guarantees the callback is executed on low-battery mode */
    onPlaying?.();
  }, 1000);

  useEffect(() => {
    if (opaque) return;

    setOpacity(0.7);
  }, []);

  return (
    <MuxPlayer
      className="w-screen h-dvh absolute -z-10 object-cover transition-opacity duration-4000"
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
