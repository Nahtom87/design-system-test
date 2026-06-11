export default {
  title: 'Foundations/Border Radii',
  parameters: { layout: 'padded' },
};

const fontMono = "'IBM Plex Mono', monospace";

export const BorderRadii = {
  name: 'Border radii',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
      {[
        { token: '--radius-sm',   value: 'calc(0.625rem × 0.6)', computed: '6px',    px: 6 },
        { token: '--radius-md',   value: 'calc(0.625rem × 0.8)', computed: '8px',    px: 8 },
        { token: '--radius-lg',   value: '0.625rem',             computed: '10px',   px: 10 },
        { token: '--radius-xl',   value: 'calc(0.625rem × 1.4)', computed: '14px',   px: 14 },
        { token: '--radius-2xl',  value: 'calc(0.625rem × 1.8)', computed: '18px',   px: 18 },
        { token: '--radius-3xl',  value: 'calc(0.625rem × 2.2)', computed: '22px',   px: 22 },
        { token: '--radius-4xl',  value: 'calc(0.625rem × 2.6)', computed: '26px',   px: 26 },
        { token: '--radius-full', value: '9999px',               computed: '9999px', px: 9999 },
      ].map(({ token, computed, px }) => (
        <div key={token} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '72px', height: '72px',
            background: '#171717',
            borderRadius: Math.min(px, 36) + 'px',
          }} />
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: fontMono, fontSize: '11px', fontWeight: 500, color: '#0a0a0a', margin: '0 0 2px' }}>{token}</p>
            <p style={{ fontFamily: fontMono, fontSize: '11px', color: '#737373', margin: 0 }}>{computed}</p>
          </div>
        </div>
      ))}
    </div>
  ),
};
