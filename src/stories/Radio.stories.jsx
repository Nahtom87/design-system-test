import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=19-5985';

export default {
  title: 'Design System/Radio Group',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
};

export const Default = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <RadioGroupItem value="option1" id="r1" />
        <Label htmlFor="r1">Mulighed 1</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <RadioGroupItem value="option2" id="r2" />
        <Label htmlFor="r2">Mulighed 2</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <RadioGroupItem value="option3" id="r3" disabled />
        <Label htmlFor="r3" style={{ opacity: 0.5 }}>Deaktiveret</Label>
      </div>
    </RadioGroup>
  ),
};

// Rich Radio Card — som Figma viser det
export const RichCard = {
  name: 'Rich Radio Card',
  render: () => (
    <RadioGroup defaultValue="plan1" style={{ gap: '8px' }}>
      {[
        { value: 'plan1', label: 'Basis',    secondary: 'Op til 5 brugere · Gratis' },
        { value: 'plan2', label: 'Pro',       secondary: 'Op til 25 brugere · 99 kr./md.' },
        { value: 'plan3', label: 'Enterprise',secondary: 'Ubegrænsede brugere · Kontakt os' },
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
