import * as React from "react"
import { cn } from "@/lib/utils"

// Textarea — matcher Figma Design System POC (node 140:11507)
// bg: white, border: #e5e5e5, rounded-lg=8px, shadow-xs
// Min-height: 76px (fra Figma), resize-handle synlig

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex w-full min-h-[76px] px-4 py-[9.5px]",
        "bg-background border border-input rounded-[8px]",
        "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]",
        "font-sans font-normal text-[14px] leading-[20px] text-foreground",
        "placeholder:text-muted-foreground",
        "transition-colors outline-none resize-y",
        "focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
