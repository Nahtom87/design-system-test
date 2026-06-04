import * as React from "react"
import { Tabs as TabsPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"

// Tabs — matcher Figma Design System POC (node 9:997)
// Tab: min-h/w 29px, px-2 py-1, rounded-[10px]
// Inactive: text #737373, Active: text #0a0a0a, bg white, shadow
// Counter: bg #d4d4d4, 16px, IBM Plex Sans Bold 12px
// Font: IBM Plex Sans Medium 500, 14px

function Tabs({ className, ...props }) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({ className, ...props }) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "inline-flex items-center gap-1 p-1",
        "bg-[#f5f5f5] rounded-[10px]",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        // Layout
        "inline-flex items-center justify-center gap-1.5",
        "min-h-[29px] min-w-[29px] px-2 py-1",
        "rounded-[8px]",
        // Typografi
        "font-['IBM_Plex_Sans',system-ui,sans-serif] font-medium text-[14px] leading-[20px]",
        "whitespace-nowrap",
        // Inactive
        "text-[#737373] transition-all",
        // Active
        "data-[state=active]:bg-white data-[state=active]:text-[#0a0a0a]",
        "data-[state=active]:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)]",
        // Focus
        "outline-none focus-visible:ring-[3px] focus-visible:ring-[#d4d4d4]",
        // Disabled
        "disabled:pointer-events-none disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 text-[14px] outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
