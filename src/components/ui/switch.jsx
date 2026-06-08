import * as React from "react"
import { Switch as SwitchPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"

// Switch — matcher Figma Design System POC (node 19:6375)
// Størrelse: 33×18px
// Off: #e5e5e5 (--unofficial/accent-2), rounded-12px
// On: #171717 (--general/primary)
// Thumb: hvid cirkel, 14px
// Shadow-xs: 0 1px 2px rgba(0,0,0,0.05)
// Focus ring: 3px #d4d4d4

function Switch({ className, ...props }) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        // Størrelse — fra Figma: 33×18px
        "relative inline-flex h-[18px] w-[33px] shrink-0 items-center",
        "rounded-[12px]",
        // Shadow
        "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]",
        // Off state: #e5e5e5
        "bg-input",
        // On state: #171717
        "data-[state=checked]:bg-primary",
        // Transition
        "transition-colors outline-none",
        // Focus
        "focus-visible:ring-[3px] focus-visible:ring-ring/50",
        // Disabled
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          // Hvid cirkel, 14px
          "pointer-events-none block size-[14px] rounded-full bg-background",
          "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.15)]",
          "transition-transform duration-200",
          // Position: off=left, on=right
          "data-[state=unchecked]:translate-x-[2px]",
          "data-[state=checked]:translate-x-[17px]",
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
