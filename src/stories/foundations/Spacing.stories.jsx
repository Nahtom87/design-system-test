export default {
  title: 'Foundations/Spacing',
  parameters: { layout: 'padded' },
};

const fontMono = "'IBM Plex Mono', monospace";
const fontBase = "'IBM Plex Sans', system-ui, sans-serif";

const SpacingRow = ({ token, value, px }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '8px 0', borderBottom: '1px solid #f5f5f5' }}>
    <span style={{ fontFamily: fontMono, fontSize: '12px', color: '#737373', width: '100px', flexShrink: 0 }}>{token}</span>
    <span style={{ fontFamily: fontMono, fontSize: '12px', color: '#a3a3a3', width: '40px', flexShrink: 0 }}>{value}</span>
    <div style={{ background: '#171717', height: '16px', width: px, borderRadius: '2px', minWidth: px === '0px' ? '2px' : undefined, opacity: px === '0px' ? 0.2 : 1 }} />
    <span style={{ fontFamily: fontMono, fontSize: '12px', color: '#a3a3a3' }}>{px}</span>
  </div>
);

export const SpacingSkala = {
  name: 'Spacing tokens (fra Figma)',
  render: () => (
    <div style={{ maxWidth: '500px' }}>
      <p style={{ fontFamily: fontBase, fontSize: '14px', color: '#737373', marginBottom: '24px', marginTop: 0 }}>
        Figma bruger navngivne spacing-tokens. Her er de vigtigste.
      </p>
      <SpacingRow token="--3xs" value="2px"  px="2px" />
      <SpacingRow token="--2xs" value="4px"  px="4px" />
      <SpacingRow token="--xs"  value="8px"  px="8px" />
      <SpacingRow token="--sm"  value="12px" px="12px" />
      <SpacingRow token="--md"  value="16px" px="16px" />
      <SpacingRow token="--lg"  value="20px" px="20px" />
      <SpacingRow token="--xl"  value="24px" px="24px" />
      <SpacingRow token="--2xl" value="32px" px="32px" />
      <SpacingRow token="--3xl" value="40px" px="40px" />
      <SpacingRow token="--4xl" value="48px" px="48px" />
    </div>
  ),
};

export const BorderRadius = {
  name: 'Border radius (afrunding)',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
      {[
        { token: '--rounded-sm',   value: '4px',    px: 4 },
        { token: '--rounded-md',   value: '6px',    px: 6 },
        { token: '--rounded-lg',   value: '8px',    px: 8 },
        { token: '--radius',       value: '10px',   px: 10 },
        { token: '--rounded-full', value: '9999px', px: 9999 },
      ].map(({ token, value, px }) => (
        <div key={token} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '64px', height: '64px',
            background: '#171717',
            borderRadius: Math.min(px, 32) + 'px',
          }} />
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: fontMono, fontSize: '11px', color: '#0a0a0a', margin: 0 }}>{token}</p>
            <p style={{ fontFamily: fontMono, fontSize: '11px', color: '#737373', margin: 0 }}>{value}</p>
          </div>
        </div>
      ))}
    </div>
  ),
};
