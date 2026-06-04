import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=151-12313';

export default {
  title: 'Design System/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
};

export const Default = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Åbn drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filtrer resultater</DrawerTitle>
          <DrawerDescription>Vælg de filtre du vil anvende.</DrawerDescription>
        </DrawerHeader>
        <div style={{ padding: '0 16px 16px', flex: 1 }}>
          <p style={{ fontSize: '14px', color: '#404040' }}>Indhold her...</p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Annuller</Button>
          </DrawerClose>
          <Button>Anvend</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
