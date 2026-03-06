"use client";

import { useRef, useState, useEffect, useCallback } from "react";

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export default function VideoPlayer({
  src,
  controls = false,
  caption,
}: {
  src: string;
  controls?: boolean;
  caption?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState<{
    time: number;
    left: number;
  } | null>(null);
  const hideRef = useRef<number>(0);

  const showControls = useCallback(() => {
    setVisible(true);
    clearTimeout(hideRef.current);
    hideRef.current = window.setTimeout(() => setVisible(false), 2000);
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.paused ? v.play() : v.pause();
  };

  const seekTo = useCallback((clientX: number) => {
    const bar = progressRef.current;
    const v = videoRef.current;
    if (!bar || !v || !v.duration) return;
    const rect = bar.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    v.currentTime = pos * v.duration;
  }, []);

  const onProgressDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      seekTo(e.clientX);
      const onMove = (e: MouseEvent) => seekTo(e.clientX);
      const onUp = () => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
      };
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    },
    [seekTo]
  );

  const onProgressHover = (e: React.MouseEvent) => {
    const bar = progressRef.current;
    if (!bar || !duration) return;
    const rect = bar.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    setTooltip({ time: pos * duration, left: pos * 100 });
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onPlay = () => setPlaying(true);
    const onPause = () => {
      setPlaying(false);
      setVisible(true);
      clearTimeout(hideRef.current);
    };
    const onTimeUpdate = () => setCurrentTime(v.currentTime);
    const onLoaded = () => setDuration(v.duration);

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("timeupdate", onTimeUpdate);
    v.addEventListener("loadedmetadata", onLoaded);
    if (v.duration) setDuration(v.duration);

    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("timeupdate", onTimeUpdate);
      v.removeEventListener("loadedmetadata", onLoaded);
      clearTimeout(hideRef.current);
    };
  }, []);

  const progress = duration ? (currentTime / duration) * 100 : 0;

  if (!controls) {
    return (
      <figure className="my-12">
        <video src={src} autoPlay loop muted playsInline className="w-full" />
        {caption && (
          <figcaption className="text-foreground-muted text-sm mt-2">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="my-12">
      <div
        className="relative"
        onMouseEnter={showControls}
        onMouseMove={showControls}
        onMouseLeave={() => {
          setVisible(false);
          clearTimeout(hideRef.current);
        }}
      >
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          onClick={togglePlay}
          className="w-full"
        />
        <div
          className={`absolute bottom-0 left-0 right-0 flex items-center gap-3 px-4 py-3 transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        style={{
          background: "linear-gradient(transparent, rgba(0, 0, 0, 0.5))",
        }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          className="text-white/90 hover:text-white bg-transparent border-none cursor-pointer p-0 flex items-center transition-colors"
        >
          {playing ? (
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon
                points="8,5 19,12 8,19"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
              />
            </svg>
          )}
        </button>

        <div
          className="relative flex-1 py-3 cursor-pointer"
          onMouseDown={onProgressDown}
          onMouseMove={onProgressHover}
          onMouseLeave={() => setTooltip(null)}
        >
          <div
            ref={progressRef}
            className="w-full rounded-full overflow-hidden"
            style={{
              height: 3,
              background: "rgba(255, 255, 255, 0.25)",
            }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: "rgba(255, 255, 255, 0.9)",
              }}
            />
          </div>
          {tooltip && (
            <div
              className="absolute text-white pointer-events-none font-medium rounded"
              style={{
                bottom: 28,
                left: `${tooltip.left}%`,
                transform: "translateX(-50%)",
                background: "rgba(0, 0, 0, 0.7)",
                fontSize: 13,
                padding: "3px 8px",
                borderRadius: 5,
              }}
            >
              {formatTime(tooltip.time)}
            </div>
          )}
        </div>

        <span className="text-white text-[13px] font-medium shrink-0 tabular-nums">
          {formatTime(currentTime)}
        </span>
        </div>
      </div>
      {caption && (
        <figcaption className="text-foreground-muted text-sm mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
