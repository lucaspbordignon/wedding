"use client";

import MuxPlayer, { MinResolution } from "@mux/mux-player-react";
import { FC } from "react";

interface OverlayVideoProps {
  onPlaying: () => void;
}

const OverlayVideo: FC<OverlayVideoProps> = ({ onPlaying }) => {
  setTimeout(() => {
    /* Guarantees the callback is executed on low-battery mode */
    onPlaying();
  }, 1000);

  return (
    <MuxPlayer
      className="w-screen h-screen absolute -z-10 object-cover opacity-70"
      playbackId="URUZfqcvQ2vN900m9JpPo9iSLZZZc3gGpf5Wvenlqq98"
      poster="https://image.mux.com/URUZfqcvQ2vN900m9JpPo9iSLZZZc3gGpf5Wvenlqq98/thumbnail.webp?time=0"
      minResolution={MinResolution.noLessThan1080p}
      loop
      muted
      autoPlay
    />
  );
};

export default OverlayVideo;
