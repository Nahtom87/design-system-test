import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=28-6831';

export default {
  title: 'Design System/Select',
  component: Select,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
};

export const Default = {
  render: () => (
    <Select>
      <SelectTrigger style={{ width: '240px' }}>
        <SelectValue placeholder="Vælg en mulighed" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Mulighed 1</SelectItem>
        <SelectItem value="option2">Mulighed 2</SelectItem>
        <SelectItem value="option3">Mulighed 3</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithLabel = {
  name: 'Med label',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '240px' }}>
      <Label>Land</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Vælg land" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="dk">Danmark</SelectItem>
          <SelectItem value="se">Sverige</SelectItem>
          <SelectItem value="no">Norge</SelectItem>
          <SelectItem value="fi">Finland</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};
