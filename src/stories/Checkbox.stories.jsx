import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=280-104271';
const font = "'IBM Plex Sans', system-ui, sans-serif";

export default {
  title: 'Design System/Checkbox',
  component: Checkbox,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    disabled: { control: 'boolean' },
    error:    { control: 'boolean', description: 'Error state — rød border og focus ring' },
  },
};

// ── Playground ─────────────────────────────────────────────────
export const Playground = {
  args: { disabled: false, error: false },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Checkbox id="play" {...args} />
      <Label htmlFor="play">Label</Label>
    </div>
  ),
};

// ── Alle states — fra Figma ────────────────────────────────────
export const AlleStates = {
  name: 'Alle states (fra Figma)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

      {/* Checked: False */}
      <div>
        <p style={{ fontFamily: font, fontSize: '11px', color: '#9747ff', marginBottom: '12px' }}>Checked: False</p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Checkbox />
            <span style={{ fontFamily: font, fontSize: '10px', color: '#737373' }}>Default</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Checkbox style={{ outline: 'none', boxShadow: '0 0 0 3px #d4d4d4' }} />
            <span style={{ fontFamily: font, fontSize: '10px', color: '#737373' }}>Focus</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Checkbox error />
            <span style={{ fontFamily: font, fontSize: '10px', color: '#737373' }}>Error</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Checkbox error style={{ boxShadow: '0 0 0 3px #fca5a5' }} />
            <span style={{ fontFamily: font, fontSize: '10px', color: '#737373' }}>Error Focus</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Checkbox disabled />
            <span style={{ fontFamily: font, fontSize: '10px', color: '#737373' }}>Disabled</span>
          </div>
        </div>
      </div>

      {/* Checked: True */}
      <div>
        <p style={{ fontFamily: font, fontSize: '11px', color: '#9747ff', marginBottom: '12px' }}>Checked: True</p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Checkbox defaultChecked />
            <span style={{ fontFamily: font, fontSize: '10px', color: '#737373' }}>Default</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Checkbox defaultChecked style={{ boxShadow: '0 0 0 3px #d4d4d4' }} />
            <span style={{ fontFamily: font, fontSize: '10px', color: '#737373' }}>Focus</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Checkbox defaultChecked error />
            <span style={{ fontFamily: font, fontSize: '10px', color: '#737373' }}>Error</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Checkbox defaultChecked error style={{ boxShadow: '0 0 0 3px #fca5a5' }} />
            <span style={{ fontFamily: font, fontSize: '10px', color: '#737373' }}>Error Focus</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Checkbox defaultChecked disabled />
            <span style={{ fontFamily: font, fontSize: '10px', color: '#737373' }}>Disabled</span>
          </div>
        </div>
      </div>

      {/* Indeterminate */}
      <div>
        <p style={{ fontFamily: font, fontSize: '11px', color: '#9747ff', marginBottom: '12px' }}>Checked: Indeterminate</p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Checkbox checked="indeterminate" />
            <span style={{ fontFamily: font, fontSize: '10px', color: '#737373' }}>Default</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Checkbox checked="indeterminate" disabled />
            <span style={{ fontFamily: font, fontSize: '10px', color: '#737373' }}>Disabled</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

// ── Med label ──────────────────────────────────────────────────
export const MedLabel = {
  name: 'Med label',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Checkbox id="c1" />
        <Label htmlFor="c1">Unchecked</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Checkbox id="c2" defaultChecked />
        <Label htmlFor="c2">Checked</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Checkbox id="c3" checked="indeterminate" />
        <Label htmlFor="c3">Indeterminate</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Checkbox id="c4" error />
        <Label htmlFor="c4" style={{ color: '#dc2626' }}>Fejl — vælg mindst ét</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Checkbox id="c5" disabled />
        <Label htmlFor="c5" style={{ opacity: 0.5 }}>Deaktiveret</Label>
      </div>
    </div>
  ),
};

