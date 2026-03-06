import React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";

export interface TooltipProps {
  content: string | React.ReactNode;
  children: React.ReactNode;
  noDelay?: boolean;
  withArrow?: boolean;
  offset?: number;
  alignOffset?: number;
  asChild?: boolean;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "end" | "center";
  color?: string;
  delayDuration?: number;
  hideOnHoverContent?: boolean;
  largeRadius?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function Tooltip({
  children,
  content,
  noDelay,
  withArrow,
  offset = 10,
  alignOffset,
  asChild,
  side = "top",
  align,
  color,
  delayDuration,
  hideOnHoverContent = true,
  largeRadius,
  open,
  onOpenChange,
}: TooltipProps) {
  return (
    <RadixTooltip.Root
      delayDuration={noDelay ? 0 : (delayDuration ?? 1000)}
      disableHoverableContent={hideOnHoverContent}
      open={open}
      onOpenChange={onOpenChange}
    >
      <RadixTooltip.Trigger asChild={asChild}>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          className={
            "px-2 py-1 text-sm leading-normal rounded-sm select-none will-change-[transform,opacity] max-w-[340px] w-max text-start z-[9999999999] relative font-medium shadow-lg data-[state=delayed-open]:data-[side=top]:animate-slide-up-fade data-[state=delayed-open]:data-[side=right]:animate-slide-right-fade data-[state=delayed-open]:data-[side=bottom]:animate-slide-down-fade data-[state=delayed-open]:data-[side=left]:animate-slide-left-fade bg-black text-white"
          }
          sideOffset={offset}
          side={side}
          align={align}
          onClick={(e) => e.stopPropagation()}
          alignOffset={alignOffset}
          style={{
            backgroundColor: color ?? "",
            borderRadius: largeRadius ? "12px" : "",
          }}
        >
          {content}
          {withArrow ? (
            <RadixTooltip.Arrow asChild>
              <svg
                width="11"
                height="6"
                viewBox="0 0 11 6"
                className={"fill-accent"}
                style={{ fill: color ?? "" }}
              >
                <path d="M 0,0 L 4,4 C 4.5,5 6.5,5 7,4 L 11,0 Z" fill={color} />
              </svg>
            </RadixTooltip.Arrow>
          ) : null}
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
}
