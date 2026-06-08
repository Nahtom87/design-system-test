import * as React from "react"
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui"
import { cn } from "@/lib/utils"

// Button — matcher Figma Design System POC (node 9:1071)
// Varianter: primary, secondary, outline, ghost, destructive
// Størrelser: mini (24px), small (32px), default (36px), large (40px), extra-large (48px)
// Roundness: default (8px), round (pill)
// Font: IBM Plex Sans Medium 500, 14px (mini: 12px)
// Disabled: opacity-50, pointer-events-none

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-sans font-medium",
    "transition-colors outline-none select-none",
    "disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:ring-[3px] focus-visible:ring-ring/50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-primary text-primary-foreground",
          "hover:bg-primary/90",
        ],
        secondary: [
          "bg-secondary text-secondary-foreground",
          "hover:bg-secondary/80",
        ],
        outline: [
          "border border-input bg-background text-foreground",
          "hover:bg-accent hover:text-accent-foreground",
        ],
        ghost: [
          "text-foreground",
          "hover:bg-accent hover:text-accent-foreground",
        ],
        destructive: [
          "bg-destructive text-white",
          "hover:bg-destructive/90",
          "focus-visible:ring-destructive/30",
        ],
        // Alias for shadcn compatibility
        default: [
          "bg-primary text-primary-foreground",
          "hover:bg-primary/90",
        ],
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        mini:          "h-6 px-2 py-0.5 text-[12px] leading-[16px] [&_svg]:size-3",
        small:         "h-8 px-3 py-1.5 text-[14px] leading-[20px] [&_svg]:size-4",
        default:       "h-9 px-4 py-2 text-[14px] leading-[20px] [&_svg]:size-4",
        large:         "h-10 px-5 py-2.5 text-[14px] leading-[20px] [&_svg]:size-4",
        "extra-large": "h-12 px-6 py-3 text-[16px] leading-[24px] [&_svg]:size-[18px]",
        // shadcn compat aliases
        sm:   "h-8 px-3 text-[14px] [&_svg]:size-4",
        lg:   "h-10 px-5 text-[14px] [&_svg]:size-4",
        icon: "size-9 [&_svg]:size-4",
        "icon-sm": "size-7 [&_svg]:size-4",
        xs:   "h-6 px-2 text-[12px] [&_svg]:size-3",
      },
      roundness: {
        default: "rounded-[8px]",
        round:   "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      roundness: "default",
    },
  }
)

function Button({ className, variant = "primary", size = "default", roundness = "default", asChild = false, ...props }) {
  const Comp = asChild ? Slot.Root : "button"
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, roundness }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
