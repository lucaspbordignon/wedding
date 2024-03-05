"use client";

import MuxPlayer, { MinResolution } from "@mux/mux-player-react";

const OverlayVideo = () => {
  return (
    <MuxPlayer
      className="w-screen h-screen absolute -z-10 object-cover"
      playbackId="URUZfqcvQ2vN900m9JpPo9iSLZZZc3gGpf5Wvenlqq98"
      minResolution={MinResolution.noLessThan720p}
      loop
      muted
      autoPlay
    />
  );
};

export default OverlayVideo;
