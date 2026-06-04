import * as React from "react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"
import { CheckIcon } from "lucide-react"

// Checkbox — matcher Figma Design System POC (node 19:6352)
// Størrelse: 16px boks
// Border: #d4d4d4, rounded-[4px]
// Checked: #171717 bg, hvid checkmark
// Focus ring: 3px #d4d4d4
// Shadow: 0 1px 2px rgba(0,0,0,0.05)

function Checkbox({ className, ...props }) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        // Størrelse og form — fra Figma: 16px, rounded-sm=4px
        "relative flex size-4 shrink-0 items-center justify-center rounded-[4px]",
        // Border og baggrund (unchecked)
        "border border-[#d4d4d4] bg-white",
        // Shadow-xs fra Figma
        "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]",
        // Transitions
        "transition-colors outline-none",
        // Focus
        "focus-visible:ring-[3px] focus-visible:ring-[#d4d4d4]",
        // Checked state: #171717 bg, border matcher
        "data-[state=checked]:bg-[#171717] data-[state=checked]:border-[#171717] data-[state=checked]:text-white",
        // Disabled
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="grid place-content-center text-current">
        <CheckIcon className="size-3" strokeWidth={2.5} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
