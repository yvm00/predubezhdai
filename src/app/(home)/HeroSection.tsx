"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="w-full h-dvh relative  overflow-hidden"
    >
      <div
        ref={videoContainerRef}
        className="absolute inset-0 w-full h-full overflow-hidden"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[60%_40%] mix-blend-screen "
        >
          <source src="/video/flower.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
}
