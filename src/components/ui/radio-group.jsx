import * as React from "react"
import { RadioGroup as RadioGroupPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"

// Radio Group — matcher Figma (node 19:5985)
// Radio: 16px, border #d4d4d4, checked: #171717 bg + hvid dot
// Label: IBM Plex Sans Regular 14px, #404040
// Rich card: bg white, border #e5e5e5, rounded-10px, p-3

function RadioGroup({ className, ...props }) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid w-full gap-2", className)}
      {...props}
    />
  )
}

function RadioGroupItem({ className, ...props }) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "relative flex size-4 shrink-0 items-center justify-center rounded-full",
        "border border-[#d4d4d4] bg-white",
        "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]",
        "outline-none transition-colors",
        "focus-visible:ring-[3px] focus-visible:ring-[#d4d4d4]",
        "data-[state=checked]:border-[#171717] data-[state=checked]:bg-[#171717]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <span className="size-[6px] rounded-full bg-white" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
