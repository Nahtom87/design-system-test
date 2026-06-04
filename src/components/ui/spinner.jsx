import * as React from "react"
import { cn } from "@/lib/utils"

// Spinner — matcher Figma Design System POC (node 11:1107)
// Størrelser: sm (12px), default (16px), lg (24px), xl (32px)
// Farve arves fra forælderen (currentColor)

const sizes = {
  sm:      "size-3",
  default: "size-4",
  lg:      "size-6",
  xl:      "size-8",
}

function Spinner({ className, size = "default", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-label="Indlæser..."
      role="status"
      className={cn(
        "animate-spin",
        sizes[size] || sizes.default,
        className
      )}
      {...props}
    >
      {/* Track */}
      <circle
        cx="8" cy="8" r="6"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity="0.2"
      />
      {/* Aktiv bue */}
      <path
        d="M8 2a6 6 0 0 1 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export { Spinner }
