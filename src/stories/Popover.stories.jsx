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
      <div style={{ padding: '80px', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    align: {
      control: 'radio',
      options: ['start', 'center', 'end'],
      description: 'Horisontal justering',
    },
    side: {
      control: 'radio',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Side popover åbner fra',
    },
  },
  args: {
    align: 'center',
    side: 'bottom',
  },
};

export const Playground = {
  render: ({ align, side }) => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Rediger dimensioner</Button>
      </PopoverTrigger>
      <PopoverContent align={align} side={side} style={{ width: '240px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <Label htmlFor="pg-w">Bredde</Label>
            <Input id="pg-w" defaultValue="320px" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <Label htmlFor="pg-h">Højde</Label>
            <Input id="pg-h" defaultValue="auto" />
          </div>
          <Button size="small">Anvend</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const Default = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Filtrer brugere</Button>
      </PopoverTrigger>
      <PopoverContent style={{ width: '220px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{ fontSize: '13px', fontWeight: 500, color: '#0a0a0a', fontFamily: "'IBM Plex Sans', sans-serif" }}>
            Filtrer
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#0a0a0a', cursor: 'pointer', fontFamily: "'IBM Plex Sans', sans-serif" }}>
              <input type="checkbox" defaultChecked />
              Aktive brugere
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#0a0a0a', cursor: 'pointer', fontFamily: "'IBM Plex Sans', sans-serif" }}>
              <input type="checkbox" />
              Inaktive brugere
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#0a0a0a', cursor: 'pointer', fontFamily: "'IBM Plex Sans', sans-serif" }}>
              <input type="checkbox" />
              Afventer godkendelse
            </label>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
            <Button variant="ghost" size="small">Ryd filtre</Button>
            <Button size="small">Anvend</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

const SWATCHES = [
  '#171717', '#404040', '#737373',
  '#ef4444', '#f97316', '#eab308',
  '#22c55e', '#3b82f6', '#a855f7',
];

export const Farvepalette = {
  name: 'Farvepalette',
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Vælg farve</Button>
      </PopoverTrigger>
      <PopoverContent style={{ width: 'auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: '12px', color: '#737373', fontFamily: "'IBM Plex Sans', sans-serif" }}>
            Farvepalette
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
            {SWATCHES.map((color) => (
              <button
                key={color}
                title={color}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  background: color,
                  border: '1px solid rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
