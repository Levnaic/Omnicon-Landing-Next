"use client";

export interface VideoProps {
  src: string;
  width?: number;
  height?: number;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  className?: string;
  poster?: string;
  controls?: boolean;
}

export function Video({
  src,
  width,
  height,
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  className = "",
  poster,
  controls = false,
}: VideoProps) {
  return (
    <video
      width={width}
      height={height}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      className={className}
      poster={poster}
      controls={controls}
    >
      <source src={src} type={`video/${src.split(".").pop()}`} />
      Your browser does not support the video tag.
    </video>
  );
}

export default Video;
