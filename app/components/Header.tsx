"use client";

import { usePathname } from "next/navigation";

const navItems = [
  { label: "Portfolio", href: "/" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/Mads_Borup_Petersen_CV.pdf", target: "_blank" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="flex w-full items-center justify-center sm:items-start">
      <div className="flex w-full max-w-[1380px] items-center text-md justify-between py-8 px-8 bg-background sm:items-start">
        <a className="font-[450] flex flex-col sm:flex-row items-start sm:items-center sm:gap-2" href="/">
          <h4>Mads Borup</h4>
          <h4 className="text-foreground-muted hidden sm:inline">Product Designer + Builder</h4>
        </a>
        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-normal ${
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground-muted hover:text-foreground"
              }`}
              target={item.target}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
