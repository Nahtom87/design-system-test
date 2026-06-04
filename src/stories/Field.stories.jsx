import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=120-13758';

// ── Hjælpekomponenter ──────────────────────────────────────────
const font = "'IBM Plex Sans', system-ui, sans-serif";

const FieldLabel = ({ children }) => (
  <label style={{ fontFamily: font, fontWeight: 500, fontSize: '14px', lineHeight: '20px', color: '#0a0a0a', display: 'block' }}>
    {children}
  </label>
);

const Hint = ({ children }) => (
  <p style={{ fontFamily: font, fontSize: '12px', color: '#737373', margin: 0, lineHeight: '16px' }}>{children}</p>
);

// Vertikal felt: label øverst, input nedenunder
const VField = ({ label, hint, children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '320px' }}>
    <FieldLabel>{label}</FieldLabel>
    {children}
    {hint && <Hint>{hint}</Hint>}
  </div>
);

// Horisontal felt: label til venstre, input til højre
const HField = ({ label, hint, children }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', width: '480px' }}>
    <FieldLabel style={{ width: '120px', flexShrink: 0, paddingTop: '10px' }}>{label}</FieldLabel>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {children}
      {hint && <Hint>{hint}</Hint>}
    </div>
  </div>
);

// ── Meta ───────────────────────────────────────────────────────
export default {
  title: 'Design System/Field',
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    layout: { control: 'select', options: ['vertical', 'horizontal'], description: 'Vertikal eller horisontal label-placering' },
    type:   { control: 'select', options: ['text', 'select', 'radio', 'textarea', 'checkbox', 'slider'], description: 'Input-type' },
    label:  { control: 'text' },
    hint:   { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

// ── Playground ─────────────────────────────────────────────────
export const Playground = {
  args: { layout: 'vertical', type: 'text', label: 'Label', hint: '', disabled: false },
  render: ({ layout, type, label, hint, disabled }) => {
    const F = layout === 'horizontal' ? HField : VField;
    const inputEl = (() => {
      switch (type) {
        case 'select': return (
          <Select disabled={disabled}>
            <SelectTrigger><SelectValue placeholder="Vælg et element" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Mulighed 1</SelectItem>
              <SelectItem value="2">Mulighed 2</SelectItem>
              <SelectItem value="3">Mulighed 3</SelectItem>
            </SelectContent>
          </Select>
        );
        case 'radio': return (
          <RadioGroup disabled={disabled} defaultValue="1">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <RadioGroupItem value="1" id="p-r1" /><label htmlFor="p-r1" style={{ fontFamily: font, fontSize: '14px', color: '#404040' }}>Mulighed 1</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <RadioGroupItem value="2" id="p-r2" /><label htmlFor="p-r2" style={{ fontFamily: font, fontSize: '14px', color: '#404040' }}>Mulighed 2</label>
            </div>
          </RadioGroup>
        );
        case 'textarea': return <Textarea placeholder="Skriv din besked..." disabled={disabled} />;
        case 'checkbox': return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {['Mulighed 1', 'Mulighed 2', 'Mulighed 3'].map((o, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Checkbox id={`p-c${i}`} disabled={disabled} />
                <label htmlFor={`p-c${i}`} style={{ fontFamily: font, fontSize: '14px', color: '#404040' }}>{o}</label>
              </div>
            ))}
          </div>
        );
        case 'slider': return <Slider defaultValue={[40]} disabled={disabled} />;
        default: return <Input placeholder="Value" disabled={disabled} />;
      }
    })();
    return <F label={label} hint={hint || undefined}>{inputEl}</F>;
  },
};

// ── Alle typer — Vertikal ──────────────────────────────────────
export const VerticalField = {
  name: 'Vertikal — alle typer',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <VField label="Text input">
        <Input placeholder="Value" />
      </VField>

      <VField label="Select">
        <Select>
          <SelectTrigger><SelectValue placeholder="Vælg et element" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Mulighed 1</SelectItem>
            <SelectItem value="2">Mulighed 2</SelectItem>
            <SelectItem value="3">Mulighed 3</SelectItem>
          </SelectContent>
        </Select>
      </VField>

      <VField label="Radio">
        <RadioGroup defaultValue="1">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <RadioGroupItem value="1" id="v-r1" /><label htmlFor="v-r1" style={{ fontFamily: font, fontSize: '14px', color: '#404040' }}>Mulighed 1</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <RadioGroupItem value="2" id="v-r2" /><label htmlFor="v-r2" style={{ fontFamily: font, fontSize: '14px', color: '#404040' }}>Mulighed 2</label>
          </div>
        </RadioGroup>
      </VField>

      <VField label="Textarea">
        <Textarea placeholder="Skriv din besked..." />
      </VField>

      <VField label="Checkbox">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {['Mulighed 1', 'Mulighed 2', 'Mulighed 3'].map((o, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Checkbox id={`v-c${i}`} />
              <label htmlFor={`v-c${i}`} style={{ fontFamily: font, fontSize: '14px', color: '#404040' }}>{o}</label>
            </div>
          ))}
        </div>
      </VField>

      <VField label="Slider">
        <Slider defaultValue={[40]} />
      </VField>
    </div>
  ),
};

