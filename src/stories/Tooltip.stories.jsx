import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=133-14785';

export default {
  title: 'Design System/Tooltip',
  component: Tooltip,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div style={{ padding: '60px', display: 'flex', justifyContent: 'center' }}>
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
};

export const Default = {
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
