"use client";

import { useEffect, useRef, useState } from "react";

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      video.playbackRate = 0.75;
      video.play().catch(() => {});
    };

    video.addEventListener("canplay", handleCanPlay);

    video.load();

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 h-screen w-screen overflow-hidden pointer-events-none">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        src="https://res.cloudinary.com/dt67lax6x/video/upload/v1778819545/background-recording-dous-demo_aacc1g.mov"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#020303]/20 via-[#020303]/10 to-[#020303]/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F5257]/5 to-[#B07C9E]/5" />
    </div>
  );
}
