"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { SearchIcon, CheckIcon } from "lucide-react"

// Command — matcher Figma (node 66:5596)
// Active item: bg #e5e5e5, rounded-6px, p-2
// Text: IBM Plex Sans Regular 14px #0a0a0a / 12px #737373
// Input: søgefelt øverst
// Group heading: 12px #737373

function Command({ className, ...props }) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "flex size-full flex-col overflow-hidden",
        "bg-popover text-popover-foreground rounded-[10px]",
        "font-sans",
        className
      )}
      {...props}
    />
  )
}

function CommandDialog({ title = "Kommandopalet", description = "Søg efter en kommando...", children, className, ...props }) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent className={cn("top-1/3 translate-y-0 overflow-hidden p-0", className)} showCloseButton={false}>
        {children}
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({ className, ...props }) {
  return (
    <div data-slot="command-input-wrapper" className="flex items-center gap-2 px-3 py-2 border-b border-border">
      <SearchIcon className="size-4 shrink-0 text-muted-foreground" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "flex-1 bg-transparent outline-none",
          "font-sans text-[14px] leading-[20px] text-foreground",
          "placeholder:text-muted-foreground",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CommandList({ className, ...props }) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn("max-h-72 overflow-x-hidden overflow-y-auto p-1 outline-none", className)}
      {...props}
    />
  )
}

function CommandEmpty({ className, ...props }) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className={cn(
        "py-6 text-center font-sans text-[14px] text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function CommandGroup({ className, ...props }) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "overflow-hidden p-1",
        // Group heading — 12px, #737373
        "**:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5",
        "**:[[cmdk-group-heading]]:text-[12px] **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-muted-foreground",
        "**:[[cmdk-group-heading]]:font-sans",
        className
      )}
      {...props}
    />
  )
}

function CommandSeparator({ className, ...props }) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("-mx-1 h-px bg-border", className)}
      {...props}
    />
  )
}

function CommandItem({ className, children, ...props }) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "group/command-item relative flex cursor-default items-center gap-2",
        // Fra Figma: active = bg #e5e5e5, rounded-6px, p-2
        "rounded-[6px] px-2 py-2 outline-none select-none",
        "font-sans font-normal text-[14px] leading-[20px] text-foreground",
        "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4 [&_svg]:text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
      <CheckIcon className="ml-auto size-4 opacity-0 group-data-[checked=true]/command-item:opacity-100 text-foreground" />
    </CommandPrimitive.Item>
  )
}

function CommandShortcut({ className, ...props }) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "ml-auto font-sans text-[12px] text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator }
