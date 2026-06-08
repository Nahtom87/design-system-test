import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=19-6375';

export default {
  title: 'Design System/Switch',
  component: Switch,
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

export const States = {
  name: 'Alle states',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Switch id="s1" />
        <Label htmlFor="s1" style={{ fontSize: '14px', color: '#404040' }}>Off</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Switch id="s2" defaultChecked />
        <Label htmlFor="s2" style={{ fontSize: '14px', color: '#404040' }}>On</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Switch id="s3" disabled />
        <Label htmlFor="s3" style={{ fontSize: '14px', color: '#a3a3a3' }}>Disabled</Label>
      </div>
    </div>
  ),
};

// Rich Switch Card — som Figma viser det
export const RichCard = {
  name: 'Rich Switch Card',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '240px' }}>
      {[
        { label: 'Notifikationer', secondary: 'Modtag push-notifikationer' },
        { label: 'Mørk tilstand', secondary: 'Skift til mørkt tema' },
      ].map((item, i) => (
        <div
          key={i}
          style={{
            display: 'flex', gap: '12px', alignItems: 'flex-start',
            padding: '12px', background: 'white',
            border: '1px solid #e5e5e5', borderRadius: '10px',
          }}
        >
          <div style={{ paddingTop: '1.5px' }}>
            <Switch />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '14px', color: '#404040', lineHeight: '20px' }}>{item.label}</span>
            <span style={{ fontSize: '12px', color: '#737373', lineHeight: '16px' }}>{item.secondary}</span>
          </div>
        </div>
      ))}
    </div>
  ),
};
