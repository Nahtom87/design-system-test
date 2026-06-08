import { Toggle } from '@/components/ui/toggle';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List } from 'lucide-react';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=816-114928';

export default {
  title: 'Design System/Toggle',
  component: Toggle,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    variant: { control: 'select', options: ['default', 'outline'] },
    size:    { control: 'select', options: ['sm', 'default', 'lg'] },
    disabled:{ control: 'boolean' },
  },
};

export const Playground = {
  args: { variant: 'outline', children: 'Label' },
};

export const TextFormatering = {
  name: 'Tekstformatering',
  render: () => (
    <div style={{ display: 'flex', gap: '4px' }}>
      <Toggle variant="outline" aria-label="Fed"><Bold /></Toggle>
      <Toggle variant="outline" aria-label="Kursiv"><Italic /></Toggle>
      <Toggle variant="outline" aria-label="Understreget"><Underline /></Toggle>
    </div>
  ),
};

export const Justering = {
  name: 'Tekstjustering',
  render: () => (
    <div style={{ display: 'flex', gap: '4px' }}>
      <Toggle variant="outline" aria-label="Venstre"><AlignLeft /></Toggle>
      <Toggle variant="outline" defaultPressed aria-label="Centreret"><AlignCenter /></Toggle>
      <Toggle variant="outline" aria-label="Højre"><AlignRight /></Toggle>
    </div>
  ),
};

export const MedTekst = {
  name: 'Med tekst og ikon',
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Toggle variant="outline" size="lg"><List /> Liste</Toggle>
      <Toggle variant="outline" size="lg" defaultPressed><Bold /> Fed</Toggle>
    </div>
  ),
};
