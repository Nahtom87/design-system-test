export default {
  title: 'Foundations/Typography',
  parameters: { layout: 'padded' },
};

const fontBase = "'IBM Plex Sans', system-ui, sans-serif";
const fontMono = "'IBM Plex Mono', monospace";

const Label = ({ children }) => (
  <span style={{ fontFamily: fontMono, fontSize: '11px', color: '#737373', display: 'block', marginBottom: '4px' }}>
    {children}
  </span>
);

const Divider = () => (
  <div style={{ borderBottom: '1px solid #e5e5e5', margin: '32px 0' }} />
);

export const Skriftsnit = {
  name: 'Skriftsnit',
  render: () => (
    <div style={{ maxWidth: '640px' }}>
      <div style={{ marginBottom: '32px' }}>
        <Label>--font-sans: 'IBM Plex Sans'</Label>
        <p style={{ fontFamily: fontBase, fontSize: '24px', margin: '8px 0 4px' }}>
          IBM Plex Sans — ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </p>
        <p style={{ fontFamily: fontBase, fontSize: '16px', color: '#404040', margin: 0 }}>
          abcdefghijklmnopqrstuvwxyz 0123456789 ÆØÅæøå
        </p>
      </div>
      <Divider />
      <div>
        <Label>--font-mono: 'IBM Plex Mono'</Label>
        <p style={{ fontFamily: fontMono, fontSize: '24px', margin: '8px 0 4px' }}>
          IBM Plex Mono — ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </p>
        <p style={{ fontFamily: fontMono, fontSize: '16px', color: '#404040', margin: 0 }}>
          abcdefghijklmnopqrstuvwxyz 0123456789
        </p>
      </div>
    </div>
  ),
};

export const TypeSkala = {
  name: 'Type skala',
  render: () => (
    <div style={{ maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {[
        { token: 'h1', size: '28px', lineHeight: '33.6px', weight: 700, label: 'Heading 1 — 28px/700' },
        { token: 'h2', size: '30px', lineHeight: '36px',   weight: 700, label: 'Heading 2 — 30px/700' },
        { token: 'h3', size: '24px', lineHeight: '28.8px', weight: 700, label: 'Heading 3 — 24px/700' },
        { token: 'h4', size: '20px', lineHeight: '24px',   weight: 700, label: 'Heading 4 — 20px/700' },
        { token: 'xl', size: '20px', lineHeight: '24px',   weight: 400, label: 'XL — 20px/400' },
        { token: 'lg', size: '18px', lineHeight: '27px',   weight: 400, label: 'Large — 18px/400' },
        { token: 'base', size: '16px', lineHeight: '24px', weight: 400, label: 'Base — 16px/400' },
        { token: 'sm', size: '14px', lineHeight: '20px',   weight: 400, label: 'Small — 14px/400 (standard)' },
        { token: 'mini', size: '12px', lineHeight: '16px', weight: 400, label: 'Mini — 12px/400' },
      ].map(({ token, size, lineHeight, weight, label }) => (
        <div key={token} style={{ display: 'flex', alignItems: 'baseline', gap: '24px' }}>
          <span style={{ fontFamily: fontMono, fontSize: '11px', color: '#737373', width: '80px', flexShrink: 0 }}>
            {size} / {weight}
          </span>
          <span style={{ fontFamily: fontBase, fontSize: size, lineHeight, fontWeight: weight, color: '#0a0a0a' }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  ),
};

export const FontVægte = {
  name: 'Fontvægte',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '640px' }}>
      {[
        { weight: 400, label: 'Regular — 400', token: '--font-weight-regular' },
        { weight: 500, label: 'Medium — 500', token: '--font-weight-medium' },
        { weight: 700, label: 'Bold — 700', token: '--font-weight-bold' },
      ].map(({ weight, label, token }) => (
        <div key={weight} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <span style={{ fontFamily: fontMono, fontSize: '11px', color: '#737373', width: '180px', flexShrink: 0 }}>{token}</span>
          <span style={{ fontFamily: fontBase, fontSize: '20px', fontWeight: weight, color: '#0a0a0a' }}>{label}</span>
        </div>
      ))}
    </div>
  ),
};

export const ParagrafStyles = {
  name: 'Paragraf styles (fra Figma)',
  render: () => (
    <div style={{ maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {[
        { name: 'paragraph/small/bold',   size: '14px', lh: '20px', weight: 700 },
        { name: 'paragraph/small/medium', size: '14px', lh: '20px', weight: 500 },
        { name: 'paragraph/small/regular',size: '14px', lh: '20px', weight: 400 },
        { name: 'paragraph/mini/bold',    size: '12px', lh: '16px', weight: 700 },
        { name: 'paragraph/mini/regular', size: '12px', lh: '16px', weight: 400 },
        { name: 'paragraph/regular',      size: '16px', lh: '24px', weight: 400 },
      ].map(({ name, size, lh, weight }) => (
        <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <span style={{ fontFamily: fontMono, fontSize: '11px', color: '#737373', width: '240px', flexShrink: 0 }}>{name}</span>
          <span style={{ fontFamily: fontBase, fontSize: size, lineHeight: lh, fontWeight: weight, color: '#0a0a0a' }}>
            Hurtigt over den lade hund springer en fræk zebra
          </span>
        </div>
      ))}
    </div>
  ),
};
