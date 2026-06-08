import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=151-12297';

export default {
  title: 'Design System/Dialog',
  component: Dialog,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
};

export const Default = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Åbn dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rediger profil</DialogTitle>
          <DialogDescription>Opdater dine profiloplysninger. Klik gem når du er færdig.</DialogDescription>
        </DialogHeader>
        <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Label htmlFor="name">Navn</Label>
          <Input id="name" defaultValue="Anna Moth" />
        </div>
        <DialogFooter>
          <Button variant="outline">Annuller</Button>
          <Button>Gem ændringer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Bekræftelse = {
  name: 'Bekræftelsesdialog',
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Slet</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Er du sikker?</DialogTitle>
          <DialogDescription>Denne handling kan ikke fortrydes.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Annuller</Button>
          <Button variant="destructive">Ja, slet</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
