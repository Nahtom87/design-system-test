import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=151-12313';

export default {
  title: 'Design System/Drawer',
  component: Drawer,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    direction: {
      control: 'select',
      options: ['bottom', 'top', 'left', 'right'],
      description: 'Hvilken side drawer glider ind fra',
    },
  },
  args: { direction: 'bottom' },
};

export const Playground = {
  render: ({ direction }) => (
    <Drawer direction={direction}>
      <DrawerTrigger asChild>
        <Button variant="outline">Åbn filterdrawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filtrer resultater</DrawerTitle>
          <DrawerDescription>Vælg de filtre du vil anvende på søgningen.</DrawerDescription>
        </DrawerHeader>
        <div style={{ padding: '0 16px 8px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#0a0a0a', cursor: 'pointer' }}>
            <input type="checkbox" defaultChecked /> Nyheder
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#0a0a0a', cursor: 'pointer' }}>
            <input type="checkbox" /> Sport
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#0a0a0a', cursor: 'pointer' }}>
            <input type="checkbox" /> Kultur
          </label>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Annuller</Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button>Anvend</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const Default = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Søg medarbejdere</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Søg medarbejdere</DrawerTitle>
          <DrawerDescription>Filtrer listen efter afdeling og rolle.</DrawerDescription>
        </DrawerHeader>
        <div style={{ padding: '0 16px 8px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#0a0a0a', cursor: 'pointer' }}>
            <input type="checkbox" defaultChecked /> Borgerservice
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#0a0a0a', cursor: 'pointer' }}>
            <input type="checkbox" /> Teknik & Miljø
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#0a0a0a', cursor: 'pointer' }}>
            <input type="checkbox" /> Økonomi
          </label>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Annuller</Button>
          </DrawerClose>
          <Button>Søg</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const FraVenstre = {
  name: 'Fra venstre (navigation)',
  render: () => (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline">Åbn navigationsmenu</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Navigation</DrawerTitle>
        </DrawerHeader>
        <nav style={{ padding: '0 16px 16px', flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {['Forside', 'Nyheder', 'Sport', 'Kultur', 'Debat', 'Podcast'].map((item) => (
            <a
              key={item}
              href="#"
              style={{ fontSize: '14px', color: '#0a0a0a', padding: '8px 4px', textDecoration: 'none', borderRadius: '6px', display: 'block' }}
            >
              {item}
            </a>
          ))}
        </nav>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline" style={{ width: '100%' }}>Luk</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
