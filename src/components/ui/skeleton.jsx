import { cn } from "@/lib/utils"

// Skeleton — matcher Figma (node 303:246698) — bg #fafafa, rounded-8px

function Skeleton({ className, ...props }) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-[8px] bg-[#fafafa]", className)}
      {...props}
    />
  )
}

export { Skeleton }
