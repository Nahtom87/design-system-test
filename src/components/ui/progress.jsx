"use client"

import * as React from "react"
import { Progress as ProgressPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"

// Progress — matcher Figma (node 843:105647)
// Track: h-8px, bg #d4d4d4, rounded-12px
// Indicator: bg #171717, rounded-left-6px

function Progress({ className, value, ...props }) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative h-[8px] w-full overflow-hidden rounded-[12px] bg-muted",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="h-full bg-primary rounded-l-[6px] transition-all duration-300"
        style={{ width: `${value || 0}%` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
