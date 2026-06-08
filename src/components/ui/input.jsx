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
        "bg-background border border-input rounded-[8px]",
        "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]",
        "font-sans font-normal text-[14px] leading-[20px] text-foreground",
        "placeholder:text-muted-foreground",
        "transition-colors outline-none",
        "focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "disabled:pointer-events-none disabled:opacity-50 disabled:bg-muted",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Input }
