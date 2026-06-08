import * as React from "react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"
import { CheckIcon, MinusIcon } from "lucide-react"

// Checkbox — matcher Figma (node 280:104271)
// States: Default, Focus, Error, Error Focus, Disabled
// Checked: False, True, Indeterminate
// 16px boks, border #d4d4d4, rounded-4px, shadow-xs
// Checked: #171717 bg + hvid checkmark
// Error: rød border #dc2626 + rød focus ring #fca5a5
// Indeterminate: #171717 bg + hvid minus-ikon

function Checkbox({ className, error = false, ...props }) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        // Base
        "relative flex size-4 shrink-0 items-center justify-center rounded-[4px]",
        "transition-colors outline-none",
        "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]",
        // Default state
        !error && "border border-[#d4d4d4] bg-white",
        // Error state — rød border
        error && "border border-[#dc2626] bg-white",
        // Focus rings
        !error && "focus-visible:ring-[3px] focus-visible:ring-[#d4d4d4]",
        error && "focus-visible:ring-[3px] focus-visible:ring-[#fca5a5]",
        // Checked state
        "data-[state=checked]:bg-[#171717] data-[state=checked]:border-[#171717] data-[state=checked]:text-white",
        // Indeterminate state
        "data-[state=indeterminate]:bg-[#171717] data-[state=indeterminate]:border-[#171717] data-[state=indeterminate]:text-white",
        // Disabled
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
        {props.checked === 'indeterminate'
          ? <MinusIcon className="size-3" strokeWidth={2.5} />
          : <CheckIcon className="size-3" strokeWidth={2.5} />
        }
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
