import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=303-246487';

export default {
  title: 'Design System/Popover',
  component: Popover,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  decorators: [
    (Story) => (
      <div style={{ padding: '60px', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Åbn popover</Button>
      </PopoverTrigger>
      <PopoverContent style={{ width: '240px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <Label htmlFor="pop-w">Bredde</Label>
            <Input id="pop-w" defaultValue="100%" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <Label htmlFor="pop-h">Højde</Label>
            <Input id="pop-h" defaultValue="auto" />
          </div>
          <Button size="small">Anvend</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
