import * as React from "react"
import { AlertDialog as AlertDialogPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// Alert Dialog — matcher Figma (node 295:239548)
// Mobile (320px): titel + tekst CENTRERET, knapper stacked vertically
// Desktop (480px): titel + tekst VENSTRESTILLET, knapper side om side til højre
// Rounded-[12px], p-8, shadow-lg

function AlertDialog({ ...props }) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({ ...props }) {
  return <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
}

function AlertDialogPortal({ ...props }) {
  return <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
}

function AlertDialogOverlay({ className, ...props }) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
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

// type = "mobile" | "desktop"
function AlertDialogContent({ className, type = "mobile", ...props }) {
  const isDesktop = type === "desktop"
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        data-type={type}
        className={cn(
          "fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
          "flex flex-col gap-4 w-full",
          "bg-background border border-border rounded-[12px] p-8",
          "shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]",
          "outline-none",
          // Mobile: 320px — Desktop: 480px
          isDesktop ? "max-w-[480px]" : "max-w-[320px]",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({ className, ...props }) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

// Footer: mobile = stacked vertically, desktop = side om side til højre
function AlertDialogFooter({ className, type = "mobile", ...props }) {
  const isDesktop = type === "desktop"
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex w-full gap-2",
        isDesktop ? "flex-row justify-end" : "flex-col",
        className
      )}
      {...props}
    />
  )
}

// Mobile: titel centreret — Desktop: venstrestillet
function AlertDialogTitle({ className, type = "mobile", ...props }) {
  const isDesktop = type === "desktop"
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn(
        "font-sans font-medium text-[20px] leading-[24px] text-foreground",
        isDesktop ? "text-left" : "text-center",
        className
      )}
      {...props}
    />
  )
}

// Mobile: beskrivelse centreret — Desktop: venstrestillet
function AlertDialogDescription({ className, type = "mobile", ...props }) {
  const isDesktop = type === "desktop"
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn(
        "font-sans font-normal text-[14px] leading-[20px] text-muted-foreground",
        isDesktop ? "text-left" : "text-center",
        className
      )}
      {...props}
    />
  )
}

// Primær handling (confirm/action)
function AlertDialogAction({ className, variant = "primary", ...props }) {
  return (
    <Button variant={variant} className={cn("w-full data-[type=desktop]:w-auto", className)} asChild>
      <AlertDialogPrimitive.Action data-slot="alert-dialog-action" {...props} />
    </Button>
  )
}

// Annuller/cancel handling
function AlertDialogCancel({ className, ...props }) {
  return (
    <Button variant="outline" className={cn("w-full data-[type=desktop]:w-auto", className)} asChild>
      <AlertDialogPrimitive.Cancel data-slot="alert-dialog-cancel" {...props} />
    </Button>
  )
}

export {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
  AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger,
}