// ── Alle typer — Horisontal ────────────────────────────────────
export const HorizontalField = {
  name: 'Horisontal — alle typer',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <HField label="Text input">
        <Input placeholder="Value" />
      </HField>

      <HField label="Select">
        <Select>
          <SelectTrigger><SelectValue placeholder="Vælg et element" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Mulighed 1</SelectItem>
            <SelectItem value="2">Mulighed 2</SelectItem>
          </SelectContent>
        </Select>
      </HField>

      <HField label="Radio">
        <RadioGroup defaultValue="1">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <RadioGroupItem value="1" id="h-r1" /><label htmlFor="h-r1" style={{ fontFamily: font, fontSize: '14px', color: '#404040' }}>Mulighed 1</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <RadioGroupItem value="2" id="h-r2" /><label htmlFor="h-r2" style={{ fontFamily: font, fontSize: '14px', color: '#404040' }}>Mulighed 2</label>
          </div>
        </RadioGroup>
      </HField>

      <HField label="Textarea">
        <Textarea placeholder="Skriv din besked..." />
      </HField>

      <HField label="Checkbox">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {['Mulighed 1', 'Mulighed 2', 'Mulighed 3'].map((o, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Checkbox id={`h-c${i}`} />
              <label htmlFor={`h-c${i}`} style={{ fontFamily: font, fontSize: '14px', color: '#404040' }}>{o}</label>
            </div>
          ))}
        </div>
      </HField>

      <HField label="Slider">
        <Slider defaultValue={[40]} />
      </HField>
    </div>
  ),
};

// ── States ─────────────────────────────────────────────────────
export const States = {
  name: 'States (disabled)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <VField label="Normal">
        <Input placeholder="Placeholder" />
      </VField>
      <VField label="Med værdi">
        <Input defaultValue="Anna Moth" />
      </VField>
      <VField label="Disabled">
        <Input placeholder="Kan ikke redigeres" disabled />
      </VField>
      <VField label="Med hint" hint="Hjælpetekst under feltet">
        <Input placeholder="Value" />
      </VField>
    </div>
  ),
};

// ── Komplet formular ───────────────────────────────────────────
export const FormEksempel = {
  name: 'Komplet formular',
  render: () => (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '360px' }}
      onSubmit={e => e.preventDefault()}>
      <VField label="Fuldt navn">
        <Input placeholder="Anna Moth" />
      </VField>
      <VField label="Email" hint="Vi sender bekræftelse til denne adresse">
        <Input type="email" placeholder="anna@kk.dk" />
      </VField>
      <VField label="Afdeling">
        <Select>
          <SelectTrigger><SelectValue placeholder="Vælg afdeling" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="dev">Udvikling</SelectItem>
            <SelectItem value="pm">Product Management</SelectItem>
          </SelectContent>
        </Select>
      </VField>
      <VField label="Rolle">
        <RadioGroup defaultValue="designer">
          {['Designer', 'Udvikler', 'Leder'].map(r => (
            <div key={r} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <RadioGroupItem value={r.toLowerCase()} id={`form-${r}`} />
              <label htmlFor={`form-${r}`} style={{ fontFamily: font, fontSize: '14px', color: '#404040' }}>{r}</label>
            </div>
          ))}
        </RadioGroup>
      </VField>
      <VField label="Kommentar" hint="Valgfrit">
        <Textarea placeholder="Skriv her..." />
      </VField>
      <button type="submit" style={{
        background: '#171717', color: '#fafafa', border: 'none',
        borderRadius: '8px', padding: '8px 16px', height: '36px',
        fontFamily: font, fontWeight: 500, fontSize: '14px', cursor: 'pointer',
      }}>
        Send
      </button>
    </form>
  ),
};
