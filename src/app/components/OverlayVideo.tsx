"use client";

import MuxPlayer from "@mux/mux-player-react";

const OverlayVideo = () => {
  return (
    <MuxPlayer
      className="w-screen h-screen absolute -z-10 object-cover"
      playbackId="URUZfqcvQ2vN900m9JpPo9iSLZZZc3gGpf5Wvenlqq98"
      loop
      muted
      autoPlay
    />
  );
};

export default OverlayVideo;
