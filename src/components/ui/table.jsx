"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

// Table — matcher Figma Design System POC (node 164:18405 + 19:6480)
// Header: IBM Plex Sans Medium 14px, #0a0a0a, px-2 py-2, border-b #e5e5e5
// Cell: IBM Plex Sans Regular 16px, #0a0a0a, p-2, h-[38px], border-b #e5e5e5
// Row hover: bg #fafafa

function Table({ className, ...props }) {
  return (
    <div data-slot="table-container" className="relative w-full overflow-x-auto">
      <table
        data-slot="table"
        className={cn(
          "w-full caption-bottom",
          "font-['IBM_Plex_Sans',system-ui,sans-serif]",
          className
        )}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b [&_tr]:border-border", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn("border-t border-border bg-muted font-medium [&>tr]:last:border-b-0", className)}
      {...props}
    />
  )
}

function TableRow({ className, ...props }) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b border-border transition-colors",
        "hover:bg-accent",
        "data-[state=selected]:bg-accent",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        // Fra Figma: IBM Plex Sans Medium 14px, #0a0a0a, px-2 py-2
        "px-2 py-2 text-left align-middle",
        "font-medium text-[14px] leading-[20px] text-foreground",
        "whitespace-nowrap",
        "[&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        // Fra Figma: IBM Plex Sans Regular 16px, #0a0a0a, p-2, h-[38px]
        "p-2 h-[38px] align-middle",
        "font-normal text-[16px] leading-[24px] text-foreground",
        "whitespace-nowrap",
        "[&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({ className, ...props }) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-4 text-[14px] text-muted-foreground", className)}
      {...props}
    />
  )
}

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption }
