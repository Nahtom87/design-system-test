import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=303-246487';

export default {
  title: 'Design System/Hover Card',
  component: HoverCard,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  decorators: [
    (Story) => (
      <div style={{ padding: '80px', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    align: {
      control: 'radio',
      options: ['start', 'center', 'end'],
      description: 'Vandret justering af kortet',
    },
    side: {
      control: 'radio',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Side kortet vises på',
    },
  },
  args: { align: 'center', side: 'bottom' },
};

export const Playground = {
  render: ({ align, side }) => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">@annmoth</Button>
      </HoverCardTrigger>
      <HoverCardContent align={align} side={side} style={{ width: '280px' }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Avatar size="small" roundness="round">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback size="small">AM</AvatarFallback>
          </Avatar>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <p style={{ fontSize: '14px', fontWeight: 500, color: '#0a0a0a', margin: 0 }}>Anna Moth</p>
            <p style={{ fontSize: '12px', color: '#737373', margin: 0 }}>Digital Designer @ KK Group</p>
            <p style={{ fontSize: '12px', color: '#737373', margin: '4px 0 0' }}>Tilmeldt januar 2024</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const Default = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">@annmoth</Button>
      </HoverCardTrigger>
      <HoverCardContent style={{ width: '280px' }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Avatar size="small" roundness="round">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback size="small">AM</AvatarFallback>
          </Avatar>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <p style={{ fontSize: '14px', fontWeight: 500, color: '#0a0a0a', margin: 0 }}>Anna Moth</p>
            <p style={{ fontSize: '12px', color: '#737373', margin: 0 }}>Digital Designer @ KK Group</p>
            <p style={{ fontSize: '12px', color: '#737373', margin: '4px 0 0' }}>Tilmeldt januar 2024</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const ProduktPreview = {
  name: 'Produkt preview',
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" style={{ padding: 0, height: 'auto', fontWeight: 500 }}>
          Storkøbenhavn Pendant
        </Button>
      </HoverCardTrigger>
      <HoverCardContent style={{ width: '240px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ width: '100%', height: '120px', background: '#f5f5f5', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '12px', color: '#a3a3a3' }}>Produktbillede</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p style={{ fontSize: '14px', fontWeight: 500, color: '#0a0a0a', margin: 0 }}>Storkøbenhavn Pendant</p>
              <Badge variant="secondary">Ny</Badge>
            </div>
            <p style={{ fontSize: '12px', color: '#737373', margin: 0 }}>Loftlampe i messing</p>
            <p style={{ fontSize: '14px', fontWeight: 600, color: '#0a0a0a', margin: '4px 0 0' }}>2.495 kr.</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
