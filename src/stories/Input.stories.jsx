import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search, Mail, Lock } from 'lucide-react';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=19-1286';

export default {
  title: 'Design System/Input',
  component: Input,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'password', 'number', 'search'] },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
};

export const Playground = {
  args: { type: 'text', placeholder: 'Skriv noget...', disabled: false },
};

export const WithLabel = {
  name: 'Med label',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '320px' }}>
      <Label htmlFor="email" style={{ fontSize: '14px', color: '#404040' }}>Email</Label>
      <Input id="email" type="email" placeholder="navn@eksempel.dk" />
    </div>
  ),
};

export const States = {
  name: 'Alle states',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '320px' }}>
      <Input placeholder="Placeholder" />
      <Input defaultValue="Med værdi" />
      <Input placeholder="Disabled" disabled />
    </div>
  ),
};

export const Types = {
  name: 'Input types',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '320px' }}>
      <Input type="text" placeholder="Text" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="number" placeholder="Nummer" />
      <Input type="search" placeholder="Søg..." />
    </div>
  ),
};
