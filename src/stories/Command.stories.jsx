import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '@/components/ui/command';
import { Kbd } from '@/components/ui/kbd';
import { Settings, User, FileText, Search, Plus, LogOut } from 'lucide-react';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=66-5596';

export default {
  title: 'Design System/Command',
  component: Command,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
};

export const Default = {
  render: () => (
    <Command style={{ width: '360px', border: '1px solid #e5e5e5', borderRadius: '10px', boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1)' }}>
      <CommandInput placeholder="Søg kommando..." />
      <CommandList>
        <CommandEmpty>Ingen resultater.</CommandEmpty>
        <CommandGroup heading="Forslag">
          <CommandItem>
            <Search className="size-4" />
            <span>Søg</span>
            <CommandShortcut><Kbd>⌘K</Kbd></CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Plus className="size-4" />
            <span>Opret ny</span>
            <CommandShortcut><Kbd>⌘N</Kbd></CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Indstillinger">
          <CommandItem>
            <User className="size-4" />
            <span>Profil</span>
          </CommandItem>
          <CommandItem>
            <Settings className="size-4" />
            <span>Indstillinger</span>
          </CommandItem>
          <CommandItem>
            <FileText className="size-4" />
            <span>Dokumenter</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup>
          <CommandItem>
            <LogOut className="size-4" />
            <span>Log ud</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
