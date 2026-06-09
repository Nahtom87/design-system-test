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
import { Kbd } from '@/components/ui/kbd';
import {
  Settings,
  User,
  FileText,
  Search,
  Plus,
  LogOut,
  Building2,
  LayoutDashboard,
  Users,
} from 'lucide-react';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=66-5596';

export default {
  title: 'Design System/Command',
  component: Command,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Input placeholder tekst',
    },
  },
  args: {
    placeholder: 'Søg kommando...',
  },
};

export const Playground = {
  name: 'Playground',
  render: ({ placeholder }) => (
    <Command style={{ width: '360px', border: '1px solid #e5e5e5', borderRadius: '10px', boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1)' }}>
      <CommandInput placeholder={placeholder} />
      <CommandList>
        <CommandEmpty>Ingen resultater fundet.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem>
            <LayoutDashboard />
            <span>Dashboard</span>
            <CommandShortcut><Kbd>⌘D</Kbd></CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Building2 />
            <span>Afdelinger</span>
            <CommandShortcut><Kbd>⌘A</Kbd></CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Users />
            <span>Medarbejdere</span>
            <CommandShortcut><Kbd>⌘M</Kbd></CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Handlinger">
          <CommandItem>
            <Search />
            <span>Søg</span>
            <CommandShortcut><Kbd>⌘K</Kbd></CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Plus />
            <span>Opret ny sag</span>
            <CommandShortcut><Kbd>⌘N</Kbd></CommandShortcut>
          </CommandItem>
          <CommandItem>
            <FileText />
            <span>Dokumenter</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Konto">
          <CommandItem>
            <User />
            <span>Profil</span>
          </CommandItem>
          <CommandItem>
            <Settings />
            <span>Indstillinger</span>
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

export const Default = {
  render: () => (
    <Command style={{ width: '360px', border: '1px solid #e5e5e5', borderRadius: '10px', boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1)' }}>
      <CommandInput placeholder="Søg kommando..." />
      <CommandList>
        <CommandEmpty>Ingen resultater.</CommandEmpty>
        <CommandGroup heading="Forslag">
          <CommandItem>
            <Search />
            <span>Søg</span>
            <CommandShortcut><Kbd>⌘K</Kbd></CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Plus />
            <span>Opret ny</span>
            <CommandShortcut><Kbd>⌘N</Kbd></CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Indstillinger">
          <CommandItem>
            <User />
            <span>Profil</span>
          </CommandItem>
          <CommandItem>
            <Settings />
            <span>Indstillinger</span>
          </CommandItem>
          <CommandItem>
            <FileText />
            <span>Dokumenter</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup>
          <CommandItem>
            <LogOut />
            <span>Log ud</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const CommandDialogStory = {
  name: 'CommandDialog',
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>
          Åbn kommandopalet
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <CommandInput placeholder="Søg i KK Group..." />
            <CommandList>
              <CommandEmpty>Ingen resultater fundet.</CommandEmpty>
              <CommandGroup heading="Sider">
                <CommandItem onSelect={() => setOpen(false)}>
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  <Building2 />
                  <span>Afdelinger</span>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  <Users />
                  <span>Medarbejdere</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Handlinger">
                <CommandItem onSelect={() => setOpen(false)}>
                  <Plus />
                  <span>Opret ny sag</span>
                  <CommandShortcut><Kbd>⌘N</Kbd></CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  <Settings />
                  <span>Indstillinger</span>
                  <CommandShortcut><Kbd>⌘,</Kbd></CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </>
    );
  },
};
