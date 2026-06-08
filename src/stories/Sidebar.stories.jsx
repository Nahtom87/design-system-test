import {
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup,
  SidebarGroupContent, SidebarGroupLabel, SidebarHeader,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider,
} from '@/components/ui/sidebar';
import { Home, Settings, Users, FileText, BarChart2, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=27-3493';

const navItems = [
  { icon: Home,     label: 'Oversigt',    active: true },
  { icon: Users,    label: 'Brugere' },
  { icon: FileText, label: 'Dokumenter' },
  { icon: BarChart2,label: 'Rapporter' },
  { icon: Settings, label: 'Indstillinger' },
];

export default {
  title: 'Design System/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    design: { type: 'figma', url: FIGMA_URL },
  },
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
