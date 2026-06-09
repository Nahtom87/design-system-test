import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=294-233298';

export default {
  title: 'Design System/Navigation Menu',
  component: NavigationMenu,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    viewport: {
      control: 'boolean',
      description: 'Vis floating viewport container under menuen',
    },
  },
  args: {
    viewport: true,
  },
};

const ListItem = ({ title, children, href = '#' }) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        href={href}
        className="block rounded-md px-3 py-2 text-sm no-underline hover:bg-muted transition-colors"
      >
        <div className="font-medium text-foreground mb-0.5">{title}</div>
        <div className="text-xs text-muted-foreground">{children}</div>
      </a>
    </NavigationMenuLink>
  </li>
);

export const Playground = {
  render: ({ viewport }) => (
    <NavigationMenu viewport={viewport}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Produkter</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul style={{ display: 'grid', gap: '4px', padding: '12px', width: '280px' }}>
              <ListItem title="Design System" href="#">Komponenter og tokens til hele platformen</ListItem>
              <ListItem title="Storybook" href="#">Interaktiv dokumentation af UI-elementer</ListItem>
              <ListItem title="Figma bibliotek" href="#">Delte design filer og komponenter</ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Ressourcer</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul style={{ display: 'grid', gap: '4px', padding: '12px', width: '240px' }}>
              <ListItem title="Dokumentation" href="#">Guides, vejledninger og best practices</ListItem>
              <ListItem title="Changelog" href="#">Oversigt over seneste ændringer</ListItem>
              <ListItem title="Support" href="#">Få hjælp fra teamet</ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className={navigationMenuTriggerStyle()}
          >
            Om os
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

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
          <NavigationMenuLink
            href="#"
            style={{
              padding: '8px 12px',
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: '14px',
              fontWeight: 500,
              color: '#0a0a0a',
              textDecoration: 'none',
            }}
          >
            Om os
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const SimplelLinkliste = {
  name: 'Simpel linkliste',
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        {['Forside', 'Nyheder', 'Produkter', 'Priser', 'Kontakt'].map((label) => (
          <NavigationMenuItem key={label}>
            <NavigationMenuLink
              href="#"
              className={navigationMenuTriggerStyle()}
            >
              {label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
