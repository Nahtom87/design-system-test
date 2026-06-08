import { cn } from "@/lib/utils"

// Kbd — matcher Figma (node 780:42511)
// bg #f5f5f5 (--general/muted), text #737373, px-1 py-0.5, rounded-4px
// Font: IBM Plex Sans Regular 12px

function Kbd({ className, ...props }) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "pointer-events-none inline-flex items-center justify-center select-none",
        "px-1 py-0.5 rounded-[4px]",
        "bg-muted text-muted-foreground",
        "font-sans font-normal text-[12px] leading-[16px]",
        "whitespace-nowrap",
        className
      )}
      {...props}
    />
  )
}

function KbdGroup({ className, ...props }) {
  return <kbd data-slot="kbd-group" className={cn("inline-flex items-center gap-1", className)} {...props} />
}

export { Kbd, KbdGroup }
