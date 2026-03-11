"use client";

import { useState } from "react";
import { useToast } from "../toast-provider";
import Tooltip from "./Tooltip";

export default function Footer() {
  const [hasCopied, setHasCopied] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex w-full items-center justify-center sm:items-start mt-16">
      <div className="flex w-full text-foreground-muted max-w-[1380px] items-center justify-between text-md py-8 px-8 bg-background sm:items-start">
        <span></span>
        <div className="flex items-center gap-4">
          <a
            className={
              "font-normal text-foreground-muted hover:text-foreground"
            }
            href={"https://linked.com/in/madsborup"}
            target="_blank"
          >
            LinkedIn
          </a>
          <Tooltip
            content={hasCopied ? "Email copied!" : "Copy email"}
            noDelay
            hideOnHoverContent
            open={open}
            color={hasCopied ? "var(--blue)" : undefined}
          >
            <a
              onClick={() => {
                setHasCopied(true);
                setOpen(true);
                navigator.clipboard.writeText("madsborup@gmail.com");
              }}
              className={"font-normal hover:text-foreground"}
              onMouseLeave={() => {
                setHasCopied(false);
                setOpen(false);
              }}
              onMouseEnter={() => setOpen(true)}
            >
              Email
            </a>
          </Tooltip>
        </div>
      </div>
    </nav>
  );
}
