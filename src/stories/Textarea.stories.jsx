import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=140-11507';

export default {
  title: 'Design System/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
};

export const Playground = { args: { placeholder: 'Skriv din besked her...' } };

export const WithLabel = {
  name: 'Med label',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '320px' }}>
      <Label htmlFor="msg">Besked</Label>
      <Textarea id="msg" placeholder="Skriv din besked..." />
    </div>
  ),
};

export const States = {
  name: 'Alle states',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '320px' }}>
      <Textarea placeholder="Placeholder" />
      <Textarea defaultValue="Med forudindtastet tekst." />
      <Textarea placeholder="Disabled" disabled />
    </div>
  ),
};
