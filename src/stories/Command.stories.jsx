import * as React from 'react';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import { Button } from '@/components/ui/button';
import { Kbd, KbdGroup } from '@/components/ui/kbd';
import {
  Settings,
  User,
  FileText,
  Plus,
  LogOut,
  Building2,
  LayoutDashboard,
  Users,
  Clock,
  FolderOpen,
  Bell,
  BarChart2,
  HelpCircle,
  PencilLine,
} from 'lucide-react';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=66-5596';

export default {
  title: 'Design System/Command',
  component: Command,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder tekst i søgefeltet',
      table: { defaultValue: { summary: 'Søg eller skriv en kommando…' } },
    },
  },
  args: {
    placeholder: 'Søg eller skriv en kommando…',
  },
};

export const Playground = {
  name: 'Playground',
  render: ({ placeholder }) => (
    <Command className="w-[480px] rounded-xl border border-border shadow-lg">
      <CommandInput placeholder={placeholder} />
      <CommandList>
        <CommandEmpty>Ingen resultater for din søgning.</CommandEmpty>

        <CommandGroup heading="Seneste">
          <CommandItem>
            <Clock />
            <span>Borgerservice — sagsoversigt</span>
          </CommandItem>
          <CommandItem>
            <Clock />
            <span>Medarbejder: Anna Moth</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Sider">
          <CommandItem>
            <LayoutDashboard />
            <span>Dashboard</span>
            <CommandShortcut>
              <KbdGroup><Kbd>⌘</Kbd><Kbd>D</Kbd></KbdGroup>
            </CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Users />
            <span>Medarbejdere</span>
            <CommandShortcut>
              <KbdGroup><Kbd>⌘</Kbd><Kbd>M</Kbd></KbdGroup>
            </CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Building2 />
            <span>Afdelinger</span>
          </CommandItem>
          <CommandItem>
            <BarChart2 />
            <span>Rapporter</span>
          </CommandItem>
          <CommandItem>
            <FolderOpen />
            <span>Dokumentarkiv</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Handlinger">
          <CommandItem>
            <Plus />
            <span>Opret ny sag</span>
            <CommandShortcut>
              <KbdGroup><Kbd>⌘</Kbd><Kbd>N</Kbd></KbdGroup>
            </CommandShortcut>
          </CommandItem>
          <CommandItem>
            <PencilLine />
            <span>Rediger valgt element</span>
            <CommandShortcut>
              <KbdGroup><Kbd>⌘</Kbd><Kbd>E</Kbd></KbdGroup>
            </CommandShortcut>
          </CommandItem>
          <CommandItem>
            <FileText />
            <span>Eksporter til PDF</span>
          </CommandItem>
          <CommandItem>
            <Bell />
            <span>Notifikationsindstillinger</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Konto">
          <CommandItem>
            <User />
            <span>Min profil</span>
          </CommandItem>
          <CommandItem>
            <Settings />
            <span>Indstillinger</span>
            <CommandShortcut>
              <KbdGroup><Kbd>⌘</Kbd><Kbd>,</Kbd></KbdGroup>
            </CommandShortcut>
          </CommandItem>
          <CommandItem>
            <HelpCircle />
            <span>Hjælp & support</span>
          </CommandItem>
          <CommandItem>
            <LogOut />
            <span>Log ud</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const TomSøgning = {
  name: 'Tom søgning (ingen resultater)',
  render: () => (
    <Command className="w-[480px] rounded-xl border border-border shadow-lg">
      <CommandInput placeholder="Søg eller skriv en kommando…" value="xyzabc" />
      <CommandList>
        <CommandEmpty>Ingen resultater for din søgning.</CommandEmpty>
      </CommandList>
    </Command>
  ),
};

export const CommandDialogStory = {
  name: 'CommandDialog (modal)',
  render: () => {
    const [open, setOpen] = React.useState(false);
    const close = () => setOpen(false);
    return (
      <>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
          <Button onClick={() => setOpen(true)}>Åbn kommandopalet</Button>
          <span className="text-xs text-muted-foreground">
            Eller tryk <KbdGroup><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup>
          </span>
        </div>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <CommandInput placeholder="Søg eller skriv en kommando…" />
            <CommandList>
              <CommandEmpty>Ingen resultater for din søgning.</CommandEmpty>
              <CommandGroup heading="Sider">
                <CommandItem onSelect={close}><LayoutDashboard /><span>Dashboard</span></CommandItem>
                <CommandItem onSelect={close}><Users /><span>Medarbejdere</span></CommandItem>
                <CommandItem onSelect={close}><Building2 /><span>Afdelinger</span></CommandItem>
                <CommandItem onSelect={close}><BarChart2 /><span>Rapporter</span></CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Handlinger">
                <CommandItem onSelect={close}>
                  <Plus /><span>Opret ny sag</span>
                  <CommandShortcut><KbdGroup><Kbd>⌘</Kbd><Kbd>N</Kbd></KbdGroup></CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={close}>
                  <Settings /><span>Indstillinger</span>
                  <CommandShortcut><KbdGroup><Kbd>⌘</Kbd><Kbd>,</Kbd></KbdGroup></CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={close}><FileText /><span>Eksporter rapport</span></CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Konto">
                <CommandItem onSelect={close}><User /><span>Min profil</span></CommandItem>
                <CommandItem onSelect={close}><LogOut /><span>Log ud</span></CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </>
    );
  },
};
