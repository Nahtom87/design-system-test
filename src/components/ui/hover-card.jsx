import * as React from "react"
import { HoverCard as HoverCardPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"

// Hover Card — matcher Figma (node 303:246487)
// bg white, border #e5e5e5, rounded-8px, p-2, w-200px, shadow-md

function HoverCard({ ...props }) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />
}

function HoverCardTrigger({ ...props }) {
  return <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
}

function HoverCardContent({ className, align = "center", sideOffset = 6, ...props }) {
  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-[200px] outline-none",
          // Fra Figma: white bg, border #e5e5e5, rounded-8px, p-2, shadow-md
          "bg-popover border border-border rounded-[8px] p-2",
          "shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]",
          "font-sans text-[14px] text-popover-foreground",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
