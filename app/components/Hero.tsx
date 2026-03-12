"use client";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 gap-8 pt-35 lg:gap-8 w-full lg:grid-cols-2 items-end">
      <h1 className="text-5xl font-[400] max-w-[600px] font-serif text-balance leading-[1.1] -tracking-[0.015em] text-foreground">
        I&apos;m Mads,{" "}
        <span className="text-foreground-muted">
          a curious designer who <i>builds</i>.
        </span>
      </h1>
      <div className="flex flex-col text-md gap-1">
        <div className="flex items-start gap-4">
          <span className="text-foreground-muted shrink-0 w-26 sm:w-36">2024–Present</span>
          <span className="text-foreground w-26 shrink-0 sm:w-36">Junier</span>
          <span className="text-foreground-muted">Founder</span>
        </div>
        <div className="flex items-start gap-4">
          <span className="text-foreground-muted shrink-0 w-26 sm:w-36">2020–2023</span>
          <span className="text-foreground w-26 shrink-0 sm:w-36">Moodagent</span>
          <span className="text-foreground-muted">Design Technologist</span>
        </div>
      </div>
    </div>
  );
}
