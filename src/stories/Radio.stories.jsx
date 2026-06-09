import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=19-5985';

export default {
  title: 'Design System/Radio Group',
  component: RadioGroup,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    defaultValue: {
      control: 'radio',
      options: ['option1', 'option2', 'option3'],
      description: 'Forudvalgt mulighed',
    },
    disabled: {
      control: 'boolean',
      description: 'Deaktiver hele gruppen',
    },
    orientation: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
      description: 'Layout retning',
    },
  },
  args: {
    defaultValue: 'option1',
    disabled: false,
    orientation: 'vertical',
  },
};

const OPTIONS = [
  { value: 'option1', label: 'Mulighed 1' },
  { value: 'option2', label: 'Mulighed 2' },
  { value: 'option3', label: 'Mulighed 3' },
];

export const Playground = {
  render: ({ defaultValue, disabled, orientation }) => (
    <RadioGroup
      defaultValue={defaultValue}
      disabled={disabled}
      orientation={orientation}
      style={orientation === 'horizontal' ? { display: 'flex', flexDirection: 'row', gap: '24px' } : undefined}
    >
      {OPTIONS.map(({ value, label }) => (
        <div key={value} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <RadioGroupItem value={value} id={`pg-${value}`} />
          <Label htmlFor={`pg-${value}`}>{label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
};

export const Default = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <p style={{ margin: 0, fontSize: '14px', color: '#0a0a0a', fontFamily: "'IBM Plex Sans', sans-serif" }}>
        Hvordan vil du modtage notifikationer?
      </p>
      <RadioGroup defaultValue="email">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <RadioGroupItem value="email" id="notif-email" />
          <Label htmlFor="notif-email">E-mail</Label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <RadioGroupItem value="sms" id="notif-sms" />
          <Label htmlFor="notif-sms">SMS</Label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <RadioGroupItem value="ingen" id="notif-ingen" disabled />
          <Label htmlFor="notif-ingen" style={{ opacity: 0.5 }}>Ingen notifikationer</Label>
        </div>
      </RadioGroup>
    </div>
  ),
};

export const RichCard = {
  name: 'Rich Radio Card',
  render: () => (
    <RadioGroup defaultValue="plan1" style={{ gap: '8px' }}>
      {[
        { value: 'plan1', label: 'Basis',     secondary: 'Op til 5 brugere · Gratis' },
        { value: 'plan2', label: 'Pro',        secondary: 'Op til 25 brugere · 99 kr./md.' },
        { value: 'plan3', label: 'Enterprise', secondary: 'Ubegrænsede brugere · Kontakt os' },
      ].map(({ value, label, secondary }) => (
        <label
          key={value}
          style={{
            display: 'flex', gap: '12px', alignItems: 'flex-start',
            padding: '12px', background: 'white',
            border: '1px solid #e5e5e5', borderRadius: '10px',
            cursor: 'pointer', width: '240px', boxSizing: 'border-box',
          }}
        >
          <div style={{ paddingTop: '2.5px' }}>
            <RadioGroupItem value={value} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '14px', color: '#404040', lineHeight: '20px' }}>{label}</span>
            <span style={{ fontSize: '12px', color: '#737373', lineHeight: '16px' }}>{secondary}</span>
          </div>
        </label>
      ))}
    </RadioGroup>
  ),
};
