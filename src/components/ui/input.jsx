import * as React from "react"
import { cn } from "@/lib/utils"

// Input — matcher Figma (node 19:1286)
// bg white, border #e5e5e5, px-4 py-[9.5px], min-h-[40px], rounded-8px, shadow-xs

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex w-full min-w-0 min-h-[40px] px-4 py-[9.5px]",
        "bg-white border border-[#e5e5e5] rounded-[8px]",
        "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]",
        "font-['IBM_Plex_Sans',system-ui,sans-serif] font-normal text-[14px] leading-[20px] text-[#0a0a0a]",
        "placeholder:text-[#737373]",
        "transition-colors outline-none",
        "focus-visible:border-[#171717] focus-visible:ring-[3px] focus-visible:ring-[#d4d4d4]",
        "disabled:pointer-events-none disabled:opacity-50 disabled:bg-[#f5f5f5]",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#0a0a0a]",
        className
      )}
      {...props}
    />
  )
}

export { Input }
