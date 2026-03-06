"use client";

import Link from "next/link";
import { useState, useCallback } from "react";

interface Props {
  title: string;
  imgUrl: string;
  description: string;
  link: string;
  target?: string;
  aspectRatio?: string;
  bgColor?: string | string[];
  blurDataURL?: string;
}

export default function ProjectCard({
  title,
  imgUrl,
  description,
  link,
  target,
  aspectRatio = "5/3",
  bgColor,
  blurDataURL,
}: Props) {
  const [loaded, setLoaded] = useState(false);

  const imgRef = useCallback((img: HTMLImageElement | null) => {
    if (img?.complete) setLoaded(true);
  }, []);

  return (
    <Link
      href={link}
      target={target}
      className="group flex-1 min-w-0 self-start"
    >
      <div className="flex flex-col min-w-0">
        <div
          className="overflow-hidden transition-opacity duration-150 ease-out group-hover:opacity-90"
          style={{
            aspectRatio,
            background: Array.isArray(bgColor)
              ? `linear-gradient(to bottom, ${bgColor.join(", ")})`
              : bgColor,
          }}
        >
          <img
            ref={imgRef}
            src={imgUrl}
            alt=""
            onLoad={() => setLoaded(true)}
            className={`object-cover w-full h-full transition-opacity duration-100 ${loaded ? "opacity-100" : "opacity-0"}`}
            style={
              blurDataURL && !loaded
                ? {
                    backgroundImage: `url(${blurDataURL})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : undefined
            }
          />
        </div>
        <div className="flex items-center font-normal justify-between py-2 gap-4 min-w-0">
          <h5 className="whitespace-nowrap overflow-hidden text-ellipsis min-w-0">
            {title}
          </h5>
          <span className="text-foreground-muted flex-1 min-w-[108px] text-right overflow-hidden text-ellipsis whitespace-nowrap">
            {description}
          </span>
        </div>
      </div>
    </Link>
  );
}
