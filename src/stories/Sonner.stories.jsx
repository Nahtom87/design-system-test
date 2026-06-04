import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=139-11363';

export default {
  title: 'Design System/Sonner (Toast)',
  component: Toaster,
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
};

export const Default = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Button variant="outline" onClick={() => toast('Besked sendt')}>Standard</Button>
      <Button variant="outline" onClick={() => toast.success('Gemt!')}>Succes</Button>
      <Button variant="outline" onClick={() => toast.error('Noget gik galt')}>Fejl</Button>
      <Button variant="outline" onClick={() => toast.warning('Tjek dette')}>Advarsel</Button>
      <Button variant="outline" onClick={() => toast.info('Ny opdatering tilgængelig')}>Info</Button>
    </div>
  ),
};