// ── Checkbox Group — Inline layout ────────────────────────────
export const CheckboxGroupInline = {
  name: 'Checkbox Group — Inline',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <p style={{ fontFamily: font, fontSize: '12px', color: '#737373', margin: '0 0 4px' }}>Vælg dine interesser:</p>
      {['Design', 'Udvikling', 'Product', 'Marketing'].map((item, i) => (
        <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Checkbox id={`ig-${i}`} defaultChecked={i === 0} />
          <label htmlFor={`ig-${i}`} style={{ fontFamily: font, fontSize: '14px', color: '#404040', cursor: 'pointer' }}>
            {item}
          </label>
        </div>
      ))}
    </div>
  ),
};

// ── Checkbox Group — Block layout ─────────────────────────────
export const CheckboxGroupBlock = {
  name: 'Checkbox Group — Block (fuld bredde)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '240px' }}>
      {['Design', 'Udvikling', 'Product', 'Marketing'].map((item, i) => (
        <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
          <Checkbox id={`bg-${i}`} defaultChecked={i === 0} />
          <label htmlFor={`bg-${i}`} style={{ fontFamily: font, fontSize: '14px', color: '#404040', cursor: 'pointer', flex: 1 }}>
            {item}
          </label>
        </div>
      ))}
    </div>
  ),
};

// ── Rich Checkbox Group ────────────────────────────────────────
export const RichCheckboxGroup = {
  name: 'Rich Checkbox Group (kort-form)',
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {/* Flipped: False */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={{ fontFamily: font, fontSize: '11px', color: '#9747ff', marginBottom: '4px' }}>Flipped: False</p>
        {[false, true].map((checked, i) => (
          <label key={i} style={{
            display: 'flex', gap: '12px', alignItems: 'flex-start',
            padding: '12px', background: 'white',
            border: '1px solid #e5e5e5', borderRadius: '10px',
            cursor: 'pointer', width: '240px', boxSizing: 'border-box',
          }}>
            <div style={{ paddingTop: '2.5px' }}>
              <Checkbox defaultChecked={checked} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontFamily: font, fontSize: '14px', color: '#404040', lineHeight: '20px' }}>Label</span>
              <span style={{ fontFamily: font, fontSize: '12px', color: '#737373', lineHeight: '16px' }}>Secondary text</span>
            </div>
          </label>
        ))}
      </div>

      {/* Flipped: True (checkbox til højre) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={{ fontFamily: font, fontSize: '11px', color: '#9747ff', marginBottom: '4px' }}>Flipped: True</p>
        {[false, true].map((checked, i) => (
          <label key={i} style={{
            display: 'flex', gap: '12px', alignItems: 'flex-start', justifyContent: 'space-between',
            padding: '12px', background: 'white',
            border: '1px solid #e5e5e5', borderRadius: '10px',
            cursor: 'pointer', width: '240px', boxSizing: 'border-box',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontFamily: font, fontSize: '14px', color: '#404040', lineHeight: '20px' }}>Label</span>
              <span style={{ fontFamily: font, fontSize: '12px', color: '#737373', lineHeight: '16px' }}>Secondary text</span>
            </div>
            <div style={{ paddingTop: '2.5px' }}>
              <Checkbox defaultChecked={checked} />
            </div>
          </label>
        ))}
      </div>
    </div>
  ),
};

// ── Error state i formular ─────────────────────────────────────
export const ErrorState = {
  name: 'Error state',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '320px' }}>
      <p style={{ fontFamily: font, fontWeight: 500, fontSize: '14px', color: '#0a0a0a', margin: 0 }}>Accepter vilkår</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Checkbox id="err" error />
        <label htmlFor="err" style={{ fontFamily: font, fontSize: '14px', color: '#404040', cursor: 'pointer' }}>
          Jeg accepterer vilkår og betingelser
        </label>
      </div>
      <p style={{ fontFamily: font, fontSize: '12px', color: '#dc2626', margin: 0 }}>Du skal acceptere vilkårene for at fortsætte</p>
    </div>
  ),
};
