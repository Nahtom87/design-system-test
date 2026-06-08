import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Plus } from 'lucide-react';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=9-1071';

const variants  = ['primary', 'secondary', 'outline', 'ghost', 'destructive'];
const sizes     = ['mini', 'small', 'default', 'large', 'extra-large'];
const sizeLabels = { mini: 'Mini (24px)', small: 'Small (32px)', default: 'Default (36px)', large: 'Large (40px)', 'extra-large': 'Extra Large (48px)' };

export default {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    design: { type: 'figma', url: FIGMA_URL },
  },
  argTypes: {
    variant:  { control: 'select', options: variants },
    size:     { control: 'select', options: sizes },
    roundness:{ control: 'select', options: ['default', 'round'] },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

// Interaktiv sandbox
export const Playground = {
  args: {
    variant: 'primary',
    size: 'default',
    roundness: 'default',
    disabled: false,
    children: 'Label',
  },
};

// Alle varianter
export const AllVariants = {
  name: 'Alle varianter',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      {variants.map((v) => (
        <Button key={v} variant={v}>{v.charAt(0).toUpperCase() + v.slice(1)}</Button>
      ))}
    </div>
  ),
};

// Alle størrelser
export const AllSizes = {
  name: 'Alle størrelser',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      {sizes.map((s) => (
        <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <Button size={s}>Label</Button>
          <span style={{ fontSize: '10px', color: '#737373' }}>{sizeLabels[s]}</span>
        </div>
      ))}
    </div>
  ),
};

// Roundness
export const Roundness = {
  name: 'Roundness: Default vs Round',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {['default', 'round'].map((r) => (
        <div key={r}>
          <p style={{ fontSize: '11px', color: '#737373', marginBottom: '8px' }}>{r}</p>
          <div style={{ display: 'flex', gap: '8px' }}>
            {variants.map((v) => (
              <Button key={v} variant={v} roundness={r}>Label</Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

// Disabled
export const Disabled = {
  name: 'Disabled state',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {variants.map((v) => (
        <Button key={v} variant={v} disabled>Label</Button>
      ))}
    </div>
  ),
};

// Med ikoner
export const WithIcons = {
  name: 'Med ikoner',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button variant="primary"><ArrowLeft /> Tilbage</Button>
        <Button variant="primary">Næste <ArrowRight /></Button>
        <Button variant="secondary"><Plus /> Tilføj</Button>
        <Button variant="outline"><Plus /> Ny</Button>
      </div>
    </div>
  ),
};

// Fuld oversigt — alle varianter × alle størrelser
export const FullOverview = {
  name: 'Fuld oversigt (varianter × størrelser)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {sizes.map((s) => (
        <div key={s}>
          <p style={{ fontSize: '11px', color: '#737373', marginBottom: '8px' }}>{sizeLabels[s]}</p>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {variants.map((v) => (
              <Button key={v} variant={v} size={s}>Label</Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
