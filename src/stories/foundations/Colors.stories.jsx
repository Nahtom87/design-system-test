export default {
  title: 'Foundations/Colors',
  parameters: { layout: 'padded' },
};

const fontBase = "'IBM Plex Sans', system-ui, sans-serif";
const fontMono = "'IBM Plex Mono', monospace";

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '40px' }}>
    <h2 style={{ fontFamily: fontBase, fontSize: '13px', fontWeight: 500, color: '#737373', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 16px' }}>
      {title}
    </h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {children}
    </div>
  </div>
);

const Swatch = ({ name, value, border }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '96px' }}>
    <div style={{
      width: '96px', height: '56px', borderRadius: '8px',
      background: value,
      border: border || (value === '#ffffff' || value === 'white' ? '1px solid #e5e5e5' : 'none'),
    }} />
    <div>
      <p style={{ fontFamily: fontBase, fontSize: '12px', fontWeight: 500, color: '#0a0a0a', margin: 0 }}>{name}</p>
      <p style={{ fontFamily: fontMono, fontSize: '10px', color: '#737373', margin: 0, wordBreak: 'break-all' }}>{value}</p>
    </div>
  </div>
);

/* ── Semantic token data for each theme ─────────────────────────────────── */

const SEMANTIC_GROUPS = [
  {
    label: 'Surfaces',
    tokens: ['background', 'card', 'muted', 'popover'],
  },
  {
    label: 'Text',
    tokens: ['foreground', 'muted-foreground', 'card-foreground', 'popover-foreground'],
  },
  {
    label: 'Actions',
    tokens: ['primary', 'primary-foreground', 'secondary', 'secondary-foreground', 'accent', 'accent-foreground'],
  },
  {
    label: 'States',
    tokens: ['destructive', 'destructive-foreground', 'success', 'warning'],
  },
  {
    label: 'Borders & inputs',
    tokens: ['border', 'ring', 'input'],
  },
];

const THEMES = {
  light: {
    label: 'Light',
    bg: '#f8f8f8',
    tokens: {
      background:            '#ffffff',
      card:                  '#ffffff',
      muted:                 '#f5f5f5',
      popover:               '#ffffff',
      foreground:            '#0a0a0a',
      'muted-foreground':    '#737373',
      'card-foreground':     '#0a0a0a',
      'popover-foreground':  '#0a0a0a',
      primary:               '#171717',
      'primary-foreground':  '#fafafa',
      secondary:             '#f5f5f5',
      'secondary-foreground':'#171717',
      accent:                '#f5f5f5',
      'accent-foreground':   '#171717',
      destructive:           '#dc2626',
      'destructive-foreground': '#ffffff',
      success:               'oklch(0.627 0.17 149.2)',
      warning:               'oklch(0.681 0.162 66)',
      border:                '#e5e5e5',
      ring:                  '#d4d4d4',
      input:                 '#ffffff',
    },
  },
  dark: {
    label: 'Dark',
    bg: '#111111',
    tokens: {
      background:            '#0a0a0a',
      card:                  '#171717',
      muted:                 '#171717',
      popover:               'oklch(0.205 0 0)',
      foreground:            '#fafafa',
      'muted-foreground':    '#a3a3a3',
      'card-foreground':     '#ffffff',
      'popover-foreground':  'oklch(0.985 0 0)',
      primary:               '#f5f5f5',
      'primary-foreground':  '#0a0a0a',
      secondary:             '#262626',
      'secondary-foreground':'#f5f5f5',
      accent:                '#171717',
      'accent-foreground':   '#f5f5f5',
      destructive:           '#9e4042',
      'destructive-foreground': '#ffffff',
      success:               'oklch(0.72 0.19 150)',
      warning:               'oklch(0.77 0.16 70)',
      border:                '#404040',
      ring:                  '#404040',
      input:                 'rgba(255,255,255,0.05)',
    },
  },
  'kk-group': {
    label: 'KK Group',
    bg: '#f8f8f8',
    tokens: {
      background:            '#ffffff',
      card:                  '#171717',
      muted:                 '#f5f5f5',
      popover:               'oklch(0.205 0 0)',
      foreground:            '#0a0a0a',
      'muted-foreground':    '#737373',
      'card-foreground':     '#fafafa',
      'popover-foreground':  'oklch(0.985 0 0)',
      primary:               '#ff7133',
      'primary-foreground':  '#fafafa',
      secondary:             '#f5f5f5',
      'secondary-foreground':'#171717',
      accent:                '#f5f5f5',
      'accent-foreground':   '#171717',
      destructive:           '#dc2626',
      'destructive-foreground': '#ffffff',
      success:               'oklch(0.72 0.19 150)',
      warning:               'oklch(0.77 0.16 70)',
      border:                '#e5e5e5',
      ring:                  '#d4d4d4',
      input:                 '#ffffff',
    },
  },
};

