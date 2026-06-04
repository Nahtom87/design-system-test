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
        "bg-white border border-[#e5e5e5] rounded-[8px]",
        "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]",
        "font-['IBM_Plex_Sans',system-ui,sans-serif] font-normal text-[14px] leading-[20px] text-[#0a0a0a]",
        "placeholder:text-[#737373]",
        "transition-colors outline-none resize-y",
        "focus-visible:border-[#171717] focus-visible:ring-[3px] focus-visible:ring-[#d4d4d4]",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[#f5f5f5]",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
