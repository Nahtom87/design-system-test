"use client"

import * as React from "react"
import { Avatar as AvatarPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"

// Avatar — matcher Figma Design System POC (node 1805:29466)
// Størrelser: regular (40px), small (32px), tiny (24px), extra-tiny (20px)
// Roundness: round (cirkel), roundrect (afrundede hjørner, varierende radius)
// Baggrund: --general/accent = #f5f5f5, tekst: --general/foreground = #0a0a0a

const sizeClasses = {
  regular:    "size-[40px]",
  small:      "size-[32px]",
  tiny:       "size-[24px]",
  "extra-tiny": "size-[20px]",
}

// Roundrect-radius varierer per størrelse (fra Figma tokens)
const roundrectClasses = {
  regular:    "rounded-[10px]",   // --radius = 10px
  small:      "rounded-[10px]",   // --radius = 10px
  tiny:       "rounded-[6px]",    // --rounded-md = 6px
  "extra-tiny": "rounded-[4px]",  // --rounded-sm = 4px
}

const fallbackTextClasses = {
  regular:    "text-[14px] font-bold leading-[20px]",   // paragraph/small/bold
  small:      "text-[14px] font-bold leading-[20px]",
  tiny:       "text-[12px] font-bold leading-[16px]",   // paragraph/mini/bold
  "extra-tiny": "text-[8px] font-medium leading-[1.5] tracking-[0.12px]",
}

function Avatar({
  className,
  size = "regular",
  roundness = "round",
  ...props
}) {
  const sizeClass = sizeClasses[size] || sizeClasses.regular
  const roundClass = roundness === "round"
    ? "rounded-full"
    : (roundrectClasses[size] || "rounded-lg")

  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      data-roundness={roundness}
      className={cn(
        "relative flex shrink-0 overflow-hidden select-none",
        sizeClass,
        roundClass,
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({ className, ...props }) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("size-full object-cover", className)}
      {...props}
    />
  )
}

function AvatarFallback({ className, size = "regular", ...props }) {
  const textClass = fallbackTextClasses[size] || fallbackTextClasses.regular
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center",
        "bg-[#f5f5f5] text-[#0a0a0a] font-[family-name:'IBM_Plex_Sans',system-ui,sans-serif]",
        textClass,
        className
      )}
      {...props}
    />
  )
}

function AvatarGroup({ className, ...props }) {
  return (
    <div
      data-slot="avatar-group"
      className={cn("flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background", className)}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback, AvatarGroup }
