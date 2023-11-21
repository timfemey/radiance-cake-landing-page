"use client";

import { useRef } from "react";
interface ModalVideoProps {
  video: string;
  videoWidth: number;
  videoHeight: number;
}

export default function ModalVideo({
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <video
      ref={videoRef}
      width={videoWidth}
      height={videoHeight}
      loop
      controls
      autoPlay
      muted
    >
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
