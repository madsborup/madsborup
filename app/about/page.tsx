import Image from "next/image";

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
            I'm a product designer who builds across physical and digital.
            Recently, I've spent a lot of time building with, and thinking about,
            AI. I have a design background, and my technical
            skills are mostly self-taught.
          </p>
          <p>
            I like learning new things. My
            process usually involves a lot of learning through making to explore
            and identify new opportunities.
          </p>
          <p>
            Currently, I'm working on Junier; an AI-powered tool that helps teams build
            better products with integrated user feedback, wherever they work.
          </p>
        </div>
        <div className="order-first sm:order-last">
          <Image
            src="/media/me/profile.jpeg"
            alt="Mads Borup Petersen"
            width={200}
            height={250}
            className="w-full object-cover"
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
          src="/media/me/workspace.jpg"
          alt="Mads Borup Petersen"
          width={200}
          height={250}
          className="w-full object-cover"
        />
        <Image
          src="/media/me/mess.jpg"
          alt="A mess."
          width={200}
          height={250}
          className="w-full object-cover"
        />
        <Image
          src="/media/me/draw.jpg"
          alt="A mess."
          width={200}
          height={250}
          className="w-full object-cover"
        />{" "}
        <Image
          src="/media/me/wavy.jpg"
          alt="A mess."
          width={200}
          height={250}
          className="w-full object-cover"
        />
        <Image
          src="/media/me/fun.jpg"
          alt="A mess."
          width={200}
          height={250}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}
