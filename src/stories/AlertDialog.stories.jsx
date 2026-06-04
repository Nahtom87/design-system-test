import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
  AlertDialogTitle, AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=295-239548';

export default {
  title: 'Design System/Alert Dialog',
  component: AlertDialog,
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    type: {
      control: 'select',
      options: ['mobile', 'desktop'],
      description: 'Mobile (320px, centreret) eller Desktop (480px, venstrestillet)',
    },
  },
};

// ── Playground ─────────────────────────────────────────────────
export const Playground = {
  args: { type: 'mobile' },
  render: ({ type }) => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Åbn dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent type={type}>
        <AlertDialogHeader>
          <AlertDialogTitle type={type}>Er du sikker?</AlertDialogTitle>
          <AlertDialogDescription type={type}>
            Denne handling kan ikke fortrydes.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter type={type}>
          {type === 'desktop'
            ? <><AlertDialogCancel>Annuller</AlertDialogCancel><AlertDialogAction>Bekræft</AlertDialogAction></>
            : <><AlertDialogAction>Bekræft</AlertDialogAction><AlertDialogCancel>Annuller</AlertDialogCancel></>
          }
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

// ── Mobile — slet ──────────────────────────────────────────────
export const MobileSlet = {
  name: 'Mobile — Slet (fra Figma)',
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Slet element</Button>
      </AlertDialogTrigger>
      <AlertDialogContent type="mobile">
        <AlertDialogHeader>
          <AlertDialogTitle type="mobile">Delete this?</AlertDialogTitle>
          <AlertDialogDescription type="mobile">
            Are you sure you want to delete this item?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter type="mobile">
          <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

// ── Desktop — slet ─────────────────────────────────────────────
export const DesktopSlet = {
  name: 'Desktop — Slet (fra Figma)',
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Slet element</Button>
      </AlertDialogTrigger>
      <AlertDialogContent type="desktop">
        <AlertDialogHeader>
          <AlertDialogTitle type="desktop">Delete this?</AlertDialogTitle>
          <AlertDialogDescription type="desktop">
            Are you sure you want to delete this item?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter type="desktop">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

// ── Desktop — forlad side ──────────────────────────────────────
export const DesktopForladSide = {
  name: 'Desktop — Forlad side (fra Figma)',
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Gå tilbage</Button>
      </AlertDialogTrigger>
      <AlertDialogContent type="desktop">
        <AlertDialogHeader>
          <AlertDialogTitle type="desktop">Are you sure you want to leave this page?</AlertDialogTitle>
          <AlertDialogDescription type="desktop">
            Your changes might not be saved.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter type="desktop">
          <AlertDialogCancel>Leave this page</AlertDialogCancel>
          <AlertDialogAction>Cancel</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

// ── Alle varianter side om side ────────────────────────────────
export const AlleVarianter = {
  name: 'Alle varianter (fra Figma)',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <AlertDialog>
        <AlertDialogTrigger asChild><Button variant="outline">Mobile</Button></AlertDialogTrigger>
        <AlertDialogContent type="mobile">
          <AlertDialogHeader>
            <AlertDialogTitle type="mobile">Delete this?</AlertDialogTitle>
            <AlertDialogDescription type="mobile">Are you sure you want to delete this item?</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter type="mobile">
            <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger asChild><Button variant="outline">Desktop</Button></AlertDialogTrigger>
        <AlertDialogContent type="desktop">
          <AlertDialogHeader>
            <AlertDialogTitle type="desktop">Delete this?</AlertDialogTitle>
            <AlertDialogDescription type="desktop">Are you sure you want to delete this item?</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter type="desktop">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  ),
};
