import { Badge } from '@/components/ui/badge';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=19-6979';

const variants = ['primary', 'secondary', 'outline', 'ghost', 'destructive'];

export default {
  title: 'Design System/Badge',
  component: Badge,
  parameters: {
    design: { type: 'figma', url: FIGMA_URL },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
      description: 'Visuel stil — matcher Figma variants',
    },
    roundness: {
      control: 'select',
      options: ['default', 'round'],
      description: 'Hjørneafrunding — Default (8px) eller Round (pill)',
    },
    showLeftIcon:  { control: 'boolean' },
    showRightIcon: { control: 'boolean' },
    children: { control: 'text' },
  },
};

// Interaktiv sandbox
export const Playground = {
  args: {
    variant: 'primary',
    roundness: 'default',
    showLeftIcon: false,
    showRightIcon: false,
    children: 'Label',
  },
};

// Alle varianter — Default roundness
export const AllVariants = {
  name: 'Alle varianter',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      {variants.map((v) => (
        <Badge key={v} variant={v}>{v.charAt(0).toUpperCase() + v.slice(1)}</Badge>
      ))}
    </div>
  ),
};

// Roundness — Default vs Round
export const Roundness = {
  name: 'Roundness: Default vs Round',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <p style={{ fontSize: '12px', color: '#737373', marginBottom: '8px' }}>Default (8px hjørner)</p>
        <div style={{ display: 'flex', gap: '8px' }}>
          {variants.map((v) => (
            <Badge key={v} variant={v} roundness="default">Label</Badge>
          ))}
        </div>
      </div>
      <div>
        <p style={{ fontSize: '12px', color: '#737373', marginBottom: '8px' }}>Round (pill)</p>
        <div style={{ display: 'flex', gap: '8px' }}>
          {variants.map((v) => (
            <Badge key={v} variant={v} roundness="round">Label</Badge>
          ))}
        </div>
      </div>
    </div>
  ),
};

// Med ikoner
export const WithIcons = {
  name: 'Med ikoner',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', gap: '8px' }}>
        {variants.map((v) => (
          <Badge key={v} variant={v} showLeftIcon>Label</Badge>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        {variants.map((v) => (
          <Badge key={v} variant={v} showRightIcon>Label</Badge>
        ))}
      </div>
    </div>
  ),
};

// Fuld oversigt — alle varianter × begge roundness (matcher Figma-screenshottet)
export const FullOverview = {
  name: 'Fuld oversigt (alle kombinationer)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {['default', 'round'].map((r) => (
        <div key={r} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span style={{ fontSize: '11px', color: '#737373', width: '56px', flexShrink: 0 }}>{r}</span>
          {variants.map((v) => (
            <Badge key={v} variant={v} roundness={r}>Label</Badge>
          ))}
        </div>
      ))}
    </div>
  ),
};
