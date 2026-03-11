import Image from "next/image";
import profileImg from "@/public/media/me/profile.png";
import workspaceImg from "@/public/media/me/workspace.png";
import messImg from "@/public/media/me/mess.png";
import drawImg from "@/public/media/me/draw.png";
import playImg from "@/public/media/me/play.png";
import funImg from "@/public/media/me/fun.png";

export const metadata = {
  title: "About",
  description: "About Mads Borup Petersen",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-1 max-w-[640px] sm:grid-cols-[1fr_200px] gap-12 w-full pt-24 items-start">
        <div className="flex flex-col gap-6 text-foreground/80 leading-relaxed">
          <h1 className="text-4xl font-[500] font-serif leading-[1.1] -tracking-[0.0125em] text-foreground">
            Hi, I'm Mads.
          </h1>
          <p>
            I'm a designer who builds across physical and digital. Recently,
            I've spent a lot of time building, and thinking about, AI-enabled
            products. I have a design background, and my technical skills are
            mostly self-taught.
          </p>
          <p>
            I like learning new things. My process usually involves a lot of
            learning through making to explore and identify new opportunities.
          </p>
          <p>
            Currently, I'm working on Junier; an AI-powered tool that helps
            teams build better products with integrated user feedback, wherever
            they work.
          </p>
        </div>
        <div className="order-first sm:order-last">
          <Image
            src={profileImg}
            alt="Mads Borup Petersen"
            width={200}
            height={200}
            className="w-full object-cover"
            placeholder="blur"
          />
        </div>
      </div>
      <div
        className="grid gap-1 w-full pt-24"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(100px, 220px))",
        }}
      >
        <Image
          src={workspaceImg}
          alt="Workspace."
          width={650}
          height={488}
          className="w-full object-cover"
          placeholder="blur"
        />
        <Image
          src={drawImg}
          alt="Drawing."
          width={650}
          height={488}
          className="w-full object-cover"
          placeholder="blur"
        />{" "}
        <Image
          src={messImg}
          alt="A mess."
          width={650}
          height={488}
          className="w-full object-cover"
          placeholder="blur"
        />
        <Image
          src={playImg}
          alt="Player."
          width={650}
          height={488}
          className="w-full object-cover"
          placeholder="blur"
        />
        <Image
          src={funImg}
          alt="Fun."
          width={650}
          height={488}
          className="w-full object-cover"
          placeholder="blur"
        />
      </div>
    </div>
  );
}
