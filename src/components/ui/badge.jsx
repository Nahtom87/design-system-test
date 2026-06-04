import * as React from "react"
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"

// Badge — matcher Figma Design System POC (node 19:6979)
// Varianter: primary, secondary, outline, ghost, destructive
// Roundness: default (8px), round (pill)
const badgeVariants = cva(
  // Base: IBM Plex Sans Bold 12px, padding fra Figma tokens (px-2=8px, py-0.5=2px), gap-1=4px
  "inline-flex items-center justify-center gap-1 px-2 py-0.5 text-[12px] font-bold leading-4 whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        // Primary: #171717 bg, #fafafa text — fra --general/primary
        primary:
          "bg-[#171717] text-[#fafafa] focus-visible:ring-[#d4d4d4]",
        // Secondary: #f5f5f5 bg, #171717 text — fra --general/secondary
        secondary:
          "bg-[#f5f5f5] text-[#171717] focus-visible:ring-[#d4d4d4]",
        // Outline: transparent bg, border, #0a0a0a text
        outline:
          "bg-transparent border border-[#e5e5e5] text-[#0a0a0a] focus-visible:ring-[#d4d4d4]",
        // Ghost: transparent bg, #0a0a0a text
        ghost:
          "bg-transparent text-[#0a0a0a] focus-visible:ring-[#d4d4d4]",
        // Destructive: #dc2626 bg, hvid text
        destructive:
          "bg-[#dc2626] text-white focus-visible:ring-[#fca5a5]",
      },
      roundness: {
        // Default: rounded-lg = 8px — fra --rounded-lg
        default: "rounded-lg",
        // Round: pill-form — fra --rounded-full
        round: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      roundness: "default",
    },
  }
)

function Badge({
  className,
  variant = "primary",
  roundness = "default",
  showLeftIcon = false,
  showRightIcon = false,
  iconLeft,
  iconRight,
  children,
  ...props
}) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, roundness }), className)}
      {...props}
    >
      {showLeftIcon && (iconLeft || <DefaultIcon />)}
      {children}
      {showRightIcon && (iconRight || <DefaultIcon />)}
    </span>
  );
}

// Lille placeholder-ikon (12x12px) til venstre/højre
function DefaultIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="6" cy="6" r="4" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export { Badge, badgeVariants }
