import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Kbd, KbdGroup } from '@/components/ui/kbd';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=133-14785';

export default {
  title: 'Design System/Tooltip',
  component: Tooltip,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    side: {
      control: 'radio',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Hvilken side tooltip vises på',
    },
    align: {
      control: 'radio',
      options: ['start', 'center', 'end'],
      description: 'Justering langs aksen',
    },
    delayDuration: {
      control: 'number',
      description: 'Forsinkelse før tooltip vises (ms)',
      min: 0,
      max: 2000,
      step: 100,
    },
    content: {
      control: 'text',
      description: 'Tooltip tekst',
    },
  },
  args: {
    side: 'top',
    align: 'center',
    delayDuration: 400,
    content: 'Tooltip tekst',
  },
};

export const Playground = {
  render: (args) => (
    <TooltipProvider delayDuration={args.delayDuration}>
      <div style={{ padding: '60px', display: 'flex', justifyContent: 'center' }}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hold over mig</Button>
          </TooltipTrigger>
          <TooltipContent side={args.side} align={args.align}>
            <p>{args.content}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
};

export const Default = {
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div style={{ padding: '60px', display: 'flex', justifyContent: 'center' }}>
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hold over mig</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Tooltip tekst</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const Positioner = {
  name: 'Alle positioner',
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div style={{ padding: '60px', display: 'flex', justifyContent: 'center' }}>
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
  render: () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      {['top', 'right', 'bottom', 'left'].map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger asChild>
            <Button variant="outline" size="small">{side}</Button>
          </TooltipTrigger>
          <TooltipContent side={side}>
            <p>Tooltip {side}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
};

export const MedTastaturkortcut = {
  name: 'Med tastaturkortcut',
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div style={{ padding: '60px', display: 'flex', justifyContent: 'center' }}>
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>Gem ændringer</Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          Gem ændringer
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>S</Kbd>
          </KbdGroup>
        </span>
      </TooltipContent>
    </Tooltip>
  ),
};
