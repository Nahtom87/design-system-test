import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=164-18668';

const komponenter = [
  'Accordion','Alert','Alert Dialog','Avatar','Badge','Breadcrumb','Button',
  'Card','Carousel','Checkbox','Command','Data Table','Date Picker','Dialog',
  'Drawer','Input','Label','Popover','Select','Separator','Sheet',
  'Skeleton','Slider','Switch','Table','Tabs','Textarea','Toggle','Tooltip',
];

export default {
  title: 'Design System/Scroll Area',
  component: ScrollArea,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
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
