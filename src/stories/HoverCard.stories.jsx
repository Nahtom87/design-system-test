import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

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
