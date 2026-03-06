import Image from "next/image";

export const metadata = {
  title: "About",
  description: "About Mads Borup Petersen",
};

export default function Page() {
  return (
    <div className="grid grid-cols-1 max-w-[640px] sm:grid-cols-[1fr_200px] gap-12 w-full pt-24 items-start">
      <div className="flex flex-col gap-6 text-foreground/80 leading-relaxed">
        <h1 className="text-4xl font-[500] leading-[1.1] -tracking-[0.0125em] text-foreground">
          Hi, my name is Mads.
        </h1>
        <p>
          I'm a designer with hands-on technical experience and a background in
          Interaction Design.
        </p>
        <p>
          I like learning new things and discovering new ways to create. My
          process usually involves a lot of learning through making to explore
          and identify opportunities.
        </p>
        <p>
          Currently, I'm working on Junier; an AI tool that helps teams build better
          products with integrated user feedback, wherever they work.
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
  );
}
