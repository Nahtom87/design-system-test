import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=294-233298';

export default {
  title: 'Design System/Navigation Menu',
  component: NavigationMenu,
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
};

const ListItem = ({ title, children, href = '#' }) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        href={href}
        style={{
          display: 'block', padding: '8px 12px', borderRadius: '6px',
          textDecoration: 'none', color: '#0a0a0a',
          fontFamily: "'IBM Plex Sans', sans-serif", fontSize: '14px',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = '#f5f5f5')}
        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
      >
        <div style={{ fontWeight: 500, marginBottom: '2px' }}>{title}</div>
        <div style={{ fontSize: '12px', color: '#737373' }}>{children}</div>
      </a>
    </NavigationMenuLink>
  </li>
);

export const Default = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Produkter</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul style={{ display: 'grid', gap: '4px', padding: '12px', width: '280px' }}>
              <ListItem title="Design System" href="#">Komponenter og tokens</ListItem>
              <ListItem title="Storybook" href="#">Dokumentation</ListItem>
              <ListItem title="Figma bibliotek" href="#">Design filer</ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Ressourcer</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul style={{ display: 'grid', gap: '4px', padding: '12px', width: '240px' }}>
              <ListItem title="Dokumentation" href="#">Guides og vejledninger</ListItem>
              <ListItem title="Changelog" href="#">Seneste ændringer</ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" style={{ padding: '8px 12px', fontFamily: "'IBM Plex Sans', sans-serif", fontSize: '14px', fontWeight: 500, color: '#0a0a0a', textDecoration: 'none' }}>
            Om os
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