const isLight = (value) =>
  value === '#ffffff' || value === 'white' || value === '#fafafa' || value === '#f5f5f5' ||
  value === '#f8f8f8' || value.startsWith('oklch(0.9') || value.startsWith('oklch(1');

const ThemeColumn = ({ themeKey }) => {
  const theme = THEMES[themeKey];
  return (
    <div style={{
      background: theme.bg,
      borderRadius: '12px',
      padding: '24px',
      flex: '1 1 300px',
      minWidth: 0,
    }}>
      <p style={{ fontFamily: fontBase, fontSize: '15px', fontWeight: 700, color: themeKey === 'dark' ? '#fafafa' : '#0a0a0a', margin: '0 0 20px' }}>
        {theme.label}
      </p>
      {SEMANTIC_GROUPS.map(({ label, tokens }) => (
        <div key={label} style={{ marginBottom: '24px' }}>
          <p style={{ fontFamily: fontBase, fontSize: '11px', fontWeight: 500, color: themeKey === 'dark' ? '#737373' : '#a3a3a3', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 10px' }}>
            {label}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {tokens.map((token) => {
              const value = theme.tokens[token];
              const needsBorder = isLight(value);
              return (
                <div key={token} style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '80px' }}>
                  <div style={{
                    width: '80px', height: '44px', borderRadius: '6px',
                    background: value,
                    border: needsBorder ? '1px solid #e5e5e5' : 'none',
                  }} />
                  <p style={{ fontFamily: fontBase, fontSize: '11px', fontWeight: 500, color: themeKey === 'dark' ? '#d4d4d4' : '#0a0a0a', margin: 0 }}>
                    {token}
                  </p>
                  <p style={{ fontFamily: fontMono, fontSize: '10px', color: '#737373', margin: 0, wordBreak: 'break-all', lineHeight: '14px' }}>
                    {value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

/* ── Stories ─────────────────────────────────────────────────────────────── */

export const BrandPalette = {
  name: 'Brand palette',
  render: () => (
    <Section title="KK Brand — Orange">
      {[
        { name: 'brand-50',  value: '#FFF4ED' },
        { name: 'brand-100', value: '#FFE6D5' },
        { name: 'brand-200', value: '#FFCAA8' },
        { name: 'brand-300', value: '#FFA471' },
        { name: 'brand-400', value: '#FF7133' },
        { name: 'brand-500', value: '#FE4F11' },
        { name: 'brand-600', value: '#EF3407' },
        { name: 'brand-700', value: '#C62408' },
        { name: 'brand-800', value: '#9D1E0F' },
        { name: 'brand-900', value: '#7E1C10' },
        { name: 'brand-950', value: '#440A06' },
      ].map(s => <Swatch key={s.name} {...s} />)}
    </Section>
  ),
};

export const NeutralPalette = {
  name: 'Neutral palette',
  render: () => (
    <Section title="Neutral">
      {[
        { name: 'neutral-50',  value: '#FAFAFA' },
        { name: 'neutral-100', value: '#F5F5F5' },
        { name: 'neutral-200', value: '#E5E5E5' },
        { name: 'neutral-300', value: '#D4D4D4' },
        { name: 'neutral-400', value: '#A3A3A3' },
        { name: 'neutral-500', value: '#737373' },
        { name: 'neutral-600', value: '#525252' },
        { name: 'neutral-700', value: '#404040' },
        { name: 'neutral-800', value: '#262626' },
        { name: 'neutral-900', value: '#171717' },
        { name: 'neutral-950', value: '#0A0A0A' },
      ].map(s => <Swatch key={s.name} {...s} />)}
    </Section>
  ),
};

export const SemanticTokens = {
  name: 'Semantic tokens — all themes',
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      {Object.keys(THEMES).map((key) => (
        <ThemeColumn key={key} themeKey={key} />
      ))}
    </div>
  ),
};
