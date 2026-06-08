"use client"

import * as React from "react"
import { Slider as SliderPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"

// Slider — matcher Figma Design System POC (node 162:17940)
// Track: bg #d4d4d4, 6px bred, rounded-[10px]
// Range (filled): bg #171717
// Thumb: 14px, bg white, border #0a0a0a, rounded-full
// Focus ring: 3px #d4d4d4

function Slider({ className, defaultValue, value, min = 0, max = 100, ...props }) {
  const _values = React.useMemo(() =>
    Array.isArray(value) ? value
    : Array.isArray(defaultValue) ? defaultValue
    : [min],
  [value, defaultValue, min])

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none",
        "data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className="relative grow overflow-hidden rounded-[10px] bg-muted h-[6px] w-full"
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className="absolute h-full bg-primary"
        />
      </SliderPrimitive.Track>

      {Array.from({ length: _values.length }, (_, i) => (
        <SliderPrimitive.Thumb
          key={i}
          data-slot="slider-thumb"
          className={cn(
            // Størrelse: 14px, hvid med sort border — fra Figma
            "relative block size-[14px] shrink-0 rounded-full",
            "bg-background border border-foreground",
            "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.15)]",
            "transition-shadow outline-none",
            "after:absolute after:-inset-2",
            "focus-visible:ring-[3px] focus-visible:ring-ring/50",
            "disabled:pointer-events-none disabled:opacity-50",
          )}
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }
