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
        "--normal-bg":     "#ffffff",
        "--normal-text":   "#0a0a0a",
        "--normal-border": "#e5e5e5",
        "--border-radius": "8px",
        "--font-family":   "'IBM Plex Sans', system-ui, sans-serif",
        "--font-size":     "14px",
        "--success-bg":    "#f0fdf4",
        "--success-text":  "#16a34a",
        "--error-bg":      "#fef2f2",
        "--error-text":    "#dc2626",
        "--warning-bg":    "#fffbeb",
        "--warning-text":  "#d97706",
      }}
      {...props}
    />
  )
}

export { Toaster }
