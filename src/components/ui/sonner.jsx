"use client"

import { Toaster as Sonner } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

// Sonner — matcher Figma (node 139:11363)
// Toast: bg white, border #e5e5e5, rounded-8px, shadow-md
// Font: IBM Plex Sans Medium 14px, #0a0a0a
// Icon: 16px loader/check/error

function Toaster({ ...props }) {
  return (
    <Sonner
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info:    <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error:   <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={{
        "--normal-bg":     "var(--popover)",
        "--normal-text":   "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--border-radius": "8px",
        "--font-family":   "var(--font-sans)",
        "--font-size":     "14px",
        "--success-bg":    "color-mix(in oklch, var(--success) 12%, var(--background))",
        "--success-text":  "var(--success)",
        "--error-bg":      "color-mix(in oklch, var(--destructive) 12%, var(--background))",
        "--error-text":    "var(--destructive)",
        "--warning-bg":    "color-mix(in oklch, var(--warning) 12%, var(--background))",
        "--warning-text":  "var(--warning)",
      }}
      {...props}
    />
  )
}

export { Toaster }
