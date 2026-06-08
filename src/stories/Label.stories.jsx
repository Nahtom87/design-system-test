import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

export default {
  title: 'Design System/Label',
  component: Label,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Playground = {
  args: { children: 'Email address', htmlFor: 'email' },
};

export const WithInput = {
  name: 'Paired with input',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: 280 }}>
      <Label htmlFor="email-1">Email address</Label>
      <Input id="email-1" type="email" placeholder="name@example.com" />
    </div>
  ),
};

export const WithCheckbox = {
  name: 'Paired with checkbox',
  render: () => (
    <Label htmlFor="terms" style={{ cursor: 'pointer' }}>
      <Checkbox id="terms" /> Accept terms and conditions
    </Label>
  ),
};
