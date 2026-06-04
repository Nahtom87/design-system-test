import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Alert — matcher Figma Design System POC (node 58:5414)
// bg: white, border: #e5e5e5, px-4 py-3, rounded-8px
// Titel: IBM Plex Sans Medium 14px #0a0a0a
// Beskrivelse: IBM Plex Sans Regular 14px #737373
// Icon: 16px, pt-0.5

const alertVariants = cva(
  [
    "relative flex w-full gap-4 items-center overflow-hidden",
    "px-4 py-3 rounded-[8px] border",
    "font-['IBM_Plex_Sans',system-ui,sans-serif] text-[14px] leading-[20px]",
  ],
  {
    variants: {
      variant: {
        // Neutral: hvid bg, grå border
        default:     "bg-white border-[#e5e5e5] text-[#0a0a0a]",
        // Destructive: rød toning
        destructive: "bg-[#fef2f2] border-[#fca5a5] text-[#dc2626]",
        // Success
        success:     "bg-[#f0fdf4] border-[#86efac] text-[#16a34a]",
        // Warning
        warning:     "bg-[#fffbeb] border-[#fcd34d] text-[#d97706]",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

function Alert({ className, variant, ...props }) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }) {
  return (
    <div
      data-slot="alert-title"
      className={cn("font-medium text-[14px] leading-[20px]", className)}
      {...props}
    />
  )
}

function AlertDescription({ className, ...props }) {
  return (
    <div
      data-slot="alert-description"
      className={cn("font-normal text-[14px] leading-[20px] text-[#737373]", className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
