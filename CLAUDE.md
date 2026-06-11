# KK Group Design System — AI Reference

This file is the authoritative reference for AI coding tools (Claude Code, Cursor, Copilot, etc.) building prototypes and features with this design system. Read it before writing any component code.

---

## Project overview

A shared React component library for KK Group products. Components are built on [shadcn/ui](https://ui.shadcn.com/) primitives, styled with Tailwind CSS v4, and documented in Storybook. Three themes ship out of the box: **light** (default), **dark**, and **kk-group** (brand orange).

---

## Tech stack

| Package | Version | Role |
|---|---|---|
| React | 19 | UI framework |
| Vite | 8 | Build tool |
| Tailwind CSS | v4 | Utility styling |
| shadcn/ui | — | Component primitives |
| Radix UI | — | Accessible headless primitives |
| class-variance-authority | 0.7 | Variant management (`cva`) |
| clsx + tailwind-merge | — | Class merging (`cn()`) |
| lucide-react | 1.17 | Icon set |
| IBM Plex Sans / Mono | — | Typefaces (Google Fonts) |
| cmdk | 1 | Command palette primitive |
| vaul | 1 | Drawer primitive |
| embla-carousel-react | 8 | Carousel primitive |
| recharts | 3 | Charts (used in patterns) |
| Storybook | 10 | Component documentation |

---

## Running locally

```bash
npm install
npm run storybook      # Component docs at http://localhost:6006
npm run dev            # Vite dev server at http://localhost:5173
npm run build          # Production build
npm run chromatic      # Visual regression tests (requires token)
```

---

## Path alias

`@/` resolves to `src/`. Always use this alias for component imports:

```js
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
```

---

## Theming

Three themes are defined in `src/index.css`. Apply them by setting `data-theme` on any ancestor element (typically `<html>` or a wrapper `<div>`). All CSS variables cascade automatically.

```html
<!-- Light (default — no attribute needed) -->
<html>

<!-- Dark -->
<html data-theme="dark">

<!-- KK Group brand (orange primary) -->
<html data-theme="kk-group">
```

In React:

```jsx
<div data-theme="kk-group">
  <Button variant="primary">Brand button</Button>
</div>
```

Storybook exposes a theme toolbar ("Tema") that sets `data-theme` on the preview wrapper. All stories should work across all three themes.

---

## Design tokens

All tokens are CSS custom properties. Use them directly in inline styles or Tailwind utilities.

### Semantic color tokens

These resolve differently per theme — always prefer semantic tokens over raw hex values.

| Token | Light | Dark | KK Group |
|---|---|---|---|
| `--background` | `#ffffff` | `#0a0a0a` | `#ffffff` |
| `--foreground` | `#0a0a0a` | `#fafafa` | `#0a0a0a` |
| `--primary` | `#171717` | `#f5f5f5` | `#ff7133` |
| `--primary-foreground` | `#fafafa` | `#0a0a0a` | `#fafafa` |
| `--secondary` | `#f5f5f5` | `#262626` | `#f5f5f5` |
| `--secondary-foreground` | `#171717` | `#f5f5f5` | `#171717` |
| `--muted` | `#f5f5f5` | `#171717` | `#f5f5f5` |
| `--muted-foreground` | `#737373` | `#a3a3a3` | `#737373` |
| `--accent` | `#f5f5f5` | `#171717` | `#f5f5f5` |
| `--accent-foreground` | `#171717` | `#f5f5f5` | `#171717` |
| `--destructive` | `#dc2626` | `#9e4042` | `#dc2626` |
| `--success` | `oklch(0.627 0.17 149.2)` | `oklch(0.72 0.19 150)` | `oklch(0.72 0.19 150)` |
| `--warning` | `oklch(0.681 0.162 66)` | `oklch(0.77 0.16 70)` | `oklch(0.77 0.16 70)` |
| `--border` | `#e5e5e5` | `#404040` | `#e5e5e5` |
| `--input` | `#ffffff` | `rgba(255,255,255,0.05)` | `#ffffff` |
| `--ring` | `#d4d4d4` | `#404040` | `#d4d4d4` |
| `--card` | `#ffffff` | `#171717` | `#171717` |
| `--card-foreground` | `#0a0a0a` | `#ffffff` | `#fafafa` |

Tailwind utility equivalents (generated via `@theme inline`): `bg-background`, `text-foreground`, `bg-primary`, `text-primary-foreground`, `bg-muted`, `text-muted-foreground`, `border-border`, etc.

### Raw brand palette

```css
--brand-50:  #FFF4ED   --neutral-50:  #FAFAFA
--brand-100: #FFE6D5   --neutral-100: #F5F5F5
--brand-200: #FFCAA8   --neutral-200: #E5E5E5
--brand-300: #FFA471   --neutral-300: #D4D4D4
--brand-400: #FF7133   --neutral-400: #A3A3A3
--brand-500: #FE4F11   --neutral-500: #737373
--brand-600: #EF3407   --neutral-600: #525252
--brand-700: #C62408   --neutral-700: #404040
--brand-800: #9D1E0F   --neutral-800: #262626
--brand-900: #7E1C10   --neutral-900: #171717
--brand-950: #440A06   --neutral-950: #0A0A0A
```

### Typography tokens

```css
--font-sans:    'IBM Plex Sans', system-ui, sans-serif
--font-mono:    'IBM Plex Mono', monospace
--font-heading: var(--font-sans)
```

Tailwind classes: `font-sans`, `font-mono`.

### Type scale

| Token | Size | Line-height | Weight |
|---|---|---|---|
| Heading 1 | 28px | 33.6px | 700 |
| Heading 2 | 30px | 36px | 700 |
| Heading 3 | 24px | 28.8px | 700 |
| Heading 4 | 20px | 24px | 700 |
| XL | 20px | 24px | 400 |
| Large | 18px | 27px | 400 |
| Base | 16px | 24px | 400 |
| **Small (standard)** | **14px** | **20px** | **400** |
| Mini | 12px | 16px | 400 |

14px / 500 is the standard UI text size.

### Border radius tokens

```css
--radius:     0.625rem  /* 10px — base */
--radius-sm:  calc(var(--radius) * 0.6)   /* ~6px  */
--radius-md:  calc(var(--radius) * 0.8)   /* ~8px  */
--radius-lg:  var(--radius)               /* 10px  */
--radius-xl:  calc(var(--radius) * 1.4)   /* ~14px */
--radius-2xl: calc(var(--radius) * 1.8)   /* ~18px */
--radius-3xl: calc(var(--radius) * 2.2)   /* ~22px */
--radius-4xl: calc(var(--radius) * 2.6)   /* ~26px */
```

Tailwind classes: `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-4xl`, `rounded-full`.

### Spacing scale (Figma tokens)

```
2xs: 4px   sm: 12px   xl: 24px
xs:  8px   md: 16px   2xl: 32px
                      3xl: 40px   4xl: 48px
```

### Shadow tokens

```css
shadow-xs:  0px 1px 2px 0px rgba(0,0,0,0.05)
shadow-sm:  0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)
shadow-md:  0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)
shadow-lg:  0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)
focus-ring: 0 0 0 3px var(--ring)
```

---

## Components

All 40 components live in `src/components/ui/`. Import paths use the `@/` alias.

---

### Accordion

```js
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
```

**Props:** `type` (`single` | `multiple`), `collapsible` (boolean), `defaultValue`, `value`, `onValueChange`

```jsx
<Accordion type="single" collapsible defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Section title</AccordionTrigger>
    <AccordionContent>Content here.</AccordionContent>
  </AccordionItem>
</Accordion>
```

---

### Alert

```js
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
```

**Props:** `variant` (`default` | `destructive` | `success` | `warning`)

```jsx
<Alert variant="success">
  <AlertTitle>Saved</AlertTitle>
  <AlertDescription>Your changes were saved successfully.</AlertDescription>
</Alert>
```

---

### Alert Dialog

```js
import {
  AlertDialog, AlertDialogTrigger, AlertDialogContent,
  AlertDialogHeader, AlertDialogFooter,
  AlertDialogTitle, AlertDialogDescription,
  AlertDialogAction, AlertDialogCancel,
} from '@/components/ui/alert-dialog';
```

Use for destructive confirmations that cannot be accidentally dismissed. Always pair `AlertDialogAction` (confirm) with `AlertDialogCancel`.

```jsx
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

---

### Avatar

```js
import { Avatar, AvatarImage, AvatarFallback, AvatarGroup } from '@/components/ui/avatar';
```

**Props:** `size` (`small` | `default` | `large`), `roundness` (`default` | `round`)

```jsx
<Avatar size="default" roundness="round">
  <AvatarImage src="/photo.jpg" alt="Anna Moth" />
  <AvatarFallback>AM</AvatarFallback>
</Avatar>

{/* Stacked group */}
<AvatarGroup>
  <Avatar><AvatarFallback>AM</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>LJ</AvatarFallback></Avatar>
</AvatarGroup>
```

---

### Badge

```js
import { Badge } from '@/components/ui/badge';
```

**Props:** `variant` (`primary` | `secondary` | `outline` | `ghost` | `destructive`), `roundness` (`default` | `round`)

```jsx
<Badge variant="primary">Active</Badge>
<Badge variant="destructive" roundness="round">Error</Badge>
```

---

### Breadcrumb

```js
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb';
```

```jsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Current page</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

---

### Button

```js
import { Button } from '@/components/ui/button';
```

**Props:**
- `variant`: `primary` | `secondary` | `outline` | `ghost` | `destructive` | `link`
- `size`: `mini` (24px) | `small` (32px) | `default` (36px) | `large` (40px) | `extra-large` (48px)
- `roundness`: `default` (8px radius) | `round` (pill)
- `disabled`: boolean
- `asChild`: boolean — renders as the child element (use with `<a>`, `<Link>`, etc.)

```jsx
<Button variant="primary">Save</Button>
<Button variant="outline" size="small">Cancel</Button>
<Button variant="destructive" size="large">Delete account</Button>

{/* With icon */}
<Button variant="primary"><Plus />Add item</Button>

{/* As link */}
<Button variant="link" asChild>
  <a href="/dashboard">Go to dashboard</a>
</Button>
```

---

### Card

```js
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
```

```jsx
<Card>
  <CardHeader>
    <CardTitle>Card title</CardTitle>
    <CardDescription>Supporting text</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

---

### Carousel

```js
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
```

**Props:** `opts` (Embla options, e.g. `{ loop: true }`), `orientation` (`horizontal` | `vertical`)

```jsx
<Carousel opts={{ loop: true }}>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

---

### Checkbox

```js
import { Checkbox } from '@/components/ui/checkbox';
```

**Props:** `checked`, `onCheckedChange`, `disabled`, `id`

```jsx
<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  <Checkbox id="terms" onCheckedChange={(v) => console.log(v)} />
  <Label htmlFor="terms">Accept terms</Label>
</div>
```

---

### Command

```js
import {
  Command, CommandDialog, CommandInput, CommandList,
  CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator,
} from '@/components/ui/command';
```

**Inline use:**

```jsx
<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results.</CommandEmpty>
    <CommandGroup heading="Actions">
      <CommandItem>New file <CommandShortcut>⌘N</CommandShortcut></CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

**Dialog (Cmd+K palette):**

```jsx
const [open, setOpen] = useState(false);
// bind ⌘K → setOpen(true)

<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Type a command..." />
  <CommandList>
    <CommandEmpty>No results.</CommandEmpty>
    <CommandGroup heading="Pages">
      <CommandItem onSelect={() => navigate('/dashboard')}>Dashboard</CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>
```

---

### Dialog

```js
import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogFooter,
  DialogTitle, DialogDescription, DialogClose,
} from '@/components/ui/dialog';
```

```jsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Make changes to your profile below.</DialogDescription>
    </DialogHeader>
    {/* form content */}
    <DialogFooter>
      <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
      <Button variant="primary">Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

### Drawer

```js
import {
  Drawer, DrawerTrigger, DrawerClose, DrawerContent,
  DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription,
} from '@/components/ui/drawer';
```

**Props:** `direction` (`bottom` | `right` | `left` | `top`)

```jsx
<Drawer>
  <DrawerTrigger asChild><Button>Open drawer</Button></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Settings</DrawerTitle>
      <DrawerDescription>Adjust your preferences.</DrawerDescription>
    </DrawerHeader>
    {/* content */}
    <DrawerFooter>
      <DrawerClose asChild><Button variant="outline">Close</Button></DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

---

### HoverCard

```js
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
```

**Props:** `openDelay` (ms), `closeDelay` (ms)

```jsx
<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@username</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <p>Profile preview content</p>
  </HoverCardContent>
</HoverCard>
```

---

### Input

```js
import { Input } from '@/components/ui/input';
```

**Props:** Standard HTML input props + `type`, `placeholder`, `disabled`, `value`, `onChange`

```jsx
<Input type="email" placeholder="name@example.com" />
```

---

### InputGroup

```js
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupInput, InputGroupTextarea, InputGroupButton } from '@/components/ui/input-group';
```

Wraps an input with leading/trailing addons (icons, text, buttons).

```jsx
<InputGroup>
  <InputGroupAddon><InputGroupText>https://</InputGroupText></InputGroupAddon>
  <InputGroupInput placeholder="yoursite.com" />
  <InputGroupButton><Button size="small">Go</Button></InputGroupButton>
</InputGroup>
```

---

### InputOTP

```js
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from '@/components/ui/input-otp';
```

**Props:** `maxLength`, `value`, `onChange`

```jsx
<InputOTP maxLength={6} value={value} onChange={setValue}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

---

### Kbd

```js
import { Kbd, KbdGroup } from '@/components/ui/kbd';
```

```jsx
<KbdGroup><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup>
```

---

### Label

```js
import { Label } from '@/components/ui/label';
```

Always pair with a form control via `htmlFor` / `id`.

```jsx
<Label htmlFor="email">Email address</Label>
<Input id="email" type="email" />
```

---

### NavigationMenu

```js
import {
  NavigationMenu, NavigationMenuList, NavigationMenuItem,
  NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink,
} from '@/components/ui/navigation-menu';
```

```jsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/products/a">Product A</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

---

### Pagination

```js
import {
  Pagination, PaginationContent, PaginationItem,
  PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis,
} from '@/components/ui/pagination';
```

```jsx
<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationEllipsis /></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>
```

---

### Popover

```js
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
```

**Props on `PopoverContent`:** `side` (`top` | `right` | `bottom` | `left`), `align` (`start` | `center` | `end`), `sideOffset`

```jsx
<Popover>
  <PopoverTrigger asChild><Button variant="outline">Open</Button></PopoverTrigger>
  <PopoverContent side="bottom" align="start">
    <p>Popover content</p>
  </PopoverContent>
</Popover>
```

---

### Progress

```js
import { Progress } from '@/components/ui/progress';
```

**Props:** `value` (0–100)

```jsx
<Progress value={60} />
```

---

### RadioGroup

```js
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
```

```jsx
<RadioGroup value={value} onValueChange={setValue}>
  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
    <RadioGroupItem value="option-a" id="opt-a" />
    <Label htmlFor="opt-a">Option A</Label>
  </div>
  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
    <RadioGroupItem value="option-b" id="opt-b" />
    <Label htmlFor="opt-b">Option B</Label>
  </div>
</RadioGroup>
```

---

### Resizable

```js
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
```

**Props on group:** `direction` (`horizontal` | `vertical`)

```jsx
<ResizablePanelGroup direction="horizontal" style={{ height: '400px' }}>
  <ResizablePanel defaultSize={30}>Left panel</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Right panel</ResizablePanel>
</ResizablePanelGroup>
```

---

### ScrollArea

```js
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
```

**Props:** `orientation` (`vertical` | `horizontal` | `both`)

```jsx
<ScrollArea style={{ height: '200px' }}>
  <div style={{ padding: '16px' }}>{/* long content */}</div>
  <ScrollBar orientation="vertical" />
</ScrollArea>
```

---

### Select

```js
import {
  Select, SelectTrigger, SelectValue, SelectContent,
  SelectGroup, SelectLabel, SelectItem, SelectSeparator,
} from '@/components/ui/select';
```

```jsx
<Select value={value} onValueChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="Choose an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Group A</SelectLabel>
      <SelectItem value="a1">Option A1</SelectItem>
      <SelectItem value="a2">Option A2</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectItem value="b1">Option B1</SelectItem>
  </SelectContent>
</Select>
```

---

### Separator

```js
import { Separator } from '@/components/ui/separator';
```

**Props:** `orientation` (`horizontal` | `vertical`)

```jsx
<Separator />
<Separator orientation="vertical" style={{ height: '20px' }} />
```

---

### Sheet

```js
import {
  Sheet, SheetTrigger, SheetClose, SheetContent,
  SheetHeader, SheetFooter, SheetTitle, SheetDescription,
} from '@/components/ui/sheet';
```

**Props on `SheetContent`:** `side` (`top` | `right` | `bottom` | `left`)

```jsx
<Sheet>
  <SheetTrigger asChild><Button>Open sheet</Button></SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Edit settings</SheetTitle>
      <SheetDescription>Make changes here.</SheetDescription>
    </SheetHeader>
    {/* content */}
    <SheetFooter>
      <SheetClose asChild><Button variant="outline">Close</Button></SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

---

### Sidebar

```js
import {
  SidebarProvider, Sidebar, SidebarInset, SidebarTrigger,
  SidebarHeader, SidebarContent, SidebarFooter,
  SidebarGroup, SidebarGroupLabel, SidebarGroupContent,
  SidebarMenu, SidebarMenuItem, SidebarMenuButton,
  SidebarMenuBadge, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton,
  SidebarSeparator, SidebarRail,
} from '@/components/ui/sidebar';
```

**Always wrap in `SidebarProvider`.** Use `SidebarInset` for the main content area beside the sidebar.

**Props on `Sidebar`:** `collapsible` (`icon` | `offcanvas` | `none`), `variant` (`sidebar` | `floating` | `inset`), `side` (`left` | `right`)

```jsx
<SidebarProvider>
  <Sidebar collapsible="icon">
    <SidebarHeader>
      <div>Logo</div>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive asChild>
                <a href="/dashboard"><LayoutDashboard />Dashboard</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      {/* user info */}
    </SidebarFooter>
  </Sidebar>

  <SidebarInset>
    <header>
      <SidebarTrigger />
      {/* page header */}
    </header>
    <main>{/* page content */}</main>
  </SidebarInset>
</SidebarProvider>
```

---

### Skeleton

```js
import { Skeleton } from '@/components/ui/skeleton';
```

```jsx
<Skeleton style={{ width: '200px', height: '20px' }} />
```

---

### Slider

```js
import { Slider } from '@/components/ui/slider';
```

**Props:** `min`, `max`, `step`, `value` (array), `onValueChange`, `disabled`

```jsx
<Slider min={0} max={100} step={1} value={[50]} onValueChange={([v]) => setValue(v)} />
```

---

### Sonner (Toast)

```js
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
```

Mount `<Toaster />` once near the root. Call `toast()` anywhere.

```jsx
// In root layout:
<Toaster />

// Anywhere in the app:
toast('File saved');
toast.success('Saved successfully');
toast.error('Something went wrong');
toast.warning('Unsaved changes');
toast.promise(saveData(), { loading: 'Saving...', success: 'Saved', error: 'Failed' });
```

---

### Spinner

```js
import { Spinner } from '@/components/ui/spinner';
```

**Props:** `size` (`sm` | `default` | `lg`)

```jsx
<Spinner size="sm" />

{/* Inside a loading button */}
<Button variant="primary" disabled>
  <Spinner size="sm" />
  Saving...
</Button>
```

---

### Switch

```js
import { Switch } from '@/components/ui/switch';
```

**Props:** `checked`, `onCheckedChange`, `disabled`

```jsx
<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  <Switch id="notifications" checked={on} onCheckedChange={setOn} />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>
```

---

### Table

```js
import {
  Table, TableHeader, TableBody, TableFooter,
  TableHead, TableRow, TableCell, TableCaption,
} from '@/components/ui/table';
```

```jsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead style={{ textAlign: 'right' }}>Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {rows.map(row => (
      <TableRow key={row.id}>
        <TableCell>{row.name}</TableCell>
        <TableCell><Badge variant="secondary">{row.status}</Badge></TableCell>
        <TableCell style={{ textAlign: 'right' }}>{row.amount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

---

### Tabs

```js
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
```

**Props:** `defaultValue`, `value`, `onValueChange`, `orientation` (`horizontal` | `vertical`)

```jsx
<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="details">Details</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="details">Details content</TabsContent>
</Tabs>
```

---

### Textarea

```js
import { Textarea } from '@/components/ui/textarea';
```

```jsx
<Textarea placeholder="Enter a description..." rows={4} />
```

---

### Toggle

```js
import { Toggle } from '@/components/ui/toggle';
```

**Props:** `variant` (`default` | `outline`), `size` (`sm` | `default` | `lg`), `pressed`, `onPressedChange`

```jsx
<Toggle variant="outline" aria-label="Bold">
  <Bold />
</Toggle>
```

---

### Tooltip

```js
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
```

Wrap the component tree once with `<TooltipProvider>`.

```jsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost" size="small"><Info /></Button>
    </TooltipTrigger>
    <TooltipContent>More information</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

---

## Composite patterns

These are not separate component files — they are patterns assembled from primitives.

### Icon Button

An icon-only button using `<Button>` with no text child.

```jsx
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

<Button
  variant="ghost"
  size="default"
  style={{ width: '36px', height: '36px', padding: '8px' }}
  aria-label="Delete"
>
  <Trash2 />
</Button>
```

### Loading Button

A disabled button with a spinner to show async state.

```jsx
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

<Button variant="primary" disabled>
  <Spinner size="sm" />
  Saving...
</Button>
```

### Link Button

An inline text-link styled like a button. Use `variant="link"` on `Button`.

```jsx
<Button variant="link" asChild>
  <a href="/terms">Read terms <ExternalLink size={14} /></a>
</Button>
```

### Button Group

Visually joined row of buttons (same variant, shared borders). Build by wrapping `<Button>` elements in an `inline-flex` container and overriding border-radius:

```jsx
<div style={{ display: 'inline-flex' }}>
  <Button variant="outline" style={{ borderRadius: '8px 0 0 8px', borderRight: 'none' }}>Left</Button>
  <Button variant="outline" style={{ borderRadius: 0, borderRight: 'none' }}>Middle</Button>
  <Button variant="outline" style={{ borderRadius: '0 8px 8px 0' }}>Right</Button>
</div>
```

### Form Field

Vertically stacked label + control + hint/error. No dedicated component — compose from primitives:

```jsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
  <Label htmlFor="name">Full name</Label>
  <Input id="name" placeholder="Anna Moth" />
  <p style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>
    As it appears on your ID
  </p>
</div>
```

---

## Do / don't guidelines

### Button

| ✅ Do | ❌ Don't |
|---|---|
| Use `primary` for the single most important action per view | Use more than one `primary` button per section |
| Use `outline` or `ghost` for secondary/tertiary actions | Use `link` variant as a navigation link (use `<a>` instead) |
| Use `destructive` variant only for irreversible actions | Use `disabled` to hide unavailable actions — show them but explain why |
| Add `asChild` to render as `<a>` or router `<Link>` | Nest interactive elements inside a button |

