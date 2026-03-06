import Link from "next/link";

interface Props {
  title: string;
  imgUrl: string;
  description: string;
  link: string;
  target?: string;
  aspectRatio?: string;
  bgColor?: string | string[];
}

export default function ProjectCard({
  title,
  imgUrl,
  description,
  link,
  target,
  aspectRatio = "5/3",
  bgColor,
}: Props) {
  return (
    <Link
      href={link}
      target={target}
      className="group flex-1 min-w-0 self-start"
    >
      <div className="flex flex-col min-w-0">
        <div
          className="overflow-hidden border border-foreground/2 transition-opacity duration-150 ease-out group-hover:opacity-90"
          style={{
            aspectRatio,
            background: Array.isArray(bgColor)
              ? `linear-gradient(to bottom, ${bgColor.join(", ")})`
              : bgColor,
          }}
        >
          <img src={imgUrl} alt="" className="object-cover w-full h-full " />
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
