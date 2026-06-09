import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=151-12343';

export default {
  title: 'Design System/Sheet',
  component: Sheet,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    side: {
      control: 'select',
      options: ['right', 'left', 'top', 'bottom'],
      description: 'Hvilken side sheet glider ind fra',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Vis luk-knap (×)',
    },
  },
  args: {
    side: 'right',
    showCloseButton: true,
  },
};

export const Playground = {
  render: ({ side, showCloseButton }) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Åbn sheet</Button>
      </SheetTrigger>
      <SheetContent side={side} showCloseButton={showCloseButton}>
        <SheetHeader>
          <SheetTitle>Rediger profil</SheetTitle>
          <SheetDescription>Foretag ændringer og gem herunder.</SheetDescription>
        </SheetHeader>
        <div style={{ padding: '0 16px 16px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <Label htmlFor="pg-sheet-name">Navn</Label>
            <Input id="pg-sheet-name" defaultValue="Anna Moth" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <Label htmlFor="pg-sheet-email">Email</Label>
            <Input id="pg-sheet-email" type="email" defaultValue="ann@kk.dk" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Annuller</Button>
          </SheetClose>
          <Button>Gem</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const HøjreSide = {
  name: 'Fra højre (default)',
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Åbn sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Rediger profil</SheetTitle>
          <SheetDescription>Foretag ændringer og gem herunder.</SheetDescription>
        </SheetHeader>
        <div style={{ padding: '0 16px 16px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <Label htmlFor="sheet-name">Navn</Label>
            <Input id="sheet-name" defaultValue="Anna Moth" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <Label htmlFor="sheet-email">Email</Label>
            <Input id="sheet-email" type="email" defaultValue="ann@kk.dk" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Annuller</Button>
          </SheetClose>
          <Button>Gem</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const VenstreSide = {
  name: 'Fra venstre (navigation)',
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Åbn menu</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {['Hjem', 'Produkter', 'Om os', 'Kontakt'].map((item) => (
            <a key={item} href="#" style={{ padding: '8px', fontSize: '14px', color: '#0a0a0a', textDecoration: 'none', borderRadius: '8px' }}>
              {item}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  ),
};

export const FraTopNotifikation = {
  name: 'Fra top (notifikation)',
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Vis notifikation</Button>
      </SheetTrigger>
      <SheetContent side="top" showCloseButton={true}>
        <SheetHeader>
          <SheetTitle>Systemmeddelelse</SheetTitle>
          <SheetDescription>
            Planlagt vedligeholdelse søndag d. 15. juni kl. 02:00–04:00. Systemet vil være utilgængeligt i dette tidsrum.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter style={{ borderTop: 'none', paddingTop: 0 }}>
          <SheetClose asChild>
            <Button variant="outline" size="sm">Forstået</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};
