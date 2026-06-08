import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react"

// Pagination — matcher Figma (node 133:10928)
// Button: min-h-[36px], w-[34px], border #d4d4d4, rounded-8px, shadow-xs
// Font: IBM Plex Sans Medium 14px, #0a0a0a
// Active: bg white, border #d4d4d4

const PaginationBtn = ({ className, isActive, children, ...props }) => (
  <a
    className={cn(
      "inline-flex items-center justify-center",
      "min-h-[36px] min-w-[34px] px-3 py-2",
      "border border-border rounded-[8px]",
      "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]",
      "font-sans font-medium text-[14px] leading-[20px] text-foreground",
      "cursor-pointer transition-colors select-none text-decoration-none",
      "hover:bg-accent hover:text-accent-foreground",
      isActive && "bg-background border-border font-bold",
      !isActive && "bg-background",
      className
    )}
    aria-current={isActive ? "page" : undefined}
    {...props}
  >
    {children}
  </a>
)

function Pagination({ className, ...props }) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

function PaginationContent({ className, ...props }) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex items-center gap-1", className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }) {
  return <li data-slot="pagination-item" {...props} />
}

function PaginationLink({ className, isActive, ...props }) {
  return <PaginationBtn isActive={isActive} data-slot="pagination-link" className={className} {...props} />
}

function PaginationPrevious({ className, ...props }) {
  return (
    <PaginationLink aria-label="Forrige side" className={cn("gap-1 px-3", className)} {...props}>
      <ChevronLeftIcon className="size-4" />
      <span className="hidden sm:block">Forrige</span>
    </PaginationLink>
  )
}

function PaginationNext({ className, ...props }) {
  return (
    <PaginationLink aria-label="Næste side" className={cn("gap-1 px-3", className)} {...props}>
      <span className="hidden sm:block">Næste</span>
      <ChevronRightIcon className="size-4" />
    </PaginationLink>
  )
}

function PaginationEllipsis({ className, ...props }) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex items-center justify-center min-h-[36px] min-w-[34px] text-muted-foreground", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">Flere sider</span>
    </span>
  )
}

export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious }
