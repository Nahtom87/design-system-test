import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=151-12343';

export default {
  title: 'Design System/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
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
