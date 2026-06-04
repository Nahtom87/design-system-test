import * as React from "react"
import { Dialog as SheetPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"
import { XIcon } from "lucide-react"

// Sheet — matcher Figma (node 151:12343) — bg white, shadow-lg, w-342px

function Sheet({ ...props }) { return <SheetPrimitive.Root data-slot="sheet" {...props} /> }
function SheetTrigger({ ...props }) { return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} /> }
function SheetClose({ ...props }) { return <SheetPrimitive.Close data-slot="sheet-close" {...props} /> }
function SheetPortal({ ...props }) { return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} /> }

function SheetOverlay({ className, ...props }) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
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

const sideClasses = {
  right:  "inset-y-0 right-0 h-full w-[342px] border-l border-[#e5e5e5] data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
  left:   "inset-y-0 left-0 h-full w-[342px] border-r border-[#e5e5e5] data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left",
  top:    "inset-x-0 top-0 border-b border-[#e5e5e5] data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top",
  bottom: "inset-x-0 bottom-0 border-t border-[#e5e5e5] data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom",
}

function SheetContent({ className, children, side = "right", showCloseButton = true, ...props }) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "fixed z-50 flex flex-col bg-white",
          "shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]",
          "transition-transform duration-200 ease-in-out",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          sideClasses[side],
          className
        )}
        {...props}
      >
        {showCloseButton && (
          <SheetPrimitive.Close className="absolute top-4 right-4 text-[#737373] hover:text-[#0a0a0a] transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-[#d4d4d4] rounded-[4px]">
            <XIcon className="size-4" />
            <span className="sr-only">Luk</span>
          </SheetPrimitive.Close>
        )}
        {children}
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }) {
  return <div data-slot="sheet-header" className={cn("flex flex-col gap-1 px-4 py-4 pr-12", className)} {...props} />
}

function SheetFooter({ className, ...props }) {
  return <div data-slot="sheet-footer" className={cn("mt-auto flex items-center justify-end gap-2 px-4 py-4 border-t border-[#e5e5e5]", className)} {...props} />
}

function SheetTitle({ className, ...props }) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("font-['IBM_Plex_Sans',system-ui,sans-serif] font-medium text-[16px] leading-[24px] text-[#0a0a0a]", className)}
      {...props}
    />
  )
}

function SheetDescription({ className, ...props }) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("font-['IBM_Plex_Sans',system-ui,sans-serif] font-normal text-[14px] leading-[20px] text-[#737373]", className)}
      {...props}
    />
  )
}

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription }
