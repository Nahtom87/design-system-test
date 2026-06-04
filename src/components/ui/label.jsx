import * as React from "react"
import { Label as LabelPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"

// Label — matcher Figma Design System POC (node 16:1663)
// Font: IBM Plex Sans Medium 500, 14px, 20px line-height
// Color: #0a0a0a (--general/foreground)

function Label({ className, ...props }) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "inline-flex items-center gap-2 select-none",
        "font-['IBM_Plex_Sans',system-ui,sans-serif] font-medium text-[14px] leading-[20px] text-[#0a0a0a]",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
