"use client";

import { useRef, useEffect } from "react";
import VideoPlayer from "./VideoPlayer";

type ContentPart =
  | { type: "html"; content: string }
  | { type: "video"; src: string; controls: boolean; caption?: string };

function parseContent(html: string): ContentPart[] {
  const regex =
    /(?:<figure>)?<video[^>]*src="([^"]*)"([^>]*)><\/video>(?:<figcaption>(.*?)<\/figcaption><\/figure>)?/g;
  const parts: ContentPart[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(html)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: "html", content: html.slice(lastIndex, match.index) });
    }
    const controls = match[2].includes('data-controls="true"');
    const caption = match[3] || undefined;
    parts.push({ type: "video", src: match[1], controls, caption });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < html.length) {
    parts.push({ type: "html", content: html.slice(lastIndex) });
  }

  return parts;
}

export default function ArticleContent({ html }: { html: string }) {
  const ref = useRef<HTMLElement>(null);
  const parts = parseContent(html);

  useEffect(() => {
    if (!ref.current) return;

    const images = ref.current.querySelectorAll<HTMLImageElement>(
      "img[data-placeholder]"
    );

    images.forEach((img) => {
      if (img.complete) {
        img.classList.add("loaded");
        return;
      }
      img.addEventListener("load", () => img.classList.add("loaded"), {
        once: true,
      });
    });
  }, [html]);

  return (
    <article ref={ref} className="max-w-none">
      {parts.map((part, i) =>
        part.type === "video" ? (
          <VideoPlayer
            key={i}
            src={part.src}
            controls={part.controls}
            caption={part.caption}
          />
        ) : (
          <div key={i} dangerouslySetInnerHTML={{ __html: part.content }} />
        )
      )}
    </article>
  );
}
