import * as React from "react"
import { Accordion as AccordionPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "lucide-react"

// Accordion — matcher Figma Design System POC (node 1779:758)
// Font: IBM Plex Sans Medium 500, 14px
// Padding: px-4 py-4, border #e5e5e5
// Focus ring: 3px #d4d4d4

function Accordion({ className, ...props }) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col", className)}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "border border-border rounded-[8px] mb-1 overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          // Base — IBM Plex Sans Medium, 14px, #0a0a0a
          "flex flex-1 items-center justify-between w-full",
          "px-4 py-4",
          "font-sans font-medium text-[14px] leading-[20px] text-foreground text-left",
          "bg-card transition-colors",
          // Focus
          "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
          // Disabled
          "disabled:pointer-events-none disabled:opacity-50",
          // Chevron roterer ved åbning
          "[&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="size-4 shrink-0 text-muted-foreground transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
      {...props}
    >
      <div className={cn(
        "px-4 pb-4 pt-0",
        "font-sans text-[14px] leading-[20px] text-muted-foreground",
        className
      )}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
