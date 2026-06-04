import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=11-1107';

export default {
  title: 'Design System/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    size: { control: 'select', options: ['sm', 'default', 'lg', 'xl'] },
  },
};

export const Playground = { args: { size: 'default' } };

export const AllSizes = {
  name: 'Alle størrelser',
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Spinner size="sm" />
      <Spinner size="default" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

export const IKnap = {
  name: 'I knap (loading state)',
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button variant="primary" disabled>
        <Spinner size="sm" /> Indlæser...
      </Button>
      <Button variant="outline" disabled>
        <Spinner size="sm" /> Gemmer...
      </Button>
    </div>
  ),
};
