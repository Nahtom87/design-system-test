"use client"

import * as React from "react"
import { cva } from "class-variance-authority"
import { Toggle as TogglePrimitive } from "radix-ui"
import { cn } from "@/lib/utils"

// Toggle — matcher Figma Design System POC (node 816:114928)
// Outlined skin: bg transparent, border #e5e5e5
// Active: bg rgba(0,0,0,0.05)
// Font: IBM Plex Sans Medium 500, 14px
// Large: min-h-[40px] px-3 py-[9.5px]
// Focus ring: 3px #d4d4d4

const toggleVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-sans font-medium text-[14px] leading-[20px] text-foreground",
    "whitespace-nowrap transition-all outline-none",
    "focus-visible:ring-[3px] focus-visible:ring-ring/50",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4",
  ],
  {
    variants: {
      variant: {
        // Default: ingen border
        default: [
          "bg-transparent",
          "hover:bg-accent hover:text-accent-foreground",
          "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        ],
        // Outline: border #e5e5e5
        outline: [
          "bg-transparent border border-border",
          "hover:bg-accent hover:text-accent-foreground",
          "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground data-[state=on]:border-ring",
        ],
      },
      size: {
        sm:      "h-8 min-w-8 rounded-[8px] px-2",
        default: "h-9 min-w-9 rounded-[8px] px-3 py-2",
        lg:      "min-h-[40px] rounded-[8px] px-3 py-[9.5px]",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "default",
    },
  }
)

function Toggle({ className, variant = "outline", size = "default", ...props }) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
