import * as React from "react"
import { Slot } from "radix-ui"
import { cn } from "@/lib/utils"
import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react"

// Breadcrumb — matcher Figma Design System POC (node 68:7354)
// Links (non-current): IBM Plex Sans Regular 14px, #737373
// Current item: #0a0a0a
// Separator: ChevronRight 14px, #737373
// Gap: 4px

function Breadcrumb({ className, ...props }) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" className={cn(className)} {...props} />
}

function BreadcrumbList({ className, ...props }) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "flex flex-wrap items-center gap-1",
        "font-['IBM_Plex_Sans',system-ui,sans-serif] font-normal text-[14px] leading-[20px]",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({ className, ...props }) {
  return <li data-slot="breadcrumb-item" className={cn("inline-flex items-center gap-1", className)} {...props} />
}

function BreadcrumbLink({ asChild, className, ...props }) {
  const Comp = asChild ? Slot.Root : "a"
  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn(
        "text-[#737373] hover:text-[#0a0a0a] transition-colors",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbPage({ className, ...props }) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("text-[#0a0a0a] font-normal", className)}
      {...props}
    />
  )
}

function BreadcrumbSeparator({ children, className, ...props }) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("text-[#737373] [&>svg]:size-[14px]", className)}
      {...props}
    >
      {children ?? <ChevronRightIcon />}
    </li>
  )
}

function BreadcrumbEllipsis({ className, ...props }) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-5 items-center justify-center text-[#737373] [&>svg]:size-4", className)}
      {...props}
    >
      <MoreHorizontalIcon />
      <span className="sr-only">Mere</span>
    </span>
  )
}

export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis }
