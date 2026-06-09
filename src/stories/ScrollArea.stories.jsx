import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=164-18668';

const komponenter = [
  'Accordion','Alert','Alert Dialog','Avatar','Badge','Breadcrumb','Button',
  'Card','Carousel','Checkbox','Command','Data Table','Date Picker','Dialog',
  'Drawer','Input','Label','Popover','Select','Separator','Sheet',
  'Skeleton','Slider','Switch','Table','Tabs','Textarea','Toggle','Tooltip',
];

const farver = [
  { navn: 'Rød',     hex: '#EF3407' },
  { navn: 'Orange',  hex: '#F97316' },
  { navn: 'Gul',     hex: '#EAB308' },
  { navn: 'Grøn',    hex: '#22C55E' },
  { navn: 'Blå',     hex: '#3B82F6' },
  { navn: 'Indigo',  hex: '#6366F1' },
  { navn: 'Lilla',   hex: '#A855F7' },
  { navn: 'Pink',    hex: '#EC4899' },
  { navn: 'Cyan',    hex: '#06B6D4' },
  { navn: 'Teal',    hex: '#14B8A6' },
  { navn: 'Lime',    hex: '#84CC16' },
  { navn: 'Amber',   hex: '#F59E0B' },
];

export default {
  title: 'Design System/Scroll Area',
  component: ScrollArea,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    scrollbarOrientation: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
      description: 'Scrollbar retning',
    },
    height: { control: { type: 'number', min: 100, max: 500 }, description: 'Højde i px' },
    width:  { control: { type: 'number', min: 150, max: 600 }, description: 'Bredde i px' },
  },
  args: {
    scrollbarOrientation: 'vertical',
    height: 240,
    width: 280,
  },
};

export const Playground = {
  render: ({ scrollbarOrientation, height, width }) => (
    <ScrollArea
      style={{ height: `${height}px`, width: `${width}px`, border: '1px solid #e5e5e5', borderRadius: '8px' }}
    >
      {scrollbarOrientation === 'horizontal' ? (
        <div style={{ display: 'flex', gap: '12px', padding: '12px', width: 'max-content' }}>
          {farver.map(({ navn, hex }) => (
            <div key={navn} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '8px', background: hex }} />
              <span style={{ fontSize: '12px', color: '#0a0a0a', fontFamily: "'IBM Plex Sans'" }}>{navn}</span>
              <span style={{ fontSize: '11px', color: '#737373', fontFamily: "'IBM Plex Sans'" }}>{hex}</span>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ padding: '12px' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, color: '#737373', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Komponenter</p>
          {komponenter.map((k, i) => (
            <div key={k}>
              <div style={{ padding: '6px 0', fontSize: '14px', color: '#0a0a0a' }}>{k}</div>
              {i < komponenter.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      )}
      <ScrollBar orientation={scrollbarOrientation} />
    </ScrollArea>
  ),
};

export const Default = {
  render: () => (
    <ScrollArea style={{ height: '240px', width: '280px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
      <div style={{ padding: '12px' }}>
        <p style={{ fontSize: '12px', fontWeight: 600, color: '#737373', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Komponenter</p>
        {komponenter.map((k, i) => (
          <div key={k}>
            <div style={{ padding: '6px 0', fontSize: '14px', color: '#0a0a0a' }}>{k}</div>
            {i < komponenter.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const HorisontalScroll = {
  name: 'Horisontal scroll',
  render: () => (
    <ScrollArea style={{ width: '360px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
      <div style={{ display: 'flex', gap: '12px', padding: '16px', width: 'max-content' }}>
        {farver.map(({ navn, hex }) => (
          <div key={navn} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '8px', background: hex }} />
            <span style={{ fontSize: '12px', color: '#0a0a0a', fontFamily: "'IBM Plex Sans'" }}>{navn}</span>
            <span style={{ fontSize: '11px', color: '#737373', fontFamily: "'IBM Plex Sans'" }}>{hex}</span>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};
