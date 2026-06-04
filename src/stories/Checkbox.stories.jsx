import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=19-6352';

export default {
  title: 'Design System/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    design: { type: 'figma', url: FIGMA_URL },
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export const Playground = {
  args: { disabled: false },
};

export const WithLabel = {
  name: 'Med label',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Checkbox id="terms" />
      <Label htmlFor="terms" style={{ fontSize: '14px', color: '#404040' }}>
        Accepter vilkår og betingelser
      </Label>
    </div>
  ),
};

export const States = {
  name: 'Alle states',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Checkbox id="c1" />
        <Label htmlFor="c1" style={{ fontSize: '14px', color: '#404040' }}>Unchecked</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Checkbox id="c2" defaultChecked />
        <Label htmlFor="c2" style={{ fontSize: '14px', color: '#404040' }}>Checked</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Checkbox id="c3" disabled />
        <Label htmlFor="c3" style={{ fontSize: '14px', color: '#a3a3a3' }}>Disabled</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Checkbox id="c4" disabled defaultChecked />
        <Label htmlFor="c4" style={{ fontSize: '14px', color: '#a3a3a3' }}>Disabled + checked</Label>
      </div>
    </div>
  ),
};

// Rich Checkbox Card — som Figma viser det
export const RichCard = {
  name: 'Rich Checkbox Card',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '240px' }}>
      {[
        { label: 'Notifikationer', secondary: 'Modtag emails om opdateringer' },
        { label: 'Nyhedsbrev', secondary: 'Ugentligt nyhedsbrev' },
      ].map((item, i) => (
        <label
          key={i}
          style={{
            display: 'flex', gap: '12px', alignItems: 'flex-start',
            padding: '12px', background: 'white',
            border: '1px solid #e5e5e5', borderRadius: '10px',
            cursor: 'pointer', width: '100%', boxSizing: 'border-box',
          }}
        >
          <div style={{ paddingTop: '2.5px' }}>
            <Checkbox />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '14px', color: '#404040', lineHeight: '20px' }}>{item.label}</span>
            <span style={{ fontSize: '12px', color: '#737373', lineHeight: '16px' }}>{item.secondary}</span>
          </div>
        </label>
      ))}
    </div>
  ),
};
