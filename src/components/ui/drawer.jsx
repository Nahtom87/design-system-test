"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
import { cn } from "@/lib/utils"

// Drawer — matcher Figma Design System POC (node 151:12313)
// bg: white, rounded-tl-[10px] rounded-tr-[10px]
// shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)
// Handle: 50x3px, bg #f5f5f5, centreret øverst

function Drawer({ ...props }) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

function DrawerTrigger({ ...props }) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({ ...props }) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({ ...props }) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({ className, ...props }) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/20",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

function DrawerContent({ className, children, ...props }) {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "fixed bottom-0 inset-x-0 z-50 flex flex-col",
          "max-h-[80vh] mt-24",
          // Stil fra Figma
          "bg-background rounded-tl-[10px] rounded-tr-[10px]",
          "shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]",
          className
        )}
        {...props}
      >
        {/* Handle fra Figma: 50x3px, bg #f5f5f5, centreret */}
        <div className="mx-auto mt-2 h-[3px] w-[50px] shrink-0 rounded-full bg-muted" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }) {
  return (
    <div
      data-slot="drawer-header"
      className={cn("flex flex-col gap-1 px-4 py-4", className)}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex items-center justify-end gap-2 px-4 py-4 border-t border-border", className)}
      {...props}
    />
  )
}

function DrawerTitle({ className, ...props }) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn(
        "font-sans font-medium text-[16px] leading-[24px] text-foreground",
        className
      )}
      {...props}
    />
  )
}

function DrawerDescription({ className, ...props }) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn(
        "font-sans font-normal text-[14px] leading-[20px] text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription }
