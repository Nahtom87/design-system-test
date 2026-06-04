import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=162-17940';

export default {
  title: 'Design System/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    disabled: { control: 'boolean' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
  },
};

export const Playground = {
  args: { defaultValue: [50], min: 0, max: 100, step: 1 },
  render: (args) => <div style={{ width: '300px' }}><Slider {...args} /></div>,
};

export const WithLabel = {
  name: 'Med label',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '300px' }}>
      <Label style={{ fontSize: '14px', color: '#404040' }}>Volumen</Label>
      <Slider defaultValue={[70]} />
    </div>
  ),
};

export const Range = {
  name: 'Range (to håndtag)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '300px' }}>
      <Label style={{ fontSize: '14px', color: '#404040' }}>Prisinterval</Label>
      <Slider defaultValue={[20, 80]} step={5} />
    </div>
  ),
};

export const Disabled = {
  render: () => <div style={{ width: '300px' }}><Slider defaultValue={[40]} disabled /></div>,
};