### Alert

| ✅ Do | ❌ Don't |
|---|---|
| Match `variant` to severity: `default`, `success`, `warning`, `destructive` | Use for transient confirmations — use toast instead |
| Lead with a specific, actionable `AlertTitle` | Stack many alerts — consolidate into one |
| Include an icon that reinforces the variant | Rely on color alone — keep the title meaningful |

### Dialog

| ✅ Do | ❌ Don't |
|---|---|
| Always include a `DialogTitle` (even visually hidden) | Stack dialogs — finish or close the first |
| Put the primary action last in `DialogFooter` | Use for long, multi-step flows — use a page |
| Use controlled `open`/`onOpenChange` for app-driven state | Use for decisions that can't be dismissed — use AlertDialog |

### Select

| ✅ Do | ❌ Don't |
|---|---|
| Give `SelectTrigger` a meaningful placeholder | Use Select for 2–3 options — use RadioGroup instead |
| Always pair with a `Label` | Use placeholder as the only label |
| Use `SelectGroup` + `SelectLabel` for long lists | Put interactive controls inside a `SelectItem` |

### Tabs

| ✅ Do | ❌ Don't |
|---|---|
| Use for peer views on the same page/context | Use for navigating between separate URLs |
| Match `value` between `TabsTrigger` and `TabsContent` exactly | Hide critical always-needed content behind a non-default tab |
| Set `defaultValue` so a tab is selected on load | Pack so many tabs the strip wraps |

### Sidebar

| ✅ Do | ❌ Don't |
|---|---|
| Always wrap in `SidebarProvider` | Use without `SidebarProvider` |
| Use `SidebarInset` for the main content area | Manually manage sidebar open state without `SidebarProvider` |
| Use `collapsible="icon"` for space-efficient layouts | Use `SidebarMenuButton` outside a `SidebarMenu` |

### Tooltip

| ✅ Do | ❌ Don't |
|---|---|
| Mount `TooltipProvider` once near the root | Mount `TooltipProvider` per tooltip instance |
| Use `asChild` on `TooltipTrigger` for custom elements | Put interactive controls inside `TooltipContent` |
| Keep tooltip text brief (one phrase) | Use for information essential to completing a task |

---

## Storybook navigation

```
Getting Started
  └── Introduction

Foundations
  ├── Colors          (brand palette, neutral palette, semantic tokens × 3 themes)
  ├── Typography      (type scale, font weights, paragraph styles)
  ├── Spacing         (spacing scale)
  ├── Border Radii    (radius tokens)
  └── Shadows         (shadow tokens)

Design System
  └── [40 components, each with Playground + variant/state stories + MDX docs]

Patterns
  ├── Overview        (placeholder)
  └── Fleet Overview  (full dashboard: sidebar, KPI cards, tabs, wind farm table)
```

---

## Adding new components

1. Add the component file to `src/components/ui/`
2. Create a story at `src/stories/ComponentName.stories.jsx` with `title: 'Design System/ComponentName'`
3. Create docs at `src/stories/ComponentName.mdx` following the existing pattern
4. Export from the story with a `Playground`, `Default`, and any variant/state stories
5. Run `npm run storybook` to verify, then `npm run chromatic` for visual regression baseline

---

## Key file locations

```
src/
  index.css                    ← All CSS tokens and theme definitions
  components/ui/               ← All 40 UI components
  stories/                     ← Storybook stories (.stories.jsx) and docs (.mdx)
  stories/foundations/         ← Foundation token stories
  stories/getting-started/     ← Introduction
  stories/patterns/            ← Composed page patterns
  stories/_doc.jsx             ← Guidelines, Do, Dont helper components
  lib/utils.js                 ← cn() utility (clsx + tailwind-merge)
.storybook/
  main.js                      ← Storybook config, addons
  preview.jsx                  ← Global decorator (theme switcher), storySort
```
