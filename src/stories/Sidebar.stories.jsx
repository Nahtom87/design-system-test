import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Home, Settings, Users, FileText, BarChart2, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=27-3493';

const navItems = [
  { icon: Home,      label: 'Oversigt',      active: true },
  { icon: Users,     label: 'Brugere' },
  { icon: FileText,  label: 'Dokumenter' },
  { icon: BarChart2, label: 'Rapporter' },
  { icon: Settings,  label: 'Indstillinger' },
];

function SidebarDemo({ variant, collapsible, side, defaultOpen }) {
  return (
    <SidebarProvider defaultOpen={defaultOpen} style={{ minHeight: '400px' }}>
      <Sidebar variant={variant} collapsible={collapsible} side={side}>
        <SidebarHeader style={{ padding: '16px', borderBottom: '1px solid #e5e5e5' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '28px', height: '28px', background: '#EF3407', borderRadius: '6px' }} />
            <span style={{ fontFamily: "'IBM Plex Sans'", fontWeight: 600, fontSize: '14px', color: '#0a0a0a' }}>KK Group</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map(({ icon: Icon, label, active }) => (
                  <SidebarMenuItem key={label}>
                    <SidebarMenuButton isActive={active} asChild>
                      <a href="#" style={{ textDecoration: 'none' }}>
                        <Icon />
                        <span>{label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter style={{ borderTop: '1px solid #e5e5e5', padding: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Avatar size="small" roundness="round">
              <AvatarFallback size="small">AM</AvatarFallback>
            </Avatar>
            <div style={{ flex: 1, overflow: 'hidden' }}>
              <p style={{ fontFamily: "'IBM Plex Sans'", fontSize: '13px', fontWeight: 500, color: '#0a0a0a', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Anna Moth</p>
              <p style={{ fontFamily: "'IBM Plex Sans'", fontSize: '11px', color: '#737373', margin: 0 }}>ann@kk.dk</p>
            </div>
            <LogOut size={14} style={{ color: '#737373', flexShrink: 0 }} />
          </div>
        </SidebarFooter>
      </Sidebar>
      <main style={{ flex: 1, padding: '24px', fontFamily: "'IBM Plex Sans'", fontSize: '14px', color: '#737373', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <SidebarTrigger />
          <span style={{ fontSize: '13px', color: '#737373' }}>Skift sidebar (Ctrl+B)</span>
        </div>
        <p>Indhold her</p>
      </main>
    </SidebarProvider>
  );
}

export default {
  title: 'Design System/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    design: { type: 'figma', url: FIGMA_URL },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['sidebar', 'floating', 'inset'],
      description: 'Visuel stil for sidebaren',
    },
    collapsible: {
      control: 'radio',
      options: ['offcanvas', 'icon', 'none'],
      description: 'Kollapsstil: offcanvas (skjul), icon (minimer til ikoner), none (fast)',
    },
    side: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Placering',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Start med sidebar åben',
    },
  },
  args: {
    variant: 'sidebar',
    collapsible: 'offcanvas',
    side: 'left',
    defaultOpen: true,
  },
};

export const Playground = {
  render: (args) => <SidebarDemo {...args} />,
};

export const Default = {
  render: () => (
    <SidebarProvider style={{ minHeight: '400px' }}>
      <Sidebar>
        <SidebarHeader style={{ padding: '16px', borderBottom: '1px solid #e5e5e5' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '28px', height: '28px', background: '#EF3407', borderRadius: '6px' }} />
            <span style={{ fontFamily: "'IBM Plex Sans'", fontWeight: 600, fontSize: '14px', color: '#0a0a0a' }}>KK Group</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map(({ icon: Icon, label, active }) => (
                  <SidebarMenuItem key={label}>
                    <SidebarMenuButton isActive={active} asChild>
                      <a href="#" style={{ textDecoration: 'none' }}>
                        <Icon />
                        <span>{label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter style={{ borderTop: '1px solid #e5e5e5', padding: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Avatar size="small" roundness="round">
              <AvatarFallback size="small">AM</AvatarFallback>
            </Avatar>
            <div style={{ flex: 1, overflow: 'hidden' }}>
              <p style={{ fontFamily: "'IBM Plex Sans'", fontSize: '13px', fontWeight: 500, color: '#0a0a0a', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Anna Moth</p>
              <p style={{ fontFamily: "'IBM Plex Sans'", fontSize: '11px', color: '#737373', margin: 0 }}>ann@kk.dk</p>
            </div>
            <LogOut size={14} style={{ color: '#737373', flexShrink: 0 }} />
          </div>
        </SidebarFooter>
      </Sidebar>
      <main style={{ flex: 1, padding: '24px', fontFamily: "'IBM Plex Sans'", fontSize: '14px', color: '#737373' }}>
        Indhold her
      </main>
    </SidebarProvider>
  ),
};

export const FloatingVariant = {
  name: 'Floating variant',
  render: () => <SidebarDemo variant="floating" collapsible="offcanvas" side="left" defaultOpen={true} />,
};
