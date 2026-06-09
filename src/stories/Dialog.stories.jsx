import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=151-12297';

export default {
  title: 'Design System/Dialog',
  component: Dialog,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    showCloseButton: {
      control: 'boolean',
      description: 'Vis luk-knap (×) i hjørnet',
    },
  },
  args: {
    showCloseButton: true,
  },
};

export const Playground = {
  name: 'Playground',
  render: ({ showCloseButton }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Åbn dialog</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={showCloseButton}>
        <DialogHeader>
          <DialogTitle>Rediger profil</DialogTitle>
          <DialogDescription>
            Opdater dine profiloplysninger. Klik gem når du er færdig.
          </DialogDescription>
        </DialogHeader>
        <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <Label htmlFor="play-name">Navn</Label>
            <Input id="play-name" defaultValue="Anna Moth" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <Label htmlFor="play-email">E-mail</Label>
            <Input id="play-email" type="email" defaultValue="anna.moth@kk.dk" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Annuller</Button>
          <Button>Gem ændringer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
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

export const FuldFormular = {
  name: 'Fuld formular',
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Opret medarbejder</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ny medarbejder</DialogTitle>
          <DialogDescription>
            Udfyld oplysningerne for at oprette en ny medarbejderprofil i systemet.
          </DialogDescription>
        </DialogHeader>
        <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <Label htmlFor="ff-name">Fulde navn</Label>
            <Input id="ff-name" placeholder="f.eks. Lars Andersen" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <Label htmlFor="ff-email">E-mail</Label>
            <Input id="ff-email" type="email" placeholder="navn@kk.dk" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <Label htmlFor="ff-role">Rolle</Label>
            <Select>
              <SelectTrigger id="ff-role">
                <SelectValue placeholder="Vælg en rolle..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Administrator</SelectItem>
                <SelectItem value="editor">Redaktør</SelectItem>
                <SelectItem value="viewer">Læser</SelectItem>
                <SelectItem value="manager">Afdelingsleder</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Annuller</Button>
          <Button>Opret medarbejder</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
